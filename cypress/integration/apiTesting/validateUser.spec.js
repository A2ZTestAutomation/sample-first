/// <reference types='cypress' />

describe('Rest API Samples', () => {
    const baseUrl ='https://jsonplaceholder.typicode.com/'
    const usrbaseUrl = 'https://reqres.in'
    //Method1
    it.only('Passing cred with URL', () => {
        cy.request(baseUrl.concat('users')).as('userResp')
        cy.get('@userResp').its('status').should('equals', 200)
        cy.get('@userResp')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })
    //Method2
    it.skip('Get User Data', () => {
        cy.request('GET', usrbaseUrl.concat('/api/users')).then((resp) => {
            expect(resp.body.data).to.have.length(6)
            expect(resp.body.data[0].first_name).equal('George')
        })
    })
    it('Create user', () =>{
        //Method1 - as json 
        let userRec = {
            name:'TestUser',
            job:'Analyst'
            }
            
        cy.request('POST', usrbaseUrl.concat('/api/users'), userRec).then((resp) => {
            expect(resp.status).equal(201)
            expect(resp.body.name).equal('TestUser')
        })
        // Method2
        cy.request('POST', usrbaseUrl.concat('/api/users'), userRec)
            .its('body')
            .should('include', {name:'TestUser'})
    })
    it('Update User', () => {
        let userRec1 = {
            name:'TestUserTrg',
            job:'TestAnalyst'
            }
        cy.request('PUT', usrbaseUrl.concat('/api/users/2'), userRec1).then((resp) => {
            expect(resp.status).equal(200)
            expect(resp.body.name).equal(userRec1.name)
            expect(resp.body.job).equal(userRec1.job)
        })
    })
    it('Delete User', () => {
        cy.request('DELETE', usrbaseUrl.concat('/api/users/2')).then((resp) => {
            expect(resp.status).equal(204)
        })
    })
})