import template from './execPanel.html';

export default {
    template,
    props: {
        account: {
            type: Object,
            required: true,
        },
    },
}
