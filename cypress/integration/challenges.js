describe('Challenges', () => {
  beforeEach(() => {
    cy.request('/cypress_rails_reset_state')
  })

  describe('list', () => {
    beforeEach(() => {
      cy.visit('/challenges')
    })

    it('can view', () => {
      cy.contains('Challenge fixture').click()
      cy.contains('Challenge fixture').should('exist')
    })
  })

  describe('create', () => {
    beforeEach(() => {
      cy.visit('/challenges/new')
    })

    it('can create a challenge', () => {
      cy.contains('Title').type('a title')
      cy.contains('Create Challenge').click()
      cy.contains('a title').should('exist')
    })
  })
})
