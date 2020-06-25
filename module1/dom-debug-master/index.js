const colorsArr = [ 
    {
    color:'red', 
}, 
{
    color: 'blue',
}, 
{
    color: 'green', 
    }
];


// adds click event listener and function to button/
// appends new subItem to list
document.getElementById("add").addEventListener("click", function(e) {
    // creates new sub element
    const subItem = createSubItem(e);
    // appends (adds) subItem to end of "list" element
    document.getElementById("list").appendChild(subItem);
})


function createSubItem(e) {
    // variables for sub item creation
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input").value;
    const dropDown = createDropDown();
    // styling
    subItem.textContent = subItemValue;
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "sub-item");
    // calls for function to return subItem element
    return subItem
}


function createDropDown() {
    // creates select element and variable for select 
    // element named dropDown
    const dropDown = document.createElement("select");
    // loops through options and creates drop downlist //
    for (let i = 0; i < colorsArr.length; i++) {
        const options = document.createElement("option");
        options.innerHTML = colorsArr[i].color
        dropDown.append(options)
    }
    // e denotates event.. in this case event at target (dropDown)
    dropDown.addEventListener("change", function(e) {
        // creates event: use parentElement > as style > for background color
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    // calls for function to return dropDown element
    return dropDown
}


///////////// scraps ///////////////////////////////
// let person = {
//     name: "Ben Turner",
//     address: {
//         street: "main street"
//     }
// };