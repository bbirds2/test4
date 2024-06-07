import React from 'react';
import { useLocation, useNavigate, useParams } from "react-router";

const PaymentReady: React.FC = () => {

    const { number } = useParams();

    

    return (
        <React.Fragment>
            <div className='payment_main'>
                <p>
                    test
                </p>
            </div>
        </React.Fragment>
    )

}

export default PaymentReady;