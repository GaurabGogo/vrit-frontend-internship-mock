# Vrit Frontend Internship Sept-12

Task 1:Search Filter Component (Take-Home)
Objective:
Create a search filter component that filters a list of items based on user input.
Requirements:
Search Input: Add a text input for users to enter their search query.
Filter List: Display a list of items that match the search query.
Case Insensitive: Ensure the search is case insensitive.

Task 2: Implement and Test a React Component with API Integration (Take-Home)
Objective:
Create a React component that fetches and displays data from an API, and write tests to ensure its correctness.
Requirements:
Data Fetching Component: Implement a React component that fetches a list of users from a public API (e.g., https://jsonplaceholder.typicode.com/users) and displays the user names in a list.
Error Handling: Add basic error handling to the component, displaying an error message if the API request fails.
Testing with Jest and React Testing Library:
Write unit tests to ensure that the component renders correctly when data is fetched successfully.
Mock the API request and test how the component handles loading states and errors.
Test that the error message is displayed when the API call fails.
Task 3:  Write a function that takes an array of positive integers and returns the length of the longest chain of consecutive numbers. A chain is defined as a sequence of numbers in the array where each number is exactly one more than the previous number in the sequence, and the sequence can be in any order in the array. Also explain the time complexity and space complexity.  (Take-Home)
Task 4: Implement Authentication with Protected Routes in Next.js 14 (Take-Home)
Objective:
Set up authentication in a Next.js 14 application and protect certain routes, demonstrating an understanding of both client-side and server-side rendering.
Requirements:
Login Page: Create a simple login page where users can enter a username and password. Authentication logic can be basic (e.g., match against a hardcoded user).
Protected Route: Implement a protected dashboard route that only authenticated users can access. If a user is not authenticated, they should be redirected to the login page.
Session Handling: Use cookies or JWTs to manage the user's session, ensuring that the authentication state persists across page reloads.
Testing:
Write tests to verify that unauthenticated users are redirected to the login page when trying to access the protected route.
Test the login process to ensure that users are properly authenticated and redirected to the dashboard upon successful login.
Task 5: You are given an integer array nums and you have to return a new counts array where counts[i] is the number of smaller elements to the right of nums[i].
