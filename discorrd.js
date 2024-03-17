const fetch = require('node-fetch');

const webhookURL = "https://discord.com/api/webhooks/1219008140159352963/I07kOVhmJivstq-uZl3ccjvyHrjrnypKiULh73NM7WCcJRF3An7gslX7tR1Tn2_I8-ZL";

const sendMessage = async () => {
  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: 'Hoi' }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Discord');
    }

    console.log('Message sent successfully to Discord');
  } catch (error) {
    console.error('Error sending message to Discord:', error);
  }
};

// Stuur het bericht eenmaal bij het starten van het script
sendMessage();
