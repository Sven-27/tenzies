import "Die.scss"

const Die = ({ value, isHeld, holdDice }: any) => {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "#fff"
  }
  return (
    <div 
      className="die"
      style={ styles }
      onClick={holdDice}
    >
      <h2 className="die--value">{ value }</h2>
    </div>
  )
}

export default Die