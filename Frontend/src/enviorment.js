let IS_PROD=true
const server=IS_PROD ?
    "https://apna-video-call-3x3k.onrender.com" :
    "http://localhost:8000"
    

export default server;