/*Problem 1*/
function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";

    }
    let difference = income - expenses;
    let tax = difference * .20;
    return tax.toFixed(2);

}
const income = 34000;  
const expenses = 1753;

const taxResult = calculateTax(income, expenses);
document.write( "<br>"+ `Harun Tax : ${taxResult} Taka`+ "<br>"); 

/*number -2*/

function sendNotification(email) {
    if (email.includes('@')) {
            const [username, domainName] = email.split('@');
            const message = `${username} Notification Done ${domainName}`;
            return message;
            
          } 
       else {
          return "Not Notification";
        }
    }
    
    document.write("<br>" + sendNotification("humaira@gmail.com" ) +"<br>");
    document.write("<br>" + sendNotification("humairagmail.com" ) +"<br>");


/*number -3*/
 function checkDigitsInName(name) {
    if (typeof name !== 'string') {
          return "Invalid";
    }
     for (let char of name) {
          if (!isNaN(parseInt(char))) {
            return true;
          }
        }
        return false;
    }
    document.write("<br>" + `Raju Digits in : ${checkDigitsInName("humaira123")} `+"<br>");
    document.write("<br>" + `Raju Digits in : ${checkDigitsInName("humaira")} `+"<br>");

/*number -4*/
    function calculateFinalScore(input) {
      if (typeof input !== 'object' || input === null) {
          throw new Error("Invalid Input");
      }
      const { name, testScore, schoolGrade, isFFamily } = input;
      if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
          throw new Error("Invalid Input");
      }
      if (testScore < 0 || testScore > 50 || schoolGrade < 0  || schoolGrade > 30) {
          throw new Error("Invalid Input");
      }
      let finalScore = 0;

      finalScore += Math.min(testScore, 50);
      finalScore += Math.min(schoolGrade, 35);
      if (isFFamily) {
          finalScore += 20;
      }
      return finalScore >= 80;
  }
  const rajibInfo = {
      name: "Rajib",
      testScore: 25,
      schoolGrade: 25,
      isFFamily: true
  };
  const result = calculateFinalScore(rajibInfo);
 document.write("<br>" + `Final Scrore Rajib : ${result} `+"<br>");

/*number -5*/
  function waitingTime(interviewTimes, isratSerial) {
    if (!Array.isArray(interviewTimes) || typeof isratSerial !== 'number') {
        return "Invalid Input";
    }
    const totalInterviewed = interviewTimes.length;
    if (totalInterviewed === 0 ) {
        return 0; 
    }

    const sum = interviewTimes.reduce((acc, time) => acc + time, );
    const averageTime = Math.round(sum / totalInterviewed);

    const remainingSerials = isratSerial - totalInterviewed - 1;
    const totalWaitingTime = remainingSerials > 0 ? remainingSerials * averageTime : 0 ;

    return totalWaitingTime;
}
const interviewTimes = [6]; 
const isratSerial = 4;
const waitingTimeResult =  waitingTime(interviewTimes, isratSerial);
document.write( "<br>"+ `Israt Waiting : ${waitingTimeResult} Minute`);
 