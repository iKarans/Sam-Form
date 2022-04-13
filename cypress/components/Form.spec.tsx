import * as React from 'react';
import { Form } from "../../src/components/Form/Form";
import { mount } from "@cypress/react";

describe("Testing App" , () => {
    it("should render form", () => {
        mount(<Form />);
        cy.get('form').should('be.exist');
        cy.get('[data-cy=username-input]').should('exist');
        cy.get('[data-cy=password-input]').should('exist');
        cy.get('[data-cy=submit-btn]').should('exist');
        cy.get('[data-cy=success-message]').should('not.exist');
    })
    it("should submit if meets validation", () => {
        mount(<Form />);
        cy.get('[data-cy=username-input]').type('karan12345')
        cy.get('[data-cy=password-input]').type('karan12345')
        cy.get('[data-cy=submit-btn]').click()
        cy.get('[data-cy=success-message]').should('exist').contains("User is valid");
        cy.get('form').should('not.exist');
    })
    it("should not submit if meets validation", () => {
        mount(<Form />);
        cy.get('[data-cy=username-input]').type('karan')
        cy.get('[data-cy=password-input]').type('karan12345')
        cy.get('[data-cy=submit-btn]').click()
        cy.get('[data-cy=success-message]').should('not.exist');
        cy.get('form').should('exist');
    })
})