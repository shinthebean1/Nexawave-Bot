require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`🖕${c.user.tag} is now enslaved`);
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'add') {
    const num1 = interaction.options.get('first-num').value;
    const num2 = interaction.options.get('sec-num').value;

    const result = num1 + num2

    interaction.reply(`result is ${result}`)

  }
});

client.login(process.env.token);