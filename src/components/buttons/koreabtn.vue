<template>
<div>
        <div>
            <button @click="jeju" class= "Jeju button">{{display[0].name}}<span class="red"><br>{{display[0].today}}</span></button>
            <button @click="gyeongnam" class= "Gyeongnam button">{{display[1].name}}<span class="red"><br>{{display[1].today}}</span></button>
            <button @click="gyeongbuk" class= "Gyeongbuk button">{{display[2].name}}<span class="red"><br>{{display[2].today}}</span></button>
            <button @click="jeoanam" class= "Jeoanam button">{{display[3].name}}<span class="red"><br>{{display[3].today}}</span></button>
            <button @click="jeoanbuk" class= "Jeoanbuk button">{{display[4].name}}<span class="red"><br>{{display[4].today}}</span></button>
            <button @click="chungnam" class= "Chungnam button">{{display[5].name}}<span class="red"><br>{{display[5].today}}</span></button>
            <button @click="chungbuk" class= "Chungbuk button">{{display[6].name}}<span class="red"><br>{{display[6].today}}</span></button>
            <button @click="gangwon" class= "Gangwon button">{{display[7].name}}<span class="red"><br>{{display[7].today}}</span></button>
            <button @click="gyeonggi" class= "Gyeonggi button">{{display[8].name}}<span class="red"><br>{{display[8].today}}</span></button>
            <button @click="sejong" class= "Sejong button">{{display[9].name}}<span class="red"><br>{{display[9].today}}</span></button>
            <button @click="ulsan" class= "Ulsan button">{{display[10].name}}<span class="red"><br>{{display[10].today}}</span></button>
            <button @click="daejeon" class= "Daejeon button">{{display[11].name}}<span class="red"><br>{{display[11].today}}</span></button>
            <button @click="gwangju" class= "Gwangju button">{{display[12].name}}<span class="red"><br>{{display[12].today}}</span></button>
            <button @click="incheon" class= "Incheon button">{{display[13].name}}<span class="red"><br>{{display[13].today}}</span></button>
            <button @click="daegu" class= "Daegu button">{{display[14].name}}<span class="red"><br>{{display[14].today}}</span></button>
            <button @click="busan" class= "Busan button">{{display[15].name}}<span class="red"><br>{{display[15].today}}</span></button>
            <button @click="seoul" class= "Seoul button">{{display[16].name}}<span class="red"><br>{{display[16].today}}</span></button>
            
        

        </div>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'


export default {

    data () {
    return {
      display:[],
      totaldecideCnt:[],
      totalname:[],
    
    };
  },
  
    methods:{
        
        jeju(){
            this.$router.push('Jeju')
        },
        gyeongnam(){
            this.$router.push('Gyeongnam')
        },
        gyeongbuk(){
            this.$router.push('Gyeongbuk')
        },
        jeoanam(){
            this.$router.push('Jeoanam')
        },
        jeoanbuk(){
            this.$router.push('Jeoanbuk')
        },
        chungnam(){
            this.$router.push('Chungnam')
        },
        chungbuk(){
            this.$router.push('Chungbuk')
        },
        gangwon(){
            this.$router.push('Gangwon')
        },
        gyeonggi(){
            this.$router.push('Gyeonggi')
        },
        sejong(){
            this.$router.push('Sejong')
        },
        ulsan(){
            this.$router.push('Ulsan')
        },
        daejeon(){
            this.$router.push('Daejeon')
        },
        gwangju(){
            this.$router.push('Gwangju')
        },
        incheon(){
            this.$router.push('Incheon')
        },
        daegu(){
            this.$router.push('Daegu')
        },
        busan(){
            this.$router.push('Busan')
        },
        seoul(){
            this.$router.push('Seoul')
        }
    },
  

  async created(){
    
      const startCreateDt = moment().format('YYYYMMDD')
      const endCreateDt = moment().format('YYYYMMDD')
      const { data } = await axios.get('/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=SGsOrRFvsbOZ6Oa2wrwdLE9yTZeH%2FFNwx9nlqc2jYcC6d1cN7%2FLg4gpfcipuXnxVCVDSdrxgjw8kNv7pvEfNaw%3D%3D&pageNo=1&numOfRows=10&startCreateDt='+ startCreateDt +'&endCreateDt='+endCreateDt);

      data.response.body.items.item.forEach(d => {
          this.totaldecideCnt.push(d.incDec)
          this.totalname.push(d.gubun)
    });

    const Jeju = {
        name: this.totalname[1],
        today: this.totaldecideCnt[1]
    }
    const Gyeongsangnamdo = {
        name: this.totalname[2],
        today: this.totaldecideCnt[2]
    }
    const Gyeongsangbukdo = {
        name: this.totalname[3],
        today: this.totaldecideCnt[3]
    }
    const Jeollanamdo = {
        name: this.totalname[4],
        today: this.totaldecideCnt[4]
    }
    const Jeollabukdo = {
        name: this.totalname[5],
        today: this.totaldecideCnt[5]
    }
    const Chungcheongnamdo = {
        name: this.totalname[6],
        today: this.totaldecideCnt[6]
    }
    const Chungcheongbukdo = {
        name: this.totalname[7],
        today: this.totaldecideCnt[7]
    }
    const Gangwondo = {
        name: this.totalname[8],
        today: this.totaldecideCnt[8]
    }
    const Gyeonggido = {
        name: this.totalname[9],
        today: this.totaldecideCnt[9]
    }
    const Sejong = {
        name: this.totalname[10],
        today: this.totaldecideCnt[10]
    }
    const Ulsan = {
        name: this.totalname[11],
        today: this.totaldecideCnt[11]
    }
    const Daejeon = {
        name: this.totalname[12],
        today: this.totaldecideCnt[12]
    }
    const Gwangju = {
        name: this.totalname[13],
        today: this.totaldecideCnt[13]
    }
    const Incheon = {
        name: this.totalname[14],
        today: this.totaldecideCnt[14]
    }
    const Daegu = {
        name: this.totalname[15],
        today: this.totaldecideCnt[15]
    }
    const Busan = {
        name: this.totalname[16],
        today: this.totaldecideCnt[16]
    }
    const Seoul = {
        name: this.totalname[17],
        today: this.totaldecideCnt[17]
    }


    this.display= [Jeju, Gyeongsangnamdo, Gyeongsangbukdo, Jeollanamdo, Jeollabukdo, Chungcheongnamdo, Chungcheongbukdo,  Gangwondo, Gyeonggido, Sejong, Ulsan, Daejeon, Gwangju, Incheon, Daegu, Busan, Seoul]

   }
    
}
  

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@200&display=swap');

div{
  margin: auto 0;
  text-align: center;
  
}
.button{
    font-family: 'Gothic A1', sans-serif;
    font-size: 15px;
    font-weight: bolder;
    width: 45px;
    border:1px solid rgba(216, 215, 215, 0.596);
    border-radius: 5px;
    box-shadow:1px 1px rgba(170, 170, 170, 0.541);
    background: white;
    justify-content: center;
    position: absolute;
    transition: background 0.25s ease-in;
    
}
.button:hover {
  border:none;
  box-shadow: none;
  background: rgba(59, 56, 56, 0.89);
  color:white;
  transition: background 0.35s ease-out;
}


.red{
    font-weight: bolder;
    color: red;
}
.Jeju{
    top: 665px;
    left:290px;
}
.Gyeongnam{
    top: 500px;
    left:425px;
}
.Gyeongbuk{
    top: 330px;
    left:500px;
}
.Jeoanam{
    top:550px;
    left:255px;
}
.Jeoanbuk{
    top:440px;
    left:280px;
}
.Chungnam{
    top:340px;
    left:260px;
}
.Chungbuk {
    top:320px;
    left:420px;
}
.Gangwon{
    top:200px;
    left:440px;
}
.Gyeonggi{
    top:150px;
    left:330px;
}
.Sejong{
    top:320px;
    left:350px;
}
.Ulsan{
    top:430px;
    left:530px;
}
.Daejeon{
    top:400px;
    left:360px;
}
.Gwangju{
    top:500px;
    left:340px;
}
.Incheon{
    top:200px;
    left:260px;
}
.Daegu{
    top:400px;
    left:450px;
}
.Busan{
    top:510px;
    left:530px;
}
.Seoul{
    top:230px;
    left:350px;
}

</style>
