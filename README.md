401 JS --  Lab 31 Budget Tracker
===


## Project Description

* in this app a category should containsfollowing properties
  * `id` a uuid
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category

#### redux
###### reducer
* creates a category reducer in your your reducer directory
* this reducer supports the following interactions
  * `CATEGORY_CREATE`
  * `CATEGORY_UPDATE`
  * `CATEGORY_DESTORY`

###### action creaters
* creates an action creater for each interaction supported by your category reducer

#### Components
creates the following components and structures them according to the following diagram.
```
Provider
  App
    Route / Landing Page
      CategoryForm -- for creating categories
       [CategoryItem]
       CategoryForm  -- for updating categories
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


