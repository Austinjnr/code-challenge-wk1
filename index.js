//Student Grade Generator
const Grade = (score) => {
    let letterGrade;
    while (score <=100 && score => 0 )  
    if (score > 79 ) {
      letterGrade = "A";
    } else if (score >= 60 ) {
      letterGrade = "B";
    } else if (score >= 49 ) {
      letterGrade = "C";
    } else if (score >= 40 ) {
      letterGrade = "D";
    } else {
      letterGrade = 'E'
  }
    return `You got grade  ${letterGrade}`;
  }
  // input the student's grade
  console.log(Grade (65)); 

  //Speed Detector
  const car = (speed) => {
    let caution ;
    if (speed <= 70){
      caution = 'Ok';
    } else if (speed > 70 && speed <= 75){
      caution = 'Points: 1';
    } else if (speed > 75 && speed <= 80){
      caution = 'Points: 2';
    } else if (speed > 80 && speed <= 85){
      caution = 'Points: 3';
    } else if (speed > 85 && speed <= 90){
      caution = 'Points: 4';
    } else if (speed > 90 && speed <= 95){
      caution = 'Points: 5';
    } else if (speed >95 && speed <= 100){
      caution = 'Points: 6';
    } else if (speed > 100 && speed <= 105){
      caution = 'Points: 7';
    } else if (speed > 105 && speed <= 110){
      caution = 'Points: 8';
    } else if (speed > 110 && speed <= 115){
      caution = 'Points: 9';
    } else if (speed >115 && speed <= 120){
      caution = 'Points: 10';
    } else if(speed >120 && speed <= 125){
      caution = 'Points: 11';
    } else if (speed > 125 && speed <= 130){
      caution = 'Points: 12';
    }else {
      caution = 'License suspended'
    }
    return `Your driving ${caution}`;
  }
  // input the car speed here
  console.log(car(80));   

   //Net Salary Calculator
   function myPay() {

}
