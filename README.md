# Express.js Route Handler Missing Error Handling for Invalid User ID

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input parameters.  Specifically, the example shows a route that fetches user data based on a provided ID.  If an invalid ID is supplied, the application will crash or return unexpected results.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version with proper error handling.

## Bug

The `bug.js` file demonstrates a route that attempts to access a user from a `users` object using the provided ID directly from the request parameters.  This approach lacks input validation and error handling.  If a user requests a non-existent ID, the application will throw an error.

## Solution

The `bugSolution.js` file addresses the bug by incorporating input validation and error handling using try-catch blocks. It checks if the user with the provided ID exists before attempting to access and return the user's data. If no user is found, a 404 (Not Found) error is returned appropriately.