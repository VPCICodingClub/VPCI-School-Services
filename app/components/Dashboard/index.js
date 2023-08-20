import template from './dashboard.html';
import './dashboard.css'
import { isAuthed, getUser, clearUser } from 'Lib/auth';

export default {
    template,
    data() {
        return {
            user: getUser(),
        }
    },
    methods: {
        logout() {
            clearUser();
            this.$router.push({ name: 'sign-in' });
        }
    }
};
