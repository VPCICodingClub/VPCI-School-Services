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
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
    events: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      options: {
        timeZone: 'local',
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        editable: this.editable,
        selectable: true,
        weekends: true,
        events: [],
      }
    }
  },
  watch: {
    'events.length'() {
      this.options.events.length = 0;

      this.events.forEach((event) => {
        console.log('watcher', event);
        event.url = `/#/event/${event.id}/edit`;
        this.options.events.push(event);
      });
    }
  }
};