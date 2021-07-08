// get the main div to insert content to...
let element = document.getElementById('mainDivContent');

// create a new fname element into the page...
let fname = document.createElement('div');
fname.innerHTML = `
    <label for="fname">First name:</label> 
    <input type="text" id="fname" name="fname">
    <br><br>
`;
element.appendChild(fname);

// create a new lname element into the page...
let lname = document.createElement('div');
lname.innerHTML = `
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname">
    <br><br>
`;
element.appendChild(lname);

// create a new phoneNumber element into the page...
let phoneNumber = document.createElement('div');
phoneNumber.innerHTML = `
    <label for="phoneNumber">Phone Number:</label> 
    <input type="text" id="phoneNumber" name="phoneNumber">
    <br><br>
`;
element.appendChild(phoneNumber);

// create a new submit element into the page...
let submit = document.createElement('div');
submit.innerHTML = `
    <input id="submit" type="button" value="Saved User">
    <br><br>
`;

submit.addEventListener("click", function() {
    let _fname = document.getElementById('fname').value;
    let _lname = document.getElementById('lname').value;
    let _phoneNumber = document.getElementById('phoneNumber').value;

    let person = {
        name: _fname,
        lastName: _lname,
        phoneNumber: _phoneNumber
    };
    
    let arrayOfPersons = [];

    let personListTemporal = window.localStorage.getItem('personLists');

    if(personListTemporal !== null){
        arrayOfPersons = JSON.parse(personListTemporal);
    }

    arrayOfPersons.push(person);
    
    window.localStorage.setItem('personLists', JSON.stringify(arrayOfPersons));

    alert('user saved...');
    console.log('message here....:');
    console.log('arrayOfPersons: in the console',arrayOfPersons);
    
});

element.appendChild(submit);

// create a new submit element into the page...
let listAll = document.createElement('div');
listAll.innerHTML = `
    <input id="listAll" type="button" value="List All Users">
    <br><br>
`;

listAll.addEventListener("click", function() {
    
    let arrayOfPersons = [];

    let personListTemporal = window.localStorage.getItem('personLists');

    if(personListTemporal !== ''){
        arrayOfPersons = JSON.parse(personListTemporal);
    }

    let listOfPersonsToShowInList = '<p>list of users in the database</p>';
    for(let item of arrayOfPersons){
        console.log(item);
        listOfPersonsToShowInList = listOfPersonsToShowInList + `<p>the user is: ${item.name} ${item.lastName} and phone number: ${item.phoneNumber} </p>`;
    }

    let displayList = document.createElement('div');
    displayList.innerHTML = listOfPersonsToShowInList;
    element.appendChild(displayList);

    console.log('message here....:');
    console.log('arrayOfPersons: in the console',arrayOfPersons);
    
});

element.appendChild(listAll);