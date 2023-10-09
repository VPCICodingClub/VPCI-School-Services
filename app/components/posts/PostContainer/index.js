import template from './postContainer.html';
import Post from '../Post';
import UpdatePost from '../UpdatePost';

export default {
    template,
    props: ['post', 'clubId', 'clubName'],
    components: {
        'update-post': UpdatePost,
        'post': Post,
    },
    data() {
        return {
            currentComponent: 'post',
        }
    },
    methods: {
        swapComponent: function(component) {
            this.currentComponent = component
        },
    }
};