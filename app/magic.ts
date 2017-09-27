const message = 'Hello';

function saySomething(message: string = "This is the default message"){
  console.log(message);
}

saySomething(message);
