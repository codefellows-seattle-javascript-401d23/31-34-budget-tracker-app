# Lab 31: Budget Tracker

# Overview

This is a lab assignment from Code Fellows 401 - Javascript. The objective was to build a simple Budget Tracker App with React components and Redux for state management. The completed project contains a route to dashboard page where a user can enter a category budget item by name and budget amount.  Onclick the category item is saved to the state of the application and renders into a list of category items below.  Once a category is added to the state of the application, a user can double click to delete the item removing it from the state of the application.  

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
 
## Change Log

- 05-29-2018 12:30pm - 2:00pm - Built wire frame and mocked the component architecture
- 05-23-2018 4:15pm - 6:00pm - Built the static rendering portion of the components 
- 05-23-2018 6:30pm - 8:00pm - built in state and categoryForm
- 05-24-2018 9:00pm - 10:30pm - All functionality working by 10:30pm.
- 05-24-2018 7:30am - 08:30am - added documentation

## Credits and Collaborations

Thanks Vinicio Sanchez for the demo code.