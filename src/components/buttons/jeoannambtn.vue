<template>
<div>
        <div>
            <button class= "first button">1차 신규접종
                <span class=red>{{displayFirst.today[0]}}명</span>
                <br><span class=redbig>{{displayFirst.percent}}%
                    </span>
                    </button>
            <button class= "second button">2차 신규접종
                <span class=red>{{displaySecond.today[0]}}명</span>
                <br><span class=redbig>{{displaySecond.percent}}%
                    </span>
                    </button>
        </div>
</div>
</template>

<script>
import axios from 'axios'
const convert = require('xml-js');

export default {

    data () {
    return {
        js:[],
      displayFirst:[],
      displaySecond:[],
      firstCnt:[],
      firstTot:[],
      SecondCnt:[],
      SecondTot:[]
    
    };
  },
  
   
  

  async created(){
    
      const { data } = await axios.get('/irgd/cov19stats.do?list=sido');
      var json = convert.xml2json(data,{ compact: true } )
      const js=JSON.parse(json)
      const newdata = js.response.body.items.item.filter(function(e){
          return e.sidoNm._text=="전라남도"
        })


      newdata.forEach(d => {
          this.firstCnt.push(d.firstCnt._text)
          this.firstTot.push(d.firstTot._text)
          this.SecondCnt.push(d.secondCnt._text)
          this.SecondTot.push(d.secondTot._text)
    });

    this.displayFirst = {
        today: this.firstCnt,
        total: this.firstTot,
        percent: ((this.firstTot/1835690)*100).toFixed(2)
        
    };
    this.displaySecond={
        today: this.SecondCnt,
        total: this.SecondTot,
        percent: ((this.SecondTot/1835690)*100).toFixed(2)
    }
   
   }
    
}
  

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@200&display=swap');

div{
  text-align: left;
  
}
.button{
    font-family: 'Gothic A1', sans-serif;
    font-size: 17px;
    font-weight: bold;
    /* display: block; */
    background: white;
    justify-content: center;
    border:1px solid rgba(216, 215, 215, 0.596);
    border-radius: 5px;
    box-shadow:1px 1px rgba(170, 170, 170, 0.541);
    position: absolute;
    width: 140px;
    
    transition: background 0.25s ease-in;
    padding: 2%;
}
.button:hover {
  background: rgba(59, 56, 56, 0.89);
  color:white;
  /* applied to the hover state, so this transition will be applied when a hover is triggered */
  transition: background 0.35s ease-out;
  border:none;
  box-shadow: none;
}

.red{
    font-weight: bolder;
    color: rgba(75, 138, 220, 0.719);
}
.first{
    top: 350px;
    left:380px;
}
.second{
    top: 350px;
    left:560px;
}
.redbig{
    font-weight: bolder;
    color: rgba(75, 138, 220);
    font-size: 30px;
}


</style>
