import React from 'react';
import volker from "../../utils/volker.png";
import mailynn from "../../utils/mailynn.png";
/* */
import Image from './Image';
import Header from './Header';


function AboutUs() {
  return (
    <>
      <div className='row justify-content-center' id="about-us">
       <Header title="About Us"/>
        <div className='row justify-content-center'>
          <div className="col-lg-3 align-self-center text-center mb-5">
            <Image src={volker}
              styles={
                {marginTop: "0px"}
              }
              alt="Volker Zipprich"
              mask={"mailto: volkerzipprich@zipprichcpas.com"}/>
          </div>
          <div className="col-lg-6 col-sm-9 align-self-center text-center">
            Volker started his accounting career with Deloitte & Touche LLP in 1995, and obtained his CPA License in 1997. Volker has also been an avid pilot, obtaining his professional aviation ratings in 1989, and flying in various capacities since that time. Following his passion for aviation, he made a career change in 2004 when he accepted employment as an Airline Transport Pilot for a US based regional airline. Since that time he has continued to develop his accounting expertise with a focus on serving his fellow flight crew members with their personal and small business income tax preparation needs. Through high quality personalized service and word of mouth referrals, his client base has grown to include both pilots and flight attendants from almost every air carrier in the United States.
            <br/>
            <div className='mt-5 justify-content-md-evenly align-items-center'>
              <a href="mailto:volkerzipprich@zipprichcpas.com" className='p-2 align-items-center text-center'>📨 volkerzipprich@zipprichcpas.com</a>
              <a href="phone:801-949-5797" className='p-2 align-items-center text-center'>📱 801-949-5797</a>
              <a href="phone:801-949-5797" className='p-2 align-items-center text-center'>☎ 801-259-5694</a>
            </div>
          </div>
        </div>
        <div className='row justify-content-center pt-5'>
          <div className="col-lg-3 align-self-center text-center ml-5 mb-5">
            <Image src={mailynn}
              alt="Mai Lynn Zipprich"
              mask={"mailto: mailynnzipprich@zipprichcpas.com"}/>
          </div>
          <div className="col-lg-6 col-sm-9 align-self-center text-center ml-5">
            Mai-Lynn has worked in accounting for over 20 years and obtained her CPA license in 1999 while working for one of the Big Four accounting firms. She has a wide variety of experience from working at small manufacturing companies to auditing large public companies. In addition, for the past nine years has consulted with large public companies in technical accounting matters and SEC public filing requirements, including, 10-Q’s, 10-K’s, Proxies, Annual Reports and XBRL filings. Recently, as Zipprich CPAs Inc. has expanded, she is emphasizing her focus on small business, partnerships and S-Corp tax filings, as well as, expanding the firm’s bookkeeping and payroll services.
            <br/>
            <div className='mt-5 justify-content-md-evenly align-items-center'>
              <a href="mailto:mailynnzipprich@zipprichcpas.com" className='p-2 align-items-center text-center'>📨 mailynnzipprich@zipprichcpas.com</a>
              <a href="mailto:volkerzipprich@zipprichcpas.com" className='p-2 align-items-center text-center'>📱 801-259-5694</a>
              <a href="mailto:volkerzipprich@zipprichcpas.com" className='p-2 align-items-center text-center'>☎ 801-259-5694</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AboutUs
