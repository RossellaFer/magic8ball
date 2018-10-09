# magic8ball - Control Flow project

This project was made to practice my JavaScript skills. It is based on one of the Codecademy Intensive projects, which uses a conditional statement to determine the answer to the user's question. 

The Codecademy project is only focused on playing the game in the terminal, however I wanted to visually represent the game in a web application. 

I started the project by creating a responsive layout with Flexbox. The Magic Eight Ball is built in CSS using the before pseudo element. I chose to use the pseudo element as this can increase the complexity of the eightball element by adding an extra ring within it, while still remaining its child and therefore being connected to the element.

### JavaScript ###

I started the project using the initial code from the codecademy exercise. The variables username, askedQuestions, randomNumber and eightball were defined at the beginning, with an empty string being assigned to the askedQuestion and the eightBall variables, while the random number being generated using Math.random.

```let randomNumber = Math.floor(Math.random() * 8); ```

We multiplied Math.random by 8 as there were 8 possible outcomes from the eightball. 

Then I defined a switch statement, which evaluated the randomNumber and assigned a different string to the eightBall variable. Finally, in the exercise, the value of eightBall was console.logged (is this a verb?!).

I now wanted to connect the elements on my page in order to display the answers that the Magic Eight Ball gave. 

