import React from 'react';
import PaymentReady from './PaymentReady';
import './Payment.css';

const Payment: React.FC = () => {

    return (
        <React.Fragment>
            <div className='app_header'>
                <img className="gmoney_logo" src='/assets/images/logo.png'></img>
                <img className="close_icon" src='/assets/images/close.png'></img>
            </div>
            <PaymentReady />
        </React.Fragment>
    )
};

export default Payment;

