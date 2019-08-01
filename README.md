# Droom API

Back-end build week project for droom

# Deployed Backend

https://droom-build-week.herokuapp.com/

#### Production

- [Express](https://www.npmjs.com/package/express): `Fast, unopinionated, minimalist web framework for Node.js`
- [Body parser](https://www.npmjs.com/package/body-parser): `Parse incoming request bodies in a middleware before your handlers`
- [Bcryptjs](https://www.npmjs.com/package/body-parser): `Allows you to store passwords securely in your database`
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): `Generate and verify json web tokens to maintain a stateless api`
- [Knex](https://www.npmjs.com/package/knex): `Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use`
- [Knex-cleaner](https://www.npmjs.com/package/knex-cleaner): `Helper library to clean a PostgreSQL, MySQL or SQLite3 database tables using Knex`
- [Sqlite3](https://www.npmjs.com/package/sqlite3): `Asynchronous, non-blocking SQLite3 bindings for Node.js.`
- [Morgan](https://www.npmjs.com/package/morgan): `HTTP request logger middleware for Node.js`
- [Cors](https://www.npmjs.com/package/cors): `CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS`
- [Helmet](https://www.npmjs.com/package/helmet): `Helmet helps you secure your Express apps by setting various HTTP headers`
- [Dotenv](https://www.npmjs.com/package/dotenv): `Dotenv is a zero-dependency module that loads environment variables from a .env file`

#### Developer

- [Nodemon](https://www.npmjs.com/package/nodemon): `nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected`

# _Setup_

(# <--- signifies comment)

In your terminal run:

```
# Install dependencies
npm install

# Starts express server using nodemon
npm run server
```

# _Table of Contents_

- [Test User Accounts](#test-user-accounts)
- [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
- [Auth Routes](#auth-routes)
  - [Login User](#login)
  - [Register User](#register)
- [Applicant Routes](#applicant-routes)
  - [Get Applicant](#get-applicant)
  - [Add Applicant](#add-applicant)
  - [Update Applicant](#update-applicant)
  - [Delete Applicant](#delete-applicant)
- [Education Routes](#education-routes)
  - [Get Education](#get-education)
  - [Add Education](#add-education)
  - [Update Education](#update-education)
  - [Delete Education](#delete-education)
- [Experience Routes](#experience-routes)
  - [Get Experience](#get-experience)
  - [Add Experience](#add-experience)
  - [Update Experience](#update-experience)
  - [Delete Experience](#delete-experience)
- [Skills Routes](#applicantskills-routes)
  - [Get Skills](#get-skills)
  - [Add Skills](#add-skills)
  - [Update Skills](#update-skill)
  - [Delete Skills](#delete-skill)
- [Company Routes](#company-routes)
  - [Get Companies](#get-companies)
  - [Get Company](#get-company)
  - [Add Company](#add-company)
  - [Update Company](#update-company)
  - [Delete Company](#delete-company)
- [Job Routes](#job-routes)
  - [Get Jobs](#get-jobs)
  - [Get Job](#get-job)
  - [Add Job](#add-job)
  - [Update Job](#update-job)
  - [Delete Job](#delete-job)
- [Job Skills Routes](#job-skills-routes)
  - [Get Job Skills](#get-job-skills)
  - [Get Job Skill](#get-job-skill)
  - [Add Job Skill](#add-job-skill)
  - [Update Job Skill](#update-job-skill)
  - [Delete Job Skill](#update-job-skill)
- [Match Routes](#match-routes)
  - [Get Matches](#get-matches)
    - [Get Company Matches For Applicant](#get-matches-for-applicant)
    - [Get Applicant Matches For Company](#get-matches-for-company-for-all-jobs)
  - [Get Matched](#get-matched)
  - [Add Match](#add-match)

# **Test User Accounts**

## Job Applicant Accounts

#### Arshak Smith

```
email: arshak@gmail.com
password: password
```

#### Tigran Dough

```
email: Tigran@gmail.com
password: password
```

#### Gene Jones

```
  email: gene@gmail.com
  password: password
```

## Company Accounts

#### Microsoft

```
  email: microsoft@microsoft.com
  password: password
```

#### Apple

```
email: apple@apple.com
password: password
```

#### Github

```
email: github@github.com
password: password
```

# **SUMMARY TABLE OF API ENDPOINTS**

| Table | Method | Endpoint           | Description                                                                                                                                                                                    |
| ----- | ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| users | POST   | /api/auth/register | Creates a new `user` profile using the information sent inside the `body` of the request and returns a message along with the new `user` and a JSON Web Token in the `body` of the response.   |
| users | POST   | /api/auth/login    | Uses the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the `user` profile and a JSON Web Token token in the `body` of the response. |

# AUTH ROUTES

## **REGISTER**

### **Registers a user**

_Method Url:_ `/api/auth/register`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description    |
| ---------- | ------ | -------- | -------------- |
| `email`    | String | Yes      | Must be unique |
| `password` | String | Yes      |                |

_example:_

```

{
  "email": "email@gmail.com"
  "password": "password123",
}

```

#### Response

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201` and a body as below.

_example:_

```

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI3IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ0MzM1NjUxLCJleHAiOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xFXoX"
}

```

##### 400 (Bad Request)

> If you are missing a email or password for registration, the endpoint will return an HTTP response with a status code `400` and a body as below.

_example:_

```

{
  "message": "Oops, looks like this email already exists"
}

```

##### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while registering"
}

```

---

## **LOGIN**

### **Logs a user in**

_Method Url:_ `/api/auth/login`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description                                                        |
| ---------- | ------ | -------- | ------------------------------------------------------------------ |
| `email`    | String | Yes      | Must match a email in the database                                 |
| `password` | String | Yes      | Must match a password in the database corresponding to email above |

_example:_

```

{
  "email": "email@gmail.com"
  "password": "password123",
}

```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MDwiaWF0IjoxNTQ0MzM1NjUxLCJleHAuOjE1NzU4OTMyNTF9.uqd2OHBYkGQpwjLTPPiPWYkYOKlG7whQDFkk46xGXnE",
}

```

##### 401 (Unauthorized)

> If you failt to login, the endpoint will return an HTTP response with a status code `401` which indicates the email and or password entered is not valid.

_example:_

```

{
  message: "Oops, username or password is incorrect"
}

```

##### 500 (Bad Request)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while logging in"
}

```
# APPLICANT ROUTES

## **GET APPLICANT**

### **Get applicant profile by user id**

_Method Url:_ `/api/applicants/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If the user profile is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

_example:_

```

{
  "id": 1,
  "userId": 1,
  "firstName": "John",
  "lastName": "Dough",
  "profilePicture": "",
  "month": 2,
  "day": 4,
  "year": 1994,
  "country": "US",
  "state": "California",
  "city": "San Francisco",
  "zipcode": 93552
}

```

#### 404 (Not Found)

> If the provided `userId` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that profile doesn't exist"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while getting that profile"
}

```

## **ADD applicant**

### **Add an applicant**

_Method Url:_ `/api/applicants`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name             | type    | required | description                            |
| ---------------- | ------- | -------- | -------------------------------------- |
| `userId`         | Integer | Yes      | Must match a user's id in the database |
| `firstName`      | String  | Yes      | Cannot be an empty field               |
| `lastName`       | String  | Yes      | Cannot be an empty field               |
| `country`        | String  | Yes      | Cannot be an empty field               |
| `state`          | String  | Yes      | Cannot be an empty field               |
| `city`           | String  | Yes      | Cannot be an empty field               |
| `zipcode`        | Integer | Yes      | Cannot be an empty field               |
| `address`        | String  | Yes      | Cannot be an empty field               |

_example:_

```

{
  "userId": 1,
  "applicant": {
    "firstName": "Arshak",
    "lastName": "Smith",
    "country": "US",
    "state": "California",
    "city": "San Francisco",
    "zipcode": 93552,
    "address": "123 Abc St"
  }
}

```

#### Response

##### 201 (Created)

> If you successfully create a applicant profile, the endpoint will return an HTTP response with a status code `201` and a body as below.

_example:_

```

{
    "id": 1,
    "firstName": "Arshak",
    "lastName": "Smith",
    "country": "US",
    "state": "California",
    "city": "San Francisco",
    "zipcode": 93552,
    "address": "123 Abc St"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while creating your profile"
}

```

## **UPDATE APPLICANT**

### **Update a applicant by user id**

_Method Url:_ `/api/applicants/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description             |
| ---- | ------- | -------- | ----------------------- |
| id   | Integer | Yes      | ID of a specific applicant |

#### Body

| name             | type    | required | description              |
| ---------------- | ------- | -------- | ------------------------ |
| `firstName`      | String  | Yes      | Cannot be an empty field |
| `lastName`       | String  | Yes      | Cannot be an empty field |
| `country`        | String  | Yes      | Cannot be an empty field |
| `state`          | String  | Yes      | Cannot be an empty field |
| `city`           | String  | Yes      | Cannot be an empty field |
| `zipcode`        | Integer | Yes      | Cannot be an empty field |
| `address`        | String  | Yes      | Cannot be an empty field |


_example:_

```

{
  "firstName": "Arshak Updated",
  "lastName": "Dough",
  "country": "US",
  "state": "California",
  "city": "San Francisco",
  "zipcode": 93552,
  "address": "123 ABC st."
}

```

#### Response

##### 200 (OK)

> If a applicant with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "firstName": "Arshak Updated",
  "lastName": "Dough",
  "country": "US",
  "state": "California",
  "city": "San Francisco",
  "zipcode": 93552,
  "address": "123 ABC st."
}

```

#### 404 (Not Found)

> If the applicant profile for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, doesn't look like that profile exists"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while updating this profile"
}

```

## **DELETE APPLICANT**

### **Delete a applicant by user id**

_Method Url:_ `/api/applicants/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description             |
| ---- | ------- | -------- | ----------------------- |
| id   | Integer | Yes      | ID of a specific applicant |

#### Response

##### 200 (OK)

> If a applicant with the specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "message": "Profile successfully deleted"
}

```

#### 404 (Not Found)

> If the applicant profile for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, doesn't look like that profile exists"
}

```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while deleting this profile
}

```

# EDUCATION ROUTES

## **GET EDUCATION**

### **Get education by user id**

_Method Url:_ `/api/education/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If applicant education is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

_example:_

```

[
  {
    "id": 1,
    "applicantId": 1,
    "eduSchool": "Cleveland State University",
    "eduDegree": "Bachelor of Science in Electrical Engineering",
    "eduDescription": "Electrical Engineering is a profession that makes creative use of mathematics and science to solve practical problems in electricity, electronics and related areas. The goal of the Electrical Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
    "eduStartDate": "1-1-2014",
    "eduEndDate": "1-1-2018"
  },
  {
    "id": 2,
    "applicantId": 1,
    "eduSchool": "Cleveland State University",
    "eduDegree": "Bachelor of Science in Computer Engineering",
    "eduDescription": "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
    "eduStartDate": "1-1-2019",
    "eduEndDate": "1-1-2023"
  }
]

```

#### 404 (Not Found)

> A `404` (Not Found) response has `two` possible outcomes one if the `user` profile doesn't have any education or if the provided `user` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, this profile doesn't have education yet"
}

```

or

```

{
  "message": "Oops, doesn't look like that profile exists"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while fetching this education"
}

```

## **ADD EDUCATION**

### **Add education for a applicant profile by user id**

_Method Url:_ `/api/education`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name             | type    | required | description                            |
| ---------------- | ------- | -------- | -------------------------------------- |
| `userId`         | Integer | Yes      | Must match a user's id in the database |
| `eduSchool`      | String  | Yes      | Cannot be an empty field               |
| `eduDegree`      | String  | Yes      | Cannot be an empty field               |
| `eduDescription` | String  | Yes      | Cannot be an empty field               |
| `eduStartDate`   | String  | Yes      | Cannot be an empty field               |
| `eduEndDate`     | String  | Yes      | Cannot be an empty field               |

_example:_

```

{
  "userId": 1,
  "applicantEducation": [
    {
      "eduSchool":"Cleveland State University",
      "eduDegree": "Bachelor of Science in Computer Engineering",
      "eduDescription": "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
      "eduStart":"1-1-2019",
      "eduEnd": "1-1-2023"
    },
    {
      "eduSchool":"Cleveland State University",
      "eduDegree": "Bachelor of Science in Electrical Engineering",
      "eduDescription": "Electrical Engineering is a profession that makes creative use of mathematics and science to solve practical problems in electricity, electronics and related areas. The goal of the Electrical Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
      "eduStart":"1-1-2014",
      "eduEnd": "1-1-2018"
    }
  ]
}

```

#### Response

##### 201 (Created)

> If you successfully create applicant education, the endpoint will return an HTTP response with a status code `201` and a body as below.

_example:_

```

[
  {
    "id": 1,
    "applicantId": 1,
    "eduSchool": "Cleveland State University",
    "eduDegree": "Bachelor of Science in Computer Engineering",
    "eduDescription": "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
    "eduStart": "1-1-2019",
    "eduEnd": "1-1-2023"
  },
  {
    "id": 2,
    "applicantId": 1,
    "eduSchool": "Cleveland State University",
    "eduDegree": "Bachelor of Science in Electrical Engineering",
    "eduDescription": "Electrical Engineering is a profession that makes creative use of mathematics and science to solve practical problems in electricity, electronics and related areas. The goal of the Electrical Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
    "eduStart": "1-1-2014",
    "eduEnd": "1-1-2018"
  }
]

```

#### 404 (Not Found)

> If the applicant profile for the specified `userId` can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, that user profile doesn't exist"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a school"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Sorry, but something went wrong while trying to add education"
}

```

## **UPDATE EDUCATION**

### **Update individual education objects using education id**

_Method Url:_ `/api/education/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                       |
| ---- | ------- | -------- | --------------------------------- |
| id   | Integer | Yes      | ID of a specific education object |

#### Body

| name             | type   | required | description              |
| ---------------- | ------ | -------- | ------------------------ |
| `eduSchool`      | String | Yes      | Cannot be an empty field |
| `eduDegree`  | String | Yes      | Cannot be an empty field |
| `eduDescription` | String | Yes      | Cannot be an empty field |
| `eduStartDate`   | String | Yes      | Cannot be an empty field |
| `eduEndDate`     | String | Yes      | Cannot be an empty field |

_example:_

```

{
  "eduSchool": "Cleveland State University Updated",
  "eduDegree": "Bachelor of Science in Computer Engineering",
  "eduDescription": "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
  "eduStartDate": "1-1-2019",
  "eduEndDate": "1-1-2023"
}

```

#### Response

##### 200 (OK)

> If the education object with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "id": 53,
  "applicantId": 23,
  "eduSchool": "Cleveland State University Updated",
  "eduDegree": "Bachelor of Science in Computer Engineering",
  "eduDescription": "Computer Engineering combines Electrical Engineering and Computer Science and deals with the design and application of computer systems. These computer systems can range from large super computers to tiny microprocessors that are embedded in all kinds of equipment, such as automobiles, appliances, cellular phones, medical devices, office equipment, etc. The goal of the Computer Engineering program at SFSU is to provide students with a practical, hands-on education that emphasizes applications.",
  "eduStartDate": "1-1-2019",
  "eduEndDate": "1-1-2023"
}

```

#### 404 (Not Found)

> If the education object for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, doesn't look like that profile exists"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a school"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while updating this education"
}

```

## **DELETE EDUCATION**

### **Delete education by education id**

_Method Url:_ `/api/education/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description            |
| ---- | ------- | -------- | ---------------------- |
| id   | Integer | Yes      | ID of education object |

#### Response

##### 200 (OK)

> If the education object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "message": "Education successfully deleted"
}

```

#### 404 (Not Found)

> If the education object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, doesn't look like this education exists"
}

```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while deleting this education"
}

```

# EXPERIENCE ROUTES

## **GET EXPERIENCE**

### **Get experience by user id**

_Method Url:_ `/api/experience/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If applicant experience is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

_example:_

```

[
  {
    "id": 1,
    "applicantId": 1,
    "expTitle": "Front-end Developer",
    "expCompany": "Facebook",
    "expDescription": "Built out facebook market place with react",
    "expStartDate": "1-25-2018",
    "expEndDate": "9-2-2019"
  },
  {
    "id": 2,
    "applicantId": 1,
    "expTitle": "Back-end Developer",
    "expCompany": "Nexient",
    "expDescription": "Created apis and servers with golang",
    "expStartDate": "10-31-2019",
    "expEndDate": "6-31-2020"
  }
]

```

#### 404 (Not Found)

> A `404` (Not Found) response has `two` possible outcomes one if the `user` profile doesn't have any education or if the provided `user` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, doesn't look like that profile exists"
}

```

or

```

{
  "message": "Oops, this profile doesn't have experience yet"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while fetching this experience"
}

```

## **ADD EXPERIENCE**

### **Add experience by user id**

_Method Url:_ `/api/experience`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name             | type    | required | description                            |
| ---------------- | ------- | -------- | -------------------------------------- |
| `userId`         | Integer | Yes      | Must match a user's id in the database |
| `expTitle`       | String  | Yes      | Cannot be an empty field               |
| `expCompany`     | String  | Yes      | Cannot be an empty field               |
| `expDescription` | String  | Yes      | Cannot be an empty field               |
| `expStartDate`   | String  | Yes      | Cannot be an empty field               |
| `expEndDate`     | String  | Yes      | Cannot be an empty field               |

_example:_

```

{
  "userId":1,
  "applicantExperience": [
    {
      "expTitle":"Back-end Developer",
      "expCompany": "Nexient",
      "expDescription": "Created apis and servers with golang",
      "expStartDate": "10-31-2019",
      "expEndDate": "6-31-2020"
    },
    {
      "expTitle":"Front-end Developer",
      "expCompany": "Facebook",
      "expDescription": "Built out facebook market place with react",
      "expStartDate": "1-25-2018",
      "expEndDate": "9-2-2019"
    }
  ]
}

```

#### Response

##### 201 (Created)

> If you successfully create applicant experience, the endpoint will return an HTTP response with a status code `201` and a body as below.

_example:_

```

[
  {
    "id": 1,
    "applicantId": 1,
    "expTitle": "Back-end Developer",
    "expCompany": "Nexient",
    "expDescription": "Created apis and servers with golang",
    "expStartDate": "10-31-2019",
    "expEndDate": "6-31-2020"
  },
  {
    "id": 2,
    "applicantId": 1,
    "expTitle": "Front-end Developer",
    "expCompany": "Facebook",
    "expDescription": "Built out facebook market place with react",
    "expStartDate": "1-25-2018",
    "expEndDate": "9-2-2019"
  }
]

```

#### 404 (Not Found)

> If the applicant profile for the specified `userId` can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, that user profile doesn't exist"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a job title"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while trying to add experience"
}

```

## **UPDATE EXPERIENCE**

### **Update individual experience objects using experience id**

_Method Url:_ `/api/experience/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                       |
| ---- | ------- | -------- | --------------------------------- |
| id   | Integer | Yes      | ID of a specific education object |

#### Body

| name             | type   | required | description              |
| ---------------- | ------ | -------- | ------------------------ |
| `expTitle`       | String | Yes      | Cannot be an empty field |
| `expCompany`     | String | Yes      | Cannot be an empty field |
| `expDescription` | String | Yes      | Cannot be an empty field |
| `expStartDate`   | String | Yes      | Cannot be an empty field |
| `expEndDate`     | String | Yes      | Cannot be an empty field |

_example:_

```

{
  "expTitle":"Front-end Developer Updated",
  "expCompany": "Facebook",
  "expDescription": "Built out facebook market place with react",
  "expStartDate": "1-25-2018",
  "expEndDate": "9-2-2019"
}

```

#### Response

##### 200 (OK)

> If the experience object with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "id": 21,
  "applicantId": 23,
  "expTitle": "Front-end Developer Updated",
  "expCompany": "Facebook",
  "expDescription": "Built out facebook market place with react",
  "expStartDate": "1-25-2018",
  "expEndDate": "9-2-2019"
}

```

#### 404 (Not Found)

> If the education object for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, doesn't look like that profile exists"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a job title"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while updating this experience"
}

```

## **DELETE EXPERIENCE**

### **Delete experience by experience id**

_Method Url:_ `/api/experience/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description             |
| ---- | ------- | -------- | ----------------------- |
| id   | Integer | Yes      | ID of experience object |

#### Response

##### 200 (OK)

> If the experience object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "message": "Experience successfully deleted"
}

```

#### 404 (Not Found)

> If the experience object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, doesn't look like this experience exists"
}

```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while deleting this experience"
}

```

# APPLICANTSKILLS ROUTES

## **GET APPLICANTSKILLS**

### **Get applicantSkills by user id**

_Method Url:_ `/api/applicant-skills/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If applicant skills are found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

_example:_

```

[
  {
    "id": 1,
    "applicantId": 1,
    "applicantSkill": "Express"
  },
  {
    "id": 2,
    "applicantId": 1,
    "applicantSkill": "Node"
  },
  {
    "id": 3,
    "applicantId": 1,
    "applicantSkill": "React"
  }
]

```

#### 404 (Not Found)

> A `404` (Not Found) response has `two` possible outcomes one if the `user` profile doesn't have any education or if the provided `user` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, doesn't look like that profile exists"
}

```

or

```

{
  "message": "Oops, that profile doesn't have any skills"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while fetching this profile"
}

```

## **ADD APPLICANTSKILLS**

### **Add applicantskills by user id**

_Method Url:_ `/api/applicant-skills`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name              | type    | required | description                                 |
| ----------------- | ------- | -------- | ------------------------------------------- |
| `applicantId`     | Integer | Yes      | Must match a applicant's id in the database |
| `applicantSkills` | String  | Yes      | (Array of strings) Cannot be an empty field |

_example:_

```

{
  "skills": {
    "applicantId": 2,
    "applicantSkills": ["Express", "Node", "React"]
  }
}

```

#### Response

##### 201 (Created)

> If you successfully create applicant skills, the endpoint will return an HTTP response with a status code `201` and a body as below.

_example:_

```

[
  {
    "id": 1,
    "applicantId": 1,
    "applicantSkill": "Express"
  },
  {
    "id": 2,
    "applicantId": 1,
    "applicantSkill": "Node"
  },
  {
    "id": 3,
    "applicantId": 1,
    "applicantSkill": "React"
  }
]

```

#### 404 (Not Found)

> If the applicant profile for the specified `userId` can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that user doesn't have a profile"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide some skills"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while creating your skill"
}

```

## **UPDATE SKILL**

### **Update skill by skill id**

_Method Url:_ `/api/applicant-skills/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                   |
| ---- | ------- | -------- | ----------------------------- |
| id   | Integer | Yes      | ID of a specific skill object |

#### Body

| name             | type   | required | description              |
| ---------------- | ------ | -------- | ------------------------ |
| `applicantSkill` | String | Yes      | Cannot be an empty field |

_example:_

```

{
  "applicantSkill": "Python"
}

```

#### Response

##### 200 (OK)

> If the skill object with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "id": 1,
  "applicantId": 1,
  "applicantSkill": "Python"
}

```

#### 404 (Not Found)

> If the education object for the specified id can't be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, doesn't look like that skill exists"
}

```

#### 400 (Bad Request)

> If you are missing any of the required field(s), the endpoint will return an HTTP response with a status code `400` and a body as below relating to the missing field(s).

_example:_

```

{
  "message": "Please provide a skill"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while updating this skill"
}

```

## **DELETE SKILL**

### **Delete APPLICANTSKILLS by skill id**

_Method Url:_ `/api/applicant-skill/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description        |
| ---- | ------- | -------- | ------------------ |
| id   | Integer | Yes      | ID of skill object |

#### Response

##### 200 (OK)

> If the skill object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
  "message": "Skill successfully deleted"
}

```

#### 404 (Not Found)

> If the skill object specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Oops, doesn't look like that skill exists"
}

```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while deleting this skill"
}

```

# COMPANY ROUTES

## **GET COMPANIES**

### **Get all companies**

_Method Url:_ `/api/companies`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If companies are found in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```

{
  "companies": [
    {
      "id": 1,
      "userId": 1,
      "companyName": "Apple",
      "companyDescription": "An About me for the company",
      "country": "South Korea",
      "state": "NA",
      "city": "Seoul",
      "zipcode": 4000,
      "address": "123 abc st"
    },
    {
      "id": 2,
      "userId": 2,
      "companyName": "Apple 2",
      "companyDescription": "An About me for the company",
      "country": "South Korea",
      "state": "NA",
      "city": "Seoul",
      "zipcode": 4000,
      "address": "123 abc st"
    }
  ]
}

```

#### 404 (Not Found)

> If there are no companies in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```

{
  "message": "Oops, doesn't look like there are any companies"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```

{
  message: 'Oops, something went wrong while fetching this profile'
}

```

## **GET COMPANY**

### **Get a company by ID**

_Method Url:_ `/api/companies/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description              |
| ---- | ------- | -------- | ------------------------ |
| id   | Integer | Yes      | ID of a specific company |

#### Response

##### 200 (OK)

> If a company with the specified ID in the URL parameters is found in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```

{
  "company": {
    "id": 1,
    "userId": 1,
    "companyName": "Apple 2",
    "companyDescription": "An About me for the company",
    "country": "South Korea",
    "state": "NA",
    "city": "Seoul",
    "zipcode": 4000,
    "address": "123 Abc st"
    "jobs": [
      {
        "id": 1,
        "companyId": 1,
        "jobName": "Software Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobResponsibilities": "jobResponsibilities",
        "jobApplyBy": "jobApplyBy",
        "jobSkills": [
            {
              "id": 1,
              "jobId": 1,
              "jobSkill": "Reactjs"
            },
            {
              "id": 3,
              "jobId": 1,
              "jobSkill": "Expressjs updated"
            }
          ]
        },
        {
        "id": 2,
        "companyId": 1,
        "jobName": "Front-end Engineer",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobResponsibilities": "jobResponsibilities",
        "jobApplyBy": "jobApplyBy",
        "jobSkills": []
      }
    ]
  }
}

```

#### 404 (Not Found)

> If the requested company does not exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

```

{
  "message": "Oops, doesn't look like there are any companies"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```

{
  message: 'Oops, something went wrong while fetching this profile'
}

```

## **ADD COMPANY**

### **Add a Company**

_Method Url:_ `/api/companies`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name                 | type    | required | description                            |
| -------------------- | ------- | -------- | -------------------------------------- |
| `userId`             | Integer | Yes      | Must match a user's id in the database |
| `companyName`        | String  | Yes      | Cannot be an empty field               |
| `companyDescription` | String  | Yes      | Cannot be an empty field               |
| `country`            | String  | Yes      | Cannot be an empty field               |
| `state`              | String  | Yes      | Cannot be an empty field               |
| `city`               | String  | Yes      | Cannot be an empty field               |
| `zipcode`            | Integer | Yes      | Cannot be an empty field               |
| `address`            | String  | Yes      | Cannot be an empty field               |


_example:_

```
{
  "userId": 1,
  "companies": {
    "companyName": "Apple",
    "companyDescription": "An About me for the company",
    "country": "United States of America",
    "state": "California",
    "city": "Cupertino",
    "zipcode": 4000,
    "address": "123 Abc st"
  }
}
```

#### Response

##### 201 (Created)

> If you successfully register a company the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
  "message": "Apple has been successfully added.",
  "companies": {
  	"id": 1,
    "companyName": "Apple",
    "companyDescription": "An About me for the company",
    "country": "United States of America",
    "state": "California",
    "city": "Cupertino",
    "zipcode": 4000,
    "address": "123 Abc st"
  }
}
```

#### 400 (Bad Request)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `400` and a body as below.

```

{
  message: 'Please submit a company with all of the required fields.'
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```

{
  message: 'Oops, something went wrong while creating your profile'
}

```

## **UPDATE COMPANY**

### **Update a Company by user ID**

_Method Url:_ `/api/companies/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description              |
| ---- | ------- | -------- | ------------------------ |
| id   | Integer | Yes      | ID of a specific company |

#### Body

| name                 | type    | required | description                            |
| -------------------- | ------- | -------- | -------------------------------------- |
| `userId`             | Integer | Yes      | Must match a user's id in the database |
| `companyName`        | String  | Yes      | Cannot be an empty field               |
| `companyPicture`     | String  | No       | Can be an empty field                  |
| `companyDescription` | String  | Yes      | Cannot be an empty field               |
| `country`            | String  | Yes      | Cannot be an empty field               |
| `state`              | String  | Yes      | Cannot be an empty field               |
| `city`               | String  | Yes      | Cannot be an empty field               |
| `zipcode`            | Integer | Yes      | Cannot be an empty field               |
| `address`            | String  | Yes      | Cannot be an empty field               |


_example:_

```

{
  "userId": 1,
  "companyName": "Apple Inc",
  "companyPicture": "url string",
  "companyDescription": "An About me for the company",
  "country": "United States of America",
  "state": "California",
  "city": "Cupertino",
  "zipcode": "40000",
  "address": "123 Abc st"
}

```

#### Response

##### 200 (OK)

> If a company with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```

{
  "id": 1,
  "userId": 1,
  "companyName": "Apple Inc",
  "companyPicture": "",
  "companyDescription": "An About me for the company",
  "country": "South Korea",
  "state": "NA",
  "city": "Seoul",
  "zipcode": 4000,
  "address": "123 Abc st"
}

```

#### 400 (Not Acceptable)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `400` and a body as below.

```

{
  message: 'Please submit a company with all of the required fields.'
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```

{
  message: 'Oops, something went wrong while updating this company'
}

```

## **DELETE COMPANY**

### **Delete a Company by user ID**

_Method Url:_ `/api/companies/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description              |
| ---- | ------- | -------- | ------------------------ |
| id   | Integer | Yes      | ID of a specific company |

#### Response

##### 200 (OK)

> If a company with the specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```

{
  "message": "Company successfully deleted"
}

```

#### 404 (Not Found)

> If no companies for the specified id can be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```

{
  "message": 'Oops, doesn't look like that company exists'
}

```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

```

{
  "message": "Oops, something went wrong while deleting this company"
}

```

# JOB ROUTES

## **GET JOBS**

### **Get all jobs**

_Method Url:_ `/api/jobs`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If jobs are found in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "jobs": [
    {
      "id": 1,
      "companyId": 1,
      "jobName": "Software Engineer",
      "jobDescription": "An About me for the job",
      "jobExperienceRequired": "jobExperienceRequired",
      "jobExperiencePreferred": "jobExperiencePreferred",
      "jobApplyBy": "jobApplyBy",
      "jobSkills": [...]
    },
    {
      "id": 2,
      "companyId": 1,
      "jobName": "Front-end Engineer",
      "jobDescription": "An About me for the job",
      "jobExperienceRequired": "jobExperienceRequired",
      "jobExperiencePreferred": "jobExperiencePreferred",
      "jobApplyBy": "jobApplyBy",
      "jobSkills": [...]
    },
    {
      "id": 4,
      "companyId": 1,
      "jobName": "Back-end Engineer 4",
      "jobDescription": "An About me for the job",
      "jobExperienceRequired": "jobExperienceRequired",
      "jobExperiencePreferred": "jobExperiencePreferred",
      "jobApplyBy": "jobApplyBy",
      "jobSkills": [...]
    }
  ]
}
```

#### 404 (Not Found)

> If there are no jobs in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```

{
  "message": "Oops, could not retrieve the job"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```

{
  message: 'Oops, something went wrong while fetching jobs'
}

```

## **GET JOB**

### **Get a job by ID**

_Method Url:_ `/api/jobs/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description          |
| ---- | ------- | -------- | -------------------- |
| id   | Integer | Yes      | ID of a specific job |

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
    "jobs": {
        "id": 1,
        "companyId": 1,
        "jobName": "Frontend Software Engineer",
        "jobDescription": "Are you excited by the prospect of creating simple, intuitive experiences that delight users? Do you like building services that will be used by hundreds of millions of users across the world? Microsoft Developer Center Norway is growing, and we’re looking for developers with a strong passion for building delightful and smart experiences that will be used on a global scale. Come join our team!",
        "jobExperienceRequired": "<ul><li>Masters or Bachelor’s degree or equivalent in computer science or related technical disciplines.</li><li>Experience with software engineering best practices (code quality, repo hygiene, code reviews, unit testing, design documentation, continuous integration, deployment).</li><li>Experience in the JavaScript ecosystem and related technologies such as React, React Native, TypeScript, Redux, HTML5, CSS.</li></ul>",
        "jobExperiencePreferred": "<ul><li>Experience in building performant experiences using technologies such as webpack and npm to optimize bundles and package dependencies.</li><li>Experience in experimentation framework and understanding how to measure end user success.</li><li>Thrives in dynamic, fast-paced environments where passion for customer engagement and great experience are at the forefront of all design & development.</li></ul>",
        "jobApplyBy": "30 May 2019"
    }
}
```

#### 404 (Not Found)

> If the requested job does not exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": "Oops, could not retrieve the job"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  message: 'Oops, something went wrong while fetching jobs'
}
```

## **ADD JOB**

### **Add a job**

_Method Url:_ `/api/jobs`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name                     | type    | required | description                               |
| ------------------------ | ------- | -------- | ----------------------------------------- |
| `companyId`              | Integer | Yes      | Must match a company's id in the database |
| `jobName`                | String  | Yes      | Cannot be an empty field                  |
| `jobDescription`         | String  | Yes      | Cannot be an empty field                  |
| `jobExperienceRequired`  | String  | Yes      | Cannot be an empty field                  |
| `jobExperiencePreferred` | String  | Yes      | Cannot be an empty field                  |
| `jobApplyBy`             | String  | Yes      | Cannot be an empty field                  |

_example:_

```
{
    "userId": 1,
    "job": {
        "jobName": "Back-end Engineer 11",
        "jobDescription": "An About me for the job",
        "jobExperienceRequired": "jobExperienceRequired",
        "jobExperiencePreferred": "jobExperiencePreferred",
        "jobApplyBy": "jobApplyBy"
    },
    "jobSkills": [
        "Skill4",
        "Skill5"
    ]
}
```

#### Response

##### 201 (Created)

> If you successfully register a job the endpoint will return an HTTP response with a status code `201` and a body as below.

```

{
  "message": "Back-end Engineer 11 has successfully been added.",
  "newJob": {
    "companyId": 10,
    "jobName": "Back-end Engineer 11",
    "jobDescription": "An About me for the job",
    "jobExperienceRequired": "jobExperienceRequired",
    "jobExperiencePreferred": "jobExperiencePreferred",
    "jobApplyBy": "jobApplyBy",
    "jobSkills": [
      "Skill4",
      "Skill5"
    ]
  }
}

```

#### 400 (Bad Request)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `400` and a body as below.

```

{
  message: 'Please submit a job with all of the required fields.'
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```

{
  message: 'Oops, something went wrong while fetching jobs'
}

```

## **UPDATE JOB**

### **Update a Job by company ID**

_Method Url:_ `/api/jobs/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description          |
| ---- | ------- | -------- | -------------------- |
| id   | Integer | Yes      | ID of a specific job |

#### Body

| name                     | type    | required | description                            |
| ------------------------ | ------- | -------- | -------------------------------------- |
| `companyId`              | Integer | Yes      | Must match a user's id in the database |
| `jobName`                | String  | Yes      | Cannot be an empty field               |
| `jobDescription`         | String  | Yes      | Cannot be an empty field               |
| `jobExperienceRequired`  | String  | Yes      | Cannot be an empty field               |
| `jobExperiencePreferred` | String  | Yes      | Cannot be an empty field               |
| `jobApplyBy`             | String  | Yes      | Cannot be an empty field               |

_example:_

```
{
  "companyId": 1,
  "jobName": "Back-end Engineer updated",
  "jobDescription": "An About me for the job",
  "jobExperienceRequired": "jobExperienceRequired",
  "jobExperiencePreferred": "jobExperiencePreferred",
  "jobApplyBy": "jobApplyBy"
}
```

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "message": "The job was updated successfully",
  "jobs": {
    "id": 2,
    "companyId": 1,
    "jobName": "Back-end Engineer updated",
    "jobDescription": "An About me for the job",
    "jobExperienceRequired": "jobExperienceRequired",
    "jobExperiencePreferred": "jobExperiencePreferred",
    "jobApplyBy": "jobApplyBy"
}
```

#### 400 (Not Acceptable)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
  message: 'Oops, could not find job in the database'
}
```

#### 404 (Not Found)

> If the requested job does not exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": "Oops, something went wrong while fetching jobs"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  message: 'Oops, something went wrong while fetching jobs'
}
```

## **DELETE JOB**

### **Delete a Job by company ID**

_Method Url:_ `/api/jobs/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description          |
| ---- | ------- | -------- | -------------------- |
| id   | Integer | Yes      | ID of a specific job |

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```

{
  "message": "Job was deleted successfully"
}
```

#### 404 (Not Found)

> If no companies for the specified id can be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": 'Oops, job could not be found'
}
```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": "Oops, something went wrong while fetching jobs"
}
```

# JOB SKILLS ROUTES

## **GET JOB SKILLS**

### **Get all job skills**

_Method Url:_ `/api/job-skills`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Response

##### 200 (OK)

> If jobs are found in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "skills": [
    {
      "id": 1,
      "jobId": 1,
      "jobSkill": "Reactjs"
    },
    {
      "id": 3,
      "jobId": 1,
      "jobSkill": "Expressjs"
    }
  ]
}
```

#### 404 (Not Found)

> If there are no jobs in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": "Oops, the job skill could not be found"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  message: 'Oops, something went wrong fetching job skills'
}
```

## **GET JOB SKILL**

### **Get a job skill by ID**

_Method Url:_ `/api/job-skills/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                |
| ---- | ------- | -------- | -------------------------- |
| id   | Integer | Yes      | ID of a specific job skill |

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is found in the database, the endpoint will return an HTTP response with a status code 200 and a body as below.

```
{
  "message": "The job skill was retrieved successfully.",
  "skills": {
    "id": 1,
    "jobId": 1,
    "jobSkill": "Reactjs"
  }
}
```

#### 404 (Not Found)

> If the requested job does not exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": "Oops, that job skill could not be found"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  message: 'Oops, something went wrong fetching job skills'
}
```

## **ADD JOB SKILL**

### **Add a job skill**

_Method Url:_ `/api/job-skills`

_HTTP method:_ **[POST]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Body

| name       | type             | required | description                               |
| ---------- | ---------------- | -------- | ----------------------------------------- |
| `jobId`    | Integer          | Yes      | Must match a company's id in the database |
| `jobSkill` | Array of strings | Yes      | Cannot be an empty field                  |

_example:_

```
{
  "jobId": 1,
  "jobSkill": ["Reactjs", "Expressjs"]
}
```

#### Response

##### 201 (Created)

> If you successfully register a job, the endpoint will return an HTTP response with a status code `201` and a body as below (returns all job skills for the jobId, not just the created jobs).

```
{
  "message": "Reactjs,Expressjs has successfully been added.",
  "skills": [
    {
      "id": 1,
      "jobId": 1,
      "jobSkill": "Reactjs"
    },
    {
      "id": 3,
      "jobId": 1,
      "jobSkill": "Expressjs updated"
    },
    {
      "id": 16,
      "jobId": 1,
      "jobSkill": "Reactjs"
    },
    {
      "id": 17,
      "jobId": 1,
      "jobSkill": "Expressjs"
    }
  ]
}

```

#### 400 (Bad Request)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `400` and a body as below.

```
{
  message: 'Oops, that job skill could not be found'
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  message: 'Oops, something went wrong updating job skills'
}
```

## **UPDATE JOB SKILL**

### **Update a Job Skill by company ID**

_Method Url:_ `/api/job-skills/:id`

_HTTP method:_ **[PUT]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                |
| ---- | ------- | -------- | -------------------------- |
| id   | Integer | Yes      | ID of a specific job skill |

#### Body

| name       | type   | required | description              |
| ---------- | ------ | -------- | ------------------------ |
| `jobSkill` | String | Yes      | Cannot be an empty field |

_example:_

```
{
  "jobSkill": "This was updated 2"
}
```

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is updated successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "id": 1,
  "jobId": 1,
  "jobSkill": "This was updated 2"
}
```

#### 404 (Not Acceptable)

> If you are missing any of the required fields, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  message: 'Please submit a job with all of the required fields.'
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  message: 'Oops, something went wrong updating job skills'
}
```

## **DELETE JOB SKILL**

### **Delete a Job Skill by company ID**

_Method Url:_ `/api/job-skills/:id`

_HTTP method:_ **[DELETE]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description                |
| ---- | ------- | -------- | -------------------------- |
| id   | Integer | Yes      | ID of a specific job skill |

#### Response

##### 200 (OK)

> If a job with the specified ID in the URL parameters is deleted successfully in the database, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
  "message": "Success, job skill deleted"
}
```

#### 404 (Not Found)

> If no companies for the specified id can be found in the database, the endpoint will return an HTTP response with a status code `404` and a body as below.

```
{
  "message": 'Oops, skill could not be found'
}
```

#### 500 (Bad Request)

> If you send in invalid fields, the endpoint will return an HTTP response with a status code `500` and a body as below.

```
{
  "message": "Oops, something went wrong deleting job skills"
}

```

# MATCH ROUTES

## **GET MATCHES**

### **Get matches for applicant**

_Method Url:_ `/api/matches/applicant/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description |
| ---- | ------- | -------- | ----------- |
| id   | Integer | Yes      | applicant id   |

#### Response

##### 200 (OK)

> If there are recommended matches, the endpoint will return an HTTP response with a status code 200 and a body as below.

_example:_

```
[
    {
        "id": 1,
        "companyId": 1,
        "jobName": "Frontend Software Engineer",
        "jobDescription": "Are you excited by the prospect of creating simple, intuitive experiences that delight users? Do you like building services that will be used by hundreds of millions of users across the world? Microsoft Developer Center Norway is growing, and we’re looking for developers with a strong passion for building delightful and smart experiences that will be used on a global scale. Come join our team!",
        "jobExperienceRequired": "<ul><li>Masters or Bachelor’s degree or equivalent in computer science or related technical disciplines.</li><li>Experience with software engineering best practices (code quality, repo hygiene, code reviews, unit testing, design documentation, continuous integration, deployment).</li><li>Experience in the JavaScript ecosystem and related technologies such as React, React Native, TypeScript, Redux, HTML5, CSS.</li></ul>",
        "jobExperiencePreferred": "<ul><li>Experience in building performant experiences using technologies such as webpack and npm to optimize bundles and package dependencies.</li><li>Experience in experimentation framework and understanding how to measure end user success.</li><li>Thrives in dynamic, fast-paced environments where passion for customer engagement and great experience are at the forefront of all design & development.</li></ul>",
        "jobApplyBy": "30 May 2019",
        "jobSkills": [
            {
                "id": 1,
                "jobId": 1,
                "jobSkill": "React"
            },
            {
                "id": 2,
                "jobId": 1,
                "jobSkill": "HTML"
            },
            {
                "id": 3,
                "jobId": 1,
                "jobSkill": "CSS"
            },
            {
                "id": 4,
                "jobId": 1,
                "jobSkill": "Bootstrap"
            },
            {
                "id": 5,
                "jobId": 1,
                "jobSkill": "Git"
            }
        ],
        "count": 4
    },
    {
        "id": 2,
        "companyId": 2,
        "jobName": "Frontend Software Engineer",
        "jobDescription": "As a Front End Engineer you will be responsible for building the next generation of client side user experiences for our industry leading Music Subscription service. We are a team that conceptualizes, iterates, and executes new features on an ongoing basis, which contributes to an overall dynamic and creative atmosphere.We need a highly motivated and skillful engineer with JavaScript programming proficiency, plus a solid grasp of the performance and compatibility issues that arise when delivering a comprehensive web solution. Attention to detail and a dedication to deliver a high-quality, stable delivery is essential. To be successful you are self-motivated; driven to achieve and exceed commitments. You also need to exude strong collaboration skills, including the ability to mentor and be mentored. Possess a strong passion to work in a growing, energizing environment of innovation. If you want to be part of this amazing team, this position is for you.",
        "jobExperienceRequired": "<ul><li>Proficient JavaScript programmer</li><li>Experience with JS frameworks is highly desirable: React, Angular, etc.</li><li>Experience with CSS3 and Less/Sass in large scale applications</li></ul>",
        "jobExperiencePreferred": "<ul><li>Knowledge of media streaming, HTML5 MSE/EME, encryption standards a plus</li><li>Strong problem solving and critical thinking skills</li><li>Passion for quality and close attention to details</li></ul>",
        "jobApplyBy": "30 May 2019",
        "jobSkills": [
            {
                "id": 6,
                "jobId": 2,
                "jobSkill": "React"
            },
            {
                "id": 7,
                "jobId": 2,
                "jobSkill": "jQuery"
            },
            {
                "id": 8,
                "jobId": 2,
                "jobSkill": "HTML"
            },
            {
                "id": 9,
                "jobId": 2,
                "jobSkill": "CSS"
            },
            {
                "id": 10,
                "jobId": 2,
                "jobSkill": "Git"
            }
        ],
        "count": 4
    }
]

```

#### 404 (Not Found)

> If the provided `userId` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
   "message": "Oops, the user doesn't have a profile"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while fetching matches"
}

```

### **Get matches for company for all jobs**

_Method Url:_ `/api/matches/company/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description |
| ---- | ------- | -------- | ----------- |
| id   | Integer | Yes      | company id  |

#### Response

##### 200 (OK)

> If there are recommended matches, the endpoint will return an HTTP response with a status code `200` and a body as below. This will show a list of all profiles matched with all jobs for that company. Filter by jobId if you want to see it only for each job.

_example:_

```
[
    {
        "skills": [
            "Golang",
            "Python",
            "JavaScript",
            "Node",
            "Express",
            "C++",
            "C#",
            "MySQL",
            "PostgreSQL",
            "HTML",
            "Git",
            "React",
            "CSS",
            "Django",
            "Redux",
            "Webpack",
            "Git"
        ],
        "applicantId": 2,
        "jobId": 3,
        "count": 3,
        "profile": {
            "id": 2,
            "userId": 2,
            "firstName": "John",
            "lastName": "Dough",
            "profilePicture": "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
            "month": 5,
            "day": 21,
            "year": 1994,
            "country": "United States",
            "state": "Washington",
            "city": "Redmond",
            "zipcode": 98008
        }
    },
    {
        "skills": [
            "Java",
            "JavaScript",
            "Kafka",
            "jQuery",
            "HTML",
            "CSS",
            "Bootstrap",
            "Git"
        ],
        "applicantId": 1,
        "jobId": 3,
        "count": 2,
        "profile": {
            "id": 1,
            "userId": 1,
            "firstName": "Sam",
            "lastName": "Smith",
            "profilePicture": "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
            "month": 10,
            "day": 13,
            "year": 1990,
            "country": "United States",
            "state": "California",
            "city": "San Francisco",
            "zipcode": 94016
        }
    },
    {
        "skills": [
            "Java",
            "Spring Framework",
            "React",
            "MySQL",
            "PostgreSQL",
            "Ruby"
        ],
        "applicantId": 3,
        "jobId": 3,
        "count": 1,
        "profile": {
            "id": 3,
            "userId": 3,
            "firstName": "Sally",
            "lastName": "Jones",
            "profilePicture": "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
            "month": 1,
            "day": 2,
            "year": 1992,
            "country": "United States",
            "state": "Michigan",
            "city": "Detroit",
            "zipcode": 48127
        }
    }
]
```

#### 404 (Not Found)

> If the provided `userId` doesn't have a company, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
   "message": "Oops, the user doesn't have a profile"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, something went wrong while fetching matches"
}

```

## **GET MATCHED**

### **Get matched jobs by user id**

_Method Url:_ `/api/matched/applicant/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description |
| ---- | ------- | -------- | ----------- |
| id   | Integer | Yes      | user id     |

#### Response

##### 200 (OK)

> If the user has matched with any jobs, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```
[
    {
        "id": 1,
        "companyId": 1,
        "jobName": "Frontend Software Engineer",
        "jobDescription": "Are you excited by the prospect of creating simple, intuitive experiences that delight users? Do you like building services that will be used by hundreds of millions of users across the world? Microsoft Developer Center Norway is growing, and we’re looking for developers with a strong passion for building delightful and smart experiences that will be used on a global scale. Come join our team!",
        "jobExperienceRequired": "<ul><li>Masters or Bachelor’s degree or equivalent in computer science or related technical disciplines.</li><li>Experience with software engineering best practices (code quality, repo hygiene, code reviews, unit testing, design documentation, continuous integration, deployment).</li><li>Experience in the JavaScript ecosystem and related technologies such as React, React Native, TypeScript, Redux, HTML5, CSS.</li></ul>",
        "jobExperiencePreferred": "<ul><li>Experience in building performant experiences using technologies such as webpack and npm to optimize bundles and package dependencies.</li><li>Experience in experimentation framework and understanding how to measure end user success.</li><li>Thrives in dynamic, fast-paced environments where passion for customer engagement and great experience are at the forefront of all design & development.</li></ul>",
        "jobApplyBy": "30 May 2019"
    },
    {
        "id": 2,
        "companyId": 2,
        "jobName": "Frontend Software Engineer",
        "jobDescription": "As a Front End Engineer you will be responsible for building the next generation of client side user experiences for our industry leading Music Subscription service. We are a team that conceptualizes, iterates, and executes new features on an ongoing basis, which contributes to an overall dynamic and creative atmosphere.We need a highly motivated and skillful engineer with JavaScript programming proficiency, plus a solid grasp of the performance and compatibility issues that arise when delivering a comprehensive web solution. Attention to detail and a dedication to deliver a high-quality, stable delivery is essential. To be successful you are self-motivated; driven to achieve and exceed commitments. You also need to exude strong collaboration skills, including the ability to mentor and be mentored. Possess a strong passion to work in a growing, energizing environment of innovation. If you want to be part of this amazing team, this position is for you.",
        "jobExperienceRequired": "<ul><li>Proficient JavaScript programmer</li><li>Experience with JS frameworks is highly desirable: React, Angular, etc.</li><li>Experience with CSS3 and Less/Sass in large scale applications</li></ul>",
        "jobExperiencePreferred": "<ul><li>Knowledge of media streaming, HTML5 MSE/EME, encryption standards a plus</li><li>Strong problem solving and critical thinking skills</li><li>Passion for quality and close attention to details</li></ul>",
        "jobApplyBy": "30 May 2019"
    }
]
```

#### 404 (Not Found)

> If the provided `userId` doesn't have a profile, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that profile doesn't exist"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, there was an error getting the matches"
}

```

### **Get matched profiles by job id**

_Method Url:_ `/api/matched/job/:id`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name | type    | required | description |
| ---- | ------- | -------- | ----------- |
| id   | Integer | Yes      | job id      |

#### Response

##### 200 (OK)

> If the user has matched with any jobs, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```
[
    {
        "id": 2,
        "userId": 12,
        "firstName": "John",
        "lastName": "Dough",
        "profilePicture": "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
        "month": 5,
        "day": 21,
        "year": 1994,
        "country": "United States",
        "state": "Washington",
        "city": "Redmond",
        "zipcode": 98008
    },
    {
        "id": 1,
        "userId": 11,
        "firstName": "Sam",
        "lastName": "Smith",
        "profilePicture": "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
        "month": 10,
        "day": 13,
        "year": 1990,
        "country": "United States",
        "state": "California",
        "city": "San Francisco",
        "zipcode": 94016
    }
]
```

#### 404 (Not Found)

> If the provided `jobId` doesn't exist, the endpoint will return an HTTP response with a status code `404` and a body as below.

_example:_

```

{
  "message": "Sorry, but that job doesn't exist"
}

```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{
  "message": "Oops, there was an error getting the matches"
}

```

## **ADD MATCH**

### **Add a applicant match for job**

_Method Url:_ `/api/matches/applicant/:id/match/job/:jobId`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name  | type    | required | description |
| ----- | ------- | -------- | ----------- |
| id    | Integer | Yes      | user id     |
| jobId | Integer | Yes      | job id      |

#### Response

##### 200 (OK)

> If you successfully create a applicant profile, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```
{
    "message": "applicant has sent a match request successfully.",
    "match": [
        7
    ]
}
```

#### 404 (Not found)

> If the user Id or Job Id cannot find a profile then `404` and a body as below relating to the missing field(s).

_example:_

```
{
    "message": "Oops, the user doesn't have a profile"
}
```

```
{
    "message": "Oops, the job doesn't have a profile"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```
{
			message: 'Oops, something went wrong while fetching matches'
}
```

### **Add a job match for applicant**

_Method Url:_ `/api/matches/job/:id/match/applicant/:applicantId`

_HTTP method:_ **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `Authorization` | String | Yes      | JSON Web Token           |

#### Parameters

| name     | type    | required | description |
| -------- | ------- | -------- | ----------- |
| id       | Integer | Yes      | job id      |
| applicantId | Integer | Yes      | applicant id   |

#### Response

##### 200 (OK)

> If you successfully create a applicant profile, the endpoint will return an HTTP response with a status code `200` and a body as below.

_example:_

```

{
    "match": 1
}

```

#### 404 (Not found)

> If the user Id or Job Id cannot find a profile then `404` and a body as below relating to the missing field(s).

_example:_

```
{
    "message": "Oops, the user doesn't have a profile"
}
```

```
{
    "message": "Oops, the job doesn't have a profile"
}
```

#### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```
{
			message: 'Oops, something went wrong while fetching matches'
}
```
