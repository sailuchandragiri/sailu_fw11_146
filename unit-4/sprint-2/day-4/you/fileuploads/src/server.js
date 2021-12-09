const app = require("./index");
const connect = require("./configs/db");

app.listen(2345, async function() {
    await connect();
    console.log("listening to the app 2345");
})