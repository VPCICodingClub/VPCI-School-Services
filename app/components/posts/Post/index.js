import template from './post.html';

export default {
    template,
    props: ['post', 'clubName'],
    data() {
        return {
            editable: this.$route.name === 'editClub',
            currentComponent: 'post',
        }
    }
};