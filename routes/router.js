const express = require('express');
const Router = express.Router();
ItemsArray = [
    {name: 'Item 1', description: 'des 1'},
    {name: 'Item 2', description: 'des 2'},
    {name: 'Item 3', description: 'des 3'}
];
EventsArray = [
    { name:'New Year', description: 'Celebrating new year'},
    { name:'Helloween', description: 'Very scar event'},
    { name:'Christmass', description: 'Merry Christmass'}
]

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
.post((req,resp), () => {
    data = req.body;
    ItemsArray.push(new {name: data.name, description: data.description});
    resp.render('index', {
        title: 'Web-app',
        data: {
            Items: ItemsArray
        },
        layout: 'layouts/layout'
    })
})
.get('/events', (req,resp), ()=>{
    resp.render('index',{
        title: 'Web app',
        data: {
            Items: EventsArray
        },
        layout: 'layouts/layout'
    })
})
.post('/events', (req,resp), () => {
    data = req.body;
    EventsArray.push(new {name: data.name, description: data.description});
    resp.render('index', {
        title: 'Web-app',
        data: {
            Items: EventsArray
        },
        layout: 'layouts/layout'
    })
})