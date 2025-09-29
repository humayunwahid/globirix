'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from "react-type-animation"

export default function Hero1() {
  const [isOpen, setOpen] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (!videoRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {})
          } else {
            videoRef.current.pause()
          }
        })
      },
      { threshold: 0.5 } // 50% of video must be visible
    )

    observer.observe(videoRef.current)

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [])

  return (
    <>
      <div className="page-title-home-1">
        <div className="mb-50">
          <div className="tf-container w-1780">
            <div className="row">
              {/* Left Content */}
              <div className="col-lg-6">
                <div className="content bg-gray">
                  <p className="s-sub-title text-white ">
                    <i className="icon-angles-right moveLeftToRight" />
                    Resource Outsourcing Firm
                  </p>
                  <p className="s-title text-white-yellow mb-20 text-fs-50">
                    Driving Growth <br />
                    <span className="animationtext clip">
                      <TypeAnimation
                        sequence={[
                          'Through Transformation',
                          1000,
                          'Through Collaboration',
                          1000,
                          'Through Excellence',
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block', marginLeft: "15px" }}
                        repeat={Infinity}
                        className="cd-words-wrapper ms-3"
                      />
                    </span>
                  </p>
                  <span className="line mb-10" />
                  <p className="text font-main-2 fw-5 mb-40 justify-content">
                    We offer tailored accounting solutions—from flexible Rent-a-Resource services and financial modelling to accounting and tax compliance—empowering your business to streamline operations and ensure financial accuracy.
                  </p>
                  <div className="bot">
                    <Link href="/our-services" className="tf-btn">
                      Explore Services
                      <i className="icon-chevron-right" />
                    </Link>
                    <div className="video-wrap">
                      <a onClick={() => setOpen(true)} className="popup-youtube fs-14 fw-7">
                        <span className="icon style-circle">
                          <span className="bg" />
                          <span className="wave-3" />
                          <i className="icon-play fs-12" />
                        </span>
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Video with Fallback */}
              <div className="col-lg-6">
                <div className="video-wrap">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
                  >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                    {/* Fallback Image */}
                    <img
                      src="/images/section/hero1.webp"
                      alt="Hero Fallback"
                      style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="tf-marquee slider-saylo">
          <div className="wrap-marquee gray">
            <div className="marquee-item"><p className="font-main-2 text">Accounting & Reporting</p></div>
            <div className="marquee-item"><p className="font-main-2 text">Data Entry & Audit Support</p></div>
            <div className="marquee-item"><p className="font-main-2 text">HR & Payroll</p></div>
            <div className="marquee-item"><p className="font-main-2 text">ERP Financial Support</p></div>
            <div className="marquee-item"><p className="font-main-2 text">Internal Controls Over Financial Reporting</p></div>
            <div className="marquee-item"><p className="font-main-2 text">Accounting & Reporting</p></div>
            <div className="marquee-item"><p className="font-main-2 text">Data Entry & Audit Support</p></div>
            <div className="marquee-item"><p className="font-main-2 text">HR & Payroll</p></div>
            <div className="marquee-item"><p className="font-main-2 text">ERP Financial Support</p></div>
            <div className="marquee-item"><p className="font-main-2 text">Internal Controls Over Financial Reporting</p></div>
          </div>
        </div>
      </div>

      {/* Popup Video */}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId="JXMWOmuR1hU"
        onClose={() => setOpen(false)}
      />
    </>
  )
}
