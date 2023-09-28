//create the questions

const questions = [
    {
        question: "How many keys does a grand piano have?",
        optionA: "88",
        optionB: "96",
        optionC: "100",
        optionD: "112",
        correctOption: "optionA"
    },

    {
        question: "What country did the guitar first originate?",
        optionA: "Sweden",
        optionB: "Germany",
        optionC: "Italy",
        optionD: "Japan",
        correctOption: "optionB"
    },

    {
        question: "How many valves does the average trumpet have",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        optionD: "5",
        correctOption: "optionB"
    },

    {
        question: "How many fingers do you need to hold the drumstick properly?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        optionD: "5",
        correctOption: "optionD"
    },

    {
        question: "How many strings does a guitar have?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        optionD: "7",
        correctOption: "optionC"
    },

    {
        question: "How many drums and cymbals/hats are in a drum set?",
        optionA: "5 drums and 3 cymbals/hats",
        optionB: "4 drums and 4 cymbals/hats",
        optionC: "4 drums and 3 cymbals/hats",
        optionD: "4 drums and 2 cymbals/hats",
        correctOption: "optionA"
    },

    {
        question: "What are the two types of clef's",
        optionA: "Treble and Bass",
        optionB: "Blues and Bass",
        optionC: "Treble and Lowe",
        optionD: "Blues and Lowe",
        correctOption: "optionA"
    },

    {
        question: "What is the third note position of the trombone?",
        optionA: "Out half an inch",
        optionB: "Wrist just pass the bell",
        optionC: "Fingers by the bell",
        optionD: "Wrist by the bell",
        correctOption: "optionD"
    },

    {
        question: "What is the most common instrument type?",
        optionA: "Brass",
        optionB: "Percussion",
        optionC: "Stringed",
        optionD: "Woodwind",
        correctOption: "optionC"
    },

    {
        question: "What is the most common household insturment",
        optionA: "Piano",
        optionB: "Guitar",
        optionC: "Flute",
        optionD: "Drums",
        correctOption: "optionA"
    },

    {
        question: "What instrument can only play 7 notes?",
        optionA: "Trumpet",
        optionB: "Guitar",
        optionC: "Drums",
        optionD: "Trombone",
        correctOption: "optionD"
    },

    {
        question: "How many beats are in a time signature?",
        optionA: "8",
        optionB: "6",
        optionC: "5",
        optionD: "4",
        correctOption: "optionD"
    },


    {
        question: "What is the biggest drum in a drum set?",
        optionA: "Snare",
        optionB: "Bass",
        optionC: "Mid Tom",
        optionD: "Floor Tom",
        correctOption: "optionB"
    },

    {
        question: "Holding down only the middle valve makes what trumpet note?",
        optionA: "A",
        optionB: "B",
        optionC: "C",
        optionD: "D",
        correctOption: "optionB"
    },

    {
        question: "Who is Sebastion Erard?",
        optionA: "Early Piano Creator",
        optionB: "Early Guitar Creator",
        optionC: "Early Trumpet Creator",
        optionD: "Early Drum Creator",
        correctOption: "optionA"
    },

    {
        question: "How many notes are in the main lines of a Clef?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        optionD: "5",
        correctOption: "optionD"
    },

    {
        question: "What type of strings were used for the first classical guitars?",
        optionA: "Steel",
        optionB: "Brass",
        optionC: "Nylon",
        optionD: "Nickel",
        correctOption: "optionC"
    },

    {
        question: "Which one of these does a electrical guitar have?",
        optionA: "Tone Knob",
        optionB: "Volume Knob",
        optionC: "Pickup Switch",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "How many different sounds can you make on the drums using your feet?",
        optionA: "3",
        optionB: "2",
        optionC: "1",
        optionD: "0",
        correctOption: "optionB"
    },

    {
        question: "What is the symbol for a sharp note?",
        optionA: "*",
        optionB: "+",
        optionC: "^",
        optionD: "#",
        correctOption: "optionD"
    },

    {
        question: "What is the use of the piano pedal?",
        optionA: "Vary sounds on Piano",
        optionB: "Stop the sound",
        optionC: "Change notes into Sharp",
        optionD: "Slow the Tempo",
        correctOption: "optionA"
    },

    {
        question: "What do you have to do to make sound on a brass instrument?",
        optionA: "Blow air into mouthpiece",
        optionB: "Suck air out mouthpiece",
        optionC: "Buzz your lips",
        optionD: "Press the valves",
        correctOption: "optionC"
    },

    {
        question: "Why does the acoustic guitar have a hole in it?",
        optionA: "To make it lighter",
        optionB: "To tune the guitar",
        optionC: "Sound Projection",
        optionD: "For package uses",
        correctOption: "optionC"
    },

    {
        question: "Why are brass intruments curved?",
        optionA: "Easier to hold and use",
        optionB: "Produce different sounds",
        optionC: "Valve locations",
        optionD: "Temperature variation",
        correctOption: "optionA"
    },

    {
        question: "Which one of these isn't a brass intrument?",
        optionA: "Trumpet",
        optionB: "Trombone",
        optionC: "Saxophone",
        optionD: "French Horn",
        correctOption: "optionC"
    }

]

//emoty array with questions
let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question


//displaying information in the html asnwer contrainers
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}

//make sure that the questions that we input is == to the options the the person chose as well as getting the persons input

function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {

            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //check if the answer submitted is the right asnwer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}