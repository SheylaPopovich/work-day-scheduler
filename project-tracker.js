 var timeSlots = [$("#8"), $("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17"), $("#18"), $("#19"), $("#20"), $("#21")]


var todaysDate = $("#currentDay");
    date = null;

    var update = function () {
        date = moment(new Date())
        todaysDate.html(date.format('dddd, MMMM Do YYYY, h:mm a'));
    };
    
    $("#currentDay").ready(function(){
        update();
        setInterval(update, 1000);
    }); 
         

    function weatherBalloon( cityID ) {
        var key = '2f1cda6e44000ccd9b7f1f34fc6c638c';
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver,id=' + cityID+ '&appid=' + key)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
          drawWeather(data);
        })
        .catch(function() {
          // catch any errors
        });
      }
      
      window.onload = function() {
        weatherBalloon( 6167865 );
      }

      function drawWeather( d ) {
        var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
        
        document.getElementById('description').innerHTML = d.weather[0].description;
        document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
        document.getElementById('location').innerHTML = d.name;
    }


//Save event to time block create save button with addEventListener 
var saveBtn = $(".saveBtn");
var textArea = $(".text");



saveBtn.click( function (){
  const userInput =  $(this).siblings(".text").val();
  const time = $(this).siblings(".hour").attr("id");
   console.log(time)
  localStorage.setItem(time, userInput);

})

//get with tutor to have local storage output/save  values to text areas
function retrieveResponses(){
  textArea.value = localStorage.getItem("userText")
  
}
retrieveResponses()


for (let index = 0; index < timeSlots.length; index++) {
  const selectedSlot = timeSlots[index].attr("id");
  const previousText = localStorage.getItem(selectedSlot);
  // timeSlots[index].siblings(".text").value = selectedSlot
  


  console.log(previousText) 
  
}





var currentTime = moment().hours()
// console.log(currentTime)

for (let i = 0; i < timeSlots.length; i++) {
  const element = timeSlots[i].attr("id");
  

  if (element == currentTime){
    timeSlots[i].siblings().addClass("present")
  } 
   else if (element < currentTime) {
     timeSlots[i].siblings().addClass("past")
   } 
   else {
    timeSlots[i].siblings().addClass("future")
  } 
}



