let message = prompt("Enter your message")
let displayed_message = (message === "Employee") ?
    "Hello" :
    (message === "Director") ?
        "Greetings" :
        (message === "") ?
            "No login" : ""
alert(displayed_message)