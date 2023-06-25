<script setup>
import {reactive} from 'vue'
import '@fullcalendar/core'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import Washroom from "../Map/Washroom";

const options = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  },
  editable: false,
  selectable: true,
  weekends: true,
})
</script>

<template>
  <div class="calendar-container">
    <div style="position: relative;">
      <FullCalendar v-bind:options="options"></FullCalendar>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1024px;
  color: #2c3e50;
  margin: 30px auto;
}
</style>