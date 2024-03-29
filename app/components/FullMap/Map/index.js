import template from './map.html';
import './map.css'

export default {
   template,
   // props: ['washrooms'],
   data() {
     return {
         svg: document.getElementById("svg"),
         rooms: [
             {
                 class: "room",
                 x: "186.53125",
                 y: "29.104166",
             },
             {
                 class: "girls washroom",
                 x: "186.53125",
                 y: "34.395832",
             },
              {
                 class: "room",
                 x: "186.53125",
                 y: "38.364582",
             },
              {
                 class: "room",
                 x: "193.14583",
                 y: "33.602085",
             },
              {
                 class: "room",
                 x: "193.14583",
                 y: "27.78125",
             },
              {
                 class: "room",
                 x: "193.14583",
                 y: "43.127083",
             },
              {
                 class: "boys washroom",
                 x: "186.53125",
                 y: "47.625",
             },
              {
                 class: "room",
                 x: "193.14583",
                 y: "54.768749",
             },
              {
                 class: "room",
                 x: "186.53125",
                 y: "57.149998",
             },
              {
                 class: "room",
                 x: "186.53125",
                 y: "60.589584",
             },
              {
                 class: "room",
                 x: "193.14583",
                 y: "66.410416",
             },
              {
                 class: "room",
                 x: "186.53125",
                 y: "71.172913",
             },
              {
                 class: "room",
                 x: "186.53125",
                 y: "74.612495",
             },
              {
                 class: "room",
                 x: "193.14583",
                 y: "78.316666",
             },
              {
                 class: "room",
                 x: "186.53125",
                 y: "78.052086",
             },
              {
                 class: "room",
                 x: "186.53125",
                 y: "88.635414",
             },
              {
                 class: "room",
                 x: "186.53125",
                 y: "92.339584",
             },
              {
                 class: "room",
                 x: "193.14583",
                 y: "89.958336",
             },
              {
                 class: "room",
                 x: "186.53125",
                 y: "95.51458",
             },
              {
                 class: "room",
                 x: "193.14583",
                 y: "101.6",
             },
              {
                 class: "room",
                 x: "186.53125",
                 y: "106.3625",
             },
              {
                 class: "room",
                 x: "193.14583",
                 y: "106.09792",
             },
              {
                 class: "room",
                 x: "182.29791",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "177.53542",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "174.625",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "176.47708",
                 y: "41.274998",
             },
              {
                 class: "room",
                 x: "164.30624",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "163.5125",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "159.54375",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "154.78125",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "151.34166",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "146.84375",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "143.13959",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "131.7625",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "130.175",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "124.35416",
                 y: "45.243752",
             },
              {
                 class: "room",
                 x: "118.53333",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "107.15625",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "105.03958",
                 y: "45.243748",
             },
              {
                 class: "girls washroom",
                 x: "102.92291",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "98.689583",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "97.102081",
                 y: "45.243752",
             },
              {
                 class: "boys washroom",
                 x: "92.868752",
                 y: "45.243752",
             },
              {
                 class: "room",
                 x: "89.429169",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "84.931252",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "80.168747",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "70.114586",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "65.616669",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "63.764584",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "60.589584",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "47.360416",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "42.597916",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "41.274998",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "37.835415",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "32.014584",
                 y: "38.629166",
             },
              {
                 class: "room",
                 x: "29.633333",
                 y: "45.243748",
             },
              {
                 class: "room",
                 x: "25.929167",
                 y: "45.243752",
             },
         ],
     };
   },
   // created() {
   //    let scale = 1;
   //    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

   //    addEventListener("wheel", (event) => {
   //       scale += event.deltaY / 800;
   //       scale = clamp(scale, 0.5, 10)
   //       svg.style.transform = `scale(${scale})`;
   //       // console.log(event.deltaY);
   //    });
   // },
   methods: {
      toggle(room) {
         room.showInfo = !room.showInfo;
      }
   }
}