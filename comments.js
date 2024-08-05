// Create web server
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Add a route
app.get('/comments', (req, res) => {
    res.send('comments');
});
// 4. Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the server
// 1. Open terminal
// 2. Go to the folder where the file is located
// 3. Run the file using node
// node comments.js
// 4. Open the browser and go to the URL
// http://localhost:3000/comments
// 5. You should see the text "comments" on the page
