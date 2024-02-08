import axios from "axios";

// Basic axios setup.
export default axios.create({
   baseURL: "http://localhost:5000",
   headers: { "Content-Type": "application/json" },
   withCredentials: true,
});
