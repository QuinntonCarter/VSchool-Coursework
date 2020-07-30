// https://api.vschool.io/pokemon
// -- Step one - get the data - Write a function that gets the JSON and parses the JSON 
// to create an array of objects that look like this:

// {
//     name: 'Charmander',
//     resource_uri: 'api/v1/pokemon/8/'
// },
// {(Another pokemon object)},
// {(Another pokemon object)},
// {(Another pokemon object)},
// ...
// etc.

// -- Step two - display the data - Make each Pokemon's name show up on a separate line in the browser.
// You will be using a for loop to iterate through each pokemon object, 
// and some DOM mamnipulation to add nodes for each Pokemon.


const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const pokemon = data.pokemon;
        document.getElementsByClassName("here").textContent = "Name: "+jsonData+"\nResource_URI: "+data.name;
        // document.getElementsByClassName("demo2").append();
        pokeUrl = data.pokemon[0];
        console.log(pokeUrl);
    }
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();