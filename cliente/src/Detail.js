import { useLocation } from 'react-router-dom'

const Details = () => {
  const location = useLocation()
  const phone = location.state.phone;

  return (
    <div className="Details col-7" >
      <h1>{phone?.manufacturer}</h1>
      <h3>Description</h3><p> {phone?.description}</p>
      <h3>Color</h3><p>{phone?.color}</p>
      <h3>Price</h3><p>{phone?.price}</p>
      <h3>Screen</h3><p>{phone?.screen}</p>
      <h3>Processor</h3><p>{phone?.processor}</p>
      <h3>RAM</h3><p>{phone?.ram}</p>
    </div>
  )
}

export default Details;