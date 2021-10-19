<template>
  <div>
    <Total/>
    <Map/>
    <Graph/>
  </div>
</template>

<script>
import Total from '../components/topcnt/seoultop.vue'
import Map from '../components/maps/seoulmap.vue'
import Graph from '../components/graphs/seoulgraph.vue'
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
