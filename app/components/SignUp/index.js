import template from './signUp.html';
import internalApi from 'Lib/internalApi';
import { updateToken } from 'Lib/auth';
// Uses styles from Login.

export default {
    template,
    data() {
        return {
            username: null,
            password: null,
            passwordConfirmation: null,
            email: null, // TODO: regex to verify.
            isClubAccount: false,
            code: null,
        };
    },
    methods: {
        async auth() {
            if (this.password === this.passwordConfirmation){
                const { data: { token } } = await internalApi.post('register', {
                    username: this.username,
                    password: this.password,
                    code: this.code,
                });
                if (token) {
                    updateToken(token);
                    this.$router.push({ name: 'dashboard' });
                } else {
                    alert('Could not create your account');
                    this.$router.push({ name: 'signIn' });
                }
            } else {
                alert('Passwords do not match!');
            }
        }
    }
};
