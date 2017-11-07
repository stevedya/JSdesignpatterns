(function ($) {
    'use strict';
    var pizzas = [],
    $pizzasDiv = $('#pizzas');

    //Create a pizza object with these properties using the constructor pattern
    function Pizza(name, crust, size, topping1, topping2, topping3) {

        //create properties from passed in variables
        this.name = name;
        this.crust = crust;
        this.size = size;
        this.topping1 = topping1;
        this.topping2 = topping2;
        this.topping3 = topping3;

    }

    $('.submit').on('click', function(e) {
        e.preventDefault();
        //get the form values
        var name = $('#name').val(),
         crust = $('#crust').val(),
         size = $('#size').val(),
         topping1 = $('#topping1').val(),
         topping2 = $('#topping2').val(),
         topping3 = $('#topping3').val(),

        //create new pizza object using constructor
        newPizza = new Pizza(name, crust, size, topping1, topping2, topping3);

        //limits the total amount of pizza's to 4 and pushes the oldest one out and newest on top
        if (pizzas.length < 4) {
            pizzas.push(newPizza);

        } else {
            pizzas.pop(3);
            pizzas.unshift(newPizza);
        }

        createPizzaElement(pizzas);
    });

    //Inserting pizza into html
    function createPizzaElement(pizzas) {
        $pizzasDiv.html(Handlebars.compile($('#pizzas-template').html())({pizza: pizzas }));
    };


}(jQuery));