const greeting = require('supertest');
const user = require('../Models/user')

describe("user", () => {

    const mockUsers = [{name: "Susanna Sjöberg"}, {name: "Lou Cavalli"}, {name: "Elsa Bojrup"}];
    it("should return a object with users", () => {
        expect(mockUsers).toContainEqual({name: "Susanna Sjöberg"});
    });


    //TDD for get userById
    it("should test GET methid for /api/greetings/:_id", () => {
        const getUserById = {_id: 1, name: "Susanna Sjöberg"}
        request(user).get('api/users/:_id')
        .expect(200)
    })

});