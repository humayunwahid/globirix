'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Section9() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-faq tf-spacing-2 mb-100">
				<div className="image">
					<Image
						width="0"
						height="0"
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
						src="/images/section/faq.webp" data-src="/images/section/faq.webp" alt="" className="lazyload" />
				</div>
				<div className="content-wrap">
					<div className="content-left">
						<p className="s-sub-title text-white mb-15">
							<i className="icon-angles-right moveLeftToRight" />
							Services Offered
						</p>
						<p className="s-title text-white mb-30 text-anime-wave">
							Our Key Services
							<span>
								To Empower Your Business
							</span>
						</p>
						<p className="text text-white mb-40">
							We provide flexible accounting and financial outsourcing solutions designed to streamline operations, ensure compliance, and support strategic decision-making. You can either <b>hire a dedicated professional through our Rent-a-Resource model </b>or rely on us to <b>deliver full-service outsourcing </b>— whichever best fits your needs.						</p>
						<Link href="/" className="tf-btn style-15 type-2 small text-anime-style-1">
							Get A Quote
							<i className="icon-chevron-right" />
						</Link>
					</div>
					<div className="content-right">
						<div className="tf-accordion style-2 accordion" id="accordionExample">
							{/* Accounting & Reporting */}
							<div className="accordion-item">
								<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
									<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										Accounting & Reporting
									</button>
								</h2>
								<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										End-to-end support covering bookkeeping, financial statements, management reporting, and budgeting — with compliance to local and international standards.
									</div>
								</div>
							</div>

							{/* Data Entry & Audit Support */}
							<div className="accordion-item">
								<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
									<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										Data Entry & Audit Support
									</button>
								</h2>
								<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Accurate and timely data management, plus professional support for audits and reviews.
									</div>
								</div>
							</div>

							{/* Internal Control over Financial Reporting */}
							<div className="accordion-item">
								<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
									<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										Internal Control
									</button>
								</h2>
								<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Strengthening processes and controls to safeguard assets, reduce risk, and ensure compliance.
									</div>
								</div>
							</div>

							{/* ERP Functional Support */}
							<div className="accordion-item">
								<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
									<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
										ERP Functional Support
									</button>
								</h2>
								<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Assistance with ERP system configuration, maintenance, and finance-related process optimization.
									</div>
								</div>
							</div>

							{/* HR & Payroll Services */}
							<div className="accordion-item">
								<h2 className="accordion-header" onClick={() => handleAccordion(5)}>
									<button className={`accordion-button ${isAccordion === 5 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										HR & Payroll Services
									</button>
								</h2>
								<div id="collapseFive" className={`accordion-collapse collapse ${isAccordion === 5 ? 'show' : ''}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Complete HR administration and payroll processing with accuracy, confidentiality, and compliance.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item-group">
						<span className="item item-2" />
						<span className="item item-3" />
					</div>
				</div>
			</section>

		</>
	)
}
