TypeError: Cannot read properties of undefined (reading 'then')

       8 |   useEffect(() => {
       9 |     // Fetch users from API
    > 10 |     fetch("https://jsonplaceholder.typicode.com/users")
         |                                                        ^
      11 |       .then((response) => {
      12 |         if (!response.ok) {
      13 |           throw new Error("Network response was not ok");
