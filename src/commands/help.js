const prefix = process.env.PREFIX;

module.exports = {
    name: 'help',

    execute(message) {
        if (message.member.roles.cache.get(process.env.UNREGISTER_ID)) return message.channel.send(`**Harap registrasi terlebih dahulu dengan mengetik \`${prefix}register\` sebelum menggunakan BOT**`).then(message => {
            message.delete({timeout: 5000})
        })
            message.channel.send({
                embed: {
                    color: '#89e0dc',
                    author: { name: 'Help commands' },
                    footer: { text: `${prefix}help` },
                    fields: [
                        { name: 'General command', value: 'ping, uptime, time, userinfo, serverinfo, osu, avatar, weather, aboutbot, corona, totalcorona, tictactoe, hangman, snake' },
                        { name: 'DM command', value: 'report' },
                        { name: 'Music command', value: 'play, skip, stop, pause, resume, volume, queue, nowplaying, repeat, bitrate, lock, unlock' },
                        { name: 'Moderator command', value: 'nickname' },
                        { name: 'Admin command', value: 'warn, kick, ban, mute, unmute' },
                    ],
                    timestamp: new Date(),
                    description: `Prefix = **${prefix}**`,
                },
            });
	},
};
