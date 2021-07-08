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

    const person = {
        name: _fname,
        lastName: _lname,
        phoneNumber: _phoneNumber
    };
    
    window.localStorage.setItem('user', JSON.stringify(person));

    // check on applicaiton local storage
    
});

element.appendChild(submit);

// Example got from: https://www.w3schools.com/tags/att_input_name.asp 