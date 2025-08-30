'use client'
import { useState } from 'react'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/resuable/sidebar'
export default function InternalControlFinancialReporting() {
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
						Internal Control over Financial Reporting
					</p>
					<p className="text s1 mb-25">
						Our Internal Control over Financial Reporting (ICFR) services help businesses strengthen
						financial governance and ensure compliance with regulatory standards. We design, implement, and
						monitor internal control frameworks tailored to your processes, reducing risks and enhancing
						operational transparency.
					</p>
					<p className="text s2 mb-40">
						By proactively identifying gaps and mitigating reporting risks, we enable businesses to build
						confidence among stakeholders while preventing fraud and ensuring accurate reporting.
					</p>
					<h3 className="title-2 s1 text-anime-wave">
						Our Key Internal Control Services Include:
					</h3>
					<p className="text s3">
						We focus on building robust internal controls that safeguard your financial processes and
						ensure compliance with local and international reporting standards.
					</p>
					<ul className="list-1">
						<li>
							<div className="number"><p>1</p></div>
							<div>
								<h6>Design &amp; Implementation of Control Frameworks</h6>
								<p>
									We create tailored internal control frameworks that align with your organizational
									structure and reporting needs.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>2</p></div>
							<div>
								<h6>Monitoring &amp; Evaluation</h6>
								<p>
									Regular assessment of financial processes to ensure controls are effective, efficient,
									and up to date with compliance requirements.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>3</p></div>
							<div>
								<h6>Risk Identification &amp; Mitigation</h6>
								<p>
									Identifying potential risks in financial reporting and designing mitigation measures
									to prevent misstatements or compliance failures.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>4</p></div>
							<div>
								<h6>Transparency, Compliance &amp; Fraud Prevention</h6>
								<p>
									Strengthening governance practices to ensure transparent reporting, adherence to
									regulations, and safeguarding against fraudulent activities.
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
								Years Building <br /> Strong Controls
							</h4>
						</div>
					</div>

					<h3 className="title-2 s2 mb-15 text-anime-wave">
						Our Easy Working Process
					</h3>
					<p className="text s4 mb-50">
						We follow a step-by-step approach to design, implement, and monitor internal controls, ensuring
						each stage strengthens your reporting and compliance framework.
					</p>
					<ul className="list-2 mb-70">
						<li>
							<p className="step-number">Step 01</p>
							<h6 className="caption">Framework Design</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We analyze your existing processes and design customized internal control frameworks.
							</p>
						</li>
						<li>
							<p className="step-number">Step 02</p>
							<h6 className="caption">Implementation</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								Controls are implemented across reporting processes with clear roles and responsibilities.
							</p>
						</li>
						<li>
							<p className="step-number">Step 03</p>
							<h6 className="caption">Monitoring &amp; Continuous Improvement</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We monitor control performance, identify gaps, and make necessary improvements for
								ongoing compliance and risk mitigation.
							</p>
						</li>
					</ul>

					<h3 className="title-2 s3 mb-15 text-anime-wave">
						Frequently Asked Questions
					</h3>
					<p className="text s5 mb-40">
						Here are some common questions about our Internal Control over Financial Reporting services to
						help you understand how we can strengthen your reporting framework.
					</p>
					<div className="tf-accordion style-4 style-2 accordion" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
								<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button">
									Why are internal controls important for financial reporting?
								</button>
							</h2>
							<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`}>
								<div className="accordion-body">
									Internal controls help ensure financial accuracy, compliance, and prevent fraud,
									building trust among stakeholders.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
								<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button">
									Do you customize control frameworks for each business?
								</button>
							</h2>
							<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`}>
								<div className="accordion-body">
									Yes, we design and implement frameworks tailored to your business size, industry, and
									regulatory requirements.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
								<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button">
									How often should internal controls be reviewed?
								</button>
							</h2>
							<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`}>
								<div className="accordion-body">
									Controls should be reviewed regularly, at least annually, or whenever there are
									significant changes in processes or regulations.
								</div>
							</div>
						</div>
						<div className="accordion-item last">
							<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
								<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button">
									Can you help in fraud prevention?
								</button>
							</h2>
							<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`}>
								<div className="accordion-body">
									Absolutely. Our frameworks are designed to reduce fraud risks by ensuring segregation
									of duties, monitoring, and compliance checks.
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
