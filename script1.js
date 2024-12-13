const subjects = {
 math: [
 {
 question: "What command is used to initialize a new Git repository?",
 options: ["git start", "git create", "git init", "git new"],
 correct: "git init"
 },
 {
 question: "Which command is used to check the status of the Git repository?",
 options: ["git status", "git check", "git info", "git repo-status"],
 correct: "git status"
 },
 {
 question: "What does the command 'git commit -m' do?",
 options: ["Adds a new file to the repository", "Commits changes with a message",
"Creates a new branch", "Pushes changes to the remote repository"],
 correct: "Commits changes with a message"
 },
 {
 question: "Which Git command is used to stage changes for commit?",
 options: ["git add", "git commit", "git push", "git stage"],
 correct: "git add"
 },
 {
 question: "What does 'git clone' do?",
 options: ["Creates a new repository", "Copies an existing repository", "Commits
changes to the repository", "Deletes a repository"],
 correct: "Copies an existing repository"
 },
 {
 question: "What is the purpose of 'git pull'?",
 options: ["Fetches and merges changes from the remote repository", "Pushes local
changes to the remote repository", "Clones a repository from the remote", "Creates a new
branch in the repository"],
 correct: "Fetches and merges changes from the remote repository"
 },
 {
 question: "What is the purpose of 'git push'?",
 options: ["Uploads local changes to the remote repository", "Fetches changes from the
remote repository", "Creates a new branch", "Commits changes locally"],
 correct: "Uploads local changes to the remote repository"
 },
 {
 question: "What does 'git merge' do?",
 options: ["Merges two branches into one", "Deletes a branch", "Creates a new
branch", "Pushes changes to the remote repository"],
 correct: "Merges two branches into one"
 },
 {
 question: "What command is used to check the commit history in Git?",
 options: ["git history", "git log", "git commits", "git show"],
 correct: "git log"
 },
 {
 question: "Which command is used to create a new branch in Git?",
 options: ["git create branch", "git new branch", "git branch", "git make branch"],
 correct: "git branch"
 }
 ],
 science: [
 {
 question: "What is the time complexity of accessing an element in an array by
index?",
 options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
 correct: "O(1)"
 },
 {
 question: "Which of the following data structures is used in breadth-first search
(BFS)?",
 options: ["Stack", "Queue", "Linked List", "Tree"],
 correct: "Queue"
 },
 {
 question: "What is the space complexity of the recursive solution for calculating
Fibonacci numbers?",
 options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
 correct: "O(n)"
 },
 {
 question: "What is the worst-case time complexity of quicksort?",
 options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
 correct: "O(n^2)"
 },
 {
 question: "In a binary search tree (BST), which traversal will give nodes in sorted
order?",
 options: ["In-order traversal", "Pre-order traversal", "Post-order traversal", "Levelorder traversal"],
 correct: "In-order traversal"
 },
 {
 question: "Which of the following sorting algorithms is stable?",
 options: ["Quick sort", "Merge sort", "Heap sort", "Selection sort"],
 correct: "Merge sort"
 },
 {
 question: "Which data structure is used to implement a depth-first search (DFS)?",
 options: ["Queue", "Stack", "Linked List", "Array"],
 correct: "Stack"
 },
 {
 question: "Which of the following is the best time complexity for a binary search on a
sorted array?",
 options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
 correct: "O(log n)"
 },
 {
 question: "What is the space complexity of a binary tree?",
 options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
 correct: "O(n)"
 },
 {
 question: "What is the worst-case time complexity of bubble sort?",
 options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
 correct: "O(n^2)"
 }
 ],
 history: [
 {
 question: "Which of the following is a primitive data type in Java?",
 options: ["String", "int", "ArrayList", "System"],
 correct: "int"
 },
 {
 question: "What is the default value of a boolean variable in Java?",
 options: ["true", "false", "null", "undefined"],
 correct: "false"
 },
 {
 question: "Which keyword is used to prevent a class from being subclassed in Java?",
 options: ["static", "final", "abstract", "private"],
 correct: "final"
 },
 {
 question: "Which of the following is the correct syntax for a 'for' loop in Java?",
 options: ["for(int i = 0; i < 10; i++)", "for i = 0; i < 10; i++", "for(int i = 0, i < 10;
i++)", "loop for(int i = 0; i < 10; i++)"],
 correct: "for(int i = 0; i < 10; i++)"
 },
 {
 question: "Which of the following statements is true about an abstract class in Java?",
 options: ["An abstract class can be instantiated", "An abstract class cannot have any
methods", "An abstract class can have both abstract and non-abstract methods", "An abstract
class can only have abstract methods"],
 correct: "An abstract class can have both abstract and non-abstract methods"
 },
 {
 question: "Which method is used to start a thread in Java?",
 options: ["start()", "run()", "execute()", "init()"],
 correct: "start()"
 },
 {
 question: "Which collection class is part of Java’s collection framework and allows
duplicates?",
 options: ["HashSet", "TreeSet", "ArrayList", "HashMap"],
 correct: "ArrayList"
 },
 {
 question: "What does the 'this' keyword refer to in a method or constructor?",
 options: ["The method or constructor itself", "The instance of the current class", "The
parent class", "A static variable"],
 correct: "The instance of the current class"
 },
 {
 question: "Which method is used to compare two strings lexicographically in Java?",
 options: ["compareTo()", "equals()", "compare()", "isEqual()"],
 correct: "compareTo()"
 },
 {
 question: "Which of the following is the correct way to declare a 2D array in Java?",
 options: ["int arr[][];", "int[] arr[];", "int arr[2][2];", "int[] arr[2][2];"],
 correct: "int arr[][];"
 }
 ]
};
let selectedSubject = '';
let userAnswers = [];
function loadQuiz() {
 selectedSubject = document.getElementById("subject").value;
 const quizSection = document.getElementById("quiz-section");
 const quizForm = document.getElementById("quiz-form");
 const resultSection = document.getElementById("result");
 if (selectedSubject === "") {
 quizSection.style.display = "none";
 resultSection.style.display = "none";
 return;
 }
 quizSection.style.display = "block";
 resultSection.style.display = "none";
 // Clear previous questions
 quizForm.innerHTML = '';
 // Load new quiz questions
 const questions = subjects[selectedSubject];
 questions.forEach((q, index) => {
 const questionHTML = `
 <fieldset>
 <legend>${q.question}</legend>
 ${q.options.map((option, i) => `
 <label>
 <input type="radio" name="question${index}" value="${option}">
 ${option}
 </label><br>
 `).join('')}
 </fieldset>
 `;
 quizForm.innerHTML += questionHTML;
 });
}
function submitQuiz(event) {
 event.preventDefault(); // Prevent form from refreshing the page
 const form = document.getElementById("quiz-form");
 const resultSection = document.getElementById("result");
 const scoreElement = document.getElementById("score");
 const messageElement = document.getElementById("message");
 const incorrectAnswersElement = document.getElementById("incorrect-answers");
 // Collect user answers
 userAnswers = [];
 let score = 0;
 let totalQuestions = 0;
 let incorrectAnswers = [];
 const questions = subjects[selectedSubject];
 questions.forEach((q, index) => {
 const selectedOption =
form.querySelector(`input[name="question${index}"]:checked`);
 const userAnswer = selectedOption ? selectedOption.value : null;
 userAnswers.push(userAnswer);
 if (userAnswer === q.correct) {
 score++;
 } else {
 incorrectAnswers.push({ question: q.question, correctAnswer: q.correct, userAnswer:
userAnswer });
 }
 totalQuestions++;
 });
 // Calculate score
 const percentage = (score / totalQuestions) * 100;
 scoreElement.textContent = `Your Score: ${percentage}%`;
 // Provide feedback based on the score
 if (percentage >= 60) {
 messageElement.textContent = "Congratulations! You passed the test!";
 } else {
 messageElement.textContent = "Sorry, you did not pass the test.";
 }
 // Show incorrect answers with the correct answers
 incorrectAnswersElement.innerHTML = '';
 incorrectAnswers.forEach(answer => {
 const li = document.createElement("li");
 li.textContent = `${answer.question} Your answer: ${answer.userAnswer || 'None'},
Correct answer: ${answer.correctAnswer}`;
 incorrectAnswersElement.appendChild(li);
 });
 resultSection.style.display = "block";
}
// Bind event listener to submit button
document.getElementById("submit-btn").addEventListener("click", submitQuiz);
