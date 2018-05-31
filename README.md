401 JS --  Lab 32 Budget Tracker
===


## Project Description

* in this app a category contains the following properties
    * `id` a uuid
    * `timestamp` a date from when the category was created
    * `name` a string that is the name of the category
* an expense contains:
* a uuid
    * categoryID an id that corresponds to an existing category
    * timestamp a date from when the category was created
    * name - a string name of the expense
    * price a number for the expense

#### redux
###### app reducer
* a reducer combines the categories and expenses reducer

###### action creators have been created for each interaction

#### Components
creates the following components and structures them according to the following diagram.
```
Provider
  App
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [CategoryItem] -- list of Category items
           CategoryForm  -- for updating categories
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of expense items
              ExpenseForm -- for updating an expense
```

###### App Component
the App component sets up the single page application routes

###### Landing Component
* displayed on the `/` route
* uses react-redux's `connect` to map state and dispatchable methods to props
* displays a `CategoryForm` for adding categories to the app state
* displays a `CategoryItem` for each category in the app state

###### CategoryForm Component
* should expect an `onComplete` prop to be a function
  * that function should be invoked with the CategoryForms State when the form is submitted
* should support an optional `category` prop that will initialize the state of the form

###### CategoryItem Component
* displays the category name
* receives a category prop from Landing
* displays a delete button
  * `onClick` the category should be removed from the application state
* sdisplays a CategoryForm
  * `onComplete` the form updates the component in the application state

###### ExpenseForm Component
* an onComplete prop that invoked with the form state on submit
*it supports create and update
###### ExpenseItem Component
*contains a button that will delete the expense from the appState onClick
*displays the name and price of the component
*displays an ExpenseForm that enables the user to update the expense in the app state



