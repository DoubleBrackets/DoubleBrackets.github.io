var message_list = document.getElementById("message_list");
var input_field = document.getElementById("input_field");
var send_button = document.getElementById("send_button");


send_button.addEventListener("click",function(){
    SendMessage();
});

document.addEventListener("keydown",function(event){
    if(event.key.toLowerCase()=="enter")
    {
        SendMessage();
    }
})

function SendMessage()
{
    var cVal = input_field.value;
    if(cVal=="")
        return;
    var new_message = document.createElement("li");
    message_list.appendChild(new_message);
    new_message.innerHTML = cVal;
    input_field.value = "";
}
function SendMessageManual(val)
{
    var new_message = document.createElement("li");
    message_list.appendChild(new_message);
    new_message.innerHTML = val;
}

var count = 0;

// mainLoop();
// function mainLoop()
// {
//     count++;
//     Send_Message(count);
//     setTimeout(mainLoop,1000);
// }