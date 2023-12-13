# Exercises

## Exercise 1

1. Use Rest Client to create/post a new todo to your local placeholder api that you already have running.
   http://localhost:3000/todos

2. Verify that your new todo was added.

3. Repeat step 1 using Postman.

4. Choose your favorite tool (Postman or Rest Client) and create a new course.
   http://localhost:3000/courses

   ## Exercise 2

   Do a get, post, put and delete to at least 3 different resources available in the API:
   http://localhost:3000/

## Exercise 3: Users application

### List Users

1. Create a page to list users in a table `index.html`.

### Add User

1. Create a page to add or create a new user `add.html`.
   - The page should contain an HTML form
   - The form should displays all the properties of a user as form inputs and/or selects with corresponding labels
   - The page should also include a `Save` button to save the data entered into the form
     > Hint: the `button` should have an explicit `type="button"` attribute so the form doesn't submit the data to the web server. We will handle the data in the browser using JavaScript
1. In the `index.html` page above the table create a link with the text **Add User** to the `add.html` page.
1. Verify the **Add User** link works.
1. Add Javascript code to the `add.html` page. The code:
   - Should get the needed HTML elements into variables
   - Should include a function `add` to call when the add button is clicked
   - Should wire the `add` function to the click event of the button
   - The `add` function should:
     - gather the entered form values into a `user` object
     - use the `fetch` function to `POST` the data entered in the form for the user to the placeholder API to save a new record
     - When the `POST` completes then redirect to the `index.html` page
1. Verify the `add` button saves a new user and you can see it in the table on `index.html`

### Delete User

1.

### Edit User
