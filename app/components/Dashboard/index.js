import template from './dashboard.html';
import { isAuthed, getUser, clearUser } from 'Lib/auth';
import internalApi from 'Lib/internalApi';
import ExecPanel from '../ExecPanel';
import AdminPanel from '../AdminPanel';
import './dashboard.css';
 
export default {
    template,
    components: {
        ExecPanel,
        AdminPanel,
    },
    data() {
        return {
            user: getUser(),
            account: {}, 
        }
    },
    async created() {
        const { data } = await internalApi.get('accounts');
        this.account = data;
        document.addEventListener('keydown', (e) => {
            if(e.code == "Numpad1") {
                console.log(this.account);
            }
        });
    },
    methods: {
        logout() {
            clearUser();
            this.$router.push({ name: 'signIn' });
        },
        log() {
            console.log(this.executives);
        },
    }
};
