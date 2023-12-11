import template from './inputField.html';

export default {
    template,
    props: {
        label: {
            type: String,
            required: true,
        }
        isRequired {
            type: Boolean,
            default: false,
        model: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            input: '',
        }
    }
}
