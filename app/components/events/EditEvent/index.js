import { DateTime } from 'luxon';
import template from './editEvent.html';
import internalApi from 'Lib/internalApi';

export default {
    template,
    data() {
        return {
            event: {},
        }
    },
    async created() {
        const { data: events } = await internalApi.get('events', { query: this.$route.params.id });
        this.event = events[0];
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

            const addedEvent = await internalApi.put('update/events', { ...newEvent });
            this.$router.go(-1);
        },
    }
};
