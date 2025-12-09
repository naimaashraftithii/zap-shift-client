import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // ✅ from react-router-dom
import "./index.css";
import { router } from "./routes/router.jsx";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} /> 
   </AuthProvider>
  </StrictMode>
);
