// alert("practice")

// Changing case


// var a = prompt("Enter Your Name");
// a = a.toLocaleUpperCase();
// document.write(a);

// var a = prompt("Enter your Name");
// var b = a.slice(0,1);
// b = b.toUpperCase();
// var c = a.slice(1);
// c = c.toLowerCase();
// document.write(b + c);

// Strings: measuring length and extracting parts

// var a = prompt("Enter your Favorite Mobile Model");
// var b = a.length();
// console.log(a)

// Strings: finding segments

// var a = "pakistan"
//     for (var i = 0; i < a.length; i++){
//         var txt = a.slice(i , i + 1)
//         if (txt == "n"){
//       alert("n has found on this index" + i)
//         }
//     }

// var userName = prompt("Enter Your Username");
// var userChars = userName.length;
// for(var i = 0; i < userChars; i++){
//     if (userName.slice(i , i + 1) == "@" , "!"){
//         alert("Enter Valid Username");
//         break
//     }
// }


// Strings: finding a character at a location

// var a = "Pakistan"
// document.write(a.charAt(3));

// Strings: replacing characters

// var word = "Hyderabad"
// var word2 = word.replace ("Hyder" , "islam")
// document.write(word2)

// var para = "Ali and Sami are best friends. They play cricket and football together"
// var para1 = para.replace("and", "&")
// document.write(para1)


// Rounding numbers



// var num = +prompt("Enter a Valid Num");
// document.write(num , "<br>");
// var num = Math.round(num)
// document.write(num , "<br>")

// var a = +prompt("Enter a valid Num ");
// var a = Math.floor(a);
// document.write(a)

// var b = +prompt("Enter a valid Num ");
// var b = Math.ceil(b);
// document.write(b);

// var num = +prompt("Enter a negative Num");
// document.write(num , "<br>");
// var num = Math.round(num)
// document.write(num , "<br>")


// var b = +prompt("Enter a negative Num ");
// var b = Math.ceil(b);
// document.write(b);


// var a = +prompt("Enter a negative Num ");
// var a = Math.floor(a);
// document.write(a)

// Generating random numbers

// var dice = Math.ceil(Math.random() *6)
// document.write(dice);

// var toss = Math.floor(Math.random() * 2+1);
// console.log(toss);

// var a = +prompt("Enter Num")
// if (a == 5){
//     alert("congrats")
// }
// else if (a != 5){
//     alert("try again")
// }

// Converting strings to integers and decimals

// var num = "12";
// console.log(typeof num);
// Number(num)
// console.log(typeof Number(num));


// var a = 35.36;
// var b = a.toString();
// console.log(a)
// console.log(typeof b);

// Controlling the length of decimals

// var a = 33.564613214864;
// var num = a.toFixed(0);
// console.log(num);
// console.log(typeof a);

// chapters31-34
// DATE 

// var todayDate = new Date();
// document.write(todaydate);


// var date = new Date();
// var months = ['January', 'February', 'March', 'April', 'May',  'June', 'July', 'August', 'September', 'October', 'November','December',];
// var currentMonth = months[date.getMonth()];
// document.write(currentMonth);


// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0,3);
// alert("Today is " + c);
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     alert("It's Fun Day")
// }else if(c === "Sun"){
//     alert("It's Fun Day")
// }else if(c === "Mon"){
//    alert("It's work Day")
    
// }else if(c === "Tue"){
//     alert("It's work Day")
   
// }else if(c === "Wed"){
//     alert("It's work Day")
   
// }else if(c === "Thr"){
//     alert("It's work Day")
   
// }else if(c === "Fri"){
//     alert("It's work Day")
   
// }
// alert(c)


// var date =prompt("enter your date")
//  if (date < 15){
//     alert("start days of month")
//  }
//  else if (date > 15){
//     alert("end days of month")
// }

// var date = new Date();
//  if (date.getDate() < 15){
//     document.write("start days of month" , "<br>")
//  }
//  else if (date.getDate() > 15){
//     document.write("end days of month")
// }

// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)


// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

// var dob = new Date (prompt("Enter Your Date of Birth" , "jan 1, 2001"))
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accage = Math.floor(diff/(1000*60*60*24*30*12))
// alert(accage);

// FUNCTION chapter 35-38

// function abc(){
//     var date = (a);
//     return a;
    
// }
// var b = new Date
// document.write(b)



// function abc(){
//     let firstName = prompt("Enter your Firstname")
//     let lastName =  prompt("Enter your Lastname")
//     document.write("Good Morning ", firstName + lastName)
// }
// abc()

// function abc(){
//     let val1 = +prompt("enter your fisrt val")
//     let operator = +prompt("enter operator")
//     let val2 = +prompt("enter your second val")
    
//     document.write(val1 + val2)

// }
   
// abc()

// function add(a,b){
//     document.write(a + b)
// }
// add(5,5)

    





