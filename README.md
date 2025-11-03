# Basic-Calculator — A simple web-based calculator

## Description
Create a simple web-based calculator that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. This project focuses on interactive UI, event handling, and state management.

## Tech Stack

- Angular

## Requirements

- Perform basic arithmetic operations (add, subtract, multiply, divide)
- Update the display dynamically when buttons are clicked
- Handle edge cases such as division by zero
- Provide a clear and intuitive layout for buttons and display

## Installation

1. Clone the repository:
   bash
   git clone https://github.com/YourUsername/Bitasmbl-Basic-Calculator.git
   
2. Navigate to the project directory:
   bash
   cd Bitasmbl-Basic-Calculator
   
3. Install dependencies:
   bash
   npm install
   
4. Start the development server:
   bash
   ng serve
   
5. Open your browser and visit `http://localhost:4200` to view the calculator.

## Usage

- Click on numeric buttons (0–9) to enter numbers.
- Click on operator buttons (+, -, ×, ÷) to select an operation.
- The display updates dynamically with each button click.
- Press `=` to compute the result.
- Use the `C` button to clear the current input.
- If a division by zero is attempted, an error message will be shown.

## Implementation Steps

1. Initialize a new Angular project using the Angular CLI:
   bash
   ng new basic-calculator --routing=false --style=css
   cd basic-calculator
   
2. Generate a calculator component:
   bash
   ng generate component calculator
   
3. Define the calculator template (`calculator.component.html`) with a display area and buttons for digits, operators, clear, and equals.
4. In the component class (`calculator.component.ts`), declare state variables to track the current input, stored value, selected operator, and result.
5. Implement event handler methods for button clicks to:
   - Append digits to the current input.
   - Set or change the operator.
   - Perform calculations when `=` is clicked.
   - Clear inputs on `C`.
6. Add logic in the component to handle edge cases, such as division by zero, and display an appropriate error message.
7. Bind component state to the template to update the display in real time.
8. Apply CSS styling (`calculator.component.css`) to create a clean and intuitive layout for the display and buttons, ensuring responsive design for different viewports.
9. Serve and test the application locally, verifying all arithmetic operations, input handling, and error scenarios.