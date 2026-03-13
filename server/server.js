const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // 用于解析 POST 请求体
const app = express();
const port = 60624;

app.use(cors());
// 使用 body-parser 中间件来解析 JSON 格式的请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 原有的获取全局数据的接口
app.get('/api/global-data', (req, res) => {
    res.json({ 
        userLogin: false, 
        themeColor: '#1AAD19', 
        message: 'From Local Server' 
    });
});

// 添加登录接口
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
        res.json({ code: 200, msg: '登录成功' });
    } else {
        res.status(401).json({ code: 401, msg: '账号或密码错误' });
    }
});

app.listen(port, () => {
    console.log(`\n✅ Server running at http://localhost:${port}`);
});