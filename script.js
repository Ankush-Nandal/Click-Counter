var box = document.getElementById('box');
var countClick = document.getElementById('click-count');
count = 0;
box.addEventListener('click', function() {
    count++;
    console.log(count);
    countClick.innerText = count + " ";
});
var box1 = document.getElementById('box');
box1.addEventListener('mousedown', function() {
    box1.style.backgroundColor = "red";
    box1.style.border = "2px solid cyan";
    // box1.style.color = "blue";

});
var box2 = document.getElementById('box');
box1.addEventListener('mouseup', function() {
    box2.style.backgroundColor = "cyan";
    box2.style.border = "2px solid red";

    // box1.style.color = "blue";

});


var btn = document.getElementById('btn1');
var countClick1 = document.getElementById('count-click');
//var countClick = document.getElementById('click-count');
//count = 0;
btn.addEventListener('click', function() {
    count = 0;
    console.log(count);
    countClick.innerText = count + " ";
    box1.style.backgroundColor = "cyan";
    box1.style.border = "2px solid red";
    // box1.style.color = "blue";
});
// count = 0;
// btn1.addEventListener('click', function() {
//     count = 0;
//     console.log(count);
//     countClick.innerText = count + " ";
// });