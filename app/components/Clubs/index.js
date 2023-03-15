import template from './clubs.html';
import ClubCard from './ClubCard';
import './clubs.css';

export default {
    template,
    components: {
        ClubCard,
    },
    data() {
        return {
            clubs: [
                { name: 'Name' },
                { name: 'Name' },
                { name: 'Name' },
                { name: 'Name' },
            ],
        }
    },
};