# Budget Tracker
Josiah Green
Version 1.0.0

#### Overview 

This is a React App that allows users to create a budget for a category, then list additional content for their expenses. The user can add, update, or delete these entries.

#### Getting Started

Fork from repository

```
npm i

npm run watch
```

#### Structure

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

#### Dependencies 

React, Redux, Javascript, Webpack, Babel, UUID, Sass.
