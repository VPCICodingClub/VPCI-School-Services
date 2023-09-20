import template from './calendar.html';
import './calendar.css';

import '@fullcalendar/core';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import internalApi from 'Lib/internalApi';

export default {
    template,
    components: {
      FullCalendar
    },
    data() {
      return {
        options: {
          plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          },
          editable: false,
          selectable: true,
          weekends: true,
          events: [],
        }
      }
    },
    async created() {
      await this.getEvents();
    },
    methods: {
      async getEvents(startDate, endDate) {
          const { data: events } = await internalApi.get('events', { startDate, endDate });
          this.options.events = events;
      }
    }
};