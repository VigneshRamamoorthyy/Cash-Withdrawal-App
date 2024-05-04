import './index.css'

const DenominationItem = props => {
  const {eachDenomination, updateBalance} = props
  const {value} = eachDenomination
  const onClickDenomination = () => {
    updateBalance(value)
  }
  return (
    <li className="denomination-list">
      <button
        className="denomination-btn"
        type="button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
