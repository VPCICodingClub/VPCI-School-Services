import template from './signUp.html';
import internalApi from 'Lib/internalApi';
// Uses styles from Login.

export default {
    template,
    data() {
        return {
            account: {
                username: null, // TODO: Prevent username duplicates.
                password: null,
                passwordConfirmation: null,
                email: null, // TODO: regex to verify.
                isClubAccount: false,
            }
        };
    },
    methods: {
        async auth() {
            if (this.account.password === this.account.passwordConfirmation){
                await internalApi.post('signUp', { account: this.account });
            } else {
                // TODO: give alert
            }
        }
    }
};