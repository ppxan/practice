import React from 'react'
import ReactDOM from 'react-dom'
import './rootHeader.css'


export default class PageHeader extends React.Component{
    render(){
        return(
        <div className="page-header-container">
            <table className="page-header-table">
                <tbody>
                <tr>
                    <td>
                    <div className="page-header-title">
                        <img className="page-header-img" src="data:image/png;base64,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"></img>
                        <span className="page-header-title-span">开封社会保险统一运行分析系统</span>
                    </div>
                    </td>
                    <td className="second-td">
                        <div className="page-header-search">
                            <div className="search-div">
                                <select>
                                    <option>全部</option>
                                    <option>指标</option>
                                    <option>专题</option>
                                    <option>报表</option>
                                </select>
                            </div>
                            <input className="second-td-input" placeholder="请输入搜索内容"></input>
                            <button>
                                <svg className="icon"
                                     viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                     p-id="507">
                                    <path
                                        d="M622.4 682.453333l60.330667-60.309333 256.405333 256.405333-60.330667 60.309334z"
                                        fill="#616161" p-id="508"></path>
                                    <path
                                        d="M426.666667 426.666667m-341.333334 0a341.333333 341.333333 0 1 0 682.666667 0 341.333333 341.333333 0 1 0-682.666667 0Z"
                                        fill="#616161" p-id="509"></path>
                                    <path
                                        d="M692.266667 753.92l60.309333-60.330667 185.514667 185.514667-60.330667 60.330667z"
                                        fill="#37474F" p-id="510"></path>
                                    <path
                                        d="M426.666667 426.666667m-277.333334 0a277.333333 277.333333 0 1 0 554.666667 0 277.333333 277.333333 0 1 0-554.666667 0Z"
                                        fill="#64B5F6" p-id="511"></path>
                                    <path
                                        d="M573.866667 302.933333c-36.266667-42.666667-89.6-68.266667-147.2-68.266666s-110.933333 25.6-147.2 68.266666c-8.533333 8.533333-6.4 23.466667 2.133333 29.866667 8.533333 8.533333 23.466667 6.4 29.866667-2.133333C341.333333 296.533333 381.866667 277.333333 426.666667 277.333333s85.333333 19.2 115.2 53.333334c4.266667 4.266667 10.666667 8.533333 17.066666 8.533333 4.266667 0 10.666667-2.133333 12.8-4.266667 8.533333-8.533333 8.533333-23.466667 2.133334-32z"
                                        fill="#BBDEFB" p-id="512"></path>
                                </svg></button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        );
    }
}