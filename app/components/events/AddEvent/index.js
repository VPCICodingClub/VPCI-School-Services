import { DateTime } from 'luxon';
import template from './addEvent.html';
import internalApi from 'Lib/internalApi';

export default {
    template,
    props: ['clubId', 'slug'],
    data() {
        return {
            event: {},
        }
    },
    methods: {
        async submit() {
            this.event.ClubId = this.clubId;
            const start = DateTime.fromFormat(this.event.start, 'yyyy-MM-dd');
            const end = DateTime.fromFormat(this.event.end, 'yyyy-MM-dd');

            const newEvent = {
                ...this.event,
                start: start.toISO(),
                end: end.toISO(),
                id: null
            };

            const { status, data: { message, data: addedEvent } } = await internalApi.put('resource/events', { ...newEvent, ClubId: this.clubId });
            newEvent.id = addedEvent[0].id;
            this.$emit('eventAdded', newEvent);
            this.event = {};
        },
    }
};
