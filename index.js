const express = require('express');
const app = express();

// Add middleware to parse JSON from request body
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Manager API is running');
})

app.post('/', (req, res) => {
    const taskId = req.body.id; // Get id from request body
    res.send(`Task with ID ${taskId} has been created`);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})