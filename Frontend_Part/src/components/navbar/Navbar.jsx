// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa"; // Import profile icon

// export const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light bg-light"
//       style={{
//         position: "fixed",
//         top: "0",
//         left: "0",
//         width: "100%",
//         padding: "15px 30px",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//         height: "70px",
//         zIndex: "1000",
//       }}
//     >
//       <div className="container-fluid">
//         {/* Logo */}
//         <a
//           className="navbar-brand"
//           href="#"
//           style={{ fontSize: "1.5rem", fontWeight: "bold" }}
//         >
//           TaskSync
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse justify-content-between"
//           id="navbarSupportedContent"
//         >
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link active" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 All Tasks
//               </a>
//             </li>
//           </ul>

//           {/* Right-side buttons */}
//           <div className="d-flex align-items-center">
//             <button
//               className="btn btn-outline-primary me-3"
//               style={{ margin: "10px" }}
//               onClick={() => navigate("/login")} // Navigate to Login Page
//             >
//               Login
//             </button>
//             <button
//               className="btn btn-primary me-3"
//               style={{ margin: "10px 0px" }}
//               onClick={() => navigate("/signup")} // Navigate to Signup Page
//             >
//               Sign Up
//             </button>
//             <FaUserCircle
//               size={34}
//               color="#007bff"
//               style={{ cursor: "pointer", marginLeft: "15px" }}
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Import profile icon

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        padding: "15px 30px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        height: "70px",
        zIndex: "1000",
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <a
          className="navbar-brand"
          href="#"
          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          TaskSync
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link active btn btn-link"
                onClick={() => navigate("/")}
                style={{ textDecoration: "none", border: "none", background: "none", color: "black" }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => navigate("/tasks")} // Navigate to TaskList page
                style={{ textDecoration: "none", border: "none", background: "none", color: "black" }}
              >
                All Tasks
              </button>
            </li>
          </ul>

          {/* Right-side buttons */}
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-primary me-3"
              style={{ margin: "10px" }}
              onClick={() => navigate("/login")} // Navigate to Login Page
            >
              Login
            </button>
            <button
              className="btn btn-primary me-3"
              style={{ margin: "10px 0px" }}
              onClick={() => navigate("/signup")} // Navigate to Signup Page
            >
              Sign Up
            </button>
            <FaUserCircle
              size={34}
              color="#007bff"
              style={{ cursor: "pointer", marginLeft: "15px" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
