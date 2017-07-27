1. create a todolist module: `ng g m todolist`
2. create a todolist component (with inline template, style and flat without spec): 
   `ng g c todolist/todolist -it -is --flat --spec=false`
3. in `TodolistModule` create an export array and put `TodolistComponent`    
4. import `TodolistModule` to `AppModule`
5. use `TodolistComponent` inside `AppComponent` template

// Break into components
1. Generate the following components:
    `ng g c todolist/<componentName>`

    `title`
    `input`
    
    `toggle`
    `list`
    `item`
   
    `counter`
    `action-button`
// Create a service

// wire up
1. the InputComponent should emit an `valueEnter` event
2. The `ListComponent` should accept array as an attribute,
   Loop over the items and create an `ItemComponent` 
3. The `ItemComponent` should receive an `Item` as prop to display it






 