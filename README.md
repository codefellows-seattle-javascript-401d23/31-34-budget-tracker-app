# Lab 33: Budget Tracker - Redux Middleware

# Overview

This is a lab assignment from Code Fellows 401 - Javascript. The objective was to build a simple Budget Tracker App with React components and Redux for state management. The completed project contains a route to dashboard page where a user can enter a category budget item by name and expense type and price.  Onclick the category item is saved to the state of the application and renders into a list of category items below.  Once a category is added to the state of the application, a user can delete the item removing it from the state of the application.  A user can also add an expense type and price as part of a category with the functionality to edit and/or delete that expense.    

## Getting Started

In order to get started with this code please fork and clone the repo. You will need a number of dependencies in order to run this project. See the package.json for a list of dependencies. This project runs via a webpack build. There is a script that will give you a development version of the project, npm run watch. This script enables webpack-dev-server which hot reloads the build based on changes to the code and will open a local version of the project in your browser.

## Architecture

This project is built using Javascript ES6 with transpilation using Babel. The code is bundled via webpack. 
- Main.js contains an entry point to the React Application and contains the store which holds the application state.
- Reducer/category.js:  This module contains the the reducer function that takes in the previous state and returns a new application state.  It can create a category, update a category or destroy a category.
- Action/category.js:  This module contains the action functions which are part of the reducer.  It defines the create, update and destroy reducer functions.
- App.js: this component that contains a route to dashboard and is a static component. 
- Dashboard.js:  This module connects to Redux via a connect function and exports the mapStateToProps and mapDisPatchToProps functions.  It also displays the rendered category form and categories.
- Category-form.js:  This component contains a class CategoryForm which contains a form that allow's users to input a category name and budget amount which is rendered on the dashboard component.  It also contains a handleSubmit and handleChange function which allows input from the form buttons to change the state of the application via the reducer functions.
- Category/category.js:  This component contains the category item which can be created via the categoryForm.
- Expense-form.js:  This component contains a class expenseForm which contains a form that allow's users to enter an expense and price that will be associated with a category.  
- Expense.js:  This component contains the expense item which is created via the expense-form.js component.

## Redux Middleware

- redux-reporter.js:  
This module sets up redux middleware console message that reports out in the following cases:
    - ACTION:  When an action is dispactched by a component a console message will log that includes the action type and payload.
    - STATE: When the redux store changes state, a console message will log  detailing the updated state.
    - ERROR: IN the event that there is an error in the redux middleware chain, an error message will be logged to the console.
    
- redux-session.js:  
This module sets up a middleware function call that iterates over the redux store object and calls a next callback when an action is dispatched to change the state of the redux store.  If does this by currying multiple callbacks and storing the result of an action into a result binding and current state of the store into a state binding.
 
## Change Log

- 05-31-2018 8:00pm - 9:00pm - built test suite and researched testing with enzyme
- 05-31-2018 9:00pm - 10:00pm - Added redux-reporter and redux-session modules  
- 05-31-2018 10:00pm - 12:00pm - worked on testing 
- 05-31-2018 7:30am - 8:00am - documentation

## Credits and Collaborations

Thanks Judy Vue for the demo code and Nicole Weese for help with debugging.
