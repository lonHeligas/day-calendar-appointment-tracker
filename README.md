# Day Calendar Appointment 

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

Developer Note: I used moment upon suggestion from our instructor.

## Links for this course

[Here is a link to the final release of this day calendar](https://lonheligas.github.io/day-calendar-appointment-tracker/)

[This is the repository for this day calendar](https://github.com/lonHeligas/day-calendar-appointment-tracker)

![Screenshot of the final page is as follows:](./assets/images/screenshot.png)

## Challenges I encountered

Getting used to jQuery was a somewhat steep learning curve, but once I figured out how to use it, I understood why it's popular. Saving the content from the local storage (or making a an empty array) wasn't the difficult part. Extracting the times and looping through everything was. I would have liked to build out the entire html dynamically but I ran out of time.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```




