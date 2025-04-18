import React, { useEffect, useState } from 'react'
import { endUrl } from '../../api/api'
import axiosInstance from '../../api/axiosInstance'
import { Col, Container, Row, Image } from 'react-bootstrap';
import '../../style/style.css'
function About() {
  let api = endUrl.about;
  let [about, setAbout] = useState();
  let fetchAll = () => {
    axiosInstance.get(api).then(res => {
      console.log("response", res.data);
      setAbout(res?.data)
    })
      .catch(err => {
        console.log("error", err);
      })
  }
  useEffect(() => {
    fetchAll()
  }, [setAbout])
  return (
    <div className='about-section'>
      <div className="hero-image">
        <Image src={`${about?.img}`} fluid className="hero-img" />
      </div>

      <div className="about-content container py-5">
        {/* Restaurant Section */}
        <Row className="about-row align-items-center mb-5">
          <Col md={6} className="order-md-1 order-2">
            <div className="about-text">
              <h3 className="section-title">{about?.Restaurant?.title}</h3>
              <p className="section-description">{about?.Restaurant?.description}</p>
            </div>
          </Col>
          <Col md={6} className="order-md-2 order-1 mb-4 mb-md-0">
            <img
              src={`${about?.Restaurant?.img}`}
              alt="Restaurant"
              className="about-image img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="about-row align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="about-text">
              <h3 className="section-title">{about?.mission?.title}</h3>
              <p className="section-description">{about?.mission?.description}</p>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={`${about?.mission?.image?.url}`}
              alt="Our Mission"
              className="about-image img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Contact Section */}
        <div className="about-contact mt-5">
          <div className="contact-card shadow rounded p-4">
            <Row className="align-items-center">
              <Col md={4} className="mb-4 mb-md-0">
                <Image
                  src={`${about?.contact?.img}`}
                  alt="Contact"
                  className="contact-image img-fluid rounded"
                />
              </Col>
              <Col md={8}>
                <div className="contact-info d-flex flex-column h-100 justify-content-center">
                  <h3 className="contact-title mb-4">{about?.contact?.title}</h3>
                  <div className="contact-details d-flex flex-column gap-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-geo-alt-fill contact-icon"></i>
                      <span className="ms-3">{about?.contact?.address}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-telephone-fill contact-icon"></i>
                      <span className="ms-3">{about?.contact?.phone}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-envelope-fill contact-icon"></i>
                      <span className="ms-3">{about?.contact?.email}</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About