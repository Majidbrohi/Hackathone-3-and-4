

const form = document.getElementById('formcv') as HTMLFormElement;
const cvdisplay = document.getElementById('displayr') as HTMLDivElement;
const update=document.getElementById('update') as HTMLButtonElement;


function updatefrom(){
    const form = document.getElementById('formcv') as HTMLFormElement;
    form.style.display = '';
}

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    console.log("Form submitted");

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const ph = (document.getElementById('ph') as HTMLInputElement).value;
    const add = (document.getElementById('add') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const exp = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const cvhtml = `
    <h1><b>Resume</b></h1>
    <hr>
     <h1><b>Personal Info</b></h1>
     <p><b>Name:</b> ${name}</p>
     <p><b>Email:</b> ${email}</p>
     <p><b>Phone Number:</b> ${ph}</p>
     <p><b>Address:</b> ${add}</p>
     <h1><b>Education</b></h1>
     <hr>
     <p>${education}</p>
     <h1><b>Experience</b></h1>
     <hr>
     <p>${exp}</p>
     <h1><b>Skills</b></h1>
     <hr>
     <p>${skills}</p>
     
    `;

    if (cvdisplay) {
        cvdisplay.innerHTML = cvhtml;
        // Hide the form
        form.style.display = 'none';
        update.style.display='block';
    } else {
        console.error("Sorry, display area not found.");
    }
});
