import template from './home.html';
import internalApi from 'Lib/internalApi';
import Calendar from '../Calendar';
//import MiniMap from '../MiniMap';
import './home.css'

export default {
    template,
    components: {
  //      MiniMap,
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
