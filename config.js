const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "WIckwLgJ#eaPmFUr8KwrpmOTbYU2tL_E4clzDXJSrA3XSJoE5TUE", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:OHgNbWOlOqVgYmEXGbkNJazHttqLJmWn@ballast.proxy.rlwy.net:57977",  //ඔයාගෙ mongoDb url එක
};
 
