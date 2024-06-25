const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+234 901 357 8522";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_59_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg4LFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc4LFxuICAgICAgICA5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg2LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDkxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA3LFxuICAgICAgICA3MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMwLFxuICAgICAgICA4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExLFxuICAgICAgICA3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK1FmZnp4citUMThlbm1WSHpiLy80aUZCT3ErM2FWekdXODg1cFNWVW5DYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDEzNTc4NTIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMUQ1OTQ2N0ZENkE4MDI2NzEwRkFDNEI5Q0ZFNzk4NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkyNzM1NDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDEzNTc4NTIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2ODc2QjY4ODhBRENBMTFCODU4MzBEOTYxNjEyMzQyNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkyNzM1NDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYzBaeWs2Yk9RaFNUTi1HbGZMVDg4Z1wiLFxuICBcInBob25lSWRcIjogXCJmMTQ1OGM0Zi0zMjdkLTQyYTEtYWJjOC0xYjZkODA1ZGFjNTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgODgsXG4gICAgICAxNjksXG4gICAgICAxOTcsXG4gICAgICAxNTYsXG4gICAgICAxLFxuICAgICAgNDEsXG4gICAgICA4NSxcbiAgICAgIDk3LFxuICAgICAgNjAsXG4gICAgICAyOCxcbiAgICAgIDU3LFxuICAgICAgMjM5LFxuICAgICAgMTk0LFxuICAgICAgMTMyLFxuICAgICAgMTYyLFxuICAgICAgMTk1LFxuICAgICAgMTY2LFxuICAgICAgMTk5LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAyMjgsXG4gICAgICAyMDYsXG4gICAgICAxMzIsXG4gICAgICAyMjMsXG4gICAgICAxNDUsXG4gICAgICA3NCxcbiAgICAgIDU0LFxuICAgICAgODYsXG4gICAgICAxODgsXG4gICAgICA4MixcbiAgICAgIDE2MyxcbiAgICAgIDE3NixcbiAgICAgIDExMCxcbiAgICAgIDE5MixcbiAgICAgIDI0MCxcbiAgICAgIDIzMyxcbiAgICAgIDE2MyxcbiAgICAgIDI2LFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkI2NTZHUFBBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEzNTc4NTIyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHb2xkbWFza1wiLFxuICAgIFwibGlkXCI6IFwiMTcxMzMxMTEwOTU0OTY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbXAwWndHRU1LUTZMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZNYmxvUk1Mc3hVV2RVaDhtVjkrNyttVHRYdlJ4RXBxUzEwZFV3K0hEM3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicEliRzFsdUZWWlozdngzakIvRG5TVFpMbHBmSWtRSTRzNFVFMlVHRGU3bVd3UmwwUkQ5dllqWjAwUG5QT3dXeU5SZ2dQRzJtSFhBV3NNa29Rd3dUQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWlNrR21YeFJUSytrY0pab0NCbndXQnkyTWhBaVZHZGJpRXhWeTByUEhTOWZtU2l3Vk1MaGNpRXEvNm1wOVMvdWFwcDJTckliNzIxb2VTZ2VHb3BUaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMzU3ODUyMjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyNzM1NDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFT1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVPUS5qc29uIjogIntcImtleURhdGFcIjpcInlhb3ZFZHUwU25TY0RuMFJIVkFJNkxFTEpZT296dEFHdklwemIvaklxMmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY3MDY2NTQ0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MjczNTQ3NTQ4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
