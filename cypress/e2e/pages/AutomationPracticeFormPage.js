class AutomationPracticeFormPage {
    openAt(url) {
        cy.visit(url, { failOnStatusCode: false });
    }

    inputFirstName(firstName) {
        cy.get('#firstName').type(firstName).as('firstName');
        return this;
    }

    inputLastName(lastName) {
        cy.get('#lastName').type(lastName).as('lastName');
        return this;
    }

    inputEmail(email) {
        cy.get('#userEmail').type(email);
        return this;
    }

    inputGender(gender) {
        cy.contains('.custom-control-label', gender).click();
        return this;
    }

    inputMobileNumber(mobileNumber) {
        cy.get('#userNumber').type(mobileNumber);
        return this;
    }

    inputDateOfBirth(dob) {
        const [day, month, year] = dob.split(' ');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select(month);
        cy.get('.react-datepicker__year-select').select(year);
        cy.xpath('//div[contains(@class, "react-datepicker__day") and not(contains(@class, "react-datepicker__day--outside-month")) and text()="' + day + '"]').click();
        return this;
    }

    inputSubject(subject) {
        cy.get('#subjectsInput').type(`${subject}{enter}`);
        return this;
    }

    inputHobby(hobby) {
        cy.contains('.custom-control-label', hobby).click();
        return this;
    }

    uploadPicture(fileName) {
        cy.get('#uploadPicture').attachFile('images/' + fileName);
        return this;
    }

    inputAddress(address) {
        cy.get('#currentAddress').type(address);
        return this;
    }

    selectState(state) {
        cy.get('#state').click();
        cy.xpath('//div[contains(@class, "css-26l3qy-menu")]//div[text()="' + state + '"]').click();
        return this;
    }

    selectCity(city) {
        cy.get('#city').click();
        cy.xpath('//div[contains(@class, "css-26l3qy-menu")]//div[text()="' + city + '"]').click();
        return this;
    }

    clickSubmitBtn() {
        cy.get('#submit').click({ force: true });
        return this;
    }

    verifyModalTitle(title) {
        return cy.get('.modal-title').should('have.text', title);
    }

    verifyModalValues() {
        // cy.get('@firstName').then((firstName) => {
        //     cy.get('@lastName').then((lastName) => {
        //         // Pastikan firstName dan lastName adalah string
        //         const fullName = `${String(firstName)} ${String(lastName)}`;  // Gabungkan firstName dan lastName

        //         // Memeriksa apakah gabungan fullName ada di dalam tabel modal
        //         cy.get('.modal-table').should('contain.text', fullName);
        //     });
        // });
        return cy.get('table').within(() => {
            cy.contains('td', 'Steven Hadi').should('exist');
            cy.contains('td', 'steven@example.com').should('exist');
            cy.contains('td', 'Male').should('exist');
            cy.contains('td', '0812345678').should('exist');
            cy.contains('td', '01 January,2000').should('exist');
            cy.contains('td', 'Maths').should('exist');
            cy.contains('td', 'Sports').should('exist');
            cy.contains('td', 'IstanaBuah.png').should('exist');
            cy.contains('td', 'Semarang').should('exist');
            cy.contains('td', 'NCR Delhi').should('exist');
            });
    }
}

const automationPracticeFormPage = new AutomationPracticeFormPage()
export default automationPracticeFormPage