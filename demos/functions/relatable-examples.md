1. **Greeting Function:**
   - Function:
     ```javascript
     function greet(name) {
       return `Hello, ${name}!`;
     }
     ```
   - Calling the Function:
     ```javascript
     const greetingMessage = greet("John");
     console.log(greetingMessage); // Output: Hello, John!
     ```

2. **Age Calculator:**
   - Function:
     ```javascript
     function calculateAge(birthYear) {
       const currentYear = new Date().getFullYear();
       return currentYear - birthYear;
     }
     ```
   - Calling the Function:
     ```javascript
     const age = calculateAge(1990);
     console.log(age); // Output: (current year - 1990)
     ```

3. **Area Calculator:**
   - Function:
     ```javascript
     function calculateArea(length, width) {
       return length * width;
     }
     ```
   - Calling the Function:
     ```javascript
     const rectangleArea = calculateArea(5, 10);
     console.log(rectangleArea); // Output: 50
     ```

4. **Temperature Converter:**
   - Function:
     ```javascript
     function celsiusToFahrenheit(celsius) {
       return (celsius * 9/5) + 32;
     }
     ```
   - Calling the Function:
     ```javascript
     const fahrenheitTemp = celsiusToFahrenheit(25);
     console.log(fahrenheitTemp); // Output: Converted temperature in Fahrenheit
     ```

5. **Shopping Cart Total:**
   - Function:
     ```javascript
     function calculateTotal(prices) {
       return prices.reduce((total, price) => total + price, 0);
     }
     ```
   - Calling the Function:
     ```javascript
     const cartPrices = [20, 30, 15, 25];
     const totalCost = calculateTotal(cartPrices);
     console.log(totalCost); // Output: Sum of prices in the shopping cart
     ```

6. **Character Counter:**
   - Function:
     ```javascript
     function countCharacters(text) {
       return text.length;
     }
     ```
   - Calling the Function:
     ```javascript
     const textLength = countCharacters("Hello, World!");
     console.log(textLength); // Output: 13
     ```

7. **Power Function:**
   - Function:
     ```javascript
     function power(base, exponent) {
       return Math.pow(base, exponent);
     }
     ```
   - Calling the Function:
     ```javascript
     const result = power(2, 3);
     console.log(result); // Output: 8
     ```

8. **BMI Calculator:**
   - Function:
     ```javascript
     function calculateBMI(weight, height) {
       const bmi = weight / (height ** 2);
       return bmi.toFixed(2); // Limit to two decimal places
     }
     ```
   - Calling the Function:
     ```javascript
     const bmiResult = calculateBMI(70, 1.75);
     console.log(bmiResult); // Output: Calculated BMI
     ```
