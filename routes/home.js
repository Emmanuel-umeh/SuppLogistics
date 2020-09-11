const router = require("express").Router()



router.get('/', (req,res)=>{
    res.render("Home.ejs")
})

router.get('/contact', (req,res)=>{
    res.render("Contact.ejs")
})

router.get('/about', (req,res)=>{
    res.render("About.ejs")
})



module.exports = router