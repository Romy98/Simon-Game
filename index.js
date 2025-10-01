
$(".btn").on("click", function(){
    const initBackgroundColor = $(this).css("background-color");
    this.style.backgroundColor = "red";
    setTimeout(() =>{
       $(this).css("background-color", initBackgroundColor);
    }, 200);
    $("body").css("background-color", "red");
    setTimeout(() =>{
        $("body").css("background-color", "#011F3F") 
    }, 200)

    const wrongInputAudio = new Audio("/sounds/wrong.mp3");
    wrongInputAudio.play();

    let allButtonClasses = $(this).attr("class");
    let classesArray = allButtonClasses.split(" ");
    let buttonClass = classesArray[1];
    let buttonAudio = new Audio("/sounds/" + buttonClass + ".mp3");
    buttonAudio.play();      
});


let randomNum = Math.floor(Math.random() * 4) + 1;
let count = 1;

//$("button").on("click", function(event){
   // const randomButton = parseInt(event.target.class);
    //if (randomNum != randomButton){
      //  $("body").css("background-color", "red");
      //  setTimeout(function() {
    //$("body").css("background-color", "#011F3F") 
//}, 200)

   // }
//})
 