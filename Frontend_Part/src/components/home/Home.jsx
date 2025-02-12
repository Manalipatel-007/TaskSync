
// import React from "react";

// export const Home = () => {
//   return (
//     <div
//       className="d-flex justify-content-center align-items-center"
//       style={{ height: "100vh" }} 
//     >
//       <div className="card" style={{ width: "25rem", padding: "30px", boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}>
//         <div className="card-body text-center">
//           <h4 className="card-title"><b>Simplify tasks, maximize productivity!</b></h4>
//           <p className="card-text">
//           Stay organized and in control with <br/>TaskSync—your all-in-one solution for effortless task management and a stress-free workflow.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Add Task
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }} 
    >
      <div className="card" style={{ width: "25rem", padding: "30px", boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}>
        <div className="card-body text-center">
          <h4 className="card-title"><b>Simplify tasks, maximize productivity!</b></h4>
          <p className="card-text">
            Stay organized and in control with <br/>TaskSync—your all-in-one solution for effortless task management and a stress-free workflow.
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/AddTask")}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};
