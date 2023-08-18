import template from './signIn.html';
import internalApi from 'Lib/internalApi';
import './signIn.css';

export default {
    template,
    data() {
        return {
            account: {
                username: null,
                password: null,
            }
        };
    },
    methods: {
        async auth() {
            await internalApi.post('auth', { account: this.account });
        }
    }
};
