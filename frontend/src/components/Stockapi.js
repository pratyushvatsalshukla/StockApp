import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Container } from "react-bootstrap";
import NavBar from "./NavBar";

const Stockapi = () => {
  const [country, setCountry] = useState("");
  const [stockData, setStockData] = useState(null);
  useEffect(() => {
    console.log("Stock data changed:", stockData);
  }, [stockData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://13.201.162.236:8090/Stock/getstock/${country}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response.data);
      // Handle the API response
      console.log(response.data.data);
      setStockData(response.data.data);
      console.log(stockData);
    } catch (error) {
      // Han]dle the error
      console.error(error);
    }
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const addToWishlist = async (stock) => {
    try {
      const emailid = localStorage.getItem("email");
      const response = await fetch(
        `http://13.201.162.236:7004/wishlist/addWishlist/${emailid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(stock),
        }
      );

      if (response.ok) {
        alert("Save to Wishlist");
        const result = await response.json();
      } else {
        alert("Stock Already exist");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div >
       
       <NavBar />

      <div >
        {/* <div className="Container justify-content-center align-items-center" style={{ color: "white" }}> */}
          <br/>
          <br/>
          <br/>
        <div
              className="d-flex flex-column align-items-center text-center" > 
              <h2>Search for Stock</h2>
            
             <br />
              <form onSubmit={handleSubmit}>
                <label style={{ color: "Black" }}>
                  Country: &nbsp;
                <input
                  type="text"
                  value={country}
                  onChange={handleCountryChange}
                />
              </label>
              <br></br>
              <div className="Container d-flex justify-content-center align-items-center">
                  <Button className="search" type="submit" variant="success">
                  Search
                  </Button>
                </div>
             </form>
        </div>
       <br/>
       
        <Container>
          {stockData && stockData.length > 0 && (
            <Row xs={1} md={3} className="g-4">
              {stockData.slice(0, 21).map((stock, index) => (
                <Col key={index}>
                  <Card style={{ height:"55vh", backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text style={{ color: 'white'}}>
                        <h3 className="card-text ">symbol:{stock.symbol}</h3>
                        <p className="card-text" style={{ color: 'white'}}>name: {stock.name}</p>
                        <p className="card-text" style={{ color: 'white'}}>currency: {stock.currency}</p>
                        <p className="card-text" style={{ color: 'white'}}>exchange: {stock.exchange}</p>
                        <p className="card-text" style={{ color: 'white'}}>micCode: {stock.mic_code}</p>
                        <p className="card-text" style={{ color: 'white'}}>country: {stock.country}</p>
                        <Button onClick={() => addToWishlist(stock)}>
                          Add to Wishlist
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
        </div>
    </div>
    
  );
};
export default Stockapi;
