// let words = "words-1.txt"; 
// function readTextFile(file)
// {
//     var output = "";
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 output = allText;
//             }
//         }
//     }
//     rawFile.send(null);
//     return output;
// }

// let words_string = readTextFile(words);
// let random_h2 = words_string.split(" ");
// let y = 0;
// while (y < random_h2.length) {
//     random_h2[y] = random_h2[y].charAt(0).toUpperCase() + random_h2[y].substring(1);
//     y++;
// }
let inps = document.querySelector(".inps");
let h2 = document.querySelector("h2");
let random_h2 = ["Book", "Pencil", "Pen", "Table", "Glass", "Bed", "Window", "January", "February", "May", "March", "September", "April", "August", "October", "November", "December", "June", "July", "Blood", "About", "Between", "Day", "String", "Eye", "Mouth", "Good", "Like", "Love", "Control", "Yes", "No", "Stomach", "Small", "Big", "Large", "Tiny", "Medium", "Normal", "Door", "Jacket", "Juice", "Search", "Jewel", "Jewelry", "Fantastic", "Beautiful", "Open", "Close", "Floor", "Ceil", "Cell", "Roof", "Prison", "Prisoner", "Innocent", "Police", "Office", "Sheriff", "Murder", "Murderer", "Killer", "Hello", "Night", "Evening", "Afternoon", "Morning", "Flashlight", "Body", "Leg", "Foot", "Ball", "Cap", "Person", "Fish", "Father", "Mother", "Brother", "Sister", "Child", "Dolphin", "Lion", "Shark", "Bat", "Panther", "Cheetah", "Cat", "Dog", "Cage", "Gate", "Hard", "Bad", "Advertisement", "Professional", "Classroom", "Audio", "Pan", "Apple", "Iron", "Tutorial", "Aunt", "Uncle", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Television", "Load", "Easy", "Expert", "Basket", "Prank", "Crystal", "Stall", "Mall", "Hotel", "Motel", "Speed", "Velocity", "Energy", "Bee", "Waste", "Orange", "Guava", "Lemon", "Potato", "Total", "Left", "Right", "Up", "Down", "Forward", "Backward", "List", "Nest", "Tree", "Grass", "Dirt", "Car", "Train", "Bus", "Airplane", "Jet", "Air", "Jar", "Gold", "Diamond", "Emerald", "Ruby", "Steel", "Titanium", "Fist", "Hand", "Knee", "Head", "Brain", "Heart", "Sock", "Sick", "Sing", "Swim", "Toilet", "Bath", "Shower", "High", "Low", "Tower", "Fat", "Thin", "Short", "Depth", "Metal", "Copper", "Plastic", "Zoo", "Zebra", "Find", "Winter", "Summer", "Autumn", "Fall", "Spring", "Mountain", "Country", "Age", "Name", "Use", "City", "Town", "Village", "Shirt", "Pants", "Trouser", "Neighbor", "Headphones", "Earphones", "Post", "Back", "Space", "Face", "Ears", "Skin", "Live", "Switch", "Lever", "River", "Fire", "Lie", "Collision", "Winner", "Loser", "Pet", "Speak"];
let rand_arr_num = Math.floor(Math.random() * random_h2.length);
let str_len = random_h2[rand_arr_num].length;
let i = 0;
let x = "";
let retry_btn = document.getElementById("retry");
const shuffle = str => [...str].sort(()=>Math.random()-.5).join('');
function shufflee() {
    h2.innerHTML = shuffle(random_h2[rand_arr_num]);
    if (h2.innerHTML == random_h2[rand_arr_num]) {
        shufflee();
    }
}
while (i < str_len) {
    inps.appendChild(document.createElement("input"));
    i++;
}
let inputs = document.querySelectorAll(".inps input");
shufflee();
inputs[0].addEventListener("input", () => {
    inputs[0].value = inputs[0].value.toUpperCase();
})
inputs.forEach((inp) => {
    inp.addEventListener("input", () => {
        if (inp.value.length == 1) {
            inp.disabled = true;
            if (inps.lastChild.value.length == 1) {
                x += inps.lastChild.value;
            }
            else {
                inp.nextSibling.focus();
                x += inp.value;
            }
        }
        else {
            inp.previousSibling.disabled = false;
            inp.previousSibling.focus();
            x -= inp.value;
        }
        if (x.length == str_len) {
            if (x == random_h2[rand_arr_num]) {
                retry_btn.innerHTML = "Next";
                retry_btn.classList.add("shown");
                inputs.forEach((inpute) => {
                    inpute.disabled = true;
                    h2.innerHTML = "<span class='true'>CORRECT <span class='span'>:)</span></span>";
                })
            }
            else if (x != random_h2[rand_arr_num]) {
                retry_btn.innerHTML = "Retry";
                retry_btn.classList.add("shown");
                inputs.forEach((inpute) => {
                    inpute.disabled = true;
                    h2.innerHTML = "<span class='false'>INCORRECT <span class='span'>:(</span></span>";
                })
            }
        }
    })
    inp.maxLength = 1;
})
function reload() {
    window.location.reload();
}