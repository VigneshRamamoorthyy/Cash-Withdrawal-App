import {Component} from 'react'
import DenomintationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const userName = 'Sarah Williams'
    const userProfile = userName.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cashwithdraw-container">
          <div className="user-profile-container">
            <div className="user-profile-icon">
              <h1 className="user-profile-title">{userProfile}</h1>
            </div>
            <h1 className="user-name">{userName}</h1>
          </div>

          <div className="balance-container">
            <p className="your-balance-text">Your Balance</p>
            <div className="rupees-container">
              <p className="balance">{balance}</p>
              <p className="rupees-text">in Rupees</p>
            </div>
          </div>

          <p className="withdraw-title">Withdraw</p>

          <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenomintationItem
                eachDenomination={eachDenomination}
                updateBalance={this.updateBalance}
                key={eachDenomination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
