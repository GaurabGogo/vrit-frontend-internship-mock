import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div class="p-4 bg-radial-gradient min-h-screen flex flex-col items-center">
      <h1 class="text-4xl text-slate-50 font-bold mb-4 font-['Alegreya'] tapered-underline">
        User List
      </h1>
      {loading && <p>Loading...</p>}
      {!loading && users.length === 0 && <p>No users found</p>}
      {!loading && users.length > 0 && (
        <ul class="grid lg:grid-cols-2 grid-cols-1 gap-8 w-[50%] mx-auto mt-4">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
