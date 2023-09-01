import template from './updateClub.html';
import { isAuthed, getUser, clearUser } from 'Lib/auth';
import internalApi from 'Lib/internalApi';

export default {
    template,
    data() {
        return {
            user: getUser(),
            title: 'New Club',
            club: {
                executives: [],
                supervisors: [],
                socialMedias: [],
                // Accounts: [],
            },
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
        if (this.$route.name === 'editClub') {
            this.title = `Editing ${this.club.name} Info`

            const slug = this.$route.params.slug;
            const { data } = await internalApi.get('clubs', { query: slug });
            this.club = data[0];
        }
    },
    methods: {
        submit() {
            (this.$route.name === 'editClub') ? this.editClub() : this.createClub();
        },
        async createClub() {
            const { status, data: { message, data: club } } = await internalApi.post('clubs', { newClub: this.club });

            if (status === 500 || status === 400) {
                alert(message);
            } else {
                alert(`${message} ${club.name} created!`);
            }

            this.$router.push({ name: 'dashboard' });
        },
        async editClub() {
            const { status, data: { message, data: club } } = await internalApi.put(`clubs/${this.club.id}`, { editedClub: this.club });

            if (status === 500 || status === 400) {
                alert(message);
            } else {
                alert(`${message} ${club.name} edited!`);
            }

            this.$router.push({ name: 'dashboard' });
        },
        async deleteClub() {
            const { data: { message } } = await internalApi.delete(`clubs/${this.club.id}`);
            alert(message);
            this.$router.push({ name: 'dashboard' });
        },
    }
};
