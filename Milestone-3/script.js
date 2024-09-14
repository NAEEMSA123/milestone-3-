var form = document.getElementById('resume-form');
var resumedisplayElement = document.getElementById('resume-display');
// Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var exprience = document.getElementById('exprience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>UserName:</b>".concat(name, "</p>\n    <p><b>Email Adress:</b>").concat(email, "</p>\n    <p><b>Phone Number:</b>").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(exprience, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(skills, "</p>\n    ");
    //display resume
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
