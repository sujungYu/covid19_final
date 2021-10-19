<template>
<div>
    <div class="map-wrapper">
      <UlsanCnt></UlsanCnt>
      <UlsanBtn></UlsanBtn>
      </div>
</div>
    
</template>

<script>
import * as d3 from 'd3';
import * as topojson from 'topojson';
import UlsanCnt from '../mapcnts/ulsancnt.vue'
import UlsanBtn from '../buttons/ulsanbtn.vue'
export default {

    components: {
    UlsanCnt,
    UlsanBtn
  },
    
    
    mounted() {
      this.draw();
      
    },
    methods: {
      draw() {
        const koreaMap = require('../../assets/ulsan.json'); 
        const geojson = topojson.feature(koreaMap, koreaMap.objects.skorea_provinces_2018_geo); 
        // const center = d3.geoCentroid(geojson);
        const width = 600;
        const height =700;
        const svg = d3
          .select('.map-wrapper')
          .append('svg')
          .attr('width', width).attr('height', height);
        const projection = d3.geoMercator()
          .scale(1)
          .translate([0, 0]);
        const path = d3.geoPath().projection(projection);
        const bounds = path.bounds(geojson);
        const widthScale = (bounds[1][0] - bounds[0][0]) / width;
        const heightScale = (bounds[1][1] - bounds[0][1]) / height;
        const scale = 1 / Math.max(widthScale, heightScale);
        const xoffset = width / 2.1 - scale * (bounds[1][0] + bounds[0][0]) / 2 + 10;
        const yoffset = height / 3 - scale * (bounds[1][1] + bounds[0][1]) / 2 + 80;
        const offset = [xoffset, yoffset];
        projection.scale(scale).translate(offset); 
        svg.append('g')
          .selectAll('path').data(geojson.features)
          .enter().append('path')
          .attr('d', path)
          .attr("fill", "rgba(75, 137, 220)");
          // .attr('transform', d3.event.transform)
      },

}
      }
    
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Nunito:wght@600;800;900&family=Ubuntu:wght@500&display=swap');
div{
   text-align: center;
   margin: auto 0;
}

.map-wrapper{
  margin: 0 auto; 
  width: 850px;
  height: 800px;
  margin: 0 auto; 
  border: 2px solid rgba(31, 19, 19, 0.089);
  border-radius:10px;
  padding-left: 50px;
  position: relative;

}

  
 
 
</style>