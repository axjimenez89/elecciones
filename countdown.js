
var now = moment();

var targetDay = moment().subtract(1, 'seconds').format("2020-11-03", "dddd, MMMM Do YYYY");

var countDown= Math.floor(moment().diff(targetDay, 'seconds'));

var Days, Minutes,Hours,Seconds;

  setInterval(function(){
   // Updating Days 
   Days =pad(Math.floor(countDown / 86400),2);
    //updating Hours
    Hours = pad(Math.floor((countDown - (Days * 86400)) / 3600),2);
  // Updating Minutes
    Minutes =pad(Math.floor((countDown - (Days * 86400) - (Hours * 3600)) / 60),2);
// Updating Seconds
   Seconds = pad(Math.floor((countDown - (Days * 86400) - (Hours* 3600) - (Minutes * 60))), 2);

  // Updation our HTML view
 document.getElementById("days").innerHTML=Days + ' Days';
 document.getElementById("hours").innerHTML=Hours + ' Hours';
 document.getElementById("minutes").innerHTML=Minutes+ ' Minutes';
 document.getElementById("seconds").innerHTML=Seconds + ' Seconds';

     // Decrement 
 countDown--;

     
if(countDown === 0){
    countDown= Math.floor(moment().diff(targetDay, 'seconds'));
}

 },1000);
  // Function for padding the seconds i.e limit it only to 2 digits
    function pad(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }
















  