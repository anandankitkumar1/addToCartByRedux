import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { del, add, delOne } from "../redux/action/action";

export default function CardsDetails() {
    const { id } = useParams();
    const getData = useSelector((state) => state.cartReducer.carts);
    // console.log(getData);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const history = useNavigate();

    const compare = () => {
        let comparedata = getData.filter((e) => {
            return id == e.id;
        });
        setData(comparedata);
    }
    // console.log(data)

    const send = (ele) =>{
        // console.log(e);
            dispatch(add(ele))
    }

    const remove = (item)=>{
        dispatch(delOne(item))
      }

    useEffect(() => {
        compare();
    }, [id])
    return (
        <>
            <div className="container mt-2">
                <h2 className='text-center'>Items Details Page</h2>
                <section className='container mt-3'>
                    <div className="iteamsdetails">
                        {data.map((ele) => {
                            return (
                                <>
                                    <div className="items_img">
                                        <img src={ele.imgdata} alt="" />
                                    </div>
                                    <div className="details">
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p><strong>Restaurant</strong>  : {ele.rname} </p>
                                                    <p><strong>Prices</strong>  : {ele.price} </p>
                                                    <p><strong>Dishes</strong>  : {ele.address} </p>
                                                    <p><strong>Total</strong>  : {ele.price * ele.qnty} </p>
                                                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                        <span style={{ fontSize: 24 }} onClick={ele.qnty <=1 ? ()=>{ dispatch(del(ele.id)); history("/") } : ()=>remove(ele)}>-</span>
                                                        <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                                        <span style={{ fontSize: 24 }}  onClick={()=>send(ele)}>+</span>

                                                    </div>
                                                </td>
                                                <td>
                                                    <p><strong>Rating</strong>:  <span style={{ background: "green", colour: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★</span></p>
                                                    <p><strong>Order Review</strong><span>:</span>  {ele.somedata} </p>
                                                    <p onClick={() => { dispatch(del(ele.id)); history("/") }}><strong>Remove</strong> <span>:</span> <i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i> </p>
                                                </td>
                                            </tr>
                                        </Table>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                </section>
            </div>
        </>
    )
}
