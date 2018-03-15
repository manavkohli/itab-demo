
// Google Actions SDK
import ActionsSDKApp from 'actions-on-google';

// Handles creating creating server
import express from 'express';
import bodyParser from 'body-parser';

// 1) Create the route handler
const app = express();
const port = 3000;

// 4) Define actions
const actions = {
  BUY: 'buy_action'
};

// 5) Define arguments
const parameters = {
  ITEM: 'item'
};

// 3) Create the handler to parse requests
app.use(bodyParser.json({type: 'application/json'}));
app.post('/', (request, response) => {
  const assistant = new ActionsSDKApp.DialogflowApp({request, response});

  const handler = (assistant) => {
    const itemArg = assistant.getArgument(parameters.ITEM);
    console.log('Received something from the agent');
    assistant.tell('Awesome, I bought you a ' + itemArg);
  };

  const actionsMap = new Map();
  actionsMap.set(actions.BUY, handler);
  assistant.handleRequest(actionsMap);

});

// 2) Start the server on the default port
app.listen(port, (err) => {
  if (err) {
    console.log('Error: ' + err);
  }
  console.log('Listening on port: ' + port);
});
