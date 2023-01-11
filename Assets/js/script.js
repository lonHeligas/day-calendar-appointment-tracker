// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// let incomingSched = []; ???


// array of objects: hour
//                   appt

var schedule = [
  {
    hour: 9,
    appt: "Buy Gary some tequila"
  },
  {
    hour: 11,
    appt: "Buy Gary more tequila"
  },
  {
    hour: 17,
    appt: "Buy Gary even more tequila"
  }
]


$(function () {
  let currentTimeDay = moment();
  // console.log(currentTimeDay.hour());
  // let liveSchedule = [];
   let incomingSched = localStorage.getItem("storedSched");   
  //  console.log(daySchedule);
   let containerEl = $('#day');  
  //  console.log(containerEl);
  let hourBlockEl = [];  


  function getSchedule (){    
    if (incomingSched == null) {
      incomingSched = [];
    } else {
      incomingSched = JSON.parse(incomingSched);
    }
    renderSchedule();
    // console.log`${incomingSched}`;

    // let downloadSchedule = something;
    // this will grab the current schedule from the local storage
  }
  

  function renderSchedule (){    
    for (i = 0; i <=schedule.length; i++){
      var currHourObj = schedule[i];
      // console.log(currHourObj.hour);
      var currHourNumber = currHourObj.hour;  
      // console.log(currHourNumber); // 9
      var currHourAppt = currHourObj.appt;    // buy Gary Tequila
      console.log(currHourAppt);
      var idWeWant = `hour-${currHourNumber}`
      console.warn(idWeWant);
      var div = document.getElementById(idWeWant); 
      
      
      // var hourDisplay = i+9;
      // console.log(hourDisplay);
      containerEl.append();

      // console.log(hourBlockEl[i]);
      /* 
      attach the hour block array to the container "container-lg"
      each hour block has the container for it, the text field, text entry ? and the save button
      
      for(var = 0; i<8; i++){
        const obj = yourArray[i]
        const div = createElement('div')
        div.textContent = `${obj.appt} as ${obj.hour}`
        $(containerEl).append(div)
      }
      





      
      if slotHour[i] < currentTimeDay.hour 
      then set slotHour[i] class to past
      else
      if slotHour[i] == currentTimeDay.hour
      then set class to present
      else
      set slotHour[i] class to future
      */
    };
    /* 
    
    



    */
    // this dynamically creates the schedule from the array of objects loaded from local storage and
    // this will also color-code the days depending on the time of day the learner loads the page
  }
  
  
  function saveSchedule (){    
    var btnSaveEl = $('.btn');
    btnSaveEl.on('click', function(){    
      console.log("You clicked Save!");
    });   


    
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
    // console.log(currentTimeDay.format('MMMM Do, YYYY'));
    // console.log(currentTimeDay);
    var currentDayEl = $('#currentDay');
    currentDayEl.text(currentTimeDay.format('MMMM Do, YYYY'));
    // this displays the date at the top of the day when the page is loaded
  }

  function start(){
    displayDate();
    getSchedule();

    //saveSchedule();

    // this is the starter function that fires up when the user loads the page
  }

  start ();
});
