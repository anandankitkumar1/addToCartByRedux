import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import CardData from "./CardsData";
import { useSelector } from 'react-redux';
import { del, add, delOne } from "../redux/action/action";
export default function Cards() {
    const dispatch = useDispatch();
  
    
    const send = (ele) => {
        // console.log(e);
        dispatch(add(ele))
    }
    const getData = useSelector((state) => state.cartReducer.carts);
    const [data, setData] = useState(CardData);
    console.log(getData);
    let ck = (id)=>{
        const object = getData.find(obj => obj.id == id);
      if(object){
        return true;
      }else{
        return false;
      }
    }


    const remove = (item)=>{
        dispatch(delOne(item))
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
                                        {ck(ele.id) ?     <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                        <span style={{ fontSize: 24 }} onClick={ele.qnty <=1 ? ()=>{ dispatch(del(ele.id))} : ()=>remove(ele)}>-</span>
                                                        <span style={{ fontSize: 22 }}></span>
                                                        <span style={{ fontSize: 24 }}  onClick={()=>send(ele)}>+</span>

                                                    </div> : <Button variant="primary" onClick={() => send(ele)} className='col-lg-12'>Add to Cart</Button>}
                                        
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
