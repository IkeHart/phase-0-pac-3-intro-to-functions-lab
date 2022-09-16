function shout(string1) {
    return string1.toUpperCase();
}
function whisper(boo) {
    return boo.toLowerCase();
}
function logShout() {
    console.log("HELLO");
}
function logWhisper() {
    console.log("hello");
}

//console.log(string === string.toUpperCase());
/*function sayHiToHeadphonedRoommate() {
    if (sayHiToHeadphonedRoommate() === sayHiToHeadphonedRoommate().toUpperCase()){
        console.log("I can't hear you!");
    }
        else if (sayHiToHeadphonedRoommate() === sayHiToHeadphonedRoommate().toLowerCase()){
            console.log("YES INDEED!");
        };
          //  else {
            //    console.log("I would love to!")
            //};
        }
        sayHiToHeadphonedRoommate(); 
        "hello", "HELLO", "Let's have dinner together!"
        (String === "Let's have dinner together!")
        */
function sayHiToHeadphonedRoommate(String){
 if ( String === "hello"){
    return "I can't hear you!"
    }
    else if (String === "HELLO") {
        return  "YES INDEED!"
    }
    else {
        return "I would love to!"
    };
};