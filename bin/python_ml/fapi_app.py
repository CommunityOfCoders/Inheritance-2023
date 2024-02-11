# app.py
import fastapi
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from crypto_predict import btc_pred, bnb_pred, avalanche_pred, cardano_pred, chainlink_pred, doge_pred, eth_pred, solana_pred, tether_pred, xrp_pred
import asyncio
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/crypto_predict")
async def get_crypto_predictions():
    # Run your ML models for all cryptocurrencies every hour
    btc_price = btc_pred()
    bnb_price = bnb_pred()
    avalanche_price = avalanche_pred()
    cardano_price = cardano_pred()
    chainlink_price = chainlink_pred()
    doge_price = doge_pred()
    eth_price = eth_pred()
    sol_price = solana_pred()
    tether_price = tether_pred()
    xrp_price = xrp_pred()

    return JSONResponse(content={
        "btc_pred_val": btc_price[0],
        "bnb_pred_val": bnb_price[0],
        "avalanche_pred_val": avalanche_price[0],
        "cardano_pred_val": cardano_price[0],
        "chainlink_pred_val": chainlink_price[0],
        "doge_pred_val": doge_price[0],
        "eth_pred_val": eth_price[0],
        "sol_pred_val": sol_price[0],
        "tether_pred_val": tether_price[0],
        "xrp_pred_val": xrp_price[0],

    })
