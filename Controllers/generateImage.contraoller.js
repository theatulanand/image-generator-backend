//dotenv
require('dotenv').config();

const { response } = require('express');
//openAI Configuration
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

class GenerateImage {
    async generateImg(req, res) {
        let data = req.body
        try {
            const response = await openai.createImage(data);
            res.send(response.data);
        } catch (err) {
            res.send("Something went wrong")
            console.log(err)
        }
    }
}

module.exports = new GenerateImage();