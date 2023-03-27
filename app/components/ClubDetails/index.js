import template from './clubDetails.html';
import internalApi from 'Lib/internalApi';
import './clubDetails.css';

export default {
    template,
    data() {
        return {
            club: null,
        }
    },
    async created() {
        const id = this.$route.params.id;
        const { data } = await internalApi.get('clubs', { query: id });
        this.club = data[0];
        console.log(data);
        console.log(this.club);
    },
};