## Lab 33 

### Budget Tracker Application

This application provides a template for a user to record their budget based on separate categories. Once created, budgets will show in a list with their category name, following by the budget allocated to that category. List items will also show an option to either update the category name or budget, as well as a destroy option which will allow the client to remove the category from the list. 
New categories will also have a one to many relationship with expenses, which can be created, updated, or deleted once categories are created.

### Tools

Application takes advantage of React and Redux to keep track of state as well as update the state of the application.
Application also uses session and reporter middleware to notify users in the dev console when actions are dispatched, as well as logging the users actions into local storage. Testing has been implemented for the dashboard component using Jest and Enzyme.