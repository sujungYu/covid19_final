<template>
  <div>
      <h1><span class="red">corona</span> DATA</h1>
      <h2>{{$moment().format(' YYYY. MM. DD.')}}</h2>

    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&family=Poppins:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@700&display=swap');


div{
   text-align: center;
   margin: auto 0;
}
h1{
  font-family: 'Bai Jamjuree', sans-serif;
  font-size: 90px !important;
  font-weight: bold !important;
  /* width: 850px; */
  height: 150px;
  border: 2px solid rgba(31, 19, 19, 0.089);
  /* border-bottom: white; */
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 35px !important;
  padding-top: 18px;
  background-color: white;
}
h2{
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 25px;
  /* width: 850px; */
  border: 2px solid rgba(31, 19, 19, 0.089);
  border-radius: 10px;
  margin: 0 auto;
  background-color: rgba(197, 196, 196, 0.089);
}
.red{
  color:rgba(255, 0, 0, 0.788);
}
</style>





