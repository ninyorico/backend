import express from "express";


const app = express();

const port = 4000;

//middleware
app.use(express.json());

try {
    app.listen(port, () => {
        console.log(`listening to port  https://localhost:${port}`);
    });
} catch(e) {
    console.log(e);
}

app.get('/sa', async (request, response) =>{
    response.status(200).json({message: "Niño Rico Bancoro"});
})