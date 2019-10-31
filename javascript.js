var timeSlots = [];
var d = new Date();

// var timeObjSTRING = localStorage.getItem("timeObj")
// var timeObj = JSON.parse(timeObjSTRING)
// console.log(timeObj, timeObjSTRING)

// for(var i in timeObj){
//     console.log(i, timeObj[i])
//     var time = $("[data-time=" + i + "]");
//     var myMoment = moment(i, "H")
//     var eventIntput = time.parent().next().find('.form-control');

//     eventIntput.val(timeObj[i])
    
//     if(moment().isAfter(myMoment)){
//         console.log("past")
//         eventIntput.addClass("past")
//     } else if(moment().isSame(myMoment, 'hour')){
//         console.log("present")
//         eventIntput.addClass("present")
//     } else if(moment().isBefore(myMoment)){
//         console.log("future")
//         eventIntput.addClass("future")
//     }
// }

//populate todays date time in the header
document.getElementById("tdate").innerHTML = d.toDateString();

// planner code
Start()




function Start() {
    timeSlots = getTimeArr();
    console.log(timeSlots);
    populateTimeSlots(timeSlots);
}

function getTimeArr() {
    let tempArr = [];
    for (var i = 0; i < 9; i++) {
        var hour = convNumToHour(i);
        var time = {
            time: hour,
            event: localStorage.getItem(hour.format("H"))
        };
        tempArr.push(time);

    };
    return tempArr;
};

function convNumToHour(number) {
    return moment(number + 9, "HH");
};

function populateTimeSlots(timeSlots) {
    timeSlots.forEach(timeslot => {

        var hour = timeslot.time.format("H");
        var time = $("[data-time=" + hour + "]");
        var eventIntput = time.parent().next().find('.form-control');

        eventIntput.val(timeslot.event)
        
        if(moment().isAfter(timeslot.time)){
            console.log("past")
            eventIntput.addClass("past")
        } else if(moment().isSame(timeslot.time, 'hour')){
            console.log("present")
            eventIntput.addClass("present")
        } else if(moment().isBefore(timeslot.time)){
            console.log("future")
            eventIntput.addClass("future")
        }

        console.log(timeslot.event);
    });
};

var data = {
    name: "ben"
}

console.log(data.name)
console.log(data["name"])

$(".btn").on("click", function () {
    var hour = $(this).parent().parent().find('.time').children().attr("data-time")
    var event = $(this).parent().parent().find('.event').children().val()

    timeObj[hour] = event;
    localStorage.setItem("timeObj", JSON.stringify(timeObj))

    console.log(hour, event)
    localStorage.setItem(hour, event)
    //var input = document.getElementById('userInput').value; 
});