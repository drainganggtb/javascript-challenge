// from data.js
var tableData = data;
//requirements:
// event handler calls function to filter data, grab input value, filter method to get new table based off of given input, prevent page from reloading with d3

// select button and form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// reference table body
var tbody = d3.select("tbody");

// show unfiltered data in table
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    //append table row for each sighting object
    var row = tbody.append("tr");
    //use Object.entries to console.log UFO sightings
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key,value);
        // append cell to row
        var cell = row.append("td");
        cell.text(value);
    });
});

// create event handlers for clicking button or pressing enter key
button.on("click", runEnter);

//trigger button click on enter key using jquery
$("#form").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#filter-btn").click();
    }
});
$("filter-btn").click(runEnter);


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
    if (inputDate === ""){
        var filteredData = tableData;
    }
    else {
        var filteredData = tableData.filter(value => value.datetime === inputDate);
    }
    // do nothing if no data provided for other filters
    if (inputCity === ""){}
    else {
        var filteredData = tableData.filter(value => value.city === inputCity);
    }
    if (inputState === ""){}
    else {
        var filteredData = tableData.filter(value => value.state === inputState);
    }

    if (inputCountry === ""){}
    else {
        var filteredData = tableData.filter(value => value.country === inputCountry);
    }

    if (inputShape === ""){}
    else {
        var filteredData = tableData.filter(value => value.shape === inputShape);
    }

    //console out filtered data to check if it was correctly filtered
    console.log(filteredData);

    
    // clear table output
    tbody.html("");
    
    // add filtered data into table
    filteredData.forEach(function(ufo) {
        console.log(ufo);
        //append table row for each sighting object
        var row = tbody.append("tr");
        //use Object.entries to console.log UFO sightings
        Object.entries(ufo).forEach(function([key, value]) {
            console.log(key,value);
            // append cell to row
            var cell = row.append("td");
            cell.text(value);
        });
    });




};

