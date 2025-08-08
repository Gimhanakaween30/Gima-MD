const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vd9DhKKb#aJPrcZ9KL5urD0iv6N190SG7LFRWRPRGaSu3A_8X9fI", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:OHgNbWOlOqVgYmEXGbkNJazHttqLJmWn@ballast.proxy.rlwy.net:57977",  //ඔයාගෙ mongoDb url එක
};
 
