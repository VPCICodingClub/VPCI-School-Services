import template from './clubDetails.html';
import internalApi from 'Lib/internalApi';
import Post from './Post';
import Event from './Event';
import './clubDetails.css';

export default {
    template,
    components: {
        Post,
        Event,
    },
    data() {
        return {
            club: null,
            posts: null,
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
            const { data: clubs } = await internalApi.get('clubs', { query: id });
            this.club = clubs[0];
            const { data: posts } = await internalApi.get('posts', { query: this.club.id });
            this.posts = posts[0];
        }
    }
};