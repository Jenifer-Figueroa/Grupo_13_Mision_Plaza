const express = require('express')

module.exports={
    home: (req, res) =>{
        res.render('home')
    },
    registro: (req, res)=>{
        res.render('registro')
    }
}