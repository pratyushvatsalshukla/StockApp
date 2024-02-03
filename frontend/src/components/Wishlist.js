import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import NavBar from './NavBar';
 
const Wishlist = () => {
    const [wishlistData, setWishlistData] = useState([]);
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("email"));
 
    useEffect(() => {
        // Fetch wishlist data using an API call
        const fetchWishlistData = async () => {
            try {
                const response = await axios.get(
                    `http://13.201.162.236:7004/wishlist/getWishlists/${localStorage.getItem("email")}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                setWishlistData(response.data);
                console.log(wishlistData);
            } catch (error) {
                console.error('Error fetching wishlist data:', error);
            }
        };
 
        fetchWishlistData();
    }, []);
 
   
    const deleteFromWishlist = async (wishlistID) => {
      try {
          const response = await axios.delete(
              `http://13.201.162.236:7004/wishlist/deleteWishlist/${wishlistID}`,
              {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
              }
          );

          if (response.status === 200) {
              // If deletion is successful, update the wishlistData state
              setWishlistData((prevData) => prevData.filter((s) => s.wishlistID !== wishlistID));
              
              alert("Stock successfully deleted from wishlist");
          } else {
              console.error('Error deleting from Wishlist:', response.data);
              toast.error("Deletion failed");
          }
      } catch (error) {
          console.error('Error deleting from Wishlist:', error);
          toast.error("Deletion failed");
      }
  };
 
      return (
        <div >
          <NavBar/>
          <div >
            <br/><br/><br/><br/>
        <div className='Container d-flex justify-content-center align-items-center' >
            <h2>Wishlist</h2>
            </div>
            <Container>
            {wishlistData && wishlistData.length > 0 && (
              <Row xs={1} md={4} className="g-4">
            {wishlistData.map((stock, index) => (
              <Col className='col-design' key={index}>
              <Card className='card-design'
               style={{
                
                marginTop: "100px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
              }}>
                <Card.Body>
                  <Card.Title>Stocks</Card.Title>
                  <Card.Text>
                        <p className="card-text" style={{ color: 'white'}}>symbol:{stock.symbol}</p>
                        <p className="card-text"style={{ color: 'white'}}>name:   {stock.name}</p>
                        <p className="card-text"style={{ color: 'white'}}>currency: {stock.currency}</p>
                        <p className="card-text"style={{ color: 'white'}}>exchange: {stock.exchange}</p>
                        <p className="card-text"style={{ color: 'white'}}>mic_code: {stock.mic_code}</p>
                        <p className="card-text"style={{ color: 'white'}}>country: {stock.country}</p>
                        <p className="card-text"style={{ color: 'white'}}>wishlistid: {stock.wishlistID}</p>
                        
                        <Button onClick={() => deleteFromWishlist(stock.wishlistID)}>Delete</Button>
                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            ))}
            </Row>
            )}
            <ToastContainer/>
            </Container>
        </div>
        </div>
        
    );
};
 
export default Wishlist;