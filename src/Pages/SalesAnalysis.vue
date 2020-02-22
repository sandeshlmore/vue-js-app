<template>
<!-- <div>
    <div id="container"> -->
            <!-- <vue-plotly :data="data" :layout="layout" :options="options"/>
            <vue-plotly :data="data2" :layout="layout" :options="options"/> -->
    <!-- </div> -->
    
<!-- </div> --> 
<div id="app">
    <chart-one v-bind:id="'chart-1'" ></chart-one>
</div>

</template>

<script>
import axios from "axios";
// import VuePlotly from '@statnett/vue-plotly'
// var myplot = document.getElementById("app")
import Plotly from 'plotly.js-dist'
import Vue from 'vue'
Vue.component('chart-one', {
	props: ['id'],
  
  template: `<div :id="'chart-1'" @click="test"></div>`,
  
  mounted () {
    const trace = {
      x: [1, 2, 3, 4],
      y: [2,3,4,5],
      type:'scatter',
      orientation: 'h' 
    }
		
    Plotly.newPlot(this.id, [trace])
  
  },
  methods:{
      test:function(event){
        console.log(event)
    // var pts = '';
    // for(var i=0; i < trace.points.length; i++){
    //     pts = 'x = '+trace.points[i].x +'\ny = '+
    //         trace.points[i].y.toPrecision(4) + '\n\n';
    // }
        console.log("hello")
      }
  }
})

new Vue({
  el: '#app',
  
  data: () => ({
    charts: [1, 2]
  }),
  
  methods: {
  	remove () {
    	this.charts.splice(0, 1)
    }
  }
})


// export default {
//     el: '#app',
//     components: {
//     // VuePlotly
//   },

//     data(){
//         return{
//             data: [
//                 { x: [1, 3],
//                   y: [2, 4],
//                   type:'bar',
//                   orientation: 'h' 
//                 },
//             ],
//             data2: [
//                 { x: [1, 9],
//                   y: [2, 4],
//                   type:'bar',
//                   orientation: 'h' 
//                 },
//             ],
//             layout:{},
//             options: {}
//         }
//     },
//     methods: {
// 		clickedButton: function() {
//          Plotly.newPlot(el, this.data, this.layout, this.options);
//     }
//     }
// }
 
</script>

<style scoped>

</style>