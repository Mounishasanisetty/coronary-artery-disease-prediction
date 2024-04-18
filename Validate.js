function validate () {
var age = document. forms["HeartDiseasePrediction”] ["Age"].value;
var restingBP = document. forms["HeartDiseasePrediction”] ["Resting Blood
Pressure"].value;
var serumCholestrol = document. forms["HeartDiseasePrediction”] ["Serum 
Cholestrol"].value;
if (isNaN(age) || isNaN(restingBP) || isNaN(serumCholestrol)) {
alert("Please enter a valid number for age, resting blood pressure, and serum 
cholestrol.");
return false;
 }
//Age
if (age < 1 || age > 120) {
alert("Please enter a valid age between 1 and 120.");
return false;
 }
//sex
if ((!HeartDiseasePrediction.sex[0].checked) && 
(!HeartDiseasePrediction.sex[1].checked)) {
alert("Please choose your Gender: Male or Female");
return false;
 }
//Resting Blood Pressure
if (restingBP < 140) {
alert("Coronary Artery Disease Prediction: Negative");
return false;
 }
//Serum cholestrol
if (serumCholestrol < 200) {
alert("Coronary Artery Disease Prediction: Negative");
return false;
}
//Fasting Blood Sugar
if ((!HeartDiseasePrediction.FastingBloodSugar[0].checked) 
&&(!HeartDiseasePrediction.FastingBloodSugar[1].checked)) {
alert("Please choose your Fasting Blood Sugar: Low or High");
return false;
 } 
//smoking
if ((!HeartDiseasePrediction.Smoking[0].checked) 
&&(!HeartDiseasePrediction.Smoking[1].checked)) {
alert("Please choose your Smoking Habit: Yes or No");
return false;
}
//Chest pain Type 
if (document.HeartDiseasePrediction.ChestPainType.value === "-1")
{
alert("Please provide the type of chest pain");
document.HeartDiseasePrediction.ChestPainType.focus();
return false;
 }
//electro Cardiographic Results
if (document.HeartDiseasePrediction.ElectroCardiographicResults.value === "-1") {
alert("Please provide the Electro Cardiographic Results");
 return false;
 }
//Maximum heartrate achieved
 if (
 (!HeartDiseasePrediction.MaximumHeartrateAchieved[0].checked) 
&&(!HeartDiseasePrediction.MaximumHeartrateAchieved[1].checked)) {
 alert("Please choose your Maximum Heartrate Achieved: Low or High");
 return false;
 }
//Diabetes
 if (
 (!HeartDiseasePrediction.Diabetes[0].checked) 
&&(!HeartDiseasePrediction.Diabetes[1].checked)) 
{
 alert("Please choose your presence of Diabetes: Yes or No");
 return false;
 }
//Ca
 if ((!HeartDiseasePrediction.Ca[0].checked) && 
(!HeartDiseasePrediction.Ca[1].checked) && (!HeartDiseasePrediction.Ca[2].checked) 
&& (!HeartDiseasePrediction.Ca[3].checked))
{
 alert("Please chose the level of Ca");
document.HeartDiseasePrediction.Ca.focus();
 return false;
}
//Thal
if (document.HeartDiseasePrediction.Thal.value === "-1")
 {
 alert("Please provide the value of Thal");
 document.HeartDiseasePrediction.Thal.focus();
 return false;
 }
if (restingBP > 140 ) {
 alert("Coronary Artery Disease Prediction: Positive");
 return true;
 }
 if (serumCholestrol > 200) {
 alert("Coronary Artery Disease Prediction: Positive");
 return true;
 }
 if((HeartDiseasePrediction.FastingBloodSugar[1].checked)){
 alert("Coronary Artery Disease Prediction: Positive");
 return true;
 }
 if((HeartDiseasePrediction.Smoking[1].checked)){
 alert("Coronary Artery Disease Prediction: Positive");
 return true;
 }
 if (document.HeartDiseasePrediction.ChestPainType.value === "Typical Angina")
 {
 alert("Coronary Artery Disease Prediction: Positive");
 document.HeartDiseasePrediction.ChestPainType.focus();
 return true;
 }
 if (document.HeartDiseasePrediction.ElectroCardiographicResults.value === "Left 
ventricular hypertrophy")
 {
 alert("Coronary Artery Disease Prediction: Positive");
 document.HeartDiseasePrediction.ElectroCardiographicResults.focus();
 return true;
 }
 if((HeartDiseasePrediction.MaximumHeartrateAchieved[1].checked)){
 alert("Coronary Artery Disease Prediction: Positive");
 document.HeartDiseasePrediction.ElectroCardiographicResults.focus();
 return true;
 }
 if((!HeartDiseasePrediction.Diabetes[1].checked)){
 alert("Coronary Artery Disease Prediction: Positive");
 document.HeartDiseasePrediction.Diabetes.focus();
 return true;
 }
 if((HeartDiseasePrediction.Ca[3].checked)){
alert("Coronary Artery Disease Prediction: Positive");
document.HeartDiseasePrediction.Ca.focus();
return true;
}
if (document.HeartDiseasePrediction.Thal.value === "Fixed Defect")
{
alert("Coronary Artery Disease Prediction: Positive");
document.HeartDiseasePrediction.Thal.focus();
return true;
 } 
}
