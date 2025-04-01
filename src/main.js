import "./style.css";

// const express = require('express');
// const bodyParser = require('body-parser');
// const fetch = require('node-fetch');
// require('dotenv').config();

// const app = express();
// app.use(bodyParser.json());

// app.post('/api/subscribe', async (req, res) => {
//     const { email, name } = req.body;

//     try {
//         const response = await fetch('https://api.smadmail.com/api/v1/email/save', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email,
//                 name,
//                 project_id: process.env.PROJECT_ID,
//                 private_key: process.env.PRIVATE_KEY,
//             }),
//         });

//         if (!response.ok) {
//             const error = await response.json();
//             return res.status(response.status).json(error);
//         }

//         const data = await response.json();
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));