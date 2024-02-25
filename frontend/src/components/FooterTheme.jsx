import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  colors: {
    bg: "#ffffff", // Set your background color here
    // Add other color definitions as needed
  },
  media: {
    mobile: "600px", // Adjust the breakpoint value
  },
});

export default Theme;
