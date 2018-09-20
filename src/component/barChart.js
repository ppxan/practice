import React from 'react';
import ReactDOM from 'react-dom';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


export default class BarChart extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let myChart=echarts.init(this.refs.barChart);
        let mark=this.props.data[3];
        myChart.setOption({
            title : {
                text:"药品支出趋势",
                textStyle:{
                    fontSize:18,
                    color:"#333",
                    fontWeight:"normal",
                    fontFamily:"Microsoft YaHei",
                },
            },
            color:this.props.data[2],
            tooltip:{
                trigger:"item",
                show:false,
                axisPointer: {
                    lineStyle: {
                        color: 'rgba(86,84,86,0.2)'
                    },
                },
                textStyle:{
                    fontSize:14,
                },
                backgroundColor:'#DCD4C5',
            },
            grid:[{
                x:"8%",
                y:"16%",
                height:"30%",
                borderWidth:0,
            },{
                x:"8%",
                y2:"16%",
                height:"30%",
                borderWidth:0,
            }],
            legend:{
                show:true,
                orient:"horizontal",
                x:"10%",
                y:"bottom",
                selectedMode:false,
                itemGap:5,
                textStyle:{
                    fontSize:12,
                },
                data:["细分项","当期值","环比"],
            },
            xAxis: [{
                gridIndex:0,
                type: 'category',
                axisLabel:{
                    textStyle:{
                        color:"#99a5bd"
                    }
                },
                data:this.props.data[0][0]
            },
                {
                gridIndex:1,
                type: 'category',
                axisLabel:{
                    textStyle:{
                        color:"#99a5bd"
                    }
                },
                data:this.props.data[0][0]
            }],
            yAxis: [{
                show:false,
                type: 'value',
                gridIndex:0,
                splitLine: {
                    show: false,
                },
            }, {
                show:false,
                gridIndex:1,
                min:0,
                type: 'value',
            }],
            series: [{
                name: "环比",
                type: 'line',
                xAxisIndex:0,
                yAxisIndex:0,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter:"{c}%"
                    }
                },
                itemStyle:{
                    normal:{
                        color:"#c1b39a",
                        lineStyle:{
                            color:"#c0b298"
                        }
                    }
                },
                markLine:{
                    symbol:"none",
                    label:{
                        normal:{
                            show:true,
                            position:"end",
                            color:"#333",
                            formatter:"{c}%"
                        }
                    },
                    lineStyle:{
                        color:"#999999"
                    },
                    data:[{
                        yAxis:mark,
                    }]
                },
                data:this.props.data[0]
            }, {
                name: "当期值",
                xAxisIndex:1,
                yAxisIndex:1,
                type: 'bar',
                barGap:'-100%',
                barCategoryGap:'30%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                    }
                },
                itemStyle:{
                    normal:{
                        color:"#b0bccf",
                        barBorderRadius:5,
                    }
                },
                data:this.props.data[1]

            }, {
                name: "细分项",
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:1,
                barGap:'-100%',
                barCategoryGap:'30%',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                    }
                },
                itemStyle:{
                    normal:{
                        color:"#d6dce7"
                    }
                },
                data:this.props.data[1]
            }]
        })
    }
    render(){
        return (<div ref="barChart" style={{height:"450px",width:"100%"}}></div>);
    }
}