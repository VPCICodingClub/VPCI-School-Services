import template from './signUp.html';
import internalApi from 'Lib/internalApi';
// Uses styles from Login.

export default {
    template,
    data() {
        return {
            username: null, // TODO: Prevent username duplicates.
            password: null,
            passwordConfirmation: null,
            email: null, // TODO: regex to verify.
            isClubAccount: false,
        };
    },
    methods: {
        async auth() {
            if (this.password === this.passwordConfirmation){
                await internalApi.post('register', {
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    isClubAccount: this.isClubAccount,
                });
            } else {
                // TODO: give alert
            }
        }
    }
};