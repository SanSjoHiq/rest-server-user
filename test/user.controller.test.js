const mongoose = require('mongoose');
const User = require('../Models/user')
const request = require('supertest');
const app = require('../app');
const user = require('../Models/user');


describe("user", () => {
    beforeEach((done) => {
        mongoose.connect('mongodb://localhost:27017/hiqUserDb', () => done())
    })

    afterAll((done) => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(() => done())
        })
    })
    const mockUser =  { id: "1", name: "Susanna Sjöberg"};
    // const mockUsers = [{name: "Susanna Sjöberg"}, {name: "Lou Cavalli"}, {name: "Elsa Bojrup"}];
    it("should return a object with users, GET ", () => {
        const createuser = User.create({id: 1, name: "Susanna Sjöberg"})
        request(app).get("/api/users")
        .then((res) => {
            expect(Object(res.body)).toBeTruthy();


            expect(res.body.id).toBe(createuser.id);
            expect(res.body.name).toBe(createuser.name)
        })
        // .end((err, res) => {
        //     expect(res.body).toEqual(expectedResponse)
        //     done()
        // })
        // expect(mockUser).toContain({id: 1, name: "Susanna Sjöberg"});
    });


    //TDD for get userById
    it("should test GET method for /api/greetings/:_id", () => {
        // const getUserById = {_id: 1, name: "Susanna Sjöberg"}
        // request(user).get('/users/1')
        // .expect(200)
        const expectedResponse = {...user}
        request(user)
        .get('/user/1')
        .expect(200)
        .end((err, res) => {
            expect(res.body).toEqual(expectedResponse)
            done();
        })
    })

})