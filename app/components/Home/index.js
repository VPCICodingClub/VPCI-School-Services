import template from './home.html';
/* import Map from '../Map'; */
import internalApi from 'Lib/internalApi';
import Calendar from '../Calendar';
import './home.css'

export default {
    template,
    components: {
        /* Map, */
        Calendar,
    },
    data() {
        return {
            events: [],
        }
    },
    async created() {
        const { data: events } = await internalApi.get('events');
        this.events = events;
    },
};
