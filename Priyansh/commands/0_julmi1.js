const fs = require("fs");
module.exports.config = {
	name: "imoge2",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "𝑱𝑼𝑳𝑴𝑰 𝑱𝑨𝑨𝑻", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("🫣") ||
     react.includes("😏") || react.includes("😔") || react.includes("😗") ||
react.includes("👀") ||
react.includes("🧐")) {
		var msg = {
				body: `नखरे देखो इनके 🙄🤦`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😒", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
