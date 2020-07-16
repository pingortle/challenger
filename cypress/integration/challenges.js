describe('Challenges', () => {
  beforeEach(() => {
    cy.request('/cypress_rails_reset_state')
    cy.visit('/')
  })

  it('can create a challenge', () => {
    cy.contains('Title').type('a title')
    cy.contains('Create Challenge').click()
    cy.contains('Title').should('have.value', '')
  })
})
