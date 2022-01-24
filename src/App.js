import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myUSD, setMyUSD] = useState(0);
  const [selected, setSelected] = useState(1);
  const [coinCount, setCoinCount] = useState(-1);
  const onInputChange = (event) => {
    setMyUSD(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (myUSD === 0) return;
    else {
      setCoinCount((myUSD / coins[selected - 1].quotes.USD.price).toFixed(7));
    }
  }
  const onSelectChange = (event) => {
    setSelected(event.target.value);
    // coin.rank 순으로 정렬 ->  rank - 1을 index로 생각하고 접근
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <div>
          <form onSubmit={onSubmit}>
            <input onChange={onInputChange} value={myUSD} type="number" placeholder="your USD" />
            <button>Check</button>
          </form>
          <select onChange={onSelectChange} value={selected}>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.rank}>
                  {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
                </option>
              ))}
            </select>
          <hr />
          {coinCount === -1 ? null : <h3>I have {coinCount} coins</h3>}
        </div>
      }
    </div>
  );
}

export default App;