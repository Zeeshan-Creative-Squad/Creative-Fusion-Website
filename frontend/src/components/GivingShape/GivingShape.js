import React from 'react';
import "./GivingShape.css";
import { Link } from 'react-router-dom';

function GivingShape(props) {
    return (
        <div className='GivingShape-container py-5'>
            <div className='container my-xxl-5 my-4'>
                <div className={`main row align-items-center gy-3 my-xxl-5`}>
                    <div className='text-content col-lg-5 text-center text-lg-start'>
                        <div className='d-flex gap-3 align-items-center'>
                            <h3 className='font-bebus body-heading color-white mb-4' >
                                {props.Heading}
                            </h3>
                        </div>
                        <Link to='/contact'><button className='genral-btn btn-red mt-2' style={{ textDecoration: "none" }}>Contact Us</button></Link>
                    </div>
                    <div className='img-container col-lg-7 px-4'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='content-section px-3'>
                                    <img src='/images/icons/gs-icon-1.png' alt='service icon' />
                                    <h6 className='color-white mt-4 '>{props.ShapeHeadingOne}</h6>
                                    <p className='body-paragraph my-3'>{props.Discovery}</p>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='content-section px-3'>
                                    <img src='/images/icons/gs-icon-2.png' alt='service icon' />
                                    <h6 className='color-white mt-4 '>{props.ShapeHeadingTwo}</h6>
                                    <p className='body-paragraph my-3'>{props.Design}</p>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='content-section px-3'>
                                    <img src='/images/icons/gs-icon-3.png' alt='service icon' />
                                    <h6 className='color-white mt-4 '>{props.ShapeHeadingThree}</h6>
                                    <p className='body-paragraph my-3'>{props.Optimization}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GivingShape;