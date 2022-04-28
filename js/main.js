"use strict";

const months = [ 31 ,28,31,30,31,30,31,31,30,31,30,31];
let birthDate = document.querySelector("#birthDate"),
    calculateBtn = document.getElementById("calculateBtn"),
    calculateAgeData = document.getElementById("calculateAge");
calculateBtn.addEventListener("click",function ()
{
    let fullBirthDate =new Date (birthDate.value) ,
        todayDate = new Date()
    ; // y m d
let birthYear,birthMonth,birthDay;
let birthDetails =
    {

        date : fullBirthDate.getDate(),
        month : fullBirthDate.getMonth() + 1,
        year : fullBirthDate.getFullYear()
    }
    let currentDate = todayDate.getDate(),
    currentMonth = todayDate.getMonth() + 1,
    currentYear = todayDate.getFullYear();
leapChecker(currentYear)
if(birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear))
{
    alert("Not Born Yet");
    return;

}
     birthYear = currentYear - birthDetails.year;
if(currentMonth >= birthDetails.month)
{
    birthMonth = currentMonth - birthDetails.month;
}
else
{
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetails.month;
}
if(currentDate >= birthDetails.date)
{
    birthDay = currentDate- birthDetails.date;

}
else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDay = days + currentDate - birthDetails.date;
    if (birthMonth < 0)
    {
        birthMonth = 11;
        birthYear--;

    }
}
    calculateAgeData.innerHTML =   `Your Age ${birthYear} Years ${birthMonth} Months ${birthDay} Days`
})

function leapChecker(year)
{
    if (year % 4 ==0 || year % 100 ==0 && year %400 ==0)
    {
        months[1]=29;
    }
    else
    {
        months[1] = 28;
    }
}
