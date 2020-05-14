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
];
PeopleArray = [
    { name:'Vasilii Pupkin', description: 'expressive, responsible person'},
    { name:'Fedor Petrov', description: 'quite, impressive, sellfish person'},
    { name:'Petr Fedorov', description: 'helpful, kind, communicate person'}
]

Router.route('/')
.get((req,resp), ()=>{
    resp.render('index',{
        title: 'Web app',
        ItemsName: 'Items',
        data: {
            Items: ItemsArray
        },
        layout: 'layouts/layout'
    })
})
.post((req,resp), () => {
    let data = req.body;
    ItemsArray.push(new {name: data.name, description: data.description});
    resp.render('index', {
        title: 'Web-app',
        ItemsName: 'Items',
        data: {
            Items: ItemsArray
        },
        layout: 'layouts/layout'
    })
})
.get('/events', (req,resp), ()=>{
    resp.render('index',{
        title: 'Web app',
        ItemsName: 'Events',
        data: {
            Items: EventsArray
        },
        layout: 'layouts/layout'
    })
})
.post('/events', (req,resp), () => {
    let data = req.body;
    EventsArray.push(new {name: data.name, description: data.description});
    resp.render('index', {
        title: 'Web-app',
        ItemsName: 'Events',
        data: {
            Items: EventsArray
        },
        layout: 'layouts/layout'
    })
})
.get('/people', (req,resp),()=>{
    resp.render('index',{
        title: 'Web app',
        ItemsName: 'People',
        data: {
            Items: PeopleArray
        },
        layout: 'layouts/layout'
    })
})
.post('/people',(req,resp), () => {
    let data = req.body;
    PeopleArray.push(new {name: data.name, description: data.description});
    resp.render('index', {
        title: 'Web-app',
        ItemsName: 'People',
        data: {
            Items: PeopleArray
        },
        layout: 'layouts/layout'
    })
})

module.exports = Router;