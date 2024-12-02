document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const favsong = document.getElementById('favsong').value;
    const favfeat = document.getElementById('favfeat').value;
    const firstimpressions = document.getElementById('firstimpressions').value;
    const formData = {
        fname: fname,
        lname: lname,
        favsong: favsong,
        favfeat: favfeat,
        firstimpressions: firstimpressions

    };

    if (!fname || !lname) {
        alert("First and Last Name Required!");
        return;
    }
    if (favsong === "blank") {
        alert("Please choose a favorite song.");
        return;
    }
    if (favfeat === "blank") {
        alert("Please choose a favorite feature.");
        return;
    }
    if (!firstimpressions) {
        alert("Please fill in first impressions.");
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
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));

    console.log(formData);
})