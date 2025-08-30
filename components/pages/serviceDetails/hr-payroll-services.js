'use client'
import { useState } from 'react'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/resuable/sidebar'
export default function HRPayrollServices() {
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
						HR &amp; Payroll Services
					</p>
					<p className="text s1 mb-25">
						Our HR &amp; Payroll Services ensure accurate and confidential payroll processing while helping businesses remain compliant with statutory requirements. From managing employee benefits to handling attendance records, we simplify payroll and HR operations for greater efficiency.  
					</p>
					<p className="text s2 mb-40">
						By streamlining payroll and HR data management, we enable organizations to save time, reduce errors, and provide employees with timely and reliable compensation support.
					</p>
					<h3 className="title-2 s1 text-anime-wave">
						Our Key HR &amp; Payroll Services Include:
					</h3>
					<p className="text s3">
						We focus on delivering seamless payroll solutions while ensuring compliance with labor laws, accuracy in reporting, and transparency in employee records.
					</p>
					<ul className="list-1">
						<li>
							<div className="number"><p>1</p></div>
							<div>
								<h6>Payroll Processing</h6>
								<p>
									Ensuring accurate, timely, and confidential payroll calculations for all employees.  
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>2</p></div>
							<div>
								<h6>Benefits &amp; Compliance</h6>
								<p>
									Managing employee benefits and ensuring compliance with statutory regulations and labor laws.  
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>3</p></div>
							<div>
								<h6>Attendance &amp; Leave Management</h6>
								<p>
									Reconciling leave and attendance records to ensure accurate payroll processing.  
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>4</p></div>
							<div>
								<h6>Salary Slips &amp; Reports</h6>
								<p>
									Preparing detailed salary slips and payroll reports for employee reference and management review.  
								</p>
							</div>
						</li>
						<li>
							<div className="number"><p>5</p></div>
							<div>
								<h6>HR Data Management</h6>
								<p>
									Supporting businesses with structured HR data management and customized reporting.  
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
								<div className="odometer style-9"><CounterUp count={12} /></div>
								<span className="sub-odo">+</span>
							</div>
							<h4 className="sub-exp">
								Years Managing <br /> HR &amp; Payroll
							</h4>
						</div>
					</div>

					<h3 className="title-2 s2 mb-15 text-anime-wave">
						Our Easy Working Process
					</h3>
					<p className="text s4 mb-50">
						We follow a simple, structured approach to ensure payroll and HR management is accurate, compliant, and employee-friendly.  
					</p>
					<ul className="list-2 mb-70">
						<li>
							<p className="step-number">Step 01</p>
							<h6 className="caption">Data Collection</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We gather employee data, attendance, and benefits information to initiate accurate payroll processing.  
							</p>
						</li>
						<li>
							<p className="step-number">Step 02</p>
							<h6 className="caption">Payroll Processing</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We calculate payroll, reconcile leave and benefits, and generate salary slips.  
							</p>
						</li>
						<li>
							<p className="step-number">Step 03</p>
							<h6 className="caption">Reporting &amp; Compliance</h6>
							<div className="icon"><i className="icon-check-2" /></div>
							<p className="text">
								We provide reports, ensure compliance with statutory regulations, and support HR data management.  
							</p>
						</li>
					</ul>

					<h3 className="title-2 s3 mb-15 text-anime-wave">
						Frequently Asked Questions
					</h3>
					<p className="text s5 mb-40">
						Here are some common questions about our HR &amp; Payroll Services to help you understand how we can support your business.  
					</p>
					<div className="tf-accordion style-4 style-2 accordion" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
								<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button">
									How do you ensure payroll accuracy?
								</button>
							</h2>
							<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`}>
								<div className="accordion-body">
									We use systematic reconciliation of attendance, leave, and benefits data to ensure error-free payroll processing.  
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
								<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button">
									Do you handle statutory compliance?
								</button>
							</h2>
							<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`}>
								<div className="accordion-body">
									Yes, we ensure compliance with tax regulations, social security, and other statutory requirements.  
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
								<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button">
									Can employees access salary slips and reports?
								</button>
							</h2>
							<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`}>
								<div className="accordion-body">
									Yes, we generate and provide salary slips and reports for employees and management.  
								</div>
							</div>
						</div>
						<div className="accordion-item last">
							<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
								<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button">
									Do you provide HR data management support?
								</button>
							</h2>
							<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`}>
								<div className="accordion-body">
									Absolutely. We support businesses with structured HR data management and customized reporting to enhance decision-making.  
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
