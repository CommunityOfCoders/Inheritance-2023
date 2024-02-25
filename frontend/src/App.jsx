// App.jsx
import React from "react";
import "/Users/thesohamghadge/INERITANCE01/frontend/frontend/src/index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CryptoDetailsPage from "./CryptoDetailsPage";
import CryptoPrice from "./components/CryptoPredictions";
import Login from "./Login";
import SignUp from "./Signup";
import {
  BitcoinCard,
  EthereumCard,
  TetherCard,
  BNBCard,
  SolanaCard,
  XRPCard,
  USDCCard,
  CardanoCard,
  AvalanceCard,
  DogeCoinCard,
} from "./components/CryptoCards";
import { styled } from "@mui/system";
import AddTrans from "./addTransaction";
import { ThemeProvider } from "@emotion/react";
import Theme from "./components/FooterTheme";
import { Typography, Container } from "@material-ui/core";
import Markets from "./components/Markets";
import Trending from "./components/Trending";
import PageDetail from "./PageDetail";
import Header from "./components/Header";
import Form from "./Users/Form";
import GainersLosers from "./components/GainersLosers";
import CoinHeader from "./components/CoinHeader"
import CryptoPredictions from "./components/CryptoPredictions";

const AppContainer = styled("div")({
  color: "white",
  minHeight: "100vh",
  backgroundImage: "/Bg.png",
});

const IntroContainer = styled("div")({
  color: "white",
  textAlign: "center",
  padding: "2rem",
  marginTop: "0.5rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(63,69,81,0.16)",
});
const IntrosContainer = styled("div")({
  color: "white",
  textAlign: "center",

  boxShadow: "0 2px 8px rgba(63,69,81,0.16)",
});
const GainerContainer = styled("div")({
  fontSize: "24px", // Adjust the font size as needed
});

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <>
          <AppContainer>
            <Header />

            <Routes>
            <Route
                path="/"
                element={
                  <div style={{ textAlign: 'center' }}>
                  <IntroContainer maxWidth="md" className="card-space">
                    <div className="intro">
                      <IntroContainer maxWidth="md" className="intro">
                        <Typography
                          variant="h1"
                          component="div"
                          style={{ fontFamily: "inherit" }}
                          gutterBottom
                        >
                          
                          Welcome to CryptoIntel!
                        </Typography>
                        <Typography
                          variant="h3"
                          style={{ fontFamily: "serif" }}
                          gutterBottom
                        >
                          Your Gateway to Informed Crypto Investing!
                        </Typography>
                       
                      </IntroContainer>
                      <IntroContainer maxWidth="md">
                      <h1 className="text-7xl mb-2 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Current Market Trend</h1>

                        <CoinHeader />
                        
                        <Markets />
                      </IntroContainer>
                      <IntroContainer maxWidth="md">
                        <Typography
                          variant="h1"
                          style={{ fontFamily: "inherit" }}
                        >
                          <Trending/>
                        </Typography>
                 
                       </IntroContainer>
                    </div>
                    <IntroContainer maxWidth="md">
                      <IntroContainer maxWidth="md" className="Gainer">
                        <GainersLosers />
                      </IntroContainer>
                    </IntroContainer>
                  </IntroContainer>
                </div>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <div>
                   
                    <IntroContainer  >
                      <Form />
                    </IntroContainer>
                    <AddTrans></AddTrans>
                  </div>
                }
              />
              <Route
              path="/cryptopredictions"
              element={
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CryptoPredictions style={{ maxWidth: "600px" }} />
                </div>
              </div>
              }/>

              <Route
                path="/cryptocurrencies"
                element={
                  <div className="card-space">
                    <div className="intro">
                      <IntroContainer maxWidth="md" className="intro">
                        <Typography
                          variant="h1"
                          style={{ fontFamily: "inherit" }}
                        >
                          CryptoCurrencies
                        </Typography>
                      </IntroContainer>
                     
                   
                    </div>
                    <BitcoinCard />
                    <EthereumCard />
                    <TetherCard />
                    <BNBCard />
                    <SolanaCard />
                    <XRPCard />
                    <USDCCard />
                    <CardanoCard />
                    <AvalanceCard />
                    <DogeCoinCard />
                    
                  </div>
                }
              />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>

              <Route path="/coin/:id" element={<PageDetail />} />
              <Route path="/crypto/:id" element={<CryptoDetailsPage />} />
            </Routes>
          </AppContainer>
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
