// from data.js
var tableData = data;
//requirements:
// event handler calls function to filter data, grab input value, filter method to get new table based off of given input, prevent page from reloading with d3

// select button and form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// create event handlers for clicking button or pressing enter key
button.on("click", runEnter);
form.on("submit", runEnter);

//create function to run for both events
function runEnter() {

    //prevent page from refreshing
    d3.event.preventDefault();

    // get value property of input elements
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    // filter process

}

