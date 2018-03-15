# Transactional Voice Demo

This repo contains the barebones code for building a conversational agent with Dialogflow. Make sure to download ngrok and install the node modules (`$ npm install`) first. If you don't have node/npm installed, first [install homebrew](https://brew.sh/) then run:

`$ brew install node`

`$ brew install npm`

To start the local server, run:

`$ npm run dev`

Then, open up the port to access over https using ngrok:

`$ ngrok http 3000`

Next, go into the Dialogflow UI, enable fulfillment with the port provided by ngrok, and setup the integration with Google Home. Feel free to shoot any questions to manav_kohli@intuit.com.
