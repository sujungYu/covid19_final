<script>
import { Bar } from "vue-chartjs";

export default {
    extends: Bar,
    props:{
        label:{
            type: String
        },
        chartData:{
            type: Array
        },
        options:{
            type: Object,
        }
    },
    mounted(){

        const dates = this.chartData.map(d=>d.stateDt).reverse();
        const totals = this.chartData.map(d=>d.total).reverse();

        
    
        

        this.renderChart({
            labels: dates,
            datasets: [
                {
                label: this.label,
                data:totals,
                barThickness: 13,
                // borderRadius: 10,
                backgroundColor: 'rgb(230, 60, 60)',
                // hoverBackgroundColor: 'rgb(260, 80, 70)'

            }
            ]
        },
            this.options
        );
    }
};
</script>
