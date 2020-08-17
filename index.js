const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAAIaRSFfbE0BAGXyOU54f5p0dOUwbFyHIswGyLHZCDXeEgOfJ6WFpD624qAORYpnDBhlmTCgvKBeKMEnjTxTCgy611GRE6rqMeq5oSRO2tJ6hIjLM3oBur5t4TZCnfhW9HyruYehUj8dAAhfy46GivVvMExdgftVlcVR6JcrZBCBNXX76rTZCwD2KW6hyPIZD',
  verifyToken: 'buet',
  appSecret: '04843bc7ecb1e6ace3d751297a687d0c'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
  console.log(text)
});

bot.start(3000);
