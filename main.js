const Discord = require("discord.js");
const client = new Discord.Client();

const words = require("./data.json");
require("dotenv").config();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`);
	client.user.setActivity("your perkataan", {
		type: "LISTENING"
	});
});

client.on("message", (msg) => {
	const content = msg.content.toLowerCase();
	const containTidakRamah = words.some((w) => content.includes(w));
	if (containTidakRamah) {
		msg.react("⭐");
	}
});

client.login(process.env.KEY);
