const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({
        "name": "Fairoos"
    })
})

const PORT = process.env.PORT || 3200

app.listen(PORT, () => {
  console.log("Server running at port: " + PORT);
});
