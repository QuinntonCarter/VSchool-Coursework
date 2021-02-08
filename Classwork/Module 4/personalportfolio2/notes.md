# jQuery Intro
    
#   1. Adding jQuery
    To include jQuery, we use a <script> tag as follows:

        <script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
        
    In this example, the jQuery library is loaded from the jQuery content delivery network (CDN). A CDN is a collection of servers that can deliver content.

    You must include the <script> tag in the HTML document before you link to a JavaScript file that uses the jQuery library. The integrity and crossorigin properties in the example ensure the file is delivered without any third-party manipulation.

    We will use jQuery methods in a JavaScript file called main.js, which we will load into index.html using a <script> tag. We need to load the jQuery library before the main.js file. Otherwise, the computer will not understand the jQuery used in main.js.

#   2.  JQUERY SETUP
        .ready()
    The jQuery library makes it quick and easy to add visual effects and interactivity to your web page. However, a web page must be rendered in a user’s browser before it’s possible to have any dynamic behavior. To solve this problem, we will use our first jQuery method.

    The jQuery .ready() method waits until the HTML page’s DOM is ready to manipulate. You should wrap all JavaScript behavior inside of the .ready() method. This will make sure the web page is rendered in the browser before any jQuery code executes.

        $(document).ready(() => {
        
        });

    In the example above, the .ready() method waits until the browser finishes rendering the HTML document before triggering a callback function. We will write all of our jQuery behavior inside this callback function.

#   3.  Targeting by Class
    Let’s look at the code we just pasted into our main.js file:

        $(document).ready(() => {
        
        });

    In the example above, document is a special keyword that we use to target the HTML document and create a jQuery object.

    We can use the same $() syntax to create jQuery objects for elements on a web page. Typically, we pass a string into $() to target elements by id, class, or tag. Once targeted, we can use . notation to attach a handler method that triggers a callback function.

    Let’s consider how we can target elements by class. We can reference elements by class name with the following syntax:

        $('.someClass').handlerMethod();

    In the example above, every element with a class of 'someClass' is targeted. Note, we prepend the class name with a period (.someClass). Then, we call the .handlerMethod() on all of the referenced items.

#   4. Targeting by id
    While classes allow us to target multiple elements at once, we can also target single elements by id.

    To select by id, we prepend the element’s id name with the # symbol.

        $('#someId').hide();

    In the example above, we target the #someId element and call the .hide() method on it. The .hide() method hides the someId element when the web page renders to a client’s browser.

#   5.  jQuery Objects
    Now that you’ve seen some jQuery in action, let’s dive a bit deeper into syntax. You’ve probably noticed the $ symbol before anything we target. The $ symbol is an alias for the jQuery function. The $ symbol and jQuery are interchangeable.

    The jQuery function takes a parameter that targets an element, like '#navMenu', and turns it into a jQuery object. Then, you can call any jQuery method on a jQuery object.

    Developers often save jQuery objects in variables, like so:

        const $jQueryObject = $('.someClass');

    Notice our variable name, $jQueryObject, starts with the ($) character. It is best practice to name jQuery object variables with a leading $. It is a naming convention that reminds you and lets others know that a given variable is a jQuery object.

#   6.  Event Handlers
    Now that we’ve got jQuery up and running, let’s give it a little gas! The jQuery .on() method adds event handlers to jQuery objects. The method takes two parameters: a string declaring the event to listen for (the handler) and a callback function to fire when the event is detected.

        $('#login').on('click', () => {
        $loginForm.show();
        })

    In the example above, we use .on() to add the click event handler to the #login element. Inside of the callback function, we use the .show() method to show the jQuery object saved in the $loginForm variable.

    When a user clicks the login element, the login form appears.

    ----------------------

#   7.  Chaining Events
    jQuery also allows us to chain multiple methods. Instead of re-declaring the HTML element you’re selecting, you can append one event to another. Let’s see how we can use chaining to add hover functionality to .example-class elements.

        $('.example-class').on('mouseenter', () => {
        $('.example-class-one').show();
        }).on('mouseleave', () => {
        $('.example-class-one').hide();
        });
    In the example above, we chain a mouse enter event to a mouse leave event. Both of the event handlers target .example-class elements.

    When a user’s mouse enters an .example-class element’s area we show .example-class-one elements. When a user’s mouse leaves an .example-class element’s area, we hide .example-class-one elements.

#   8.  