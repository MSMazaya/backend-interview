# backend-interview
**Programmer test_ Node JS back end - Sulthan**
----
  Creating a REST API for interview purpose, the main purpose of this API is to store user information along with their favorite movies. 

**Sign in**
----
  Create user for the API usage.
* **URL**

  /auth/signin
* **Method:**

  `POST`
*  **URL Params**

   None`
* **Data Params**
  `{ username : [string], name : [string } `
 
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

   None`
* **Data Params**
  `{ username : [string], name : [string } `
 
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
    
    

