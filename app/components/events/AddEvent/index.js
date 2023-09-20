import template from './addEvent.html';
import internalApi from 'Lib/internalApi';

export default {
    template,
    props: ['clubId'],
    data() {
        return {
            event: {},
        }
    },
    methods: {
        async submit() {
            this.event.ClubId = this.clubId;
            await internalApi.post('events', { clubId: this.clubId, newEvent: this.event });
            this.event = {};
        },
    }
};
