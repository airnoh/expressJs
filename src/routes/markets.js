const { Router } = require('express');

const router = Router();

router.use((req, res, next) => {
    if (req.session.user)next();
    else res.send(401);
});

const supermarket = [
    {
        id: 1,
        store: 'whole foods',
        miles: 0.6,
    },
    {
        id: 2,
        store: 'Trader Joes',
        miles: 2.9,
    },
    {
        id: 3,
        store: 'Albertsons',
        miles: 3.9,
    },
    {
        id: 4,
        store: 'Albertsons',
        miles: 1.8,
    },
    {
        id: 5,
        store: 'Albertsons',
        miles: 4.6,
    },
];

router.get('', (req,res)=>{
    const { miles} = req.query;
    const parsedMiles = parseInt(miles);
    if(!isNaN(parsedMiles)) { 
        const filteredStores = supermarket.filter((s)=>s.miles <= parsedMiles)   
        res.send(filteredStores);   
    }else res.send(supermarket);
});

module.exports = router;