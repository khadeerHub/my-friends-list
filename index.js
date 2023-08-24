// Array string
// var friendList = ["Hashim", "Shoaib", "Fairoz", "Rabi", "Shafiya", "/Iyan"];
var friendList = [];
// 1st Function
function greet() {
    var friendPicked = document.querySelector("#Friend").value.toLowerCase();
    var friendFound = false;
    
    for (var i = 0; i < friendList.length; i++) {
        if (friendList[i].toLowerCase() === friendPicked) {
            friendFound = true;
        }
    }
    
    if (friendFound) {
        alert("Hi, you are my friend!");
    } else {
        alert("You are not my friend.");
    }
}

// 2nd function
function addFriend() {
    var addNewFriend = document.querySelector("#add").value;
    friendList.push(addNewFriend); // Just push the new friend directly
    console.log(addNewFriend + " added ✅");
}
