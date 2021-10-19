const greeting = require('supertest');



describe("user", () => {

    const mockUsers = [{name: "Susanna Sjöberg"}, {name: "Lou Cavalli"}, {name: "Elsa Bojrup"}];
    it("should return a object with users", () => {
        expect(mockUsers).toContainEqual({name: "Susanna Sjöberg"});
    })
});