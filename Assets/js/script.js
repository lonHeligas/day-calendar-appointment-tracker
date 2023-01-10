// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// let incomingSched = []; ???




$(function () {
  let currentTimeDay = moment();
  // let liveSchedule = [];
  // let incoming  
  var btnSave = $('#save-btn');
  btnSave.on('click', function(){
    // $(this).hide();
    console.log("You clicked Save!");
  });

    


  function getSchedule (){
    let incomingSched = localStorage.getItem("storedSched");
    if (incomingSched == null) {
    incomingSched = [];
    } else {
      incomingSched = JSON.parse(incomingSched);
    }
    console.log`${incomingSched}`;
    // let downloadSchedule = something;
    // this will grab the current schedule from the local storage
  }

  function renderSchedule (){
    // this dynamically creates the schedule from the array of objects loaded from local storage and
    // this will also color-code the days depending on the time of day the learner loads the page
  }


  function saveSchedule (){    
    /// ???
    // this will save the current schedule in local storage when the user clicks save
  }

  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  
  
  
  // TODO: Add code to display the current date in the header of the page.
  function displayDate (){
    console.log(currentTimeDay.format('MMMM Do, YYYY'));
    console.log(currentTimeDay);
    var currentDayEl = $('#currentDay');
    currentDayEl.text(currentTimeDay.format('MMMM Do, YYYY'));
    // this displays the date at the top of the day when the page is loaded
  }

  function start(){
    displayDate();
    getSchedule();
    // saveSchedule();
    // this is the starter function that fires up when the user loads the page
  }

  start ();
});
