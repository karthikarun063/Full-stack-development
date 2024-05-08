function greet(username) {
    console.log("Hlo", username);
}

//tell other file you can use this function
module.export = greet;

greet("Arunkarthik");
