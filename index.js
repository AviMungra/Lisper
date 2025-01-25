import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Use the public folder for static files
app.use(express.static('public'));

//  When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    try {
        // Use axios to get a random secret and pass it to index.ejs to display the secret and the username of the secret
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {secret: response.data.secret, user: response.data.username});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
