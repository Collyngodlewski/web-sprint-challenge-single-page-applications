import {text} from "express";

describe('App', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza');
    })

    const textInput = () => cy.get('input[name=name]');
    const specialInput = () => cy.get('input[name=specialInstruction]');
    const orderBtn = () => cy.get("button[id='order-button']");
    const sizeInput =() => cy.get('select[name=size');
    const toppingCheck = () => cy.get('[type="checkbox"]').check('pepperoni', 'sausage')
    const sauceInput = () => cy.get('input[value=spinachAlfredo]');

    it('sanity check', ()=>{
        expect(1+2).toBe.equal(3);
    })


    it('the proper elements are showing', ()=>{
        textInput().should('exist');
        specialInput().should('exist');
        orderBtn().should('exist');
        sizeInput().should('exist');
        toppingCheck().should('exist');
        sauceInput().should('exist');
    })


    describe('Filling out inputs and ordering', ()=>{
        it('submit button starts out disabled', ()=>{
            orderBtn().should('be.disabled');
        })

        it('can type in the inputs and order',()=>{
            textInput().should('have.value','').type('Collyn').should('have.value','Collyn');
            specialInput().should('have.value','').type('more olives').should('have.value','more olives');
            cy.get('select').select('small').should('have.value','small');
            cy.get('[type="checkbox"]').check('pepperoni', 'sausage')
            orderBtn().should('not.be.disabled');
        })
    })





















})