# Budget Tracker
**Author**: Joanna Coll
**Version**: 1.0.0 

## Overview

This app lets the user input data to create category names and budget related to it. It has a dashboard where the user can add the new notes with the name and budget and remove each of them with a click. The new version of the app uses reducer, store, provider and action files to control all the state changes and handle the changes.

## Getting Started

1. To start you need to install all the necessary dependencies and create all the directories.
2. Start with building webpack.common.js and webpack.dev.js files and utils to pre-define functions bind.
3. Create reducer, store and action files. 
4. Create state that contains: uuid,name, budget,timestamp.
5. Reducer should contain  the following:
  * `CATEGORY_CREATE`
  * `CATEGORY_UPDATE`
  * `CATEGORY_DESTORY`
  
6. Actions file needs to create actions for all the interactions added to reducer.
7. Create following files to hold components for: dashboard, category form, category item, and app.
```Provider
  App 
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [CategoryItem]
           CategoryForm  -- for updating categories```
8. Connect some components with action file. 
9. Create routes inside app file.
10. Make sure Dashboard displays on the'/' route and connects to map state and dispatchable methods to props.
11. Add CategoryForm and CategoryItem to render() function.
12. Add the UI state inside the CategoryForm and pass it to CategoryItem.
13. Use onComplete function to invoke when the form gets submitted.
14. Made sure CategoryItem renders and displays name and budget. 
15. Import Category prop from Dashboard to display: delete 'onClick' button and update 'onComplete' button.
14. Render all the components into HTML.
8. Change scss file accordingly.


## Architecture
JavaScript, Node.js, Airbnb package, babel, Sass, React, Enzyme, Jest, other dependencies

## Change Log

05-12-2018 6:00pm - The application is finished.
05-12-2018 10:30pm - Finished writing README.md




