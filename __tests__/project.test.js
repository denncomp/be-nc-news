const db = require("../db/connection.js");
const { app } = require("../db/seeds/app.js");
const request = require("supertest");
const seed = require("../db/seeds/seed");
const test_data = require("../db/data/test-data"); // auto looks for index.js

afterAll(() => {
  db.end();
});

beforeEach(() => {
  return seed(test_data); //< seed(seed)
});

describe("using the App.js to run our database of topics", () => {
  describe("GET request along the path of /api/topics.. returns an array of topics", () => {
    test(" get an array of topics with the status code 200", () => {
      return request(app)
        .get("/api/topics")
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body.topics)).toBe(true);
          expect(response.body.topics.length > 0).toBe(true);
          expect(
            response.body.topics.forEach((topics) => {
              expect(topics).toHaveProperty(
                "description",
                expect.any(String)
              );
              expect(topics).toHaveProperty(
                "slug",
                expect.any(String)
              );
            })
          );
        });
    })
  });
});
