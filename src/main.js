import "./style.css";
import dotenv from "dotenv";
dotenv.config();

// Chargement des variables d'environnement
const private_key = process.env.PRIVATE_KEY;
const project_id = process.env.PROJECT_ID;

document.getElementById('emailForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // Afficher un indicateur de chargement
    submitButton.disabled = true;
    submitButton.innerHTML = `<svg class="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>`;

    try {
        const email = document.getElementById('emailInput').value;
        const name = document.getElementById('nameInput').value;

        // Appel à votre endpoint backend (voir étape 3)
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to save email');
        }

        // Afficher le message de succès
        document.getElementById('successMessage').textContent = 'Subscription successful! Thank you.';
        document.getElementById('successMessage').classList.remove('hidden');
        document.getElementById('errorMessage').classList.add('hidden');

        // Réinitialiser le formulaire
        document.getElementById('emailForm').reset();
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('errorMessage').textContent = error.message;
        document.getElementById('errorMessage').classList.remove('hidden');
        document.getElementById('successMessage').classList.add('hidden');
    } finally {
        // Réinitialiser le bouton
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});