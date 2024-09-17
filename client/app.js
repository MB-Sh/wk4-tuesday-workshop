console.log("Hello");

const messageForm= document.getElementById("message-form");

// function handleSubmitForMessageForm(event){
//     event.preventDefault();
//     console.log("Form submitted");

// }
//messageForm.addEventListener("submit",handleSubmitForMessageForm);

//we need to fetch API to send data to server
function handleSubmitMessageForm(event){
    event.preventDefault();
    
const formData = new FormData (messageForm);
const message = formData.get("message");

fetch("http://localhost:3000/messages",{
    method : "POST",
    headers :{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({message}),

});
}
messageForm.addEventListener("submit",handleSubmitMessageForm);
