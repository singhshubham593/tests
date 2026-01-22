 import React, { useEffect } from "react";

function Profile() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const totalPages = Math.ceil(data.length / 3);
  const start = (page - 1) * 3;
  const currentData = data.slice(start, start + 3);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

    
      <div className="w-full flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center items-center">
        {currentData.map((user) => (
          <div
            key={user.id}
            className="w-full sm:w-[280px] bg-blue-900
              rounded-2xl p-6 text-white shadow-xl
              transform hover:scale-105 transition"
          >
        
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-400">
              <img
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>

            
            <h2 className="text-center text-lg font-semibold">
              {user.name}
            </h2>
            <p className="text-center text-sm opacity-80">
              @{user.username}
            </p>

            <div className="mt-4 text-sm text-center space-y-1 break-words">
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>

            <div className="mt-4 text-sm text-center space-y-1">
              <p>{user?.address?.city}</p>
              <p>{user?.company?.name}</p>
               {console.log("hehe",user?.address?.city)}
            </div>
           
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6 items-center flex-wrap justify-center">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default Profile;
