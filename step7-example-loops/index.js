
// Get Reference from table...
let mytable1 = document.getElementById('mytable1');

// Create a new element tr1 of type tr .
let tr1 = document.createElement('tr');

// Create a new element td2 of type td.
let td1 = document.createElement('td');
// Set the value of this td1.
td1.innerHTML = '1';

// Create a new element td2 of type td.
let td2 = document.createElement('td');
// Set the value of this td2.
td2.innerHTML = '2';

// Create a new element td3 of type td.
let td3 = document.createElement('td');
// Set the value of this td3.
td3.innerHTML = '3';

// Append the td1, td2 and td3 to the tr1.
tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);

// Append the tr1 to the mytable1.
mytable1.appendChild(tr1);

// Homework create a new TR... with 4 , 5 , 6
