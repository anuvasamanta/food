import React, { useEffect, useState } from 'react'
import { endUrl } from '../../api/api'
import axiosInstance from '../../api/axiosInstance'
import { Button, Col, Row, Card } from 'react-bootstrap';
import '../../style/style.css'
function MenuItems() {
    const api = endUrl.menu;
    let [menu, setMenu] = useState();
    const fetchAll = () => {
        axiosInstance.get(api)
            .then(res => {
                console.log("response", res.data);
                setMenu(res.data)
            })
            .catch(err => {
                console.log("error", err);
            })
    }
    useEffect(() => {
        fetchAll()
    }, [api, setMenu])
    return (
        <div className="menu-container">
  <h2 className="menu-title text-center mb-4">Enjoy Our <span className="text-danger">Delicious</span> Food</h2>
  
  <Row className="g-4">
    {menu?.map((data) => (
      <Col key={data?.id} xs={12} sm={6} md={4} lg={3} className="d-flex">
        <Card className="flex-grow-1 shadow-sm hover-shadow">
          <div className="ratio ratio-4x3">
            <Card.Img 
              variant="top" 
              src={`${data?.image}`} 
              className="object-fit-cover"
              alt={data?.name}
            />
          </div>
          <Card.Body className="d-flex flex-column">
            <Card.Title className="h5">{data?.name}</Card.Title>
            <Card.Text className="flex-grow-1">
              <div className="d-flex align-items-center mb-2">
                <span className="badge bg-warning text-dark me-2">
                  ⭐ {data?.rating}
                </span>
                <span className="badge bg-info text-dark">
                  {data?.mealType}
                </span>
              </div>
              <div className="mb-2">
                {data?.tags?.map((tag, i) => (
                  <span key={i} className="badge bg-light text-dark me-1">#{tag}</span>
                ))}
              </div>
              <h5 className="text-primary mb-0 pricebuy">{data?.price}</h5>
            </Card.Text>
            <Button variant="primary" className="mt-auto w-100 buy">
              Buy Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  
  <hr className="my-5" />
</div>
    )
}

export default MenuItems