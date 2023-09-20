import { useContext } from "react"
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap"
import DataContext from "../context/DataContext"
import { useNavigate } from "react-router-dom"

const Cards = () => {
  const { data, addToCart, formatNumber } = useContext(DataContext)
  const navigate = useNavigate()

  const handleProduct = (id) => {
    navigate(`/list/${id}`)
  }

  return (
    <>
      {data?.map((item) => (
        <Card key={item?.id} className="p-2">
          <Card.Img variant="top" src={item?.img} />
          <Card.Body>
            <div className="ms-auto">
              <Card.Title style={{ textTransform: 'capitalize' }}>{item?.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Materiales :</Card.Subtitle>
              <ListGroup variant="flush" className="mb-3">
                {item.materials?.map((material, i) => (
                  <ListGroupItem className="border-0 text-capitalize" key={i}>
                    {material}
                  </ListGroupItem>
                ))}
              </ListGroup>
              <Card.Text className="fw-bold fs-5">
              ${formatNumber(item.price)}
            </Card.Text>
              <Button variant="success" className="me-3" onClick={() => addToCart(item)}>
                Añadir al 🛒
              </Button>
              <Button variant="info text-white text-decoration-none" onClick={() => handleProduct(item?.id)}>
                Detalle
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default Cards
