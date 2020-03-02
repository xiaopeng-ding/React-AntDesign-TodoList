const express = require('express');
const {buildSchema} = require('graphql');
const graphqlHttp = require('express-graphql');

// 定义schmea 查询和类型
const schema = buildSchema(`

    input TodosInput{
        id: Int
        content: String
        completed: Boolean
    }

    type Todos{
        id: Int
        content: String
        completed: Boolean
    }

    type Mutation{
        createTodos(input: TodosInput): Todos
        updateTodos(id: Int!, input: TodosInput): Todos
    }

    type Query{
        todos: [Todos]
    }
`)

// 虚拟的数据库
const fakeDB= {}

// 定义查询对应的处理器
const root = {

    createTodos({input}){
        //相当于数据库的保存
        fakeDB[input.id] = input;
        //返回保存结果
        return fakeDB[input.id]
    },

    updateTodos({id,input}){
        //相当于数据库的更新
        const updateTodos = Object.assign({},fakeDB[id],input);
        fakeDB[id] = updateTodos;
        //返回保存结果
        return updateTodos
    },

    todos(){
        var arr = [];
        for(const key in fakeDB){
            arr.push(fakeDB[key]);
        };
        return arr
        // return todos
    }
}

const app = express();

app.use('/graphql',graphqlHttp({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

//公开文件夹，供用户访问静态资源
// app.use(express.static('src'));

var http = require('http');
var server = http.createServer();
var qs = require('querystring');

server.on('request', function(req, res) {
    console.log('...................................');
    var postData = '';

    // 数据块接收中
    req.addListener('data', function(chunk) {
        postData += chunk;
    });

    // 数据接收完毕
    req.addListener('end', function() {
        postData = qs.parse(postData);

        // 跨域后台设置
        res.writeHead(200, {
            // 'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
            'Access-Control-Allow-Origin': '*',    // 允许访问的域（协议+域名+端口）
            // 'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'   // HttpOnly:脚本无法读取cookie
        });

        res.write(JSON.stringify(postData));
        res.end();
    });
});

// server.listen('8080');
console.log('Server is running at port 3001...');



app.listen(3001);