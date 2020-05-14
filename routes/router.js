const express = require('express');
const Router = express.Router();
ItemsArray = [
    {name: 'Item 1', description: 'des 1'},
    {name: 'Item 2', description: 'des 2'},
    {name: 'Item 3', description: 'des 3'}
];

Router.route('/')
.get((req,resp), ()=>{
    resp.render('index',{
        title: 'Web app',
        data: {
            Items: ItemsArray
        },
        layout: 'layouts/layout'
    })
})