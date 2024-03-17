const axios = require('axios');

// Vervang de onderstaande URL door je eigen Discord-webhook URL
const webhookURL = 'https://discord.com/api/webhooks/1219008140159352963/I07kOVhmJivstq-uZl3ccjvyHrjrnypKiULh73NM7WCcJRF3An7gslX7tR1Tn2_I8-ZL';

// Maak een HTTP-verzoek naar de webhook om een bericht te sturen
axios.post(webhookURL, {
  content: 'hoi'
})
.then(() => console.log('Bericht succesvol verstuurd naar de webhook'))
.catch(error => console.error('Er is een fout opgetreden bij het versturen van het bericht naar de webhook:', error));
