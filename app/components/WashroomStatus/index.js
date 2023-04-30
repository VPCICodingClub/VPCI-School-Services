import template from './washroomStatus.html';
import internalApi from 'Lib/internalApi';
import './washroomStatus.css';

export default {
    template,
    data() {
        return {
            washroomId: null,
        };
    },
    created() {
        const { id: washroomId } = this.$route.query;
        this.washroomId = washroomId;
    },
    methods: {
        async opened() {
            console.log('opened');
            const { status, data: { message, data: washroom } } = await internalApi.post('washroom-status', { query: this.washroomId, isOpen: true });

            if (status === 400) {
                alert(message);
            } else {
                alert(`${message} the washroom is open!`);
            }
            this.$router.push('/');
        },
        async closed() {
            console.log('closed');
            const { status, data: { message, data: washroom } } = await internalApi.post('washroom-status', { query: this.washroomId, isOpen: false });

            if (status === 400) {
                alert(message);
            } else {
                alert(`${message} the washroom is closed!`);
            }
            this.$router.push('/');
        }
    }
};
