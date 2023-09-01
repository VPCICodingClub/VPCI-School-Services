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
            const { data: { token } } = await internalApi.post('login', { username: this.username, password: this.password });
            updateToken(token);
            this.$router.push({ name: 'dashboard' });
        }
    }
};
