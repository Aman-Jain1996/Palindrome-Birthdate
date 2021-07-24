var Months=[31,28,31,30,31,30,31,31,30,31,30,31];

export function isPalindrome(checkString) {
    // console.log("Inside palindrome Handler")
    // console.log(checkString);
    let max = checkString.length;
    for (let i = 0; i < Math.floor(max / 2); i++) {
        if (checkString[i] !== checkString[max - i - 1])
            return false;
    }
    return true;

}

export function checkCombinations(year, month, date) {
    // console.log("Inside combination Handler")
    if (isPalindrome(year + month + date)) {
        return {data :`${year}-${month.padStart(2,0)}-${date}` , format:"yyyy-mm-dd"};
    } else if (isPalindrome(month + date + year.substring(2, ))) {
        return {data : `${month.padStart(2,0)}-${date}-${year.substring(2, 0)}` , format :"mm-dd-yy"};
    } else if (isPalindrome(Number(month) + date + year)) {
        return {data:`${Number(month)}-${date}-${year}` , format : "m-dd-yyyy"};
    }
    return null;
}

export function validateDate(checkString) {
    // console.log("Inside validate date Handler")
    let date1 = new Date();
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);
    date1.setMilliseconds(0);
    let dateInput = checkString.split("-").map((item) => Number(item));

    if (checkString === "") {
        return {
            err: 0
        };
    } else if (date1.getTime() <
        new Date(dateInput[0], dateInput[1] - 1, dateInput[2]).getTime()
    ) {
        return {err:1};
    }
    else {
        let data1=checkCombinations(dateInput[0].toString(),dateInput[1].toString().padStart(2,0),dateInput[2].toString().padStart(2,0));
        if(data1!==null)
            return data1;
        else{
            let next = nextPalindrome(dateInput[0],dateInput[1],dateInput[2])
            return {err:2,next};
        } 
    }
}

export function nextPalindrome(year,month,date){
    //console.log(year,month,date);
    for(let i=1; i>0; i++){
        date = date+1;
        if(date > Months[month]){
            date = 1;
            month = month+1;
            if(month > 12){
                month = 1;
                year = year+1;
            }
        }
        let setFlagNextDate = checkCombinations(year.toString(), month.toString().padStart(2,0), date.toString().padStart(2,0));
        if(setFlagNextDate!=null){
            return [setFlagNextDate,i];
        }
   }

}