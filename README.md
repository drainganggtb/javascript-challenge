# JavaScript & DOM Manipulation
Using **HTML**, **CSS**, **Javascript**, **d3.js to create table and filter through data on a [webpage](https://drainganggtb.github.io/javascript-challenge/).

![alt text](https://github.com/drainganggtb/javascript-challenge/blob/main/static/images/aliensforsure.jpg?raw=true)

## Background
WAKE UP SHEEPLE!!! The extra-terrestrial menace has arrived on earth, and our database of highly trustworthy encounters and eye-witness reports are all that is needed to corroborate such statements. Once this information reaches wider audiences online, then the matter of if we are alone or not can finally be put to rest.

However, the issue at hand is the size of the database, as even dedicated interstellar researchers have found it difficult to locate specific reports. In situations like these, the experience of technological toilers is required to make a dynamic table based on the provided dataset. It is crucial that the interface is able to filter the table for specific date, city, state, country, and shape values pertaining to foreign encounters. Also, it is essentail that the languages HTML, CSS, JavaScript, and d3.js are used to create this project, as they are the only languages that xenolinguists have identified as trustworthy. 

___________
## Navigating this repository
This repository holds all of the code required to fulfill the regular and bonus assignments. All of the project work is contained within the directory.

Aside from the ```index.html``` file which shows the webpage output, the other tools to create the site, like ```style.css``` are included in the *static* folder. Within that, the ```js``` folder houses the data used to populate the table as well as the code used to respond to user inputs and filter the table (```app.js```).

## The Task
- Create a basic HTML web page or use the index.html file provided
- Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting. 
    - Make sure you have a column for ```date/time```, ```city```, ```state```, ```country```, ```shape```, and ```comment``` at the very least. 
- Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input
    - The creation of event handlers required using **jQuery** to trigger a button click with the ```Enter``` key.
- An additional task that was assgined included making multiple search categories
    - Using multiple ```input``` tages and.or select dropdowns, write JavaScript code so the user can set multiple filters and search for UFO sightings based on the following criteria:
  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

### Dataset and Website
The dataset used can be found [here](https://github.com/drainganggtb/javascript-challenge/blob/main/UFO-regular-and-bonus/static/js/data.js "UFO Data").

The website has been published to GitHub Pages [here](https://drainganggtb.github.io/javascript-challenge/). Due to an update to the repo, the page should display ```index.html``` instead of ```README.md```.

## Webpage
The following image shows how the dataset can be filtered. In this example, the only search query provided was that the observation occurred in California.
![alt text](https://github.com/drainganggtb/javascript-challenge/blob/main/static/images/webpage.png?raw=true)