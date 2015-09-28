
$(function(){
 //console.log("check in");


 $.ajax({
  url: "/studentInfo"
 }).done(function(response){
   console.log(response);
  for(var iterator = 0; iterator < response.length; iterator++){
     var studentName = response[iterator].name;
     var studentDescription = response[iterator].description;
     var studentShout = response[iterator].shoutout;
     //console.log(response[iterator].name);
   $(".classInfo").append("<li><div class='slide'>" + studentName + "</br></br>" + studentDescription + "</br></br>" + studentShout + "</div></li>");

  }



  $('.jcarousel').jcarousel();

  $('.jcarousel-control-prev')
      .on('jcarouselcontrol:active', function() {
       $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
       $(this).addClass('inactive');
      })
      .jcarouselControl({
       target: '-=1'
      });

  $('.jcarousel-control-next')
      .on('jcarouselcontrol:active', function() {
       $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
       $(this).addClass('inactive');
      })
      .jcarouselControl({
       target: '+=1'
      });

  $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function() {
       $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
       $(this).removeClass('active');
      })
      .jcarouselPagination()


 })
});