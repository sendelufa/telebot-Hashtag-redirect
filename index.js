var TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
var token = '871074603:AAEBTf7cTb1UOZHAer833VdbP6IZRqPD4Mc';
// Включить опрос сервера
var bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    
var hashtags = /(.)*?(#вопроспокурсу_java|#отзыв|#оргвопрос)(.)*?/i;

//console.log(msg.text.toString());

if (msg.text.toString().match(hashtags)) {
	var text_reply = msg.from.first_name + " " + msg.from.last_name + " @" 
	+ msg.from.username + " в группе 👫 " + msg.chat.title + ":\n"  + msg.text;
	
	bot.sendMessage(1181136, text_reply);
	//bot.sendMessage(482169886, text_reply);  //Vasiliy
}}); 