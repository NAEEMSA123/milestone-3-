const form = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Form submission

form.addEventListener('submit', (event:Event)=>{
    event.preventDefault();


    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const exprience = (document.getElementById('exprience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>User Name:</b>${name}</p>
    <p><b>Email Adress:</b>${email}</p>
    <p><b>Phone Number:</b>${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Education</h3>
    <p>${exprience}</p>

    <h3>Education</h3>
    <p>${skills}</p>
    `;

    //display resume
    
    if(resumedisplayElement){
        resumedisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('the resume display element is missing')
    }
})