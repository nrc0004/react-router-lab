import React, {Component} from 'react'
import {Link} from "react-router-dom"

class Home extends Component{
  constructor(props){
    super(props)
  }
  render() {
    let stocks = this.props.stocks.map((stock, i) => {
      let pathname = `/stocks/${stock.symbol}`
      return <li key={i}> {stock.name}
      (<Link to={{pathname, state: {selected: stock}}}> {stock.symbol} </Link>)</li>
    })
    return (
      <div>
        <h2>Stocks</h2>
        <ul>
          {stocks}
        </ul>
      </div>
    )
  }
}

export default Home
