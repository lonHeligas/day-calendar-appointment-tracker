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
    hour: 12,
    appt: "Buy Gary even more tequila"
  },
  {
    hour: 17,
    appt: "Buy Gary all the tequila"
  }
]


$(function () {
  let currentTimeDay = moment();
  // console.log(currentTimeDay.hour());
  // let liveSchedule = [];
  let incomingSched = localStorage.getItem("storedSched");   
  //  console.log(daySchedule);  
  
  
  
  // * Add code to display the current date in the header of the page.
  function displayDate (){
    // console.log(currentTimeDay.format('MMMM Do, YYYY'));
    // console.log(currentTimeDay);
    var currentDayEl = $('#currentDay');
    currentDayEl.text(currentTimeDay.format('MMMM Do, YYYY'));
    // this displays the date at the top of the day when the page is loaded
    // getSchedule();
    renderSchedule()
  }

  function renderSchedule(){
    // console.warn("You are in renderSchedule")
    // console.log(currentTimeDay.hour())
    var hourEl = $('.time-block');
    // console.log (hourEl);
    var currHourNumber = currentTimeDay.hour();  
    for (i=9; i<=17; i++){ 
      let displayText = `${i} a.m.`;
      if (i == 12) {
        displayText = `${i} p.m.`;
      };
      if (i > 12){        
        displayText = `${i-12} p.m.`;
      };
      $(`#hour-${i} .hour`).text(`${displayText}`);
      // ~ let currentHourBlockEl = '#hour-11 .hour';  
      
      if (currHourNumber == i){
        $(`#hour-${i}`).addClass('present');
      } else if (currHourNumber > i) {
        $(`#hour-${i}`).addClass('past');
      } else {
        $(`#hour-${i}`).addClass('future');        
      }
    }
    getSchedule ()
  };
  
  function getSchedule (){    
    try{
      schedule = JSON.parse(incomingSched);
    } catch(e) {
      schedule = [];
    };
    console.log(schedule);
    // render    
    renderIncomingData();
    
    // let downloadSchedule = something;
    // this will grab the current schedule from the local storage
  }
  
  
  function renderIncomingData (){  
    // console.log("you are in renderIncomingData");
    
    for (i = 0; i <schedule.length; i++){
      var currHourObj = schedule[i];
      // console.log(currHourObj.hour);
      var currHourNumber = currHourObj.hour;  
      // console.log(currHourNumber); // 9
      var currHourAppt = currHourObj.appt;    // buy Gary Tequila
      // console.log(currHourAppt);
      var idWeWant = `#hour-${currHourNumber}`
      // console.warn(idWeWant);    
      
      $(`${idWeWant} .description`).text(currHourAppt);      
      // console.warn("out of the if loop")   ;
      
      
    };
    
  saveButtonListen();
  };
  
  // i have to click a button
  // it saves the content in the text field corresponding to that button into the array
  // it saves the array in local storage

  function saveButtonListen(){
    
    var btnSaveEl = $('.saveBtn');    
    btnSaveEl.on('click', function(event){    


      // console.log("You clicked Save!");
      // console.log(event.currentTarget);
      let thisSave = $(event.currentTarget).parent().attr('id');      
      let thisText = $(`#${thisSave} textarea `).val(); 
        // event.currentTarget).parent().attr('textarea');
      let thisHour = thisSave.substring(5);
      console.log(thisHour);
      console.log(thisSave);
      console.log(thisText);
      schedule.push({
        hour: thisHour,
        appt: thisText
      })
      console.log(schedule);      
      localStorage.setItem("storedSched", JSON.stringify(schedule));  







      
      //saveSchedule(whichButton);
    });   

  }


  
  
  function saveSchedule (thisButton){    

    
    
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
  
  
  
  
  
  function start(){
    displayDate();
    
    
    
    //saveSchedule();
    
    // this is the starter function that fires up when the user loads the page
  }

  start ();
});
