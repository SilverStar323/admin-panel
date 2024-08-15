import { Routes, Route } from "react-router-dom";
import { Dashboard, Users } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};
