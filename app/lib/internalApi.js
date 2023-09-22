import { getToken } from 'Lib/auth';
// This file is in its own folder since it's a file needed in many components.
// It allows it to have an alias which makes it easy to import.

// Which http requests have a body.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
const methodMap = {
    get: false,
    head: false,
    post: true,
    put: true,
    patch: true,
    delete: false,
};

const apiPath = '/api/v1';

const defaultOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
};

async function APIRequest(url, data = null, options = {}) {
    if (!options.method) {
        throw new Error('Please provide a method');
    }

    if (methodMap[options.method] && !data) {
        throw new Error('Please provide data');
    }

    const authToken = getToken();

    if (authToken) {
        options.headers = { ...options.headers, Authorization: `JWT ${authToken}` };
    }

    // The spread operator (...) adds the contents of an object to the object it's used in.
    // So these two objects are being combined here.
    const requestOptions = {
        ...options,
        ...defaultOptions,
        headers: { ...options.headers, ...defaultOptions.headers }
    };

    let fullUrl = `${apiPath}/${url}`; // The api is accessed through a url.

    // If the request does require a body, then add the data there.
    if (methodMap[options.method]){
        requestOptions.body = JSON.stringify(data);

    // If the request doesn't require a body and if there is data add that to the search params.
    // URLSearchParams allows you to get the data in the URL query parameters.
    // So here for example, https://www.youtube.com/results?search_query=joe+biden
    // search_query is the param and joe+biden is its value.
    } else if (data && Object.keys(data).length) {
        const searchParams = new URLSearchParams(data); // turn data to search params
        fullUrl += `?${searchParams.toString()}`; // add search params to url.
    }

    const response = await fetch(fullUrl, requestOptions);
    const json = await response.json();

    return {
        status: response.status,
        data: json
    };
}

// An object with a method for every type of api request.
const internalApi = {};

// For each http request method, a function that accepts a url, some data and options is made.
Object.keys(methodMap).forEach((method) => {
    internalApi[method] = function(url, data, options = {}) {
        options.method = method;
        return APIRequest(url, data, options);
    }
});

export default internalApi;

// lol I didn't write this :) thx smiley