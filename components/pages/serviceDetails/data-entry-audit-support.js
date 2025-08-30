'use client'
import { useState } from 'react'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/resuable/sidebar'
export default function DataEntryAuditSupport() {
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
						Data Entry &amp; Audit Support
					</p>
					<p className="text s1 mb-25">
						Our Data Entry &amp; Audit Support services ensure accurate, organized, and audit-ready financial
						records for your business. We manage transaction entries, reconciliations, and audit coordination
						so you can focus on your core operations while maintaining financial transparency.
					</p>
					<p className="text s2 mb-40">
						By keeping records precise and preparing detailed audit-ready schedules, we help businesses
						avoid compliance risks and ensure smoother audits with minimal disruptions.
					</p>
					<h3 className="title-2 s1 text-anime-wave">
						Our Key Data Entry &amp; Audit Support Services Include:
					</h3>
					<p className="text s3">
						We combine accuracy, efficiency, and compliance-focused processes to support your financial and
						audit requirements seamlessly.
					</p>
					<ul className="list-1">
						<li>
							<div className="number"><p>1</p></div>
							<div>
								<h6>Accurate Data Entry</h6>
								<p>
									Recording invoices, receipts, payments, and financial transactions with utmost precision
									to maintain reliable business records.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>2</p></div>
							<div>
								<h6>Bank &amp; Account Reconciliations</h6>
								<p>
									Regular reconciliation of bank accounts and ledgers to ensure consistency and identify
									discrepancies promptly.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>3</p></div>
							<div>
								<h6>Audit-Ready Financial Schedules</h6>
								<p>
									Preparation of detailed financial schedules and documentation tailored for audit purposes,
									saving time and avoiding last-minute challenges.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>4</p></div>
							<div>
								<h6>Coordination with Auditors</h6>
								<p>
									Assisting in smooth communication and coordination with external auditors to ensure timely
									and efficient completion of audits.
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
								Years Supporting <br /> Businesses
							</h4>
						</div>
					</div>

					<h3 className="title-2 s2 mb-15 text-anime-wave">
						Our Easy Working Process
					</h3>
					<p className="text s4 mb-50">
						We simplify the process of managing entries, reconciliations, and audits by following a
						structured workflow that ensures accuracy and compliance.
					</p>
					<ul className="list-2 mb-70">
						<li>
							<p className="step-number">Step 01</p>
							<h6 className="caption">Transaction Recording</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We start by recording invoices, receipts, and transactions accurately into the system.
							</p>
						</li>
						<li>
							<p className="step-number">Step 02</p>
							<h6 className="caption">Reconciliation</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We reconcile accounts and bank statements to ensure records match and discrepancies are
								addressed quickly.
							</p>
						</li>
						<li>
							<p className="step-number">Step 03</p>
							<h6 className="caption">Audit Preparation &amp; Coordination</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We prepare audit-ready schedules and coordinate directly with auditors for smooth and
								timely completion of audits.
							</p>
						</li>
					</ul>

					<h3 className="title-2 s3 mb-15 text-anime-wave">
						Frequently Asked Questions
					</h3>
					<p className="text s5 mb-40">
						Here are some common questions about our Data Entry &amp; Audit Support services to help you
						understand how we can assist your business.
					</p>
					<div className="tf-accordion style-4 style-2 accordion" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
								<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button">
									Do you handle all types of financial data entry?
								</button>
							</h2>
							<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`}>
								<div className="accordion-body">
									Yes, we manage invoices, receipts, payment entries, and reconciliations for accurate
									financial tracking.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
								<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button">
									Can you prepare schedules specifically for audits?
								</button>
							</h2>
							<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`}>
								<div className="accordion-body">
									Absolutely. We prepare audit-ready financial schedules and documentation tailored to the
									needs of auditors.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
								<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button">
									Do you coordinate directly with external auditors?
								</button>
							</h2>
							<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`}>
								<div className="accordion-body">
									Yes, we liaise with auditors on your behalf, ensuring a smooth audit process and timely
									completion.
								</div>
							</div>
						</div>
						<div className="accordion-item last">
							<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
								<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button">
									How do you ensure accuracy in data entry?
								</button>
							</h2>
							<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`}>
								<div className="accordion-body">
									We use standardized processes, multiple verification checks, and reconciliations to
									ensure error-free entries and reports.
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
