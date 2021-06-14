const tips_isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
console.log(tips_isLeapYear(2015));
console.log(tips_isLeapYear(2012));