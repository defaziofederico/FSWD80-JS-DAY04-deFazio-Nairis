//Basic1
// function ageCalc (bdate) {
// var yr=new Date();
// yr=yr.getFullYear();
// var age = yr-bdate;
 

// document.write ("My name is Federico, and my age is " +age);
// }

// ageCalc(1980)

//Basic2

// function hero (a,b){
// console.log(a.substring(0,11));
// }
// hero("I am a hero at World of Warcraft","12")

//Basic3

function PersonalInfo(firstname,surname,age,description){


this.firstname=firstname;
this.surname=surname;
this.age=age;
this.description=description;
this.showInfo=function() {
return document.write(" Hi, i am " + firstname + " "+ surname +" and I am "+ age +" years old "+" and "+ description);
}
}

var me = new PersonalInfo("Federico","de Fazio","33","philosopher");
me.showInfo();




