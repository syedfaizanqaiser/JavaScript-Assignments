// CHAPTER # 21 -25

// TASK # 1

// var firstName = prompt("Enter first Name");
// var lastName = prompt(" Enter last Name");
// var fullName = firstName + " " + lastName ; 
// alert("Hello " + fullName);

// TASK # 2

// var favPhone = prompt("Enter your favorite phone model:");
// document.write("My favorite Phone is: " + favPhone + "<br>");
// document.write("Length of string: " + favPhone.length);


// TASK # 3

// var string_Country = "Pakistani";
// var indexOf_String = string_Country.indexOf("n");
// document.write("String: Pakistani <br>");
// document.write("Index of 'n': " + indexOf_String);


// TASK # 4

// var string_1 = "Hello World";
// var index_of_str = string_1.lastIndexOf("l");
// document.write("String: Hello World <br>");
// document.write("Last Index of 'l': " + index_of_str);


// TASK # 5

// var string_abc = "Pakistani";
// var index_of_string = string_abc.substring(3 , 4);
// document.write("String: Pakistani <br>");
// document.write("Character at index 3: " + index_of_string); 


// TASK # 6

// var firstName = prompt("Enter first Name");
// var lastName = prompt("Enter last Name");
// var fullName = firstName.concat(lastName); 
// alert("Hello " + fullName);


// TASK # 7

// var cityName = "Hyderabad";
// var replace_word = "Islam";
// var updatedName = cityName.substring(5 , 9);
// var concat_both = replace_word.concat(updatedName);
// document.write("City: Hyderabad<br>");
// document.write("After Replacement: " + concat_both);


// TASK # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = message.replace(/and/g, "&");
// document.write(rep);


// TASK # 9

// var str_1 = "472";
// var str_toNum = parseInt(str_1);
// document.write("Value:" + str_1 + "<br>");
// document.write("Type: " + typeof(str_1)+ "<br>");
// document.write("Value:" + str_toNum + "<br>");
// document.write("Type: " + typeof(str_toNum) + "<br>");


// TASK # 10

// var user_inp = prompt("Enter Any string: ");
// var conv_toUpperCase = user_inp.toUpperCase();
// document.write("User Input: " +user_inp + "<br>");
// document.write("Upper Case: " + conv_toUpperCase);


// TASK # 11

// var user_inp1 = prompt("Enter Any string: ");
// var conv_toLower = user_inp1.toLowerCase();
// var remove_firstLetter = conv_toLower.slice(1);
// var firstLetter = conv_toLower.slice(0,1);
// var firstLetter_toupper = firstLetter.toUpperCase();
// var result = firstLetter_toupper.concat(remove_firstLetter);
// document.write(result); 



// TASK # 12


// var num = 35.36;
// var conv_toString = num.toString().split('.').join("");
// document.write(conv_toString)


// TASK # 13

// var arr1 = [33 , 44 , 46 , 64];
// var userInput = prompt("Enter Username: ");
// var len = userInput.length;
// for(let i = 0 ; i <= len ; i++){
// var n = userInput.charCodeAt(i);
// for(let z=0 ; z<=3 ; z++)
// if(n == arr1[z]){
//    alert("Please enter a valid username")
// }

// }




// TASK # 14


// var A = ['cake', 'apple pie', 'cookies', 'chips', 'patties'];
// var user_inp = prompt("Welcome to ABC Bakery.What do you want to Order Sir/Ma'am");
// var to_lowercase = user_inp.toLowerCase();
// for (var i = 0; i <= 4; i++) {
//     if (to_lowercase == A[i]) {
//         var index_no = A.indexOf(to_lowercase);
//         document.write(A[index_no] + " is available at index " + index_no + " in our bakery");
//         break;

//     }
//     else if (i != 0 && i != 1 && i != 2 && i != 3){
//         document.write("We are sorry." + to_lowercase + " is not available in our bakery");

//     }
// }



// TASK # 15
// var uppercase = [];
// var lowercase = [];
// var num = [];
// for (var x = 65; x <= 90; x++) {
//     uppercase.push(x);
// }
// for (var y = 97; y <= 122; y++) {
//     lowercase.push(y);
// }
// for (var z = 48; z <= 57; z++) {
//     num.push(z);
// }
// var password = prompt("Enter a new password: ");
// document.write("Entered Password: " + password);
// var len_password = password.length;
// var substring_at_0 = password.charAt(0);
// var index_of_substring = password.indexOf(substring_at_0);

// if(len_password < 6){
//     alert("Password must be 6 characters long")

// }
// for(let s = 0 ; s < 9 ; s++){
// if(password.charCodeAt(index_of_substring) == num[s]){
//     alert("Password cannot begin with a number");

// }
// }
// for(let d = 0 ; d < password.length ; d++){
//     if((password != uppercase[x]) || (password != lowercase[y]) || (password != num[z] )){
//         alert("Please enter a valid password");
//         break;

//     }

// }


// TASK # 16


// var university = "University of Karachi";
// var split_string = university.split("");
// for(let x = 0 ; x < split_string.length ; x++){

//     document.write(split_string[x] + "<br>");
// }


// TASK # 16


// var string_1 = "The quick brown fox jumps over the lazy dog";
// var to_lowerCase = string_1.toLowerCase();
// var occurences = to_lowerCase.match(/the/g).length;
// document.write("Text: " + string_1 + "<br>");
// document.write("There are " + occurences + " occurences of the word 'the'");




// CHAPTERS # 26 - 30



// TASK # 1


// var user_input_val = prompt("Enter any positive integer: ");
// var string_to_int = parseFloat(user_input_val);
// var roundOff_val = Math.round(string_to_int);
// var floor_val = Math.floor(string_to_int);
// var ceil_val = Math.ceil(string_to_int);
// document.write("Number: " + string_to_int + "<br>");
// document.write("Round Off Value: " + roundOff_val + "<br>");
// document.write("Floor Value: " + floor_val + "<br>");
// document.write("Ceil Value: " + ceil_val + "<br>");



// TASK # 2


// var user_input_val = prompt("Enter any negative integer: ");
// var string_to_int = parseFloat(user_input_val);
// var roundOff_val = Math.round(string_to_int);
// var floor_val = Math.floor(string_to_int);
// var ceil_val = Math.ceil(string_to_int);
// document.write("Number: " + string_to_int + "<br>");
// document.write("Round Off Value: " + roundOff_val + "<br>");
// document.write("Floor Value: " + floor_val + "<br>");
// document.write("Ceil Value: " + ceil_val + "<br>");



// TASK # 3


// var user_inp_number = prompt("Enter number");
// var to_int = parseInt(user_inp_number);
// var abs_value = Math.abs(to_int);
// document.write("Absolute value of " + to_int + " is " + abs_value);


// TASK # 4


// alert("Press ok to roll the dice");
// var dice_num = Math.ceil(Math.random() * 6);
// document.write("Random Dice Value: " + dice_num);



// TASK # 5

// alert("Press Enter to toss the coin");
// var coin_val = Math.ceil(Math.random() * 2);
// if(coin_val == 1){
//     document.write(coin_val + "<br>");
//     document.write("Random Coin Value: Heads");
// }
// else if(coin_val == 2){
//     document.write(coin_val + "<br>");
//     document.write("Random Coin Value: Tails");
// }



// TASK # 6


// alert("Press Enter to show a random number between 1 and 100");
// var num$ = Math.ceil(Math.random() * 100);
// document.write("Random Number between 1 and 100: " + num$);


// TASK # 7

// var user_weight = prompt("Enter your weight in kilograms");
// var weight_charlength = user_weight.length;
// if (weight_charlength == 2) {
//     var to_int = parseInt(user_weight);
//     document.write("The weight of user is " + to_int + " kilograms");
// }
// else if (weight_charlength == 5) {
//     var to_float = parseFloat(user_weight.substr(0, 2));
//     document.write("The weight of user is " + to_float + " kilograms");
// }
// else if (weight_charlength == 7) {
//     var to_float2 = parseFloat(user_weight.substr(0, 4));
//     document.write("The weight of user is " + to_float2 + " kilograms");
// }
// else if (weight_charlength == 13) {
//     var to_float3 = parseFloat(user_weight.substr(0, 5));
//     document.write("The weight of user is " + to_float3 + " kilograms");
// }


// TASK # 8


// var random_num = Math.ceil(Math.random()*10);
// var user_inp = prompt("Enter a number between 1 and 10");
// var to_integer = parseInt(user_inp);
// if(to_integer == random_num){
//     alert("Congratulations..You have guessed the right number")
// }
// else{
//     alert("Try Again!")
// }



// CHAPTER # 31 -34


// TASK # 1


// var right_now = new Date();
// document.write(right_now);


// TASK # 2

// var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
// var rightnow = new Date();
// var month = rightnow.getMonth();
// document.write("Current Month: " + monthNames[month]);



// TASK # 3


// var monthNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
// var rightnow = new Date();
// var day = rightnow.getDay();
// var sub_string = monthNames[day].substr(0 , 3);
// document.write("Today is : " + sub_string);


// TASK # 4

// var monthNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
// var rightnow = new Date();
// var day = rightnow.getDay();
// var sub_string = monthNames[day];
// if(sub_string === "Saturday" || sub_string === "Sunday"){
//     document.write("It's Funday");
// }
// else{
// document.write("Today is : " + sub_string);
// }



// TASK # 5


// var right_now = new Date();
// var get_date = right_now.getUTCDate();
// if(get_date < 16){
//     document.write("First fifteen Days of the Month")
// }
// else{
//     document.write("Last Days of the Month");
// }



// TASK # 6


// var rightNow = new Date();
// var time_in_milli = rightNow.getTime();
// var to_minutes =    time_in_milli/1000/60;
// document.write("Current Date: " + rightNow + " <br>");
// document.write("Elaspsed Milliseconds since Jan 1,1970: " + time_in_milli + " <br>");
// document.write("Elaspsed Minutes since Jan 1,1970: " + to_minutes + " <br>"); 



// TASK # 7


























