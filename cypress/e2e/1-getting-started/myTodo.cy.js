describe('Todos Home page', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
            // root-level hook
            // runs once before all tests
    })

    it('Header renders properly', () => {

        cy.get('.header').contains('todos')

    })
    it('Input renders and works properly', () => {
        cy.get('.new-todo') // yields the element
            .should('have.attr', 'placeholder') // yields the "href" attribute
            .and('equal', 'What needs to be done?') // checks the "href" value
        cy.get('.new-todo').should('have.value', '')
        cy.get('.new-todo').type('Bring grocery')
        cy.get('.new-todo').should('have.value', 'Bring grocery')
        cy.get('.new-todo').type('{enter}')
        cy.get('.new-todo').should('have.value', '')
        cy.get('.todo-list li:last-child label').contains('Bring grocery')
        cy.get('.todo-list li').should('have.length', 3)
    })

    it('Check task works', () => {
        cy.get('.todo-list li:first-child .toggle').click()
        cy.get('.completed label').should('have.css', 'text-decoration', 'line-through solid rgb(205, 205, 205)')

    })
})