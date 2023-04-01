import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import CardData from "./CardsData";
import {add} from "../redux/action/action"
export default function Cards() {
    const [data, setData] = useState(CardData);
    const dispatch = useDispatch();
    const send = (ele) =>{
        // console.log(e);
            dispatch(add(ele))
    }
    return (
        <div className='container mt-3'>
            <h2 className='text-center '>Add to cart Project</h2>
            <div className='row d-flex justify-content-center align-items-center'>
                {data.map((ele, idx) => {
                    return (
                        <>
                            <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                <Card.Img variant="top" src={ele.imgdata} style={{ height: "16rem" }} className="mt-3" />
                                <Card.Body>
                                    <Card.Title>{ele.rname}</Card.Title>
                                    <Card.Text>
                                        Price : ₹ {ele.price}
                                    </Card.Text>
                                    <div className='button_div d-flex justify-content-center'>
                                        <Button variant="primary" onClick={()=>send(ele)} className='col-lg-12'>Add to Cart</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </>
                    )
                })}

            </div>

        </div>
    )
}
