const http = require('http');
const fetch = require('node-fetch');

// Server die 'I'm alive' terugstuurt
http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

// Functie om elke 5 seconden een bericht naar de Discord-webhook te sturen
async function sendMessage() {
  try {
    // Discord-webhook-URL
    const webhookURL = 'https://discord.com/api/webhooks/1219008140159352963/I07kOVhmJivstq-uZl3ccjvyHrjrnypKiULh73NM7WCcJRF3An7gslX7tR1Tn2_I8-ZL';
    
    // Bericht dat moet worden verzonden
    const message = {
      content: 'hoi'
    };

    // Opties voor de fetch API
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    };

    // Verstuur het bericht naar de webhook
    const response = await fetch(webhookURL, options);

    // Controleer of het bericht succesvol is verzonden
    if (response.ok) {
      console.log('Bericht succesvol verzonden naar Discord');
    } else {
      console.error('Er is een fout opgetreden bij het verzenden van het bericht naar Discord');
    }
  } catch (error) {
    console.error('Er is een fout opgetreden:', error);
  }
}

// Stuur elke 5 seconden een bericht naar de Discord-webhook
setInterval(sendMessage, 5000);
