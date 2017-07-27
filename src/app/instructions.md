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
