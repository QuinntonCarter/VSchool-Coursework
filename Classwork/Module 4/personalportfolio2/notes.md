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

#    .hide()
#    .show()
#    .toggle()
    These methods instantly hide or show elements on a web page.

#    .fadeOut()
#    .fadeIn()
#    .fadeToggle()
    These methods make elements disappear or appear over a given period of time.

#    .slideUp()
#    .slideDown()
#    .slideToggle()
    These methods make elements slide up or down into place over a given period of time.

#    Event handlers are comprised of an event listener and a callback function. An event listener specifies the type of event that will be detected. The callback function executes when the event happens. Everything together is the event handler.
#    An event listener is set up using the .on() method.
#    The events listened for included: 'click', 'mouseenter', and 'mouseleave'.
#    In addition to event handlers, you learned how to use event.currentTarget to refer to the individual element that an event occurred on.


#   8.  .css()
    To modify CSS properties of an element, jQuery provides a method called .css(). This method accepts an argument for a CSS property name, and a corresponding CSS value.

    It’s syntax looks like:

        $('.example-class').css('color', '#FFFFFF');

    Let’s break the example above into two pieces:

    We call the .css() method on .example-class. The first argument is the CSS property we want to change. In this case, that’s 'color'.
    The second argument specifies the new value for the given property in the first argument. In this case, the .css() method changes the color of .example-class elements to '#FFFFFF'.
    Notice, both of the inputs to the .css() method are strings.

#   9.  CSS II
    In addition to changing one property at a time, the .css() method can accept many CSS property/value pairs at once. You must pass the .css() method a JavaScript object with a list of key/value pairs like this:

        {
        color: '#FFFFFF',
        backgroundColor: '#000000',
        fontSize: '20px'
        }

    There are a few important differences between the key/value pairs in the object above and the arguments from last exercise. Let’s consider these differences below:

    The object is wrapped by an opening and closing curly brace: {}.
    Inside the object, there are three key/value pairs. The keys in the example object are color, backgroundColor, and fontSize.
    The values come after the colon : of each key. For instance, fontSize is a key, and its value is '20px'.
    When referencing CSS properties in an object, the property names are camelCased — they are modified to have no quotes or spaces, and to start each new word with a capital letter. Therefore, background-color becomes backgroundColor, and 'font-size' becomes fontSize.
    To set multiple properties at once, you can pass the whole object into the .css() method as a single element.

        $('.example-class').css({
        color: '#FFFFFF',
        backgroundColor: '#000000',
        fontSize: '20px'
        })

    In the example above, we use the .css() method to change the color, background color, and font size values of the .example-class element.

#   The .css() method can change style properties of an element.
#   The .css() method can accept multiple styles at once if you pass it a JavaScript object as its argument.
#   The .animate() method can change specific style properties over a period of time.
#   The .addClass() will add a CSS class to an element, and the .removeClass() method will remove a CSS class.
#   The .toggleClass() method will toggle a class on or off an element.

#   10. .animate()
    The jQuery .animate() method enhances the visual possibilities by making CSS value changes over a period of time.

    The first argument passed to .animate() is a JavaScript object of CSS property/value pairs that represent an element’s end state. This is identical to the .css() method. For example, the following object could be passed to the .animate() method to change an element’s height, width, and border thickness

        {
        height: '100px',
        width : '100px',
        borderWidth : '10px'
        }

    Note that the names of CSS properties in the JavaScript object don’t have spaces or dashes and are camelCased.

    The second parameter of the .animate() method determines how long the animation takes to complete. It is optional; if you do not provide an argument, the default value is 400 milliseconds. You can use a number (in milliseconds) or the strings 'fast' or 'slow'. Below is an example of the .animate() method:

        $('.example-class').animate({
        height: '100px',
        width: '100px',
        borderWidth: '10px'
        }, 500);

    In the example above, the height, width, and border width will change to 100px, 100px, and 10px respectively over a 500 millisecond period.

#   11. .addClass()
    A JavaScript file can quickly get overloaded with styles if you regularly use the css method to modify element styles. **It’s a best practice to group all of the style code in a CSS file, and use jQuery to add and remove the classes from elements — this approach aligns to a design principle called separation of concerns.**

    Separation of concerns is a design principle stating that code should be separated based on its purpose in a program. In web development, that generally means the structure of a page is defined in an HTML document, styles are stored in a CSS file, and code that defines dynamic behavior is stored in a JavaScript file.

    To keep CSS properties in a CSS file, jQuery can add a CSS class to an element with a method named addClass. It’s syntax looks like this:

        $('.example-class').addClass('active');

    In the example above:

    .addClass() is called on the jquery .example-class selector.
    .addClass() adds the 'active' class to all .example-class elements.
    Notice that the argument passed to addClass does not have a period preceding it. This is because it expects a class, and therefore only needs the name of the class.

#   12. .removeClass()
    Similar to .addClass(), the jQuery .removeClass() method can remove a class from selected elements.

    Its syntax is similar to .addClass():

        $('.example-class').removeClass('active');

    In the example above:

    .removeClass() is called on .example-class elements.
    The method removes the 'active' class from all .example-class elements.

#   13. .toggleClass()
    Similar to other effects methods, you can use a toggle method instead of chaining the .addClass() and .removeClass() methods together.

    The .toggleClass() method adds a class if an element does not already have it, and removes it if an element does already have it. Its syntax looks like:

        $('.example-class').toggleClass('active');

    In the example above:

    .toggleClass() is called on .example-class elements.
    .toggleClass() will add the 'active' class to .example-class elements if they do not have it already.
    .toggleClass() will remove the 'active' class from .example-class elements if they do have it already.

#   14.Children
    According to the DOM tree, the outermost element is the parent of all elements inside of it. Therefore, the HTML elements inside of the outer element are children. The jQuery .children() method allows us to target these elements.

        <div class='parent' id='holder'>
            <div>Child <span>1</span></div>
            <div>Child <span>2</span></div>
            <div>Child <span>3</span></div>
        </div>
        const $kids = $('#holder').children();
        $kids.on('click', event => {
        $(event.currentTarget).css('border', '1px solid black');
        });

    In the example above, the $kids variable refers to all children of the element with id 'holder' (the divs inside '#holder'). The .on() method adds the click event handler to these $kids. When one of them is clicked, jQuery will add a border around it that is 1px wide and solid black.

    It is important to note that only the direct descendants of '#holder' are considered children. Any elements inside the child elements of '#holder', such as the <span> elements, will not be targeted by the .children() method.

#   15. Parent & Siblings
    In addition to the .children() method we covered in the last exercise, there are two methods you can use to select the parent and siblings of an element.

        $('.choice').on('click', event => {
        $(event.currentTarget).parent().hide();
        });

    In the example above, the .parent() method targets the parent element of '.choice' elements and removes it from the DOM.

        $('.choice').on('click', event => {
        $(this).siblings().removeClass('selected');
        $(event.currentTarget).addClass('selected');
        });

    In the code above, the .siblings() method targets elements adjacent to the clicked '.choice' and removes the 'selected' class from any previously clicked '.choice's. Then the 'selected' class is added only to the clicked '.choice'.

#   16. Closest
    To select an element close to the current element, we can use jQuery’s .closest() method.

    The .closest() method will travel up the DOM tree to find a specified selector closest to it. Its syntax looks like:

        $('.example-class-one').closest('.another-class');

    In the example above:

    The .closest() method is called on '.example-class' elements.
    The method then targets the element selected by the .closest() method with a class of '.another-class'.

        <div class='.another-class'>
        <p class='.example-class-one'>1</p>
        </div>
        <div class='.another-class'>
        <p class='.example-class-two'>2</p>
        </div>

    Given this HTML, the jQuery above would select the <div> element that wraps the paragraph with a value of 1, because it is the closest element, up the DOM tree, with the class .another-class.

#   17. Next
    Sometimes you don’t want to target all the siblings of an element — you just want to target the next one. That’s where the aptly-named .next() method comes in!

    The code below is HTML for a menu. The list of food types is hidden, <ol style='display:none'>.

        <div class='heading'>MENU</div>
        <ol style='display: none'>
        <li>Appetizers</li>
        <li>Entrees</li>
        <li>Salads</li>
        <li>Sides</li>
        <li>Desserts</li>
        </ol>

    Since the div and <ol> exist on the same level of the DOM, they are siblings. Since there are no elements between them, the <ol> is the next sibling of '.heading'. We can add an event handler to the div element and use the .next() method to show and hide the <ol> using the .toggle() method.

        const $heading = $('.heading');
        $heading.on('click', () => {
        $(event.currentTarget).next().toggle();
        });

    In the example above, the .on() method attaches the click event handler to $heading. Then the callback function will toggle the class of the $heading‘s next sibling, the ol element.

    It’s important to note that jQuery also has a method called .prev() that can look at the previous sibling.

#   18. find
    Sometimes we want to target an element that lives inside another, but we don’t want to use the .children() method, since that might target more elements than we need. That’s where the .find() method comes in. This method finds and targets singular or multiple elements that are descendants of an element. Unlike the .children() method, it traverses all descendants of the specified element, not just the first level down.

    const $items = $('.myList').find('li');
    The .find() method takes a parameter that specifies how to filter results. This parameter is just like anything you might use to select a jQuery object, ('#id', '.class', tag, etc.). .find() will return all descendants that match the passed in selector. In the example above, the .find() method will return all <li> child elements inside the '.myList' element.


#    .children() to target an element’s child elements.
#    .siblings() to target elements adjacent to an element.
#    .parent() to target an element’s parent.
#    .closest() travels up the DOM tree from the current element to target the closest element with a given selector.
#    .next() to target the element immediately following the selected element.
#    .prev() to target the element that is immediately preceding the selected element.
#    .find() to target descendant elements by some selector, ie- class, id, tag etc.