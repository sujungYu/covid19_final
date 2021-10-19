<template>
  <div>
    <Total/>
    <Map/>
    <Graph/>
  </div>
</template>

<script>
import Total from '../components/topcnt/busantop.vue'
import Map from '../components/maps/busanmap.vue'
import Graph from '../components/graphs/busangraph.vue'
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
