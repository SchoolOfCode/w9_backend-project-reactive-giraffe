import request from 'supertest';
import supertest from 'supertest';
import { test, expect } from "@jest/globals";
import app from "../app.js"

// NOTES: For PUT, PATCH and DELETE - update route (id) depending on table status
describe('GET all tickets', () => {
  test('returns all tickets', async () => {
    const res = await request(app).get('/tickets');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({success: true, payload: expect.any(Object)});
  });
})
  
describe("POST ticket", () => {
  test("Checks if a ticket is posted", async function () {
    const response = await supertest(app)
      .post("/tickets")
      .expect(200)
      .send({
        name: "Joe Bloggs",
        roomnumber: "1",
        message: "Help me writing a test",
        keywords: "jest, supertest",
        status: "waiting",
      });
    const actual = response.body;
    const expected = {
      success: true,
      payload: [
        {
        name: "Joe Bloggs",
        roomnumber: "1",
        message: "Help me writing a test",
        keywords: "jest, supertest",
        status: "waiting",
        ticket_id: expect.any(Number)
        },
      ],
    };
    expect(actual).toEqual(expected);
  });
});

describe("PUT tickets/11", () => {
  test("Checks if the ticket is updated", async function() {
      const response = await supertest(app)
        .put("/tickets/11")
        .expect(200)
        .send({
          name: "Joe Bloggs",
          roomnumber: "1",
          message: "Help me writing a test",
          keywords: "jest, supertest",
          status: "waiting",
        });
      const actual = response.body
      const expected = {
        success: true,
        payload: [
          {
            name: "Joe Bloggs",
            roomnumber: "1",
            message: "Help me writing a test",
            keywords: "jest, supertest",
            status: "waiting",
            ticket_id: expect.any(Number),
          },
        ],
      };
      expect(actual).toEqual(expected)
  })
});

describe("PATCH tickets/11", () => {
  test("Checks if the status value is updated", async function () {
    const response = await supertest(app)
      .patch("/tickets/11")
      .expect(200)
      .send({
        status: "in progress",
      });
    const actual = response.body;
    const expected = {
      success: true,
      payload: [
        {
          name: "Joe Bloggs",
          roomnumber: "1",
          message: "Help me writing a test",
          keywords: "jest, supertest",
          status: "in progress",
          ticket_id: expect.any(Number),
        },
      ],
    };
    expect(actual).toEqual(expected);
  });
});

describe("DELETE tickets/11", () => {
  test("Checks if the ticket is deleted", async function() {
        const response = await supertest(app)
            .delete("/tickets/11")
            .expect(200)
        const actual = response.body
        const expected = {
          success: true,
          payload: [
            {
              name: "Joe Bloggs",
              roomnumber: "1",
              message: "Help me writing a test",
              keywords: "jest, supertest",
              status: "in progress",
              ticket_id: expect.any(Number),
            },
          ],
        };
        expect(actual).toEqual(expected)
  })
});