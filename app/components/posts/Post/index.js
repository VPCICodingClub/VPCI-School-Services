import template from './post.html';

export default {
    template,
    props: ['post', 'clubName', 'swapComponent'],
    data() {
        return {
            currentComponent: 'post',
        }
    },
};