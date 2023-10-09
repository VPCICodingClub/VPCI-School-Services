import { DateTime } from 'luxon';
import template from './editEvent.html';
import internalApi from 'Lib/internalApi';
import { isAuthorized } from 'Lib/auth';

export default {
    template,
    data() {
        return {
            event: {},
        }
    },
    async created() {
        const { data: events } = await internalApi.get('events', { id: this.$route.params.id });
        this.event = events[0];
        // if (! await isAuthorized(internalApi, this.event.ClubId)) {
        //     this.$router.push({ name: 'eventDetails', params: { id: this.event.id } });
        // }
        this.event.start = DateTime.fromISO(this.event.start).toISODate();
        this.event.end = DateTime.fromISO(this.event.end).toISODate();
    },
    methods: {
        async submit() {
            const start = DateTime.fromFormat(this.event.start, 'yyyy-MM-dd');
            const end = DateTime.fromFormat(this.event.end, 'yyyy-MM-dd');

            const newEvent = {
                ...this.event,
                start: start.toISO(),
                end: end.toISO(),
            };

            console.log('here in upsert');

            const addedEvent = await internalApi.put('resource/events', { ...newEvent });
            this.$router.go(-1);
        },
        async deleteEvent() {
            // console.log(this.event.id);
            const { data: { message } } = await internalApi.delete(`resource/events/${this.event.id}`);
            alert(message);
            this.$router.push({ name: 'dashboard'});
        },
    }
};
