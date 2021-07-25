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


  //THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//   let currentTime = {}
//   const selectedTime = e.target;
  
  

//   const classToApply = 
//         selectedTime == currentTime

//    == currentQuestion.answer ? "correct" : "incorrect";



// WHEN I click into a timeblock
// THEN I can enter an event
