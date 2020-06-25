let shopper = {
    name: "Rob",
    groceryCart: { 
        apples:{
            name: "Gala apples",
            price: 1,
        },
        tequila: {
            name: "Patrón",
            price: 30,
        },
        tofu: {
            name:"Silken firm tofu",
            price: 2.50,
        }
    },
    fruit: function() {
        console.log("apples are $"+this.groceryCart.apples.price)
        console.log("Apples "+this.groceryCart.apples.name)
    },
    liquor: function() {
        console.log("Tequila is $"+this.groceryCart.tequila.price)
        console.log("You like "+this.groceryCart.tequila.name)
    },
    tofu: function() {
        console.log("Tofu is $"+this.groceryCart.tofu.price)
        console.log("This is"+this.groceryCart.tofu.name)
    },
    groceryCart: function() {
        console.log("You only have 3 items because you're a broke alcoholic")
    }
}

.groceryCart()
