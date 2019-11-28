const express = require('express');
const router = express.Router();

//  Some fixed example data of dogs
/*let dogData = {
    dogs: [{
        id: 1,
        name: "Max",
        image: "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif"
    },
    {
        id: 2,
        name: "Bella",
        image: "https://media.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy.gif"
    },
    {
        id: 3,
        name: "Tucker",
        image: "https://media.giphy.com/media/bbshzgyFQDqPHXBo4c/giphy.gif"
    }]
}*/

//  Some fixed example data of dogs
let FallData = {
    dataF: [{
        id: 1,
        data: "".}]
}

/*//  Return all dog information
//router.get('/', (req, res) => { res.json(dogData)});*/

//Palauttaa kaiken datan
router.get('/', (req, res) => { res.json(FallData)});

/*//  Return information of a single dog
router.get('/:dogId', (req, res) => {
    const resultDog = dogData.dogs.find(d => {
        if (d.id == req.params.dogId) {
            return true;
        }
        else {
            return false;
        }
    });
    if(resultDog === undefined)
    {
        res.sendStatus(404)
    }
    else
    {
        res.json(resultDog);
    }
})*/

//Palauttaa informaation yhdestä datasta id:n perusteella
router.get('/:id', (req, res) => {
    const resultData = dogData.dataF.find(d => {
        if (d.id == req.params.dataF) {
            return true;
        }
        else {
            return false;
        }
    });
    if(resultData === undefined)
    {
        res.sendStatus(404)
    }
    else
    {
        res.json(resultData);
    }
})

/*Create a new dog
    Expects the following data format
    {
        name: string,
        image: string - whole url to image
    }

router.post('/', (req, res) => {

    dogData.dogs.push({
        id: dogData.dogs.length + 1,
        name: req.body.name,
        image: req.body.image
    })

    res.sendStatus(201);
});

router.delete('/:id', (req, res) => {
    dogData.dogs = dogData.dogs.filter(dog => dog.id != req.params.id);
    res.sendStatus(200);
})

module.exports = router;
*/

//luo uusi data
Create a new dataF
    Expects the following data format
    {
        id: string,
        data: string
    }

    router.post('/', (req, res) => {

        FallData.dataF.push({
            id: FallData.dataF.length + 1,
            name: req.body.name,
            image: req.body.image
        })

        res.sendStatus(201);
    });

    router.delete('/:id', (req, res) => {
        FallData.dataF = FallData.dataF.filter(dataF => dataF.id != req.params.id);
        res.sendStatus(200);
    })

    module.exports = router;
