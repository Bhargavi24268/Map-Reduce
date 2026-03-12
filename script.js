let chart;

function runMapReduce(){

let text = document.getElementById("inputText").value;
let file = document.getElementById("fileInput").files[0];

if(file){

let reader = new FileReader();

reader.onload = function(e){
processText(e.target.result);
};

reader.readAsText(file);

}else{

processText(text);

}

}

function processText(text){

let words = text
.toLowerCase()
.trim()
.split(/\W+/)
.filter(word => word !== "");

/* MAP PHASE */
let mapped = words.map(word => {
return [word,1];
});

/* SHUFFLE PHASE */
let shuffled = {};

mapped.forEach(pair => {

let word = pair[0];

if(!shuffled[word]){
shuffled[word] = [];
}

shuffled[word].push(1);

});

/* REDUCE PHASE */

let reduced = {};

for(let word in shuffled){

reduced[word] = shuffled[word].reduce((a,b)=>a+b);

}

/* OUTPUT */

let output = "";

for(let word in reduced){

output += word + " : " + reduced[word] + "\n";

}

let totalWords = words.length;

output = "Total Words : " + totalWords + "\n\n" + output;

document.getElementById("output").textContent = output;

/* CHART */

let labels = Object.keys(reduced);
let values = Object.values(reduced);

if(chart){
chart.destroy();
}

let ctx = document.getElementById("chart").getContext("2d");

chart = new Chart(ctx,{
type:"bar",
data:{
labels:labels,
datasets:[{
label:"Word Frequency",
data:values,
backgroundColor:"#3b82f6"
}]
},
options:{
plugins:{
legend:{display:false}
},
scales:{
y:{
beginAtZero:true
}
}
}
});

}

function clearText(){

document.getElementById("inputText").value="";
document.getElementById("output").textContent="";
document.getElementById("fileName").textContent="";

if(chart){
chart.destroy();
}

}

function showFileName(){

let file=document.getElementById("fileInput").files[0];

if(file){
document.getElementById("fileName").textContent="Uploaded File: "+file.name;
}

}
