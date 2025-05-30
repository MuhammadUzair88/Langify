const { StreamChat } = require("stream-chat");
require('dotenv').config();


const apiKey=process.env.STEAM_API_KEY;
const apiSecret=process.env.STEAM_API_SECRET;

if(!apiKey || !apiSecret) {
    throw new Error("STEAM_API_KEY and STEAM_API_SECRET must be set in the environment variables");
}

const streamClient=StreamChat.getInstance(apiKey,apiSecret);
 const upsertStreamUser=async(userData)=>{
    try{
     await streamClient.upsertUsers([userData]);
     return userData
    }
    catch(error){
         console.error("Error in upsertStreamUser:",error);

    }

}
module.exports={upsertStreamUser}

//Do it later
// export const generateStreamToken=async(userId)=>{};