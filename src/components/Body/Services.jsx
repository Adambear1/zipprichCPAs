import React from 'react'
import Image from './Image';
import image1 from "../../utils/image3.jpg";
import Header from './Header';

function Services() {
  return (
    <>
      <Header title="Services"/>
      <div className='row justify-content-center'>
        <div className="col-9 align-self-center">
          Zipprich CPAs, INC. is a professional services firm based in Houston, Texas. Our partners have in excess of 25 years experience as Certified Public Accountants, and strive to exceed a high level of professionalism in their industry. Utilizing cloud based technology, we are able to offer our clients the most secure and efficient means of data exchange and paperless tax preparation in our industry.
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-sm-9 col-lg-3  align-self-center text-left">
          <b>For small businesses:</b><br/>
          <ul>
            <li>
              Tax preparation and planning</li>
            <li>
              Bookkeeping and payroll processing</li>
            <li>Choice of business entity consulting and LLC set up services</li>
            <li>Financial Assurance and Advisory Services (Compilations, Reviews and Audits)</li>
            <li>IRS and State audit assistance and representation</li>
          </ul>
          <b>For large businesses:</b><br/>
          <ul>
            <li>
              Financial Reporting including 10Q's, 10-K's, Proxies and Annual Reports</li>
            <li>Technical accounting research</li>
            <li>
              XBRL consulting</li>
          </ul>
        </div>
        <div className="col-sm-9 col-lg-6 align-self-center text-right">
          <Image src={image1}
            alt="image of tax documentes"
            styles={
              {maxHeight: "500px"}
            }/>
        </div>
      </div>
    </>
  )
}

export default Services
