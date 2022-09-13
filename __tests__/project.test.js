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

  describe("GET request along the path of /api/topics.. returns an array of topics", () => {
    test(" get an array of topics with the status code 200", () => {
      return request(app)
        .get("/api/topics")
        .expect(200)
        .then((response) => {
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

  describe.only("GET request along the path of /api/article/:article_id.. returns an object of an article", () => {
    test(" get an article object with the status code 200", () => {
      const article_Id=1;
      return request(app)
        .get(`/api/article/${article_Id}`)
        .expect(200)
        .then((response) => {
          expect(response.body).toHaveProperty("author", "butter_bridge");
          expect(response.body).toHaveProperty("title", "Living in the shadow of a great man");
          expect(response.body).toHaveProperty("body", "I find this existence challenging");
          expect(response.body).toHaveProperty("topic", "mitch");
          expect(response.body).toHaveProperty("created_at", expect.any(String));
          expect(response.body).toHaveProperty("votes", expect.any(Number));
        });
    });
    test(" try to get an article object that does not exist giving a status 404", () => {
      const article_Id=99999;
      return request(app)
        .get(`/api/article/${article_Id}`)
        .expect(404)
        .then((response) => {
          expect(response.body).toEqual({});
        });
    })
    test(" try to get an article object when the article_id is not a number, giving a status 400", () => {
      const article_Id='ABC';
      return request(app)
        .get(`/api/article/${article_Id}`)
        .expect(400)
        .then((response) => {
          expect(response.body).toEqual({status: 400, msg: "bad request"});
        });
    })
  });
  describe("GET request along the path of /api/users.. returns an array of users", () => {
    test(" get an array of users with the status code 200", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then((response) => {
          expect(response.body.length > 0).toBe(true);
          expect(
            response.body.forEach((users) => {

              expect(users).toHaveProperty(
                "username",
                expect.any(String)
              );
              expect(users).toHaveProperty(
                "name",
                expect.any(String)
              );
              expect(users).toHaveProperty(
                "avatar_url",
                expect.any(String)
              );

            })
          );
        });
    })
  });
