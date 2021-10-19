<template>
<div >
  <transition-group class="overview-wrapper" name="slide-up" appear>
     <div v-for="(item,idx) in display" :key="idx+0" >
    <div :class="{ [item.color]: true, 'color-item': true }">
        <div class="name-title">{{ item.title }}</div>
        <div class="number-total">{{item.total}}</div>
        <div class="number-today">▲ {{item.today}}</div>  
        </div>
        </div>
         </transition-group>
         </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'


export default {
  

  data () {
    return {
      display:[],
      totaldecideCnt:[], //누적 확진자
      todaydecideCnt:[], //일일 확진자
      totaldeathCnt:[],  //누적 사망자
      totalclearCnt:[], //누적 격리해제
      todayflowCnt:[],  //일일 해외유입
    };
  },
  
  async created(){
    
      const startCreateDt = moment().subtract(1,'d').format('YYYYMMDD')
      const endCreateDt = moment().format('YYYYMMDD')
      const { data } = await axios.get('/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=SGsOrRFvsbOZ6Oa2wrwdLE9yTZeH%2FFNwx9nlqc2jYcC6d1cN7%2FLg4gpfcipuXnxVCVDSdrxgjw8kNv7pvEfNaw%3D%3D&pageNo=1&numOfRows=10&startCreateDt='+ startCreateDt +'&endCreateDt='+endCreateDt);
        console.log(data);
        const newdata = data.response.body.items.item.filter(function(e){
            return e.gubun=="제주"
        })
        console.log(newdata);

      newdata.forEach(d => {
            this.todaydecideCnt.push(d.incDec)
            this.totaldecideCnt.push(d.defCnt)
            this.totaldeathCnt.push(d.deathCnt)
            this.totalclearCnt.push(d.isolClearCnt)
            this.todayflowCnt.push(d.overFlowCnt)
          });

    const cases= {
      color: "red",
      background:"red",
      title:"확진자",
      total:this.totaldecideCnt[0],
      today:this.todaydecideCnt[0],
    }
    const deaths={
      color: "purple",
      background:"red",
      title:"사망자",
      total: this.totaldeathCnt[0],
      today: this.totaldeathCnt[0]-this.totaldeathCnt[1],
    }
    const clear={
      color: "green",
      background:"red",
      title:"격리해제",
      total: this.totalclearCnt[0],
      today: this.totalclearCnt[0]-this.totalclearCnt[1]
    }
    // const exam={
    //   color: "orange",
    //   background:"red",
    //   title:"해외 유입",
    //   total: this.totalexamCnt[0],
    //   today: this.todayflowCnt
    // }
    this.display= [cases, deaths, clear]
   
  }
    
}
  

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
div{
  margin: 0 auto;
  text-align: center;
}
.overview-wrapper{
  display: flex;
  width: 850px;
  height: 140px;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  padding-top: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 2px solid rgba(31, 19, 19, 0.089);
  border-radius: 10px;
  background: white;
}

.color-item {
  position: relative;
  z-index: 100;
}
.name-title {
  font-size: 20px;
  font-family:'Gruppo';
  font-weight: bolder;
}
.number-total {
  opacity: .6;
  line-height: 1.2em;
  font-size: 30px;
  /* font-weight: bolder; */
}
.number-today{
  font-size: 20px;
  font-weight: bolder;
  padding-bottom: 0px;
}
.red {
  color: red;
}
.orange {
  color: orange;
}
.purple {
  color: purple;
}
.green {
  color: green;
}
.slide-up-enter, .slide-up-leave-to{
  transform: translateY(10px);
  opacity: 0;
  
}
.slide-up-enter-active, .slide-up-leave-active{
  transition: all 3.5s ease;
}

</style>
