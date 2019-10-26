var timeSlots = [];
var d = new Date();


//populate todays date time in the header
document.getElementById("tdate").innerHTML = d.toDateString();

// planner code
Start()




function Start(){
    timeSlots = getTimeArr();
    console.log(timeSlots);
    populateTimeSlots(timeSlots);
    
}

function getTimeArr(){
    let tempArr = [];
    for(var i = 0; i < 9; i++){
        var hour = convNumToHour(i);
        var time = {
            time: hour.format("h:mm-a"),
            event: localStorage.getItem(event)
        };
        tempArr.push(time);
        
    };
    return tempArr;
};

function convNumToHour(number){
    return moment(number + 9, "HH");
};

function populateTimeSlots(timeSlots){
    timeSlots.forEach(timeslot => {
      
     console.log(timeslot.time);
     console.log(timeslot.event);
    });
};



// timeSlots.forEach((value) => {
//    console.log("Time: " + value.time + "Event: " + value.event);
   
// });

function PastPresentFuture(){
    //compare current time to slot time and update color accordingly
};

$("saveButton").on("click", function() {
    event.preventDefault();
    
    var event = $(this).attr("data-event");


});