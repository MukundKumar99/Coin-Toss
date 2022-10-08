import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {value: true, total: 0, heads: 0, tails: 0}

  onClickTossCoin = () => {
    const number = Math.floor(Math.random() * 2)
    if (number > 0) {
      this.setState(prevState => ({
        value: false,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    } else {
      this.setState(prevState => ({
        value: true,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    }
  }

  render() {
    const {value, total, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {value ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="toss-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="toss-image"
            />
          )}
          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="toss-results">
            <p className="toss-count">Total: {total}</p>
            <p className="toss-count">Heads: {heads}</p>
            <p className="toss-count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
