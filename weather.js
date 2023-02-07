let data = [{city:'Rome' , 'temp in C':27},{city:'NYC' , 'temp in C':0},{city:'KTM' , 'temp in C':27}]
let expected = {'hottestCity':'Rome' , 'coldestCity': 'NYC'}



var weatherResults = function(data)
{
  let m = data.sort((p1, p2) => p1['temp in C'] < p2['temp in C'] ? 1 : -1);
  let a = {"hottestCity": m[0].city, "coldestCity": m[m.length - 1].city};

  return a;
}

var results2 = function(data)
{
  let d = data.map(getCityTempObj);

  let min = Math.min()
}

function getCityTempObj(item) {
  let obj = {};
  obj[item['city']] = item['temp in C'];

  return obj;
}


let arr = [{city:'Rome' , 'temp in C':27},{city:'NYC' , 'temp in C':0}]



const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

//console.log(persons.map(getFullName)); // [ 'Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb' ];
//console.log(arr.map(getCityTempObj));

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}

var myArray = [
  {"ID": 1, "Cost": 200},
  {"ID": 2, "Cost": 1000},
  {"ID": 3, "Cost": 50},
  {"ID": 4, "Cost": 500}
]

let data = [{city:'Rome' , 'temp in C':27},{city:'NYC' , 'temp in C':0},{city:'KTM' , 'temp in C':27}]

let ex = myArray.reduce(function(prev, curr) {
  return prev.Cost < curr.Cost ? prev : curr;
});

console.log(ex)

// min
let xe = data.reduce(function(prev, curr) {
  return prev['temp in C'] < curr['temp in C'] ? prev : curr
});

let v = [ { Rome: 27 }, { NYC: 0 } ]
let cityTemp = {city: temp}



console.log(xe);
