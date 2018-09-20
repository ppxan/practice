import Pie from './pieChart';
import React from 'react';
import ReactDOM from 'react-dom';


const radius =  ['30%', '45%']
export default class ComponentBody extends React.Component{
    render(){
        return(
            <div className="bodyindex">
                <Pie radius={radius}/>
            </div>
        )
    }
}