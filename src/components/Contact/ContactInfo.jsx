import React from 'react'

const ContactInfo = ({name, value,c, children}) => {
  return (
    <div className={`col-lg-3 col-md-4 col-9 mb-5 text-center ${c}`} >
      {children}
      <h6 style={{fontSize: "36px", fontFamily:  'Philosopher, sans-serif',margin: "15px 0px"}}>{name}</h6>
      <p style={{fontSize: "16px",marginBottom: "55px"}} >{value}</p>
    </div>
  )
}

export default ContactInfo