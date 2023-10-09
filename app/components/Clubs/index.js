import template from './clubs.html';
import ClubCard from './ClubCard';
import internalApi from 'Lib/internalApi';
import './clubs.css';

export default {
    template,
    components: {
        ClubCard,
    },
    data() {
        return { // `this` refers to these variables.
            clubs: [],
        }
    },
    async beforeRouteUpdate(to, from) {
        this.fetchData();
    },
    async created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            // data is the name of the attribute that is in the object returned by the api.
            // clubs is the new name assigned to it for use in this function.
            const { data: clubs } = await internalApi.get('clubs', { query: '' });
            console.log(clubs);
            this.clubs = clubs; // `this` refers to the variables in data()
        }
    }
};