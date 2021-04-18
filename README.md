# backend-interview
Creating a REST API for interview purpose, the main purpose of this API is to store user information along with their favorite movies. API is accessible at http://139.59.231.234/  
## Project Setup
Clone repository
```shell
$ git clone https://github.com/MSMazaya/backend-interview.git
$ cd backend-interview
```

After that, create `.env` file and configure the environment variables.
```
DATABASE_DATABASE = [database name]
DATABASE_USER = [database user]
DATABASE_PASSWORD = [database user password]
DATABASE_HOST = [database host]
PORT = [Port for running API]
JWT_SECRET = [JWT Secret]
OMDB_API_KEY = [OMDb api key]
```

Install dependency packages
```shell
$ npm install
```

Runs the app in the development mode.
```shell
$ npm start
```
We are good to go! now we can access our API to do several actions below.

**Sign in**
----
  Create user for the API usage.
* **URL**

  /auth/signin
* **Method:**

  `POST`
*  **URL Params**

   None
* **Data Params**
  `{ username : [string], password : [string] } `
 
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{msg:"Signed in successfully"}`
    
**Login**
----
  Logging in to the API to get Header Bearer token for authentication.
* **URL**

  /auth/login
* **Method:**

  `POST`
*  **URL Params**

   None
* **Data Params**
  `{ username : [string], password : [string] } `
 
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{acceessToken: [Bearer token]}`
    
**Show Movie**
----
  Returns poster URL of a movie.
  <strong>Header bearer token needed</strong>
  
* **URL**

  /movies/:title

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `title=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ poster : [poster url] }`
 
**Show Favorite Movies**
----
  Return posters of user favorite movies.
  <strong>Header bearer token needed</strong>

* **URL**

  /movies/favorite

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[ { poster : [poster url] }, ... ]`
    
**Add Favorite Movies**
----
  Add movie to user favorite movie list.
  <strong>Header bearer token needed</strong>

* **URL**

  /movies/favorite

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**
  
  `{title:[string]}`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{title:[movie title],msg:"Movie successfully added"}`
    
    

