'use client'
import { sliderCarousel } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"


import { useEffect, useState } from 'react'

export default function Footer1() {
	const [isAccordion1, setIsAccordion1] = useState(0)
	const [isAccordion2, setIsAccordion2] = useState(0)
	const [isAccordion3, setIsAccordion3] = useState(0)
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768)
		}

		handleResize() // Run on initial load
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handleAccordion1 = (key) => {
		if (!isDesktop) {
			setIsAccordion1((prev) => (prev === key ? null : key))
		}
	}
	const handleAccordion2 = (key) => {
		if (!isDesktop) {
			setIsAccordion2((prev) => (prev === key ? null : key))
		}
	}
	const handleAccordion3 = (key) => {
		if (!isDesktop) {
			setIsAccordion3((prev) => (prev === key ? null : key))
		}
	}

	const getDisplayStyle1 = (key) => {
		return isDesktop ? 'block' : isAccordion1 === key ? 'block' : 'none'
	}
	const getDisplayStyle2 = (key) => {
		return isDesktop ? 'block' : isAccordion2 === key ? 'block' : 'none'
	}
	const getDisplayStyle3 = (key) => {
		return isDesktop ? 'block' : isAccordion3 === key ? 'block' : 'none'
	}
	return (
		<>

			<footer className="tf-footer style-2">
				<div className="footer-top">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12">
								<Swiper {...sliderCarousel} className="swiper-container slider-carousel">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="box-cta wow fadeInUp" data-wow-delay="0s">
												<p className="caption font-main-2 ">Become a Team Member?</p>
												<p className="mb-20">We are always looking for talented Member</p>
												<Link href="/rent-a-resource" className="tf-btn style-10 small">
													Get Started
													<i className="icon-chevron-right" />
												</Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="box-cta wow fadeInUp" data-wow-delay="0.1s">
												<p className="caption font-main-2">Need Quality Consultations?</p>
												<p className="mb-20">We are always looking for talented Member</p>
												<Link href="/rent-a-resource" className="tf-btn style-10 small">
													Get Consultation
													<i className="icon-chevron-right" />
												</Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="box-cta wow fadeInUp" data-wow-delay="0.2s">
												<p className="caption font-main-2">Are You Looking For A Jobs?</p>
												<p className="mb-20">We are always looking for talented Member</p>
												<Link href="/rent-a-resource" className="tf-btn style-10 small">
													Join With Us
													<i className="icon-chevron-right" />
												</Link>
											</div>
										</SwiperSlide>
									</div>
									<div className="tf-pagination style-3 carousel-pagination swiper-pagination">
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-inner-border">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12">
								<div className="footer-inner">
									<div className="inner-left">
										<div className={`footer-inner-wrap footer-col-block ${isAccordion1 === 1 ? 'open' : ''} `}>
											<p className="footer-title footer-title-desktop">Services</p>
											<p className="footer-title footer-title-mobile" onClick={() => handleAccordion1(1)}>Services</p>
											<ul className="list tf-collapse-content" style={{ display: getDisplayStyle1(1) }}>
												<li>
													<Link href="/our-services/accounting-reporting">Accounting &amp; Reporting</Link>
												</li>
												<li>
													<Link href="/our-services/data-entry-audit-support">Data Entry &amp; Audit Support</Link>
												</li>
												<li>
													<Link href="/our-services/internal-control-financial-reporting">Internal Control over Financial Reporting</Link>
												</li>
												<li>
													<Link href="/our-services/erp-functional-support">ERP Functional Support</Link>
												</li>
												<li>
													<Link href="/our-services/hr-payroll-services">HR &amp; Payroll Services</Link>
												</li>
											</ul>
										</div>
										<div className={`footer-inner-wrap footer-col-block ${isAccordion1 === 1 ? 'open' : ''} `}>
											<p className="footer-title footer-title-desktop">Quick Links</p>
											<p className="footer-title footer-title-mobile" onClick={() => handleAccordion2(1)}>Quick Links</p>
											<ul className="list tf-collapse-content" style={{ display: getDisplayStyle2(1) }}>
												<li>
													<Link href="/about-us">About Company</Link>
												</li>
												<li>
													<Link href="/why-choose-us">Why Choose Us</Link>
												</li>
												<li>
													<Link href="/rent-a-resource">Rent A Resource</Link>
												</li>

												<li><Link href="/blogs">Blogs</Link></li>

												<li>
													<Link href="/contact">Contact Us</Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="inner-right">
										<div className="logo-site">
											<Link href="/">
												{/* <Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													id="logo_footer" data-retina="./images/logo/logo@2x.png" src="/images/logo/logo.png" alt="" /> */}
												<h3 className='text-white'>Globirix</h3>
											</Link>
										</div>
										<p>
											Stay up-to-date with the latest trends in digital
											marketing and receive exclusive <br /> tips and insights by
											subscribing to our newsletter.
										</p>
										<form action="#" id="form-sub" className="form-sub style-4">
											<fieldset>
												<div className="icon">
													<i className="icon-envelope" />
												</div>
												<input type="text" placeholder="Email Address" required />
											</fieldset>
											<button type="submit" className="tf-btn">
												Subscribe
												<i className="icon-chevron-right" />
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="footer-bottom">
								<Link href="/#" className="footer-go-top">
									<i className="icon-arrow-top fs-8"> </i>
								</Link>
								<p className="no-copy style-2">
									Copyright © {new Date().getFullYear()} <span> Globirix </span> by
									<Link href="/" target="_blank">
										DesignSol
									</Link>
									, All Rights Reserved.
								</p>
								<div className="policy-list">
									<ul className="list">
										<li>
											<Link href="/"> Teams &amp; Conditions </Link>
										</li>
										<li>
											<span className="dot" />
										</li>
										<li>
											<Link href="/"> Privacy Policy </Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
