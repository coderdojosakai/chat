var milkcocoa = new MilkCocoa('postilb7c65u.mlkcca.com');

/* your-app-id にアプリ作成時に発行される"io-"から始まるapp-idを記入します */
var chatDataStore = milkcocoa.dataStore("chat");
var textArea, board;
window.onload = function(){
  userName = document.getElementById("usr");
  textArea = document.getElementById("msg");
  board = document.getElementById("board");
}
 
function clickEvent(){
  var text = textArea.value;
  var user = userName.value;
  sendText(user,text);
}
 
function sendText(user,text){
  chatDataStore.push({name: user, message : text},function(data){
    console.log("送信完了!");
    textArea.value = "";
  });
}
 
chatDataStore.on("push",function(data){
  addText(data.value.name, data.value.message);
});
 
function addText(user,text){
  var msgDom = document.createElement("li");
  msgDom.innerHTML = user + ":" + text;
  board.insertBefore(msgDom, board.firstChild);
}

