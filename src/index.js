import React from 'react'   //创建组件，虚拟DOM，生命周期
import ReactDom from 'react-dom'

import Header from '@/components/Header'
import Todo from '@/components/Todo'
import Footer from '@/components/Footer'


ReactDom.render(
    <div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
    ,document.getElementById('app')
);


