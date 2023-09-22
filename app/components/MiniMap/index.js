import template from './miniMap.html';
import './miniMap.css';
import internalApi from 'Lib/internalApi';
import calculateRating from '../../lib/calculateRating.js';

export default {
   
   template,
   data() {
     return {
         svgs: [ // TODO: Load svg files for the map.
            { visible: true },
            { visible: false },
            { visible: false },
         ],
         washrooms: [],
      }
   },

   async created(){
      this.getData();
      this.loadWashroomRatings();
      console.log("test");
   },
   methods: {
      show(svg_index) {
         this.hideAll()
         this.svgs[svg_index].visible = true;
      },
      hideAll() {
         for (const svg of this.svgs) {
            svg.visible = false;
         }
      },
      async getData(){
         const { data: washrooms } = await internalApi.get('washrooms', { query: '' });
         this.washrooms = washrooms;
      },
      async loadWashroomRatings(){
         const { data: washrooms } = await internalApi.get('washrooms', { query: '' });
         console.log(washrooms.length);
         for(let i = 0; i < this.washrooms.length; i++){
            console.log(this.washrooms[i].observations);
            console.log(this.washrooms[i].entryDates);
            this.washrooms[i].rating = calculateRating(this.washrooms[i].observations, this.washrooms[i].entryDates);
            console.log(this.washrooms[i].rating);
         }
      }
   }
}