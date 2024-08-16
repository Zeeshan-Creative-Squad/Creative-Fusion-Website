import React from 'react';
import Footer from '../../screens/Footer';
import Header from '../Header/Header';
import './RefundPolicy.css';

const RefundPolicy = () => {
    return (
        <div className='Refund-Policy d-flex flex-column'>
            <Header />
            <div className='container d-flex flex-column justify-content-center align-items-center h-100'>
                <div className='row align-items-center gy-4'>
                    <div className='col-lg-6 text-center'> {/* Added text-center class to center the text */}
                        <div className='text-content'>
                            <h1 className='body-heading my-5'>
                                Refund <span className='color-yellow'>Policy</span>
                            </h1>

                            <p className='para'>
                                At Creative Fusion, we ensure 100% customer satisfaction. In case of any dissatisfaction or disappointment faced by our customers, we offer a complete refund on certain terms and conditions. Our policy has been devised to define under which conditions we will be offering a refund. By engaging in any of Creative Fusion's services, you are declaring that you accept and agree with all the terms and conditions outlined in the refund policy.
                            </p>

                            <p className='body-paragraph main'>
                                Eligibility for Refund
                            </p>
                            <ul className='body-paragraph'>
                                <li>Frequent unmet deadlines from our production team's end</li>
                                <li>Miscommunication by key account managers or salespeople</li>
                                <li>Lack of performance by the team</li>
                                <li>The project is not initiated by the team</li>
                                <li>Other work-related delays</li>
                            </ul>

                            <p className='body-paragraph main'>
                                Refund will not be provided in case of:
                            </p>
                            <ul className='body-paragraph'>
                                <li>Customer's change of heart</li>
                                <li>Delay from the customer's end</li>
                                <li>The project is completed and uploaded on the server</li>
                                <li>Asking for more than what's committed in the agreement</li>
                            </ul>

                            <p className='body-paragraph'>
                                Processing of Refunds: All refunds will be processed and reflect in your bank account within 14-22 business days of the date of cancellation and will be carried out using the method of payment agreed upon by the client at the beginning of the project.
                            </p>

                            <p className='body-paragraph'>
                                <strong>Note:</strong> Creative Fusion may, at any time and without prior notice, under its sole discretion, amend this refund policy. You are, therefore, requested to review this policy periodically. In any case of unmet deadlines and lack of performance, the customer is eligible for a 100% refund once our Quality Assurance team has reviewed the case.
                            </p>

                            <h1 className='body-heading my-5 text-center'>
                                <span className='color-yellow'>Thank You!</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RefundPolicy;
