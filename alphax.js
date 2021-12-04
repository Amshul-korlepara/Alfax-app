var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function speechtotext(){
document.getElementById("textbox").innerHTML="";
recognition.start();

}
recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    search =document.getElementById("textbox").value;
a=document.getElementById("link");
a.href="https:google.com/search?q="+search;
a.click()
};