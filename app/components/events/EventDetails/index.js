import { DateTime } from 'luxon';
import template from './eventDetails.html';
import internalApi from 'Lib/internalApi';

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
        this.event.start = DateTime.fromISO(this.event.start).toISODate();
        this.event.end = DateTime.fromISO(this.event.end).toISODate();
    },
};