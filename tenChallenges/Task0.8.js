function convertToHoursMinutes(number){
    var hours =  Math.floor(number/60);
    var minutes = number % 60;
    if (hours == 1 && (number%60 == 1) ){
        console.log(hours + " hour, " +minutes+" minute.");
    }
    else if (hours !=1 && number%60==1){
        console.log(hours + " hours, " +minutes+" minute.");
    }
    else if(hours !=1  && (number%60 !=1) ){
        console.log(hours + " hours, " +minutes+" minutes.");
    }
    else if(hours==1 && (number%60 !=1)){
        console.log(hours + " hour, " +minutes+" minutes.");
    }
}
convertToHoursMinutes(78);