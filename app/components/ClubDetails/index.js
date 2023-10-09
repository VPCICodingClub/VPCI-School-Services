import template from './clubDetails.html';
import internalApi from 'Lib/internalApi';
import Post from '../posts/Post';
// import Event from './Event';
import './clubDetails.css';

export default {
    template,
    components: {
        Post,
        // Event,
    },
    data() {
        return {
            club: {},
            posts: [],
        }
    },
    beforeRouteUpdate(to) {
        this.getClub(to.params.slug);
    },
    created() {
        this.getClub(this.$route.params.slug);
    },
    methods: {
        async getClub(slug) {
            const { data: clubs } = await internalApi.get('clubs', { query: slug });
            this.club = clubs[0];
            const { data: posts } = await internalApi.get('posts', { query: this.club.id });
            this.posts = posts;
        }
    }
};