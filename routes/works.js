var express = require('express');
var router = express.Router();

//card data
var products=[
  {
    name:'Samsung s21',
    brand:'Samsung',
    price:60000,
    imageUrl:'https://images.mobilefun.co.uk/graphics/450pixelp/83895.jpg'
  },
  {
    name:'Iphone 12',
    brand:'Apple',
    price:'50000',
    imageUrl:'https://media.ldlc.com/r1600/ld/products/00/05/93/86/LD0005938680_1.jpg'
  },
  {
    name:'Oneplus 8',
    brand:'Oneplus',
    price:'30000',
    imageUrl:'https://oasis.opstatics.com/content/dam/oasis/page/billie/N100-Frame.png'
  },
  {
    name:'Nokia 6.1',
    brand:'Nokia',
    price:20000,
    imageUrl:'https://m.media-amazon.com/images/I/61m2QpD1thL._SX679_.jpg'
  },
  {
    name:'Google Pixel 6',
    brand:'Google',
    price:40000,
    imageUrl:'https://m.media-amazon.com/images/I/71QQZr2pNSL._SL1500_.jpg'
  },
  {
    name:'Samsung note 20',
    brand:'Samsung',
    price:100000,
    imageUrl:'https://media.pakprice.pk/130/rPwCgRBgQeOhPVB20iPhWVJs3Cj6988ymShkcal8.jpeg'
  }
]

//table data


var data=[
  {
    id:'100',
    name:'Arjun',
    position:'Mern stack developer',
    salary:70000,
  },
  {
    id:'101',
    name:'Rashid',
    position:'Mern stack developer',
    salary:80000,
  },
  {
    id:'102',
    name:'Shamil',
    position:'React developer',
    salary:100000,
  },
  {
    id:'103',
    name:'Sajidh',
    position:'Nodejs developer',
    salary:90000,
  },
  {
    id:'104',
    name:'Rahul',
    position:'Mern stack developer',
    salary:80000,
  }
]

//list data


var list=[
  {
    name:'Nigeria',
    brand:'BMW',
    place:'chennai',
    price:5000000,
    postTime:10,
    details:'The BMW Group sets trends in production technology and sustainability as an innovation leader with an intelligent material mix',
    image:'https://www.bmw-nigeria.com/content/dam/bmw/common/home/teaser/bmw-x-series-x7-hometeaser-desktop.jpg.asset.1652829130603.jpg'
  },
  {
    name:'C63',
    brand:'Mercedes-benz',
    place:'kochi',
    price:4000000,
    postTime:30,
    details:'Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926.',
    image:'https://c4.wallpaperflare.com/wallpaper/948/232/997/mercedes-mercedes-benz-cls-wallpaper-preview.jpg'
  },
  {
    name:'F-Type',
    brand:'Jaguar',
    place:'kannur',
    price:8000000,
    postTime:35,
    details:'Powerful, agile and distinctive, the F-TYPE is a true Jaguar sports car, engineered for high performance and responsive handling.',
    image:'https://di-uploads-pod18.dealerinspire.com/germainjaguar/uploads/2020/06/JE_2021-Jaguar-F-Type.jpg'
  },
  {
    name:'Chiron',
    brand:' Bugatti',
    place:'kochi',
    price:9500000,
    postTime:38,
    details:'The new Bugatti Chiron Super Sport has hit the open market, with an extra 98bhp and a 23kg weight advantage',
    image:'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1623077959/autoexpress/2021/06/Bugatti%20Chiron%20Super%20Sport-2.jpg'
  }
]


router.get('/card', function(req, res) {
  res.render('card',{products});
});

router.get('/table', function(req, res) {
  res.render('table',{data});
});
router.get('/list', function(req, res) {
  res.render('list',{list});
});





module.exports = router;
