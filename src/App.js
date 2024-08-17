// // import { Outlet } from "react-router-dom";
// // import NavBar from "./components/NavBar";
// // import { useNavigate } from "react-router-dom";

// // function App() {


// //   return (
// //     <div className="app">
// //       <NavBar />
// //       <Outlet />
// //     </div>
// //   );
// // }

// // export default App;

// import { useState, useEffect } from "react";
// // Add useNavigate to import
// import { Outlet, useNavigate} from "react-router-dom";
// import NavBar from "./components/NavBar";

// function App() {
//     // Add code to mock user authentication
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const login = () =>{
//     setIsLoggedIn(true);
//   }

//   const logout = () =>{
//     setIsLoggedIn(false);
//   };

//     // Add programmatic navigation for login and logout
//   useEffect(() =>{
//     if (isLoggedIn) {
//         // navigates to Home route if user is logged in
//       navigate("/");
//     } else {
//         // navigates to Login route if user is logged out
//       navigate("/login");
//     };
//   }, [isLoggedIn]);

//   return (
//     <div className="app">
//       <NavBar logout={logout} />
//         { /*Pass login function to Outlet as context */}
//       <Outlet context={login}/>
//     </div>
//   );
// };

// export default App;

import { useState, useEffect} from "react";
import { Outlet, Navigate, useNavigate} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


   const login = () =>{
    setIsLoggedIn(true);
  };

  const logout = () =>{
    setIsLoggedIn(false);
  };

  useEffect(() =>{
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <div className="app">
{/* Add conditional rendering so users have to be logged in to see pages on the site */}
      {isLoggedIn ? <NavBar logout={logout}  /> : <Navigate to="/login" />}
      <Outlet context={login}/>
    </div>
  );
};

export default App;