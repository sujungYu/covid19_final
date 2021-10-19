<template>
  <div>
    <Total/>
    <Map/>
    <Graph/>
  </div>
</template>

<script>
import Total from '../components/topcnt/incheontop.vue'
import Map from '../components/maps/incheonmap.vue'
import Graph from '../components/graphs/incheongraph.vue'
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
