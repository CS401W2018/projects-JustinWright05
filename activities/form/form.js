document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const formData = {
        fname: fname,
        lname: lname,
        password: document.getElementId('pword').value,
        state: document.getElementById('state').value

    };

    if (!fname || !lname) {
        alert("First name and last name required!");
        return;
    }
    if (!age || age < 18) {
        alert('You must be 18 years or older to submit this form.');
        return;
    }
    
    console.log(formData);
    alert("You submitted the form!")

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readystate === 4 && xhr.status === 200) {
            alert('Form submitted succesfully.');
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));

    console.log(formData);
});