
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//创建一个插件的实例对象,该插件能够将打包好的main.js自动追加到页面中。
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),  //源文件
    filename: 'index.html'  // 内存中的index。html
})

//向外暴露一个打包配置对象; 因为webpack是基于node.js，所以支持node API和语法
//webpack默认只能打包处理.js文件，像.png、.vue无法主动处理。
module.exports = {
    mode: 'development', // 开发环境development 生产环境 production
    // mode: ''
    // //在webpack 4.x中有个很大特性，约定大于配置，默认打包入口是src/index.js
    plugins: [
        htmlPlugin
    ],
    module:{ //所有第三方模块的配置规则
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},  //千万别忘记添加exclude排除项
            //打包处理CSS样式表的第三发loader
            //固定的参数，叫做modules，为样式表启用模块化
            { test: /\.css$/, use: ['style-loader','css-loader']},    //
            //{ test: /\.jpg|png|gif|bmp$/, use: 'url-loader'}   //图片的加载loader
            { test: /\.ttf|woff|woff2|eot|svg$/,use: 'url-loader'},   //打包处理字体文件的loader
            { test: /\.scss$/, use: ['style-loader','css-loader?modules','sass-loader']},  //打包处理scss文件的loader
            {
                test: /\.styl/,
                use: [
                  'style-loader',
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: true
                    }
                  },
                  'stylus-loader'
                ]
              }
        
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.json'],   //表示这个类型的文件后缀名可以不写
        alias: { //表示别名
            '@': path.join(__dirname, './src') //配饰@表示的是项目根目录src的目录
        }
    }
}

// es6语法中