var FloatAge =prompt("How old are you?");
var days = (FloatAge*365.25);
FloatDays= parseFloat(days);
var weeks = (FloatDays/7);
FloatWeeks = parseFloat(weeks);
var months = (FloatAge*12);
FloatMonths = parseFloat(months);
var FloatFortNights = (FloatDays/14);
alert("Age="+FloatAge+"\nDays="+FloatDays+"\nWeeks="+FloatWeeks+"\nMonths="+FloatMonths+"\nFortnights= "+FloatFortNights);