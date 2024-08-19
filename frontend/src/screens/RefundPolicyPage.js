import React from 'react'
import RefundPolicy from '../components/RefundPolicy/RefundPolicy'
import { Helmet } from 'react-helmet'

const RefundPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Creative Fusion Refund Policy - Customer Satisfaction Guaranteed</title>
        <meta name="description" content="Read Creative Fusion's refund policy for satisfaction guarantees. Find out conditions for refunds and processing times to ensure your project's success." />
      </Helmet>

      <div className='box multi-gradient '>
        <div className='glass-box'>
          <RefundPolicy />
        </div>
      </div>
    </>
  )
}

export default RefundPolicyPage