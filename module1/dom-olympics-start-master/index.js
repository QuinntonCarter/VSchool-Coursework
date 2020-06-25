const colorsArray = []

// Objects/Variables
var header = document.getElementById('header');
var n = document.getElementById('name');
var sub = document.getElementById('container');
var chats = document.getElementById('messages');
var clear = document.getElementById('clear-button');

// Misc Style
clear.style.margin='15px';
clear.style.marginBottom='5px';
n.innerText = '[Quinnton]';

// Header Styling
header.innerText = 'Javascript made this!!';
header.style.fontSize = '54px';
header.style.textAlign = 'center';

// Sub Header Styling
sub.style.textAlign = 'center';
sub.style.fontSize = '24px';
sub.style.fontStyle = 'strong';

// Const variable for chat container
var mainchat = document.getElementById('main');

// Const variable for themes drop down menu
var themedrop = document.getElementById('theme-drop-down');
// adds event listener that listens for change event to change theme
const redBrown = "rgb("+99+191+245+")"
const redBlack = 
themedrop.addEventListener("change", function(e) {
    e.body.style.color = e.target.value
})

// Defines variable for <form> </form>
var form = document.getElementById('out_message');

// Event Listener which gathers information from input
form.addEventListener('submit', function(e) {
    // prevents previous state loading
    e.preventDefault();
    // defines manipulatable variables for messages and sint information
    var newMessage = document.createElement('div');
    var sent = document.getElementById('input_id').value;
    // Assigns class styling to newMessage variable
    newMessage.className = 'message left'
    // appends(adds) gathered text content to chat
    chats.appendChild(newMessage).textContent= sent;
});

// function that erases text content in chat
function erase() {
    chats.textContent='';
};