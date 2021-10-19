<template>
    <div class="canvas-wrapper" v-if="arrdecideCnt.length>0">
        <div class="canvas">
        <div class="title-wrapper">
            <div class="title">최근 7일 확진자 추이</div>
            <bar-chart  :width=800 :height=210 :chartData="arrdecideCnt" :options="chartOptions" >
        </bar-chart>
        </div>
        </div>
    </div>
</template>

<script>
import {Bar} from 'vue-chartjs'
import axios from 'axios'
import moment from 'moment'
import Chart from 'chart.js'

import BarChart from './BarChart.vue'
// import Btn from '../buttons/graphbutton.vue'

export default {
  extends: Bar,
  components:{
    BarChart,
    // Btn
  },

  data () {
    return {
      arrdecideCnt:[],
      chartOptions:{
        responsive: false,
        maintainAspectRatio: false,

        legend:{
          display: false,
        },

        tooltips:{ 
          enabled: false,
        },

        hover:{
          animationDuration: 0
        },
        animation:{
          duration:1,
          onComplete: function () {
  					var chartInstance = this.chart,
  					ctx = chartInstance.ctx;
  					ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
  					ctx.fillStyle = 'rgba(43, 22, 22, 0.8)';
  					ctx.textAlign = 'center';
  					ctx.textBaseline = 'center';

  					this.data.datasets.forEach(function (dataset, i) {
  						var meta = chartInstance.controller.getDatasetMeta(i);
  						meta.data.forEach(function (bar, index) {
  							var data = dataset.data[index];
  							ctx.fillText(data, bar._model.x, bar._model.y - 3);
  						});
  					});
  				}
          
          
        },


          scales:{
           yAxes:[{
            // display: false,
            gridLines:{
              display:true,
              brawBorder:false,
              color:"rgba(238, 238, 238, 0.979)"
            },
            ticks:{
              stepSize: 50,
              max:100,
              color: "rgba(238, 238, 238, 0.979)"
            }
          }],
          xAxes:[{
            gridLines:{
            display:false,
            drawBorder:false,
            },
            ticks:{
              fontSize:12,
              color: "rgba(238, 238, 238, 0.979)"
            },
          }],
          
        }

        }
        
      }
    },
  
  async created(){
    
      const startCreateDt = moment().subtract(7,'d').format('YYYYMMDD')
      const endCreateDt = moment().format('YYYYMMDD')
      const { data } = await axios.get('/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=SGsOrRFvsbOZ6Oa2wrwdLE9yTZeH%2FFNwx9nlqc2jYcC6d1cN7%2FLg4gpfcipuXnxVCVDSdrxgjw8kNv7pvEfNaw%3D%3D&pageNo=1&numOfRows=10&startCreateDt='+ startCreateDt +'&endCreateDt='+endCreateDt);
        const newdata = data.response.body.items.item.filter(function(e){
            return e.gubun=="경북"
        })

      newdata.forEach(d => {
          const stateDt = moment(d.createDt, "YYYY-MM-DD").format("MM.DD");
            // this.totaldecideCnt.push(d.defCnt)
            const {
            incDec,
        } = d;

            this.arrdecideCnt.push({stateDt, total: incDec});
   
    });
   
  }
    
}
  

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400&display=swap');
div{
   text-align: center;
   margin: auto 0; 
}
.canvas-wrapper{
  text-align: center;
}
.canvas{
  margin:0 auto;
  display: flex;
  width: 850px;
  height:240%;
  border:  2px solid rgba(43, 22, 22, 0.089);
  border-radius:10px;
  padding-top: 1%;
  padding-left: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  position: relative;
  background-color: white;
}
.title-wrapper{
    position: relative;
}
.title{
    text-align: left;
    font-family: 'Gothic A1', sans-serif;
    font-size: 25px;
    padding-top:1%;
    padding-left: 1%;
    padding-bottom: 1%;
}


</style>
