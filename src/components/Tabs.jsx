import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import Tabs from '@/css/Tabs.scss'
import arrDiff from "arr-diff";
console.log(Tabs);

export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            states:['all','active','completed'],
            display:true,
            tabsStatus: {
                type: String,
                required:true,
            },
            todo:{},
            items:0
        }
    }

    render() {
        var items = this.props.items;
        return <div style={{
                // position:'absolute',
                
                fontWeight: '100',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px 0',
                lineHeight: '30px',
                backgroundColor: '#fff',
                fontSize: '14px',
                WebkitFontMoothing: 'antialiased'
                
            }}>
            <span style={{
                // fontWeight: '100',
                // lineHeight: '30px',
                // fontZize: '14px',
                padding: '0 10px',
                boxSizing: 'border-box',
                width: '150px',
                textAlign: 'left' 
            }}>{items} items left</span>
            
        </div>
    }


}

