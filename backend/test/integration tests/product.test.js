const request = require("supertest")

const Product = require("../../models/products")

let server ;


describe("/api/products" , () => {

    beforeEach(() => {server = require("../../server")})
    afterEach(async () => {
        server.close() 
        await Product.remove({})
        })

    describe(' GET /getProducts' , () => {
        it("should return all products " , async () => {
            await Product.collection.insertMany([
                {title : "test1" } , 
                {itle : "test2"}
            ])

            const res = await request(server).get("/api/products/getProducts")
            expect(res.status).toBe(200)
            expect(res.body.length).toBe(2)
            expect(res.body.some( g => g.title === "test1")).toBeTruthy()
        })  
    })
})
