$(document).ready(function(){
  startTimer();
  startCompletionDate();
  startLoveReveal();
  startSlideshow();
})

startSlideshow = function(){
  var count = 2
  setInterval(function(){
    $('.content_container').removeClass('shown')
    $('#slide_' + count).addClass('shown');
    count = count + 1;
    if (count > 4){
      count = 1;
    }
  }, 6000)
}

startTimer = function(){
  setInterval(function(){
    var date_object = new Date();
    date_object.setMinutes(date_object.getMinutes() + 30);
    var hour = date_object.toLocaleTimeString();
    $('#return_time').html(hour);
  }, 1000)
}

startCompletionDate = function(){
  setInterval(function(){
    var fortnightAway = new Date(Date.now() + 12096e5);
    var time = fortnightAway.toLocaleTimeString();
    $('#estimated_completion').html(fortnightAway);
  }, 1000)
}

startLoveReveal = function(){
  var count = 1
  setInterval(function(){
    $('#reveal_' + count).addClass('show');
    count = count + 1;
    if (count > 4){
      $('.reveal_text').removeClass('show');
      count = 1;
    }
  }, 2000)
}