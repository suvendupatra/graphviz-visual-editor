describe('Insertion of nodes into the graph', function() {

  it('Inserts a node when middle mouse button is clicked', function() {
    cy.startApplication();
    cy.clearAndRender('digraph {Alice -> Bob}');

    cy.node(1).should('exist');
    cy.node(2).should('exist');
    cy.edge(1).should('exist');

    cy.node(1).shouldHaveName('Alice');
    cy.node(2).shouldHaveName('Bob');
    cy.edge(1).shouldHaveName('Alice->Bob');

    cy.nodes().should('have.length', 2);
    cy.edges().should('have.length', 1);

    cy.get('#graph0').trigger('mousedown', 'topLeft', {which: 2});
    cy.get('#graph0').trigger('mouseup', 'topLeft', {which: 2});
    cy.waitForTransition();

    cy.node(1).should('exist');
    cy.node(2).should('exist');
    cy.node(3).should('exist');
    cy.edge(1).should('exist');

    cy.node(1).shouldHaveName('Alice');
    cy.node(2).shouldHaveName('Bob');
    cy.node(3).shouldHaveName('n2');
    cy.edge(1).shouldHaveName('Alice->Bob');

    cy.nodes().should('have.length', 3);
    cy.edges().should('have.length', 1);
  })

})
