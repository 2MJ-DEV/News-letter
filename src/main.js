import './style.css';
import dotenv from 'dotenv';

dotenv.config(); // Charge les variables d'environnement

const apiConfig = {
    project_id: process.env.PROJECT_ID,
    private_key: process.env.PRIVATE_KEY,
};

async function saveEmailToMailingList(email, name) {
    const response = await fetch('https://api.smadmail.com/api/v1/email/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            project_id: apiConfig.project_id,
            private_key: apiConfig.private_key,
            name: name || null,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to save email');
    }

    return await response.json();
}