import express from "express"
import chatCompletion from './services/openai.js';

const app = express()
app.use(express.json()); // <-- This is required for req.body to work
app.use(express.static('public')); //built-in Express middleware that tells your app: “Serve all files inside the public folder directly to the browser.

app.get('/', (req, res) => {
    res.send("hello world")
    console.log("hello world")
}) 

app.get(
    '/test',
    async (req, res) => {
        const response = await chatCompletion("Provide an amusing sentence.");
        res.send(response);
        console.log(response)
    }
);

app.post(
    '/get-poem',
    async (req, res) => {
        console.log("req.body", req.body)
        const {input} = req.body
        const response = await chatCompletion(
            input
        );
        res.json({ poem: response });
    }
);


export default app;


