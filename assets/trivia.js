// Select questions from array
// Put questions in area and put answer in answers area
// Delete object from array
// Set Timer 

var Spiderman = [
    {
        question: "When was Spiderman created?",
        a: "1912",
        b: "1995",
        c: "2019 ",
        d: "1962", //answer
        correctID: "answerD",
        correct: "1962 ",
 
    },
    {
        question: "Who was the creator of Spiderman?",
        a: "Stan Lee ",
        b: "Steve Ditko" ,
        c: "John Romita Sr ",
        d: "A & B ", // answer
        correctID: "answerD",
        correct: "A & B ",
 
    },
    {
        question: "What is the first appearance comic book of Spiderman?",
        a: "Amazing Spiderman 1",
        b: "Incredible Hulk 1",
        c: "Amazing Fantasy 15", // answer
        d: "Tales of Suspense 39",
        correctID: "answerC",
        correct: "Amazing Fantasy 15",
 
    },
    {
        question: "How does Spiderman get his powers?",
        a: "He meets a spider and he gets his powers magically",
        b: "He accidentally ate a spider and got superpowers",
        c: "A scientist injects him with a superpower formula",
        d: "He is on a field trip to a science lab one day, and is bitten by a radioactive spider", // answer
        correctID: "answerD",
        correct: "He is on a field trip to a science lab one day, and is bitten by a radioactive spider",
 
    },
    {
        question: "What are Spider-man's powers?",
        a: "Super strength",
        b: "walk on walls",
        c: "Agility",
        d: "All of the above", // answer
        correctID: "answerD",
        correct: "All of the above",
 
    },
    {
        question: "What is Spider-man's real name?",
        a: "Peter Parker", // answer
        b: "Bruce Wayne",
        c: "Bruce Banner",
        d: "Clark Kent",
        correctID: "answerA",
        correct: "Peter Parker",
 
    },
    {
        question: "Who is Spiderman's love interest?",
        a: "Mary Jane-Watson",
        b: "Gwen Stacy",
        c: "Betty Brandt", // answer
        d: "Abigail Rosedale",
        correctID: "answerC",
        correct: "Betty Brandt",
 
    },
    {
        question: "Who does Spider-man live with at home? ",
        a: "His parents",
        b: "His Aunt and Uncle", // answer
        c: "He lives by himself",
        d: "He lives with his roomate",
        correctID: "answerB",
        correct: "His Aunt and Uncle",
 
    },
    {
        question: "How old is Spider-man when he becomes a superhero?",
        a: "19 years-old",
        b: "17 years-old",
        c: "15 years-old", // answer
        d: "13 years-old",
        correctID: "answerC",
        correct: "15 years-old",
 
    },
    {
        question: "Who is Spider-man's greatest enemy? ",
        a: "Venom ",
        b: "The Lizard",
        c: "The Green Goblin", // answer
        d: "Dr. Octopus",
        correctID: "answerC",
        correct: "The Green Goblin",
 
    },
    {
        question: "How much is the 1st apperance of Spiderman's comic book graded cgc 9.6 worth",
        a: "1.8 million",
        b: "1.1 million", // answer
        c: "500,000",
        d: "250,000",
        correctID: "answerB",
        correct: "1.1 million"
 
 
    }
 
 ]
 
 var answerADiv = $("<div>");
 answerADiv.appendTo (".answers");
 answerADiv.addClass("comics");
 answerADiv.text("1912")
 
 var answerBDiv = $("<div>");
 answerBDiv.appendTo (".answers");
 answerBDiv.addClass("comics");
 answerBDiv.text(Spiderman[0].b)
 
 var answerCDiv = $("<div>");
 answerCDiv.appendTo (".answers");
 answerCDiv.addClass("comics");
 answerCDiv.text(Spiderman[0].c)
 
 var answerDDiv = $("<div>");
 answerDDiv.appendTo (".answers");
 answerDDiv.addClass("comics");
 answerDDiv.text(Spiderman[0].d)
 
 var questionDiv = $("<div>");
 questionDiv.appendTo(".currentQuestion");
 questionDiv.text(Spiderman[0].question)
 
 
 
  //put each part into the correct Div, which includes every answer and single question.  And then set a timer, so the person has a specific amount of time to answer the question.  Then when the person clicks on the answer no matter right or wrong, you need to create another timer and it generates another question.
 
  const randomQuestions = function() {
  Math.floor(Math.random * Spiderman.length)
  let random = Math.floor(Math.random * 11);
  let item = Spiderman[random];
  let question = item.question;
  let a = item.a;
  let b = item.b;
  let c = item.c;
  let d = item.d;
 
 
  }
 
 console.log(randomQuestions());
 
 
 
 /* MY CODE BEGINS HERE */
 
 // Here are your answer variables (it doesn't really matter that they're undefined; that's a placeholder)
 
 let a = undefined;
 let b = undefined;
 let c = undefined;
 let d = undefined;
 let correct = undefined;
 
 // This function selects an object from your array and puts them on the page
 const setQuestionAndAppend = (array) => {
     // We create a random number
     let randomNum = Math.floor(Math.random * array.length);
     // We use that random number to select an index from the array
     let item = array[randomNum];
     // We select the question from the object and store it as a variable
     let question = item.question;
     // We select all of the answers and store them as variables
     a = item.a;
     b = item.b;
     c = item.c;
     d = item.d;
     correct = item.correct;
     // Now that you've captured the information from your object in variables, 
     // append them to empty elements on the page:
     //
     //
     //
 }
 
 // Now you'll add event listeners to the elements on the page. These will call functions that will 
 // have the logic for determining whether or not the user's answer is correct. What follows is pseudocode.
 
 $("anElementIsSelectedHere").on("click", function() {
     // When this element is clicked, call a function (with parameters) that will tell you 
     // whether the answer was right or wrong. Hint: you will need to use the variables
     // declared at the beginning.
 });
 
 const rightOrWrong = (someParameter, someOtherParameter) => {
     if (answerThatWasChosen === correctAnswer) {
         // Execute code that tell you that you selected the correct answer.
     } else {
         // Do something else
     }
 }
 
 // That's the basic functionality of the page. From here, you'll need to figure out how to set up
 // the next question and set up the timer. Good luck!
 
 
 
 

