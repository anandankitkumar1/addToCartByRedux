import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Table from 'react-bootstrap/esm/Table';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import cartImg from "../img/cart.gif"
import { useDispatch, useSelector } from 'react-redux';
import {del} from "../redux/action/action"

export default function Header() {
    const [price, setPrice] = useState(0);
    const getData = useSelector((state) => state.cartReducer.carts);
    // console.log(getData);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const total = ()=>{
        let price = 0;  
        getData.map((ele)=>{
            price = ele.price *ele.qnty + price;
        })
        setPrice(price);
    }

    // console.log(price);

    useEffect(()=>{
        total();
    },[total])

    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: "60px  " }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3" >Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>

                    </Nav>
                    <Badge badgeContent={getData.length} color="primary"
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i class="fa-sharp fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >


                    {getData.length ? 
                    <div className='card_details' style={{width:"24rem",padding:10}}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Restaurant Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getData.map((ele)=>{
                                    return(
                                        <>
                                        <tr>
                                            <td>
                                                <NavLink to={`/cart/${ele.id}`} onClick={handleClose}>
                                                <img src={ele.imgdata} alt="" style={{width:"5rem",height:"5rem"}}/>
                                                </NavLink>
                                               
                                            </td>
                                            <td>
                                                            <p>{ele.rname}</p>
                                                            <p>Price : ₹{ele.price}</p>
                                                            <p>Quantity : {ele.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>{dispatch(del(ele.id))}}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>
                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>{dispatch(del(ele.id))}}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                        </tr>
                                        
                                        </>
                                    )
                                })}
                                <p className='text-center'>Total : ₹ {price}</p>
                            </tbody>
                        </Table>
                    </div>: <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                        <i className='fas fa-close smallclose' style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} onClick={handleClose}></i>
                        <p style={{ fontSize: 22 }}>Your Cart is Empty </p>
                        <img src={cartImg} alt="cart" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                    </div> }



                    {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                    
                </Menu>
            </Navbar>

        </div>
    )
}
