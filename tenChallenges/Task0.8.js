function convertToHoursMinutes(num){
    var hours =  Math.floor(num/60);
    var minutes = num % 60;
    if (hours == 1 && (num%60 == 1) ){
        console.log(hours + " hour " +minutes+" minute.");
    }
    else if (hours !=1 && num%60==1){
        console.log(hours + " hours " +minutes+" minute.");
    }
    else if(hours !=1  && (num%60 !=1) ){
        console.log(hours + " hours " +minutes+" minutes.");
    }

    else if(hours==1 && (num%60 !=1)){
        console.log(hours + " hour " +minutes+" minutes.");
    }
}
convertToHoursMinutes(78);