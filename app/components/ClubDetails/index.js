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
    beforeRouteUpdate(to) {
        this.getClub(to.params.id);
    },
    created() {
        this.getClub(this.$route.params.id);
    },
    methods: {
        async getClub(id) {
            const { data } = await internalApi.get('clubs', { query: id });
            this.club = data[0];
        }
    }
};