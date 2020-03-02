import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
// import "./index.css";
import header from '@/css/header.scss'

export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    render() {
        return <div>
            <h1 className = {header.title}>ToDoList</h1>
        </div>
    }
}