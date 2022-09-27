//load express
const express = require ('express')

//create express app
const app = express()

//define a root for homepage
app.get(`/`, (req, res) => {
    res.send (
        `<h1> 99 bottles of Beer on the Wall</h1> <a href ="/98"> take one down pass it around </a>`
    )
})


app.get(`/:number`, (req, res) => {
    let bottles = req.params.number;
    if(bottles > 0 ){
        res.send(` <h1> ${req.params.number} bottle of beer on the wall </h1><a href=/${req.params.number -1}> take one down pass it around </a>`);

    }else{
        res.send(` <h1> No more bottles of beer!</h1> <a href ="/"> Please try again </a>`);
    }

});



//identify the port
app.listen(3000, () => {
    console.log(`listening on port 3000 `)
})