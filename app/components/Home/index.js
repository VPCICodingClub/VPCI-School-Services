import template from './home.html';
import internalApi from 'Lib/internalApi';
import Calendar from '../Calendar';
//import MiniMap from '../MiniMap';
import ClubCard from '../ClubCard';
import './home.css'

export default {
    template,
    components: {
  //      MiniMap,
        Calendar,
        ClubCard,
    },
    data() {
        return {
            clubs: [],
            events: [],
        }
    },
    async created() {
        const { data: events } = await internalApi.get('events');
        this.events = events;
        const {data: clubs } = await internalApi.get('clubs');
        this.clubs = clubs.slice(0, 4);
    },
};
