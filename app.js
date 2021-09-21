// 引入express模块
const express = require('express')
var template = require('art-template');

// 导入path路径模块
var path = require('path');

// 创建实例
const app = express()
// 创建一个测试路由
app.get('/', require('./route/index.js'));
app.get('/upload', require('./route/upload.js'));


// 托管静态资源文件
app.use(express.static(path.join(__dirname, 'public')));


// 当渲染后缀为art的模板时，使用express-art-template
app.engine('art', require('express-art-template'));
// 设置模板存放目录
app.set('views', path.join(__dirname, 'views'));
// 渲染模板时不写后缀，默认拼接art后缀
app.set('view engine', 'art');


// 监听80端口，启动服务器
app.listen(80, () => {
    console.log('监听端口80');
})
