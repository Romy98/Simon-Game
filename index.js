
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

$("body").on("keydown", function(){
    let count = 1;
    $("h1").text("Level 1")
    let randomNum = Math.floor(Math.random() * 4) + 1;
    let answerArray = []
    answerArray = answerArray.push(randomNum)
        
    $("#" + randomNum).fadeOut("fast", "linear", function(){
        $("#" + randomNum).fadeIn();
        let buttonclasses = $("#" + randomNum).attr("class");
        let classesArray = buttonclasses.split(' ');
        let buttonclass = classesArray[1]
        let buttonSound = new Audio("/sounds/" + buttonclass + ".mp3");
        buttonSound.play();
    })
})

$(".btn").on("click", function(){
    let randomButton = parseInt($(this).attr("id"));
    let guessedArray = []
    guessedArray = randomArray.push(randomButton);
    let answerArray = []
    answerArray = answerArray.push(randomNum);

    while (answerArray == guessedArray){
        $("h1").text("Level " + count);


        count ++;
    }
})

