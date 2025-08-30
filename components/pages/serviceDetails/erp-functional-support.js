'use client'
import { useState } from 'react'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/resuable/sidebar'
export default function ERPFunctionalSupport() {
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
						ERP Functional Support
					</p>
					<p className="text s1 mb-25">
						Our ERP Functional Support services help businesses maximize the efficiency of their ERP systems. We provide user training, process documentation, and hands-on assistance during system migrations and integrations to ensure smooth operations.
					</p>
					<p className="text s2 mb-40">
						By offering continuous functional support, we enable organizations to optimize ERP-driven accounting processes, improve data accuracy, and streamline reporting.
					</p>
					<h3 className="title-2 s1 text-anime-wave">
						Our Key ERP Functional Support Services Include:
					</h3>
					<p className="text s3">
						We focus on empowering your staff and ensuring that ERP systems run seamlessly to support accounting and business operations effectively.
					</p>
					<ul className="list-1">
						<li>
							<div className="number"><p>1</p></div>
							<div>
								<h6>User Training &amp; Documentation</h6>
								<p>
									Providing comprehensive user training sessions and detailed process documentation to improve adoption and efficiency.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>2</p></div>
							<div>
								<h6>Data Migration &amp; System Integration Support</h6>
								<p>
									Assisting staff during ERP data migration and integration processes to ensure accuracy and minimize disruptions.
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>3</p></div>
							<div>
								<h6>Continuous Functional Support</h6>
								<p>
									Offering ongoing support to optimize ERP-driven accounting processes, troubleshoot issues, and enhance system performance.
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
								<div className="odometer style-9"><CounterUp count={8} /></div>
								<span className="sub-odo">+</span>
							</div>
							<h4 className="sub-exp">
								Years Supporting <br /> ERP Solutions
							</h4>
						</div>
					</div>

					<h3 className="title-2 s2 mb-15 text-anime-wave">
						Our Easy Working Process
					</h3>
					<p className="text s4 mb-50">
						We follow a structured approach to ERP support, from training and integration to continuous optimization, ensuring your ERP works at its best.
					</p>
					<ul className="list-2 mb-70">
						<li>
							<p className="step-number">Step 01</p>
							<h6 className="caption">Training &amp; Documentation</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We train your staff and provide clear documentation to improve system usage and efficiency.
							</p>
						</li>
						<li>
							<p className="step-number">Step 02</p>
							<h6 className="caption">Migration &amp; Integration</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We support data migration and system integration to ensure smooth transitions with minimal errors.
							</p>
						</li>
						<li>
							<p className="step-number">Step 03</p>
							<h6 className="caption">Continuous Support</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We provide ongoing assistance to troubleshoot, optimize, and enhance ERP-driven accounting processes.
							</p>
						</li>
					</ul>

					<h3 className="title-2 s3 mb-15 text-anime-wave">
						Frequently Asked Questions
					</h3>
					<p className="text s5 mb-40">
						Here are some common questions about our ERP Functional Support services to help you understand how we can assist your business.
					</p>
					<div className="tf-accordion style-4 style-2 accordion" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
								<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button">
									Do you provide ERP training for all levels of staff?
								</button>
							</h2>
							<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`}>
								<div className="accordion-body">
									Yes, we provide training tailored for different user levels, from beginners to advanced users.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
								<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button">
									Can you assist during ERP migration projects?
								</button>
							</h2>
							<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`}>
								<div className="accordion-body">
									Absolutely. We support businesses during data migration and integration to ensure accuracy and minimal disruption.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
								<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button">
									Do you offer ongoing ERP support after implementation?
								</button>
							</h2>
							<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`}>
								<div className="accordion-body">
									Yes, we provide continuous functional support to resolve issues, optimize usage, and enhance ERP performance.
								</div>
							</div>
						</div>
						<div className="accordion-item last">
							<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
								<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button">
									Which ERP systems do you support?
								</button>
							</h2>
							<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`}>
								<div className="accordion-body">
									We support a range of ERP systems including SAP, Oracle, Microsoft Dynamics, and other customized ERP platforms.
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
