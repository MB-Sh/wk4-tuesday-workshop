import express from "express";

import cors from "cors";

const app =express();

app.use(cors());

app.use (express.json());

// app.listen(3000,function(){
//     console.log("Server is running and ready");
// });

app.get("/", function(request,response){
    response.json({message: "You are looking at the root route"});

});

app.post("/messages",function(request,response){
    const bodyData =request.body;

    console.log("request.body",request.body);

    response.json({
        status: "Message recieved!"});
        // message: "Hello Mary",
        // location: `${bodyData.location}`,
    });

    app.listen(3000,function(){
        console.log("Server is running and ready");
    });

