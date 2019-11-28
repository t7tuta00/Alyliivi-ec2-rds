const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.json(FallData)});

//Palauttaa informaation yhdestä datasta id:n perusteella
router.get('/:id', (req, res) => {
    const resultData = FallData.dataF.find(d => {
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
