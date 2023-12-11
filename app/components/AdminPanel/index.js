import template from './adminPanel.html';
import internalApi from 'Lib/internalApi';

export default {
    template,
    data() {
        return {
            codes: [],
        }
    },
    async created() {
        const { data } = await internalApi.get('codes');
        this.codes = data;
    },
    methods: {
        async generateCode() {
            const { data } = await internalApi.get('new-code');
            this.codes.push(data.data);
        },
        async deleteCode(code) {
            const { data } = await internalApi.delete(`codes/${code.id}`);
            const index = this.codes.indexOf(code);
            this.codes.splice(index, 1);
        }
    }
}
