document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const card = document.getElementById('card').value;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('pword').value;
    const cdate = document.getElementById('cdate').value;
    const scode = document.getElementById('scode').value;
    const phone = document.getElementById('phone').value;
    const formData = {
        fname: fname,
        lname: lname,
        card: card,
        cdate: cdate,
        scode: scode,
        phone: phone

    };

    if (!fname || !lname) {
        alert("First name and last name required!");
        return;
    }
    if (card.length !== 12) {
        alert("Credit card must be 12 characters long!");
        return;
    }
    if (!scode) {
        alert("Security Code required!");
        return;
    }
    if (scode.length !== 3) {
        alert("Security Code must be 3 characters long!");
        return;
    }
    if (!phone) {
        alert("Phone number required");
        return;
    }
    if (phone.length !== 10) {
        alert("Phone number must be 10 characters long!");
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response =  JSON.parse(xhr.responseText)
            document.getElementById("message").innerHTML = response.message
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error sumbitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));

    console.log(formData);
})