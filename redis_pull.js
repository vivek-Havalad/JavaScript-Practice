const redis = require("redis");
let redisClient = redis.createClient({
    host: 'localhost',
    port: 6379
});

let isRedisConnected = false;
redisClient.on("error", (err) => {
   console.log("error", err)
});
redisClient.on("connect", (err) => {
    console.log("connect");
});
redisClient.on("ready", (err) => {
    isRedisConnected = true;
    console.log("ready");
});

const channelName = 'publistQueue';

redisClient.subscribe(channelName);
redisClient.on("message", (channel, message) => {
    console.log('Recieved from ' + channel + ' with message ' + message);
});

setInterval(() => {
    console.log('Redis listining');
}, 5000);
