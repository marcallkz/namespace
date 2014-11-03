#NamespaceJS

##What is it?
The namespace function handles the creation and management of your namespaces.

##how does it work?

The namespace function can take up to 3 arguments. 


In it's simple form just pass a string with the structure you need for your namespace and the function will create it putting empty object literals as a value.

    namespace("myApp"); //create myApp
    
And you can create nested namespaces    
    
    namespace("myApp.ui.calendar"); //create myApp.ui.calendar
    // now we have:
    //|---myApp
    //|   |
    //|   |---ui
    //|   |   |
    //|   |   |---calendar
    
Doesn't overwrite existing namespaces

    namespace("myApp.ui.slider");
    // and now we have:
    //|---myApp
    //|   |
    //|   |---ui
    //|   |   |
    //|   |   |---calendar
    //|   |   |---slider
    
Always returns the reference

    var reference = namespace("myApp.realy.super.ultra.large.namespace");
    reference.foo = "bar";
    reference.hello = function() { alert("hello world"); };
    
You can also pass a starting point so the function doesn't need to search from the window object to the path you've given.

    var ui = namespace("myApp.ui"); //create or find the ui namespace inside myApp
    namespace(ui, "calendar"); //create the calendar namespace inside ui (myApp.ui)
    namespace(ui, "slider"); //create the slider namespace inside ui (myApp.ui)
    
And last, but not least, you can pass a value to your namespace.

    namespace("myApp.hello", function() { alert("hello world");});
Or

    var ui = namespace("myApp.ui");
    namespace(ui,"calendar", function() { alert("just pretend i'm a calendar");});
    
