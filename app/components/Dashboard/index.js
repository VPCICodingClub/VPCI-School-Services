import template from './dashboard.html';
import './dashboard.css'
import { isAuthed, getUser, clearUser } from 'Lib/auth';
import internalApi from 'Lib/internalApi';

export default {
    template,
    data() {
        return {
            user: getUser(),
            account: {},
            // newClubName: '',
            // clubName: 'Meth Club',
            // imageLink: '',
            // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum, lorem ac finibus gravida, libero nulla ullamcorper mauris, congue sagittis urna mi ac tortor. Aenean commodo porttitor bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            // schedule: 'Lunch on Monday',
            // executives: ['hi', 'helo'],
            // supervisors: ['peepee',],
            // socialMedias: ['asgvdtcmjyyegmshstudik',],
            // joinLink: 'www.google.com',
        }
    },
    async created() {
        // const id = this.user.id;
        // console.log(id);
        const { data } = await internalApi.get('accounts');
        this.account = data;
        // console.log(data);
        document.addEventListener('keydown', (e) => {
            if(e.code == "Numpad1") {
                console.log(this.account);
            }
        });
    },
    methods: {
        logout() {
            clearUser();
            this.$router.push({ name: 'sign-in' });
        },
        log() {
            console.log(this.executives);
        },
        async createClub() {
            // let club = {
            //     clubName: this.newClubName,
            // }
            // const { status, data: { message, data: club } } = await internalApi.post('clubs', { club } );

            // if (status === 400) {
            //     alert(message);
            // } else {
            //     alert(`${message} ${club.name} Added!`);
            // }
        },
    }
};
