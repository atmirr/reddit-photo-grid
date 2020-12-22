import postsJSON from '../../fixtures/api/posts.json';
import postsSecondPageJSON from '../../fixtures/api/posts-second-page.json';

context('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.reddit.com/r/cats/top.json', {
      body: postsJSON,
      delayMs: 100,
    });
    cy.visit('http://localhost:3000');
  });

  it('should display proper result when a valid keyword is entered in the search box', () => {
    cy.get('[placeholder="What are you looking for today?"]').type('cats');
    cy.get('[data-testid="images-grid"]').find('img').should('have.length', 25);
  });

  it('should display the loading indicator when the first search result is loading', () => {
    cy.get('[placeholder="What are you looking for today?"]').type('cats');
    cy.get('[data-testid="loading-indicator"]').should('be.visible');
  });

  it('should display the welcome message when the user clear the keyword from the search box', () => {
    cy.get('[placeholder="What are you looking for today?"]').type('cats');
    cy.get('[placeholder="What are you looking for today?"]').click().clear();
    cy.contains(
      'Start searching by typing a keyword in the search box.',
    ).should('be.visible');
  });

  it('should load more posts when user scroll down the page', () => {
    cy.intercept('GET', 'https://www.reddit.com/r/cats/top.json', {
      body: postsSecondPageJSON,
      query: { after: 't3_jvwchx' },
      delayMs: 100,
    });

    cy.get('[placeholder="What are you looking for today?"]').type('cats');
    cy.get('[data-testid="images-grid"]')
      .find('img')
      .then(() => {
        cy.scrollTo('bottom', { easing: 'linear', duration: 800 });
        cy.get('[data-testid="loading-indicator"]').should('be.visible');
        cy.get('[data-testid="images-grid"]')
          .find('img')
          .should('have.length', 50);
      });
  });

  it('should make the header compact when the user scroll the page down more than 30px if we had any long search result', () => {
    cy.get('[placeholder="What are you looking for today?"]').type('cats');
    cy.get('[data-testid="images-grid"]')
      .find('img')
      .then(() => {
        cy.get('[data-testid="header"]').should('have.css', 'height', '100px');
        cy.scrollTo(0, 31, { easing: 'linear', duration: 800 });
        cy.get('[data-testid="header"]').should('have.css', 'height', '70px');
      });
  });
});
