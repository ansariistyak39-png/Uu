const fs = require("fs");
module.exports.config = {
  name: "jay sree ram",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ABHISHEK", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("har har mhadev") ||
     react.includes("HAR HAR MHADEV") || react.includes("Har har mhadev") || react.includes("jai bholenath") ||
react.includes("jai shiv sambhoo") ||
react.includes("Har har mhadev")) {
    var msg = {
        body: `【  made by raj thakur/]]𝐇𝐀𝐑 𝐇𝐀𝐑 𝐌𝐇𝐀𝐃𝐄𝐕______🙏🏻🙏🏻🙏🏻❤️】`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏🏻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
