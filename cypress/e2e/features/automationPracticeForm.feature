@Regression
Feature: Automation Practice Form Feature

    @Positive
    Scenario: Fill out the form with valid data
        Given Navigate to "https://demoqa.com/automation-practice-form"
        When Enter "Steven" in the First Name field
        And Enter "Hadi" in the Last Name field
        And Enter "steven@example.com" in the Email field
        And Select "Male" as the Gender
        And Enter "0812345678" in the Mobile Number field
        And Select "1 January 2000" as the Date of Birth
        And Select "Maths" as the Subject
        And Select "Sports" as the Hobby
        And Upload a picture "IstanaBuah.png"
        And Enter "Semarang" in the Current Address field
        And Select "NCR" in the State dropdown
        And Select "Delhi" in the City dropdown
        And Click the Submit button
        Then Verify should see a confirmation modal with the title "Thanks for submitting the form"
        And Verify the modal should display the entered data correctly
