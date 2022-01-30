var fs = require('fs')
const Discord = require("discord.js11");
var chalk = require('chalk');

const tokens = fs.readFileSync('tokens.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');


process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};

const bot = new Discord.Client({
    disableEveryone: true

});
class Bot {
    constructor(token) {
        this.token = token;
    }
    online() {
        this.bot = new Discord.Client();
        this.bot.on('ready', () => {
            console.log(chalk.green(`[SISTEMA]`) + `|` + (chalk.blueBright `Conectado! `) + (chalk.redBright `%s`) + ` |` + (chalk.blueBright ` ID: `) + (chalk.magenta `%s`) + ` at` + (chalk.yellow ` "%s"`), this.bot.user.tag, this.bot.user.id, new Date().toLocaleTimeString());
            this.bot.on("message", async message => {})
        });
        this.bot.on('ready', () => {
            this.bot.user.setPresence({
                game: {
                    name: items[Math.floor(Math.random() * items.length)], //A tá beta 
                    type: "PLAYING",
                    url: "http://leandrotn.ga"
                }
            });
        });

        this.bot.login(this.token).catch(err => {});;
    }
}

process.title = ` [SISTEMA] Tokens Online: ${tokens.length}`;
console.log(chalk.green(`DEIXANDO OS TOKEN Onliner: `) + (chalk.magenta(`Tá on! `)) + (chalk.cyanBright(`[SISTEMA] `)) + (chalk.red(`Tokens Online: ${tokens.length}`)));
console.log ("")
console.log(" ▒██░░░░▐█▀▀░░▄█▀▄─▒██▄░▒█▌░▐█▀█▄▒▐█▀▀▄▒▐█▀▀█▌▒█▀█▀█▒██▄░▒█▌")
console.log(" ▒██░░░░▐█▀▀░▐█▄▄▐█▒▐█▒█▒█░░▐█▌▐█▒▐█▒▐█▒▐█▄▒█▌░░▒█░░▒▐█▒█▒█░")
console.log(" ▒██▄▄█░▐█▄▄░▐█─░▐█▒██░▒██▌░▐█▄█▀▒▐█▀▄▄▒▐██▄█▌░▒▄█▄░▒██░▒██▌")
console.log ("")
console.log(chalk.underline(chalk.green(`                        By:LEANDROTN#0101`)));
console.log(chalk.inverse(`[SISTEMA] - [Tokens Online!]`));

console.log();
console.log();


var i = 0;
var int = setInterval(() => {
    if (i >= tokens.length) return clearInterval(int);
    new Bot(tokens[i++]).online();
}, 0);
