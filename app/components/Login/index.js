import template from './login.html';
import internalApi from 'Lib/internalApi';
import './login.css';

export default {
    template,
    data() {
        return {
            account: {} // username, password
        };
    },
    methods: {
        async auth() {
            await internalApi.post('auth', { username: this.account.username, password: this.account.password });
        }
    }
};
