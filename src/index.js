const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const groceriesRouter = require('./routes/groceries');
const marketRouter = require('./routes/markets');
const authRouter = require('./routes/auth');

const app = express();
const PORT = 3001;

app.use(express.json());
// app.use(express.urlencoded());
app.use(cookieParser());
app.use(session({
    secret: 'DLJFHBVHGNDMHFGVBKFBQVQQQQQQQQQQQQU',
    resave: false,
    saveUninitialized: false,
})
);


app.use(function(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use((req,res,next)=>{
    if(req.session.user)next();
    else res.send(401);
})

app.use('/groceries',groceriesRouter);
app.use('/market',marketRouter);
app.use('/auth',authRouter);

app.listen(PORT, () => console.log('Running on port 3001'));

