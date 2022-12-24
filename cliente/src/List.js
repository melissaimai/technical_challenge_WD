import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const List = () => {
  const [phones, setPhones] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/phones")
      .then((response) => {
        console.log(response)
        setPhones(response.data)
      });
  }, [])

  return (
    <div className="col-5" >
      <div className="list-group">
        <h1 className="container justify-content-center">List of Phones</h1>
        {phones?.map((phone) => (
          <div className="d-flex p-5 border-bottom my-3" key={phone.id}>
            <Link className="d-flex text-decoration-none link-dark" to={{ pathname: `/${phone.id}`, params: { phone } }}>
              <div className="p-5">
                <h1>{phone.name}</h1>
                <img src={require(`./images/` + (phone.imageFileName))} alt="phone" height="300" width="300" />

              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>

  )
}

export default List;