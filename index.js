import dotenv from 'dotenv';
dotenv.config();

import app from './app.js'

const PORT = process.env.PORT
// const PORT = process.env.PORT || 3000;

app.listen(PORT || 3000, () => {
    console.log(`app is listening on PORT ${PORT} || ${3000}}`)

})



