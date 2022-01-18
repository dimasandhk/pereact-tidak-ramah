const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`);
	client.user.setActivity("your perkataan", {
		type: "LISTENING"
	});
});

client.on("message", (msg) => {
	const content = msg.content.toLowerCase();
	if (content.includes("ajg")) {
		msg.react("⭐");
	}
});

client.login(process.env.KEY);
