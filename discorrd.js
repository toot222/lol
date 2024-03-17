const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Definieer een route voor de GitHub-webhook
app.post('/webhook', (req, res) => {
    // Controleer of het verzoek afkomstig is van GitHub
    const githubEvent = req.headers['x-github-event'];

    if (githubEvent === 'push') {
        const message = 'Hoi, er is een nieuwe push naar de GitHub-repository gemaakt!';
        const discordWebhookURL = 'https://discord.com/api/webhooks/1219008140159352963/I07kOVhmJivstq-uZl3ccjvyHrjrnypKiULh73NM7WCcJRF3An7gslX7tR1Tn2_I8-ZL';

        // Bouw het payload-object voor het Discord-bericht
        const payload = {
            content: message
        };

        // Stuur een POST-verzoek naar Discord-webhook-URL
        fetch(discordWebhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(() => {
            console.log('Bericht succesvol naar Discord verzonden.');
            res.status(200).send('Bericht succesvol naar Discord verzonden.');
        })
        .catch(error => {
            console.error('Er is een fout opgetreden bij het verzenden van het bericht naar Discord:', error);
            res.status(500).send('Er is een fout opgetreden bij het verzenden van het bericht naar Discord.');
        });
    } else {
        console.log('Onverwacht GitHub-evenement ontvangen:', githubEvent);
        res.status(400).send('Onverwacht GitHub-evenement ontvangen.');
    }
});

// Start de server
app.listen(port, () => {
    console.log(`Server luistert op poort ${port}`);
});
