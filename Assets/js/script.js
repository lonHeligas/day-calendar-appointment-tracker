

// this is a dummy block of content that was/or will be overwritten by the local storage

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
    
    renderIncomingData();
    
    
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







      
      
    });   

  }


  
  
 
  
  
  
  
  
  
  
  
  function start(){
    displayDate();
    
    
    
    
  }

  start ();
});
