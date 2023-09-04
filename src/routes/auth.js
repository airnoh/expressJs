const { Router } = require('express');

const router = Router();


router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {

        if (req.session.user) {
            res.send('You are already logged in');
        } else {
            req.session.user = {
                username,password
            };
            res.send(req.session);
        }
    }
    else res.send(401);
});
module.exports = router;