import template from './miniMap.html';
import './miniMap.css';

export default {
   template,
   data() {
     return {
         svgs: [ // TODO: Load svg files for the map.
            { visible: true },
            { visible: false },
            { visible: false },
         ],
      }
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
      }
   }
}