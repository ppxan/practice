import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./component/Header/rootHeader.css"
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PageHeader from "./component/Header/rootHeader"
import rootHeader from "./component/Header/rootHeader"
import Pie from "./component/pieChart";
import BarChart from "./component/barChart";

class Test extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let data1 = [[
            {name:"其他",value:"89293079",rateValue:"0.6119"},
            {name:"处方",value:"3262029.46",rateValue:"0.0223"},
            {name:"非处方",value:"53378936",rateValue:"0.3658"}
        ],[
            {name:"其他费用",value:"89293079",rateValue:"0.6119"},
            {name:"药品费用",value:"56640966",rateValue:"0.3881"}
        ],['55%', '80%'],[0, '40%'],["#a6b6d7","#e1bfc8","#f1ebed","#d2b8bf","#efd4db"]
        ]
        let data2 = [[
            {name:"西药",value:"422293.28",rateValue:"0.1295"},
            {name:"中药",value:"103951.2",rateValue:"0.0319"},
            {name:"中成药",value:"296437.6",rateValue:"0.0906"},
            {name:"西药",value:"1698488.34",rateValue:"0.5207"},
            {name:"中药",value:"0",rateValue:"0"},
            {name:"中成药",value:"741859",rateValue:"0.2274"},
        ],[
            {name:"甲类",value:"821682.1",rateValue:"0.2519"},
            {name:"乙类",value:"2440347",rateValue:"0.7481"}
        ],['45%', '60%'],[0, '32%'],["#e1c6bf","#d59a9a","#cebfe1","#e4aacd","#f6c9d4"]]
        let data3 = [[
            {name:"西药",value:"12101476.61",rateValue:"0.2267"},
            {name:"中药",value:"2428739.26",rateValue:"0.0455"},
            {name:"中成药",value:"7983380.28",rateValue:"0.1496"},
            {name:"西药",value:"25098172.16",rateValue:"0.4702"},
            {name:"中药",value:"0",rateValue:"0"},
            {name:"中成药",value:"5767168.02",rateValue:"0.1080"}
        ],[
            {name:"甲类",value:"22513596.15",rateValue:"0.4218"},
            {name:"乙类",value:"30865340.18",rateValue:"0.5782"}
        ],['45%', '60%'],[0, '32%'],["#e1c6bf","#d59a9a","#cebfe1","#e4aacd","#f6c9d4"]]
        let data4=[[
            {name:"8月",value:"0",totalValue:"57040660.3",rate:"-"},
            {name:"9月",value:"0",totalValue:"52177572.14",rate:"-0.0852"},
            {name:"10月",value:"0",totalValue:"52098331.26",rate:"-0.0015"},
            {name:"11月",value:"0",totalValue:"58799103.59",rate:"0.1286"},
            {name:"12月",value:"0",totalValue:"62068791.5",rate:"0.0556"},
            {name:"1月",value:"0",totalValue:"60520694.78",rate:"-0.0249"},
            {name:"2月",value:"0",totalValue:"47456525.96",rate:"-0.2158"},
            {name:"3月",value:"0",totalValue:"60544267.63",rate:"0.2758"},
            {name:"4月",value:"0",totalValue:"54690826.48",rate:"-0.0967"},
            {name:"5月",value:"0",totalValue:"61294749.76",rate:"0.1207"},
            {name:"6月",value:"0",totalValue:"53767485.28",rate:"-0.1228"},
            {name:"7月",value:"0",totalValue:"56640965.79",rate:"0.0534"},
        ],[
            {name:"8月",value:"0",totalValue:"25910476.56",rate:"-"},
            {name:"9月",value:"0",totalValue:"21661917.63",rate:"-0.1640"},
            {name:"10月",value:"0",totalValue:"21233728.48",rate:"-0.0178"},
            {name:"11月",value:"0",totalValue:"24365260.56",rate:"0.1475"},
            {name:"12月",value:"0",totalValue:"25339888.28",rate:"0.0400"},
            {name:"1月",value:"0",totalValue:"24716253.49",rate:"-0.0246"},
            {name:"2月",value:"0",totalValue:"21613105.4",rate:"-0.1255"},
            {name:"3月",value:"0",totalValue:"28049491.82",rate:"0.2978"},
            {name:"4月",value:"0",totalValue:"24738900.44",rate:"-0.1180"},
            {name:"5月",value:"0",totalValue:"29121908.6",rate:"0.1772"},
            {name:"6月",value:"0",totalValue:"25250652.65",rate:"-0.1329"},
            {name:"7月",value:"0",totalValue:"26796660.5",rate:"0.0612"},
        ],[
            "#b0bccf","#d6dce7","#c0b298",
        ],[{totalMark:"0.105"}]
        ]

        return (
            <div style={{top: "10%",position:"absolute",width:"100%"}}>
                <PageHeader/>
                <div style={{display:"flex",height:"390px",width:"100%",backgroundColor:"#f7f8fc"}}>
                    <div className="pie-title">药品支出详细分析</div>
                    <Pie data={data1}/>
                    <Pie data={data2}/>
                    <Pie data={data3}/>
                </div>
                <div style={{display:"flex",height:"500px",width:"100%",backgroundColor:"#f7f8fc",marginTop:"10px"}}>
                <BarChart data={data4}/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Test/>, document.getElementById('root'));
registerServiceWorker();
