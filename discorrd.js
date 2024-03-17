const { WebhookClient } = require('discord.js');

// Vervang de onderstaande URL door je eigen Discord-webhook URL
const webhookURL = 'https://discord.com/api/webhooks/1219008140159352963/I07kOVhmJivstq-uZl3ccjvyHrjrnypKiULh73NM7WCcJRF3An7gslX7tR1Tn2_I8-ZL';

// Maak een nieuwe WebhookClient aan
const webhookClient = new WebhookClient({ url: webhookURL });

// Verstuur een bericht naar de webhook
webhookClient.send('hoi')
  .then(() => console.log('Bericht succesvol verstuurd naar de webhook'))
  .catch(console.error);
