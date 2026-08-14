# Guess My Number!

A simple and interactive **number guessing game** built using **HTML, CSS, and JavaScript**.

## Features

- Random number between **1 and 20**
- Score starts at **20**
- Score decreases after every incorrect guess
- High-score tracking
- Input validation
- "Too high" and "Too low" feedback
- Win and lose states
- **Again!** button to restart the game
- Retro-style user interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts

## Project Structure

```text
guess-my-number/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

A random number is generated when the game starts:

```javascript
let secretNumber = Math.trunc(Math.random() * 20) + 1;
```

The player enters a number and clicks **Check!**.

- If the guess is higher than the secret number, the game displays **"Number is too high"**.
- If the guess is lower, it displays **"Number is too low"**.
- If the guess is correct, the player wins.
- Every incorrect valid guess decreases the score by **1**.
- When the score reaches **0**, the player loses and the secret number is revealed.

## Input Validation

The game checks whether:

- The input field is empty.
- The entered number is between **1 and 20**.
- The game is still active.

## Restarting the Game

Clicking the **Again!** button:

1. Resets the score to 20.
2. Generates a new secret number.
3. Clears the input field.
4. Resets the message.
5. Hides the secret number.
6. Restores the default background.
7. Starts a new round.

## Key JavaScript Concepts

This project demonstrates:

- DOM manipulation
- `querySelector()`
- `addEventListener()`
- Conditional statements
- Variables and state management
- `Math.random()`
- `Math.trunc()`
- Type conversion with `Number()`
- `textContent`
- Input validation
- Dynamic CSS manipulation

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Open the project

```bash
cd guess-my-number
```

### 3. Run the game

Open `index.html` in your browser.

You can also use **Live Server** in VS Code.

## Future Improvements

- Add difficulty levels
- Add sound effects
- Add animations
- Store high scores using `localStorage`
- Improve mobile responsiveness
- Add a leaderboard

## Author

**Anant Rajput**
