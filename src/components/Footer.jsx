import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import cssobj from '@/css/footer.scss'
console.log(cssobj);
// import "./index.css";

export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    render() {
        return <div  className={cssobj.footer}>
            <span>Wirtten By Dingxiaopeng</span>
        </div>
    }
}