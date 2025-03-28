import './style.css';

{
    email: "julesmukadi.dev@gmail.com";
    project_id: "1b95525d-303f-422a-890e-fbb5267554ce";
    private_key: "smad2502241055428a16610a10";
    name: "Jules MUKADI"; // Optional, only if "add user name field" is enabled when you create the project
}

async function saveEmailToMailingList(email, name) {
    const response = await fetch('https://api.smadmail.com/api/v1/email/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            project_id: process.env.PROJECT_ID,
            private_key: process.env.PRIVATE_KEY,
            name: name //  Optional, only if "add user name field" is enabled when you create the project, else set null
        })
    });

    if (!response.ok) {
        throw new Error('Failed to save email');
    }

    return await response.json();
}