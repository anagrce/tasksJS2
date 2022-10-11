//zadatak1
//-------------------------------------------
var a=3;
var b=5;
var c=4;

if (a==b && b==c && a==c){
    console.log("Trougao je jednakostranican.");
}else if(a==b || a==c || b==c){
    console.log("Trougao je jednakokraki.");
}else{
console.log("Trougao je pravougli")
}
//zadatak 2
//-----------------------------------------------
var a=5;
var b=10;
var c='';

if(c= a+b){
    console.log("Zbir broja " +a + " i broja " + b+ " je " +c);
}if(c=a-b){
    console.log("Razlika broja " +a + " i broja " + b+ " je " +c);
}if(c=a*b){
    console.log("Proizvod broja " +a + " i broja " + b+ " je " +c);

}if(c=a/b){
    console.log("Kolicnik broja " +a + " i broja " + b+ " je " +c);
}
//zadatak 3
//------------------------------------
var mark1=95;
var mark2=85;
var c=(mark1+mark2)/2;
var grade='';

if(mark1<=100 && mark1>=91){
   grade="Grade is A = " +c;
}else if(mark1<=90 && mark1>=81){
    grade="Grade is B = " + c;
}else if (mark1<=80 && mark1>=71){
   grade="Grade is C = " +c;
}else if(mark1<=70 && mark1>=61){
    grade="Grade is D = " + c;
}else if(mark1<=60 && mark1>=51){
    grade="Grade is E = " + c;
}
console.log(grade);



//zadatak 4
//----------------------------------------

var a=3;
var b="cat";
var c='';

if(a==1){
    c=a+" "+ b;

}else{
    c= a + " "+  b + "s"
}

console.log(c);

//zadatak 5
//---------------------------------
var age=13;

if (age<18){
    console.log("You are not olg enough to drive. Come back in " + (18-age) + " years!");
}else{
    console.log("You are old enough to drive.");
}
//zadatak 6
//---------------------------------------
var age1=20;
var age2=35;
var c='';

if(age1==age2){
    console.log("We are the same age.");
}else{
    c=age2-age1
}
console.log("She is " +c+" years younger than me.");

//zadatak 7
//-------------------------
var c1="Akita";
var c2="Terrier";
var c3="Cocker Spaniel";
var c4="Bichon";
var c5="Shih Tzu";
var c='Shih Tzu';

if(c==c1){
    c="This is Akita called Neo";
}else if(c==c2){
    c="This is Terrier called Daisy";
}else if(c==c3){
    c="This is Cocker Spaniel called Luna";
}else if(c==c4){
    c="This is Bichon called Medena";
}else if(c=c5){
    c="This is Shih Tzu called Betsy";
}else{
    c="This is mixed breed";
}
console.log(c);

