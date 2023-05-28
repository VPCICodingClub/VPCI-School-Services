import template from './map.html';
import firstFloor from 'Assets/VPCI-Floor-1.png';
import Washroom from './Washroom';
import internalApi from 'Lib/internalApi';
import './map.css'

export default {
    template,
    components: {
        Washroom,
    },
    async beforeRouteUpdate(to, from) {
        this.fetchData();
    },
    async created() {
        this.fetchData();
    },
    data() {
        return {
            firstFloor,
            washrooms: [
                {
                    style: {
                        width: '25px',
                        height: '25px',
                        left: '425px',
                        top: '392px',
                    },
                },
                {
                    style: {
                        width: '25px',
                        height: '40px',
                        left: '300px',
                        top: '475px',
                    },
                },
                {
                    style: {
                        width: '25px',
                        height: '40px',
                        left: '231px',
                        top: '475px',
                    },
                },
                {
                    style: {
                        width: '12px',
                        height: '40px',
                        left: '480px',
                        top: '475px',
                    },
                },
                {
                    style: {
                        width: '12px',
                        height: '40px',
                        left: '507px',
                        top: '475px',
                    },
                },
            ]
        }
    },
    methods: {
        async fetchData() {
            const { data: washroomStatus } = await internalApi.get('washrooms', { query: '' });
            console.log(washroomStatus);
            for (let i = 0; i < 5; i++) {
                this.washrooms[i].rating = washroomStatus[i].rating;

                let status = 'closed';
                if (washroomStatus[i].rating >= 50) { status = 'open'; }
                this.washrooms[i].status = status;
            }
        }
    }
};
