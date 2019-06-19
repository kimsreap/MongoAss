const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const mongoose = require('mongoose')


axios.get('https://www.nytimes.com/')
    .then(({ data }) => {

    })
    .catch(e => console.log(e))