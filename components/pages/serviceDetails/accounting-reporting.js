'use client'
import { useState } from 'react'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/resuable/sidebar'
export default function AccountingReporting() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-service-detail">
	<div className="tf-container">
		<div className="row">
			<div className="col-lg-8">
				<div className="content">
					<div className="entry-image tf-hover mb-40">
						<div className="hover-1">
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								src="/images/section/service-detail.jpg"
								data-src="/images/section/service-detail.jpg"
								alt=""
								className="lazyload"
							/>
						</div>
					</div>
					<p className="title s1 mb-10 text-anime-wave">
						Accounting &amp; Reporting Services
					</p>
					<p className="text s1 mb-25">
						We provide end-to-end accounting and reporting services to help businesses maintain accurate records,
						meet compliance standards, and make informed financial decisions. Our solutions are designed to ensure
						transparency, reliability, and efficiency in every aspect of your financial operations.
					</p>
					<p className="text s2 mb-40">
						From bookkeeping and general ledger management to financial reporting and compliance, we ensure that
						your business finances are well-organized and compliant with both local and international standards.
					</p>
					<h3 className="title-2 s1 text-anime-wave">
						Our Key Accounting &amp; Reporting Services Include:
					</h3>
					<p className="text s3">
						We focus on delivering accurate, timely, and customized reports to support better decision-making and
						long-term financial growth.
					</p>
					<ul className="list-1">
						<li>
							<div className="number"><p>1</p></div>
							<div>
								<h6>Bookkeeping &amp; General Ledger Maintenance</h6>
								<p>
									End-to-end bookkeeping services including recording of daily transactions and accurate
									ledger maintenance for smooth financial operations.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>2</p></div>
							<div>
								<h6>Financial Statement Preparation</h6>
								<p>
									Preparation of monthly, quarterly, and annual financial statements in compliance with
									regulatory and business requirements.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>3</p></div>
							<div>
								<h6>Management Reporting, Budgeting &amp; Forecasting</h6>
								<p>
									Customized management reports, budgeting strategies, and financial forecasts that
									provide valuable insights into business performance.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>4</p></div>
							<div>
								<h6>Customized MIS &amp; Financial Modeling</h6>
								<p>
									Designing tailored MIS reports and financial models to support effective decision-making
									and business growth strategies.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>5</p></div>
							<div>
								<h6>Regulatory &amp; Standards Compliance</h6>
								<p>
									Ensuring full compliance with local and international accounting standards, helping your
									business stay secure and audit-ready.
								</p>
							</div>
						</li>
					</ul>

					<div className="entry-image-2 mb-40">
						<div className="image">
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								src="/images/section/service-detail-2.jpg"
								data-src="/images/section/service-detail-2.jpg"
								alt=""
								className="lazyload"
							/>
						</div>
						<div className="experience">
							<div className="wg-counter style-9">
								<div className="odometer style-9"><CounterUp count={10} /></div>
								<span className="sub-odo">+</span>
							</div>
							<h4 className="sub-exp">
								Years of <br /> Experience
							</h4>
						</div>
					</div>

					<h3 className="title-2 s2 mb-15 text-anime-wave">
						Our Easy Working Process
					</h3>
					<p className="text s4 mb-50">
						We follow a structured yet flexible process to deliver accurate and timely accounting services tailored
						to your business needs.
					</p>
					<ul className="list-2 mb-70">
						<li>
							<p className="step-number">Step 01</p>
							<h6 className="caption">Understanding Your Business</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We begin by analyzing your current accounting system, processes, and reporting needs.
							</p>
						</li>
						<li>
							<p className="step-number">Step 02</p>
							<h6 className="caption">Process Setup &amp; Standardization</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We establish standardized accounting processes ensuring compliance and accuracy.
							</p>
						</li>
						<li>
							<p className="step-number">Step 03</p>
							<h6 className="caption">Reporting &amp; Insights</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We deliver regular reports, forecasts, and MIS dashboards for informed decision-making.
							</p>
						</li>
					</ul>

					<h3 className="title-2 s3 mb-15 text-anime-wave">
						Frequently Asked Questions
					</h3>
					<p className="text s5 mb-40">
						Here are some common questions about our Accounting & Reporting services to give you more clarity on
						how we work.
					</p>
					<div className="tf-accordion style-4 style-2 accordion" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
								<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button">
									What does your Accounting & Reporting service include?
								</button>
							</h2>
							<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`}>
								<div className="accordion-body">
									Our services include bookkeeping, financial statement preparation, management reporting,
									MIS, forecasting, and ensuring compliance with accounting standards.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
								<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button">
									Do you provide customized financial reports?
								</button>
							</h2>
							<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`}>
								<div className="accordion-body">
									Yes, we provide tailored MIS reports and financial models based on your unique business
									requirements.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
								<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button">
									Are your reports compliant with accounting standards?
								</button>
							</h2>
							<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`}>
								<div className="accordion-body">
									Yes, all our financial statements and reports comply with both local and international
									standards.
								</div>
							</div>
						</div>
						<div className="accordion-item last">
							<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
								<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button">
									How often will I receive reports?
								</button>
							</h2>
							<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`}>
								<div className="accordion-body">
									We provide reports on a monthly, quarterly, or annual basis as per your business needs,
									along with real-time MIS dashboards if required.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4">
				<Sidebar />
			</div>
		</div>
	</div>
</section>


		</>
	)
}
