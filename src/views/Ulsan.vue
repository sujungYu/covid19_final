<template>
  <div>
    <Total/>
    <Map/>
    <Graph/>
  </div>
</template>

<script>
import Total from '../components/topcnt/ulsantop.vue'
import Map from '../components/maps/ulsanmap.vue'
import Graph from '../components/graphs/ulsangraph.vue'
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
