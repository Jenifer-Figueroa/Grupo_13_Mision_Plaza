const express = require('express')

module.exports={
    home: (req, res) =>{
        res.render('index',
        {title : 'Mision Plaza',
         css: 'style.css'});
    }
}