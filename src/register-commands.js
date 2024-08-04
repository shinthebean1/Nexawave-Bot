require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
  {
    name: 'add',
    description: 'Adds two numbers',
    options: [
        {
            name: 'first-num',
            description: 'first # bein added',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'sec-num',
            description: 'second # bein added',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
    ]
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.error(`There was an error: ${error}`);
  }
})();
