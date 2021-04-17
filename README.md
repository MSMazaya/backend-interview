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
  Create user for the API usage.
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
  
    
