<template>
<transition name="slide-up" appear>
    <div class="cnt">충북 백신 접종자 수 {{SecondTot[0]}} 명
      <font-awesome-icon icon="syringe" class="icon"/>
    </div>
</transition>
</template>


<script>
import axios from 'axios'
const convert = require('xml-js');


export default {
    
  

  data () {
    return {
      SecondTot:[],
    
    };
  },
  
  async created(){
    
      const { data } = await axios.get('/irgd/cov19stats.do?list=sido');
      var json = convert.xml2json(data,{ compact: true } )
      const js=JSON.parse(json)
      const newdata = js.response.body.items.item.filter(function(e){
          return e.sidoNm._text=="충청북도"
        })

      newdata.forEach(d => {
          this.SecondTot.push(d.secondTot._text)
    });

   
        
  }
}
  

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400&display=swap');

div{
  margin: 0 auto;
  font-family: 'Gothic A1', sans-serif;
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
    position:relative;
    z-index: 100;
}

.icon{
    font-size: 90px;
    left: 3px;
    top: 10px;
    position: absolute;
    z-index: -1;
    color: rgba(75, 138, 220, 0.329);
}



</style>
