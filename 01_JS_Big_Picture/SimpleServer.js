import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use("/", (req, res) => {
    res.status(200).send("");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});