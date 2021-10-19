<template>
<transition name="slide-up" appear>
  <div>
<div class="cnt"><span class="koreacnt">전국 </span>누적 확진자 수 {{totaldecideCnt[0]}} 명</div>
</div>
</transition>
</template>


<script>
import axios from 'axios'
import moment from 'moment'


export default {
  

  data () {
    return {
      totaldecideCnt:[],
    
    };
  },
  
  async created(){
    
      const startCreateDt = moment().subtract(1,'d').format('YYYYMMDD')
      const endCreateDt = moment().format('YYYYMMDD')
      const { data } = await axios.get('/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=SGsOrRFvsbOZ6Oa2wrwdLE9yTZeH%2FFNwx9nlqc2jYcC6d1cN7%2FLg4gpfcipuXnxVCVDSdrxgjw8kNv7pvEfNaw%3D%3D&pageNo=1&numOfRows=10&startCreateDt='+ startCreateDt +'&endCreateDt='+endCreateDt);

      data.response.body.items.item.forEach(d => {
        this.totaldecideCnt.push(d.decideCnt)
    });
   
  }
    
}
  

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400&display=swap');

div{
  margin: 0 auto;
}

.slide-up-enter, .slide-up-leave-to{
  transform: translateY(10px);
  opacity: 0;
}
.slide-up-enter-active, .slide-up-leave-active{
  transition: all 3.5s ease;
}
.cnt{
    font-family: 'Gothic A1', sans-serif;
    font-size: 25px;
    font-weight: bold;
    color:rgb(63, 63, 63);
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: left;
}
.koreacnt{
    color:royalblue;
    
}



</style>
