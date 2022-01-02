const simplydjs = require("simply-djs");

const { Message, Client } = require("discord.js");

module.exports = {
    name: "rps",
    aliases: ['rockpapersissors'],
     permissions: ["SEND_MESSAGES"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
       simplydjs.rps(message, {
  embedColor: "#075FFF", // default: #075FFF
  timeoutEmbedColor: "#c90000", // default: #c90000
  drawEmbedColor: "#075FFF", // default: #075FFF
  winEmbedColor: "#06bd00", // default: #06bd00
  embedFooter: "Make sure you Win ;)",
  rockColor: "colors", // default: SECONDARY
  paperColor: "colors", // default: SECONDARY
  scissorsColor: "colors" // default: SECONDARY
});
    },
};







