const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParse = require('body-parser');
const cookieParser = require('cookie-parser');

const express = require('express');

const db = require('./test-db.js');

const app = express();

app.use(bodyParse.json());
app.use(cookieParser());

const codeMap = new Map();
// const passwordMap = new Map();

app.post('/login/sendVerifyCode', function (req, res) {
    let phone = req.body.phone;
    let code = Math.floor(Math.random() * 900000) + 100000;

    codeMap.set(phone, String(code));
    console.log(phone, code);

    res.send({
        ok: true,
        code
    });
});

app.post('/login/loginByCode', async function (req, res) {

    console.log(req.body);
    console.log(codeMap);

    let code = codeMap.get(req.body.phone);

    if (code === req.body.code) {

        if (!await db.existUser(req.body.phone)) {
            let ret = await db.createUser({
                login_name: req.body.phone
            });
            console.log(ret);
        }

        let user = await db.getUserByPhone(req.body.phone);

        let token = jwt.sign(user, 'aaa');

        res.cookie('token', token);

        res.send({
            ok: true

        })
    } else {
        res.send({
            ok: false
        })
    }
})

app.post('/login/loginByPhone', async function (req, res) {

    console.log(req.body);

    let phone = req.body.phone;
    if (await db.existUser(phone)) {

        let user = await db.getUserByPhone(req.body.phone);

        let token = jwt.sign(user, 'aaa');

        res.cookie('token', token);

        res.send({
            ok: true,
            phone
        })
    } else {
        res.send({
            ok: false,
        })
    }
})

// app.post('/requestPassword/modifyPassword', async function (req, res) {

//     // console.log(req.body);
//     // console.log(codeMap);

//     let phone = req.body.phone;

//     let password = passwordMap.get(req.body.phone);
    
//         if (!await db.existUser(phone)) {
//              await db.createUser({
//                 login_name: req.body.phone
//             });
//         }

//         if (!await db.existPassword(password)) {
//             let ret = await db.createPassword({
//                 login_password: req.body.password
//             });
//             console.log("新密码为:"+ret);
//         } 

//         res.send({
//             ok: true
//         })
     
    
// })



app.listen(5000);






/* 

date={
    name:1
    age:0
}

date.name


*/