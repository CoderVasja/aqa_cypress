describe('Check link in header and footer', () => {

    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    })

    it('Check link in header', () => {
        cy.get('.header_nav a').should('have.text', 'Home');
        cy.get('.header_nav button').eq(0).should('have.text', 'About');
        cy.get('.header_nav button').eq(1).should('have.text', 'Contacts');
    })
    it('Check link in footer', () => {
        cy.get('.contacts_socials a').eq(0).should('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School');
        cy.get('.contacts_socials a').eq(1).should('have.attr', 'href', 'https://t.me/ithillel_kyiv');
        cy.get('.contacts_socials a').eq(2).should('have.attr', 'href', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
        cy.get('.contacts_socials a').eq(3).should('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/');
        cy.get('.contacts_socials a').eq(4).should('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/');
    })
})