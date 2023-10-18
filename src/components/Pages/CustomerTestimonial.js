import React from 'react'
import { ServiceCard } from "../ServiceCard";
import testimonial from "../../images/testimonials.svg";

export const CustomerTestimonial = ({className}) => {
  return (
    <>
    <div className="wrapper  jcsb  mt64 pt48">
          <div className="cutomer-main pb64">
            <div className="cutomer-heading fs20 fw5 mb32">
              Customer testimonials
            </div>
            <div className="cutomer-contant fs42 fw5 pb24">
              What they think of us
            </div>
          </div>
          <div className={`wrapper df ${className}`}>
            <div className="banner-left v-center fdc flx32 pr32">
              <ServiceCard className={"mt24 mb48"} />
              <ServiceCard className={"mt24 mb48"} dn={'chirag'}/>
              <ServiceCard className={"mt24"}/>
            </div>
            <div className="banner-center flx32">
              <div>
                <span>
                  <img
                    className="banner-img flx100"
                    src={testimonial}
                    alt="banner_Center_Image"
                  />
                </span>
              </div>
            </div>
            <div className="banner-right v-center fdc flx32 pl24 ">
              <ServiceCard className={"mt24 mb48"}/>
              <ServiceCard className={"mt24 mb48"}/>
              <ServiceCard className={"mt24 mb48"}/>

            </div>
          </div>
        </div>
     
          <div/>
    </>
  )
}
