import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
const Logo = styled("img")({
  height: "50px", 
  margin: "10px", 
});
const Navbar = styled("nav")({
  display: "flex",
  alignItems: "center",
});
const Name = styled("span")({
  fontSize: "1.5rem", 
  fontWeight: "bold", 
  margin: "0 10px", 
});

const LogoutButton = styled(Button)({
  color: "white",
  backgroundColor: "#00B4D8",
  borderRadius: "5px",
  padding: "8px 16px",
  margin: "0 10px", 
});

const Header = () => {
  const navigate = useNavigate();
  const [storedmail, setStoredMail] = useState();

  useEffect(() => {
    setStoredMail(localStorage.getItem("email"));
    if (!storedmail) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div>
      <Navbar>
        <Logo src="/CryptoAnalyser.jpeg" alt="Logo" />
        <Name>CryptoIntel</Name>

        <ul>
          <li className="xyz1">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/cryptocurrencies">CRYPTO-CURRENCIES</Link>
          </li>
          <li>
            <Link to="/cryptopredictions">CRYPTO-PREDICTIONS</Link>
          </li>
          {storedmail ? (
            <>
              <li>
                <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
              <li>
                <Link to="/signup">SIGN-UP</Link>
              </li>
            </>
          )}
        </ul>
      </Navbar>
    </div>
  );
};

export default Header;
