import { Given, When, Then , And } from "cypress-cucumber-preprocessor/steps";
import automationPracticeFormPage from "../pages/AutomationPracticeFormPage";

Given('Navigate to {string}', (url) => {
    automationPracticeFormPage.openAt(url);
});
  
When('Enter {string} in the First Name field', (firstName) => {
    automationPracticeFormPage.inputFirstName(firstName);
});
  
And('Enter {string} in the Last Name field', (lastName) => {
    automationPracticeFormPage.inputLastName(lastName);
});
  
And('Enter {string} in the Email field', (email) => {
    automationPracticeFormPage.inputEmail(email);
})
  
And('Select {string} as the Gender', (gender) => {
    automationPracticeFormPage.inputGender(gender);
})
  
And('Enter {string} in the Mobile Number field', (mobileNumber) => {
    automationPracticeFormPage.inputMobileNumber(mobileNumber);
})
  
And('Select {string} as the Date of Birth', (dob) => {
    automationPracticeFormPage.inputDateOfBirth(dob);
})
  
And('Select {string} as the Subject', (subject) => {
    automationPracticeFormPage.inputSubject(subject);
})
  
And('Select {string} as the Hobby', (hobby) => {
    automationPracticeFormPage.inputHobby(hobby);
})

And('Upload a picture {string}', (fileName) => {
    automationPracticeFormPage.uploadPicture(fileName);
})

And('Enter {string} in the Current Address field', (address) => {
    automationPracticeFormPage.inputAddress(address);
})
  
And('Select {string} in the State dropdown', (state) => {
    automationPracticeFormPage.selectState(state);
})

And('Select {string} in the City dropdown', (city) => {
    automationPracticeFormPage.selectCity(city);
})
  
And('Click the Submit button', () => {
    automationPracticeFormPage.clickSubmitBtn();
})
  
Then('Verify should see a confirmation modal with the title {string}', (title) => {
    automationPracticeFormPage.verifyModalTitle(title);
})
  
And('Verify the modal should display the entered data correctly', () => {
    automationPracticeFormPage.verifyModalValues();
})