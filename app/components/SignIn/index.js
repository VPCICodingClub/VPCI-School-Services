import template from './signIn.html';
import internalApi from 'Lib/internalApi';
import { updateToken } from 'Lib/auth';
import './signIn.css';

export default {
    template,
    data() {
        return {
            username: null,
            password: null,
        };
    },
    methods: {
        async auth() {
            const { data } = await internalApi.post('login', { username: this.username, password: this.password });
            if (data.token) {
                alert(data.message);
                updateToken(data.token);
                this.$router.push({ name: 'dashboard' });
            } else {
                alert(data.error);
                this.$router.push({ name: 'sign-up' });
            }
        }
    }
};
