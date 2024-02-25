import yfinance as yf
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split, RandomizedSearchCV
from sklearn.metrics import mean_absolute_error
import pandas as pd
import joblib
import datetime 
from datetime import date
start_date = '2023-01-01'
end_date = date.today()

def download_data(symbol, start_date, end_date):
    data = yf.download(symbol, start=start_date, end=end_date, interval='1h')
    return data

def create_features(data):
    data['Hour'] = data.index.hour
    data['DayOfWeek'] = data.index.dayofweek
    data['SMA_20'] = data['Close'].rolling(window=20).mean()
    data['RSI'] = (data['Close'] / data['Close'].shift(1)).cumsum()
    return data.dropna()

def train_model(features, target):
    X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42)
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    return model

def btc_pred():
    btc_data = download_data('BTC-USD', '2023-01-01', end_date)
    btc_data = create_features(btc_data)
    btc_target = btc_data['Close']
    btc_features = btc_data[['Hour', 'DayOfWeek', 'SMA_20', 'RSI']]
    btc_model = train_model(btc_features, btc_target)
    btc_last_data_point = btc_features.tail(1)
    btc_next_hour = btc_last_data_point.copy()
    btc_next_hour['Hour'] = (btc_last_data_point['Hour'].values[0] + 1) % 24
    btc_price=btc_model.predict(btc_next_hour)
    return btc_price

def eth_pred():
    eth_data = download_data('ETH-USD', '2023-01-01', end_date)
    eth_data = create_features(eth_data)
    eth_target = eth_data['Close']
    eth_features = eth_data[['Hour', 'DayOfWeek', 'SMA_20', 'RSI']]
    eth_model = train_model(eth_features, eth_target)
    eth_last_data_point = eth_features.tail(1)
    eth_next_hour = eth_last_data_point.copy()
    eth_next_hour['Hour'] = (eth_last_data_point['Hour'].values[0] + 1) % 24
    eth_price=eth_model.predict(eth_next_hour)
    return eth_price

def avalanche_pred():
    avalanche_data = download_data('AVAX-USD', '2023-01-01', end_date)
    avalanche_data = create_features(avalanche_data)
    avalanche_target = avalanche_data['Close']
    avalanche_features = avalanche_data[['Hour', 'DayOfWeek', 'SMA_20', 'RSI']]
    avalanche_model = train_model(avalanche_features, avalanche_target)
    avalanche_last_data_point = avalanche_features.tail(1)
    avalanche_next_hour = avalanche_last_data_point.copy()
 
    avalanche_next_hour['Hour'] = (avalanche_last_data_point['Hour'].values[0] + 1) % 24
    avalanche_price=avalanche_model.predict(avalanche_next_hour)
    return avalanche_price

def doge_pred():
    doge_data = download_data('DOGE-USD', '2023-01-01', end_date)
    doge_data = create_features(doge_data)
    doge_target = doge_data['Close']
    doge_features = doge_data[['Hour', 'DayOfWeek', 'SMA_20', 'RSI']]
    doge_model = train_model(doge_features, doge_target)
    doge_last_data_point = doge_features.tail(1)
    doge_next_hour = doge_last_data_point.copy()
    doge_next_hour['Hour'] = (doge_last_data_point['Hour'].values[0] + 1) % 24
    doge_price=doge_model.predict(doge_next_hour)
    return doge_price

def xrp_pred():
    xrp_data = download_data('XRP-USD', '2023-01-01', end_date)
    xrp_data = create_features(xrp_data)
    xrp_target = xrp_data['Close']
    xrp_features = xrp_data[['Hour', 'DayOfWeek', 'SMA_20', 'RSI']]
    xrp_model = train_model(xrp_features, xrp_target)
    xrp_last_data_point = xrp_features.tail(1)
    xrp_next_hour = xrp_last_data_point.copy()
    xrp_next_hour['Hour'] = (xrp_last_data_point['Hour'].values[0] + 1) % 24
    xrp_price=xrp_model.predict(xrp_next_hour)
    return xrp_price

def solana_pred():
    solana_data = download_data('SOL-USD', '2023-01-01', end_date)
    solana_data = create_features(solana_data)
    solana_target = solana_data['Close']
    solana_features = solana_data[['Hour', 'DayOfWeek', 'SMA_20', 'RSI']]
    solana_model = train_model(solana_features, solana_target)
    solana_last_data_point = solana_features.tail(1)
    solana_next_hour = solana_last_data_point.copy()
    solana_next_hour['Hour'] = (solana_last_data_point['Hour'].values[0] + 1) % 24
    solana_price=solana_model.predict(solana_next_hour)
    return solana_price

def cardano_pred():
    cardano_data = download_data('ADA-USD', '2023-01-01', end_date)
    cardano_data = create_features(cardano_data)
    cardano_target = cardano_data['Close']
    cardano_features = cardano_data[['Hour', 'DayOfWeek', 'SMA_20', 'RSI']]
    cardano_model = train_model(cardano_features, cardano_target)
    cardano_last_data_point = cardano_features.tail(1)
    cardano_next_hour = cardano_last_data_point.copy()
    cardano_next_hour['Hour'] = (cardano_last_data_point['Hour'].values[0] + 1) % 24
    cardano_price=cardano_model.predict(cardano_next_hour)
    return cardano_price

def tether_pred():
    tether_data = download_data('USDT-USD', '2023-01-01', end_date)
    tether_data = create_features(tether_data)
    tether_target = tether_data['Close']
    tether_features = tether_data[['Hour', 'DayOfWeek', 'SMA_20', 'RSI']]
    tether_model = train_model(tether_features, tether_target)
    tether_last_data_point = tether_features.tail(1)
    tether_next_hour = tether_last_data_point.copy()
    tether_next_hour['Hour'] = (tether_last_data_point['Hour'].values[0] + 1) % 24
    tether_price=tether_model.predict(tether_next_hour)
    return tether_price

def chainlink_pred():
    chainlink_data = download_data('LINK-USD', '2023-01-01', end_date)
    chainlink_data = create_features(chainlink_data)
    chainlink_target = chainlink_data['Close']
    chainlink_features = chainlink_data[['Hour', 'DayOfWeek', 'SMA_20', 'RSI']]
    chainlink_model = train_model(chainlink_features, chainlink_target)
    chainlink_last_data_point = chainlink_features.tail(1)
    chainlink_next_hour = chainlink_last_data_point.copy()
    chainlink_next_hour['Hour'] = (chainlink_last_data_point['Hour'].values[0] + 1) % 24
    chainlink_price=chainlink_model.predict(chainlink_next_hour)
    return chainlink_price

def bnb_pred():
    bnb_data = download_data('BNB-USD', '2023-01-01', end_date)
    bnb_data = create_features(bnb_data)
    bnb_target = bnb_data['Close']
    bnb_features = bnb_data[['Hour', 'DayOfWeek', 'SMA_20', 'RSI']]
    bnb_model = train_model(bnb_features, bnb_target)
    bnb_last_data_point = bnb_features.tail(1)
    bnb_next_hour = bnb_last_data_point.copy()
    bnb_next_hour['Hour'] = (bnb_last_data_point['Hour'].values[0] + 1) % 24
    bnb_price=bnb_model.predict(bnb_next_hour)
    return bnb_price