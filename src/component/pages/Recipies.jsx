import React, { useEffect, useState } from 'react'
import { endUrl } from '../../api/api'
import axiosInstance from '../../api/axiosInstance';
import '../../style/style.css'
import { Row, Col,ListGroup } from 'react-bootstrap';
function Recipies() {
  let api = endUrl.menu;
  let [recipies, setRecipies] = useState();
  let fetchAll = () => {
    axiosInstance.get(api)
      .then(res => {
        console.log("response", res);
        setRecipies(res?.data)
      })
      .catch(err => {
        console.log("error", err);

      })
  }
  useEffect(() => {
    fetchAll()
  }, [api, setRecipies])
  return (
    <div className='recipes-section'>
    <div className="container">
      <h2 className="section-title">We are providing some delicious recipes for you!</h2>
      
      <div className="recipe-list">
        {recipies?.map((data) => (
          <div className="recipe-card" key={data?.id}>
            <Row className="align-items-center">
              {/* Recipe Image */}
              <Col xs={12} md={5} lg={4}>
                <div className="recipe-image-container">
                  <img 
                    src={`${data?.image}`} 
                    alt={data?.name} 
                    className="recipe-image"
                  />
                  <div className="recipe-badge">
                    ⭐ {data?.rating} Rating
                  </div>
                </div>
              </Col>

              {/* Recipe Details */}
              <Col xs={12} md={7} lg={8}>
                <div className="recipe-details">
                  <h3 className="recipe-name">{data?.name}</h3>
                  <div className="recipe-meta">
                    <span className="cook-time">
                      ⏱️ {data?.cookTimeMinutes} mins
                    </span>
                  </div>
                  
                  <h4 className="ingredients-title">Ingredients</h4>
                  <ListGroup as="ol" numbered className="ingredients-list">
                    {data?.ingredients?.slice(0, 6).map((ingredient, index) => (
                      <ListGroup.Item 
                        as="li" 
                        key={index}
                        className="ingredient-item"
                      >
                        {ingredient}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Recipies