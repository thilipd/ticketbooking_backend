const express = require('express');

const cors = require('cors');


const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

const dbConfiguration = require('../server/shared/connect')

const moviesRoute = require('../server/routes/movieRoute')
const userRoute = require('../server/routes/userRoute')

app.use('/api/movies', moviesRoute)
app.use('/api/users', userRoute)





const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))