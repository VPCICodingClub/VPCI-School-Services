import template from './updatePost.html';
import { isAuthed, getUser, clearUser } from 'Lib/auth';
import internalApi from 'Lib/internalApi';

export default {
    template,
    props: ['post', 'clubId', 'swapComponent', 'getPosts', 'isNewPost'],
    data() {
        return {
            user: getUser(),
            editedPost: { ...this.post }, // So that the actual post object used in other places doesn't get modified.
        }
    },
    // async created() {

    // },
    methods: {
        async submit() {
            this.editedPost.ClubId = this.clubId;
            // console.log(this.editedPost);
            if (!this.editedPost.title) { return; }
            const { status, data: { message, data: post } } = await internalApi.put('posts', { post: this.editedPost, clubId: this.clubId });

            if (status === 500 || status === 400) {
                alert(message);
            } else {
                alert(`${message} ${post.title} exists!`);
            }

            if (!this.isNewPost) {
                this.swapComponent('post');
            } else {
                this.editedPost = {};
            }

            this.getPosts();
        },
        async deletePost() { // Only available when the post is being edited.
            const { data: { message } } = await internalApi.delete(`posts/${this.post.id}`);
            alert(message);

            this.swapComponent('post');
            this.getPosts();
        }
    }
};