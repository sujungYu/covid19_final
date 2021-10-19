<template>
  <div>
    <Total/>
    <Map/>
    <Graph/>
  </div>
</template>

<script>
import Total from '../components/topcnt/chungbuktop.vue'
import Map from '../components/maps/chungcheongbukdomap.vue'
import Graph from '../components/graphs/chungbukgraph.vue'
export default {
  // name: 'map',
  components: {
    Total,
    Map,
    Graph,
  },
  
}
</script>

<style>
div{
  margin: 0 auto;
  text-align: center;
}

    
</style>
