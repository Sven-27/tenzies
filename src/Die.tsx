import "Die.scss"

const Die = ({ value }: any) => {
  return (
    <div className="die">
      <h2 className="die--value">{ value }</h2>
    </div>
  )
}

export default Die