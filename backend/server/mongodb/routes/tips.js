const router = require('express').Router();
let Tip = require('../models/tip.model');

router.post('/add-tip', (req, res) => {
    const {tip_info, climate} = req.body;

    const newTip = new Tip({tip_info, climate});
    newTip.save()
        .then(() => {
            return res.send({
                success: true,
                message: 'Tip added'
            });
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/random', (req, res) => {
    let climate = '';
    let aggregate = '';
    if(req.query.climate) {
        climate = req.query.climate;
        aggregate = [{
            '$match': {
            'climate': climate
            }},
            {
                '$sample': {
                'size': 1
                }
            }];
    }
    else {
        aggregate = [{
                '$sample': {
                'size': 1
                }
            }];
    }

    Tip.aggregate(aggregate, (err, results) => {
        if(err) {
            return res.status(400).json('Error: ' + err);
        }
        return res.send(results);
    })
})

module.exports = router;