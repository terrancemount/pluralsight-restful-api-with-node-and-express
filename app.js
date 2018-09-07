const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const bookRouter = express.Router();

bookRouter.route('/Books')
    .get((req, res)=>{
        var responseJson = {hello: "This is my api"};
        res.json(responseJson);
    }
);

app.use('/api', bookRouter);

app.get('/', (req, res)=>{ 
    res.send('welcome to my API')
});




app.listen(port, () => {
    console.log(`Running on PORT: ${port}`);
});