import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();




// create a new instance of the OpendAI object
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})



async function chatCompletion(prompt) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-4o-mini",
    });

    console.log(chatCompletion.choices[0].message.content)
    return chatCompletion.choices[0].message.content;
}










export default  chatCompletion
