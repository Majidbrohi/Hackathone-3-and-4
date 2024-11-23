var form = document.getElementById('formcv');
var cvdisplay = document.getElementById('displayr');
var update = document.getElementById('update');
function updatefrom() {
    var form = document.getElementById('formcv');
    form.style.display = '';
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Form submitted");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var ph = document.getElementById('ph').value;
    var add = document.getElementById('add').value;
    var education = document.getElementById('education').value;
    var exp = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var cvhtml = "\n    <h1><b>Resume</b></h1>\n    <hr>\n     <h1><b>Personal Info</b></h1>\n     <p><b>Name:</b> ".concat(name, "</p>\n     <p><b>Email:</b> ").concat(email, "</p>\n     <p><b>Phone Number:</b> ").concat(ph, "</p>\n     <p><b>Address:</b> ").concat(add, "</p>\n     <h1><b>Education</b></h1>\n     <hr>\n     <p>").concat(education, "</p>\n     <h1><b>Experience</b></h1>\n     <hr>\n     <p>").concat(exp, "</p>\n     <h1><b>Skills</b></h1>\n     <hr>\n     <p>").concat(skills, "</p>\n     \n    ");
    if (cvdisplay) {
        cvdisplay.innerHTML = cvhtml;

        
        form.style.display = 'none';
        update.style.display = 'block';
    }
    else {
        console.error("Sorry, display area not found.");
    }
});
