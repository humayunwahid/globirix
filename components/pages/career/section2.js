import Link from 'next/link'
export default function Section2() {
	return (
		<>

			<section className="s-job tf-spacing-9">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-50">
								<p className="s-title text-center mb-15 text-anime-style-2">
									Current Job
									<span>
										Openings
									</span>
								</p>
								<p className="text text-center">
									Join our team and be part of a dynamic, forward-thinking company that's dedicated to <br />
									helping businesses succeed. We're always on the lookout for talented individuals.
								</p>
							</div>
							<div className="grid-layout-2">
								<div className="wg-job wow fadeInUp" data-wow-delay="0s">
									<Link href="mailto:hr@globirix.com?subject=Outsourced Accountant – Job Code: US-00001" className="name-job">
										Outsourced Accountant – Job Code: US-00001
									</Link>
									<p className="sub-job full">
										Remote | USA Business Hours
									</p>
									<p className="text">
										2–3 years experience with foreign/outsourcing clients. ACCA background required.
									</p>
									<p className="salary">
										Experience: 2-3 Years
									</p>
									<Link href="mailto:hr@globirix.com?subject=Outsourced Accountant – Job Code: US-00001" className=" small tf-btn style-8">
										Apply Now
										<i className="icon-chevron-right" />
									</Link>
								</div>
								<div className="wg-job wow fadeInUp" data-wow-delay="0.1s">
									<Link href="mailto:hr@globirix.com?subject=Remote Accountant / Financial Analyst – Property Management Job Code: US-00002" className="name-job">
										Remote Accountant / Financial Analyst – Property Management
									</Link>
									<p className="sub-job full">
										Remote | USA Business Hours
									</p>
									<p className="text">
										Property management accounting, rental income tracking, and feasibility analysis.
									</p>
									<p className="salary">
										Experience: 2-4 Years
									</p>
									<Link href="mailto:hr@globirix.com?subject=Remote Accountant / Financial Analyst – Property Management Job Code: US-00002" className=" small tf-btn style-8">
										Apply Now
										<i className="icon-chevron-right" />
									</Link>
								</div>
								<div className="wg-job wow fadeInUp" data-wow-delay="0.2s">
									<Link href="mailto:hr@globirix.com?subject=Part-Time Chartered Accountant (Costing & Budgeting) – Saudi Arabia Project Job Code: SA-00001" className="name-job">
										Part-Time Chartered Accountant (Costing & Budgeting) | Saudi Arabia
									</Link>
									<p className="sub-job part">
										3 Months Contract | On-site/Hybrid
									</p>
									<p className="text">
										Chartered Accountant with 5+ years experience in costing, budgeting & financial planning.
									</p>
									<p className="salary">
										Experience: 5+ Years
									</p>
									<Link href="mailto:hr@globirix.com?subject=Part-Time Chartered Accountant (Costing & Budgeting) – Saudi Arabia Project Job Code: SA-00001" className=" small tf-btn style-8">
										Apply Now
										<i className="icon-chevron-right" />
									</Link>
								</div>
								<div className="wg-job wow fadeInUp" data-wow-delay="0s">
									<Link href="mailto:hr@globirix.com?subject=Financial Modeling Specialist – Middle East (2-Month Project) Job Code: SA-00002" className="name-job">
										Financial Modeling Specialist (2-Month Contract) – Middle East Client
									</Link>
									<p className="sub-job part">
										2 Months Contract | Remote
									</p>
									<p className="text">
										Develop financial models for investment evaluations and business feasibility studies.
									</p>
									<p className="salary">
										Experience: 3-6 Years
									</p>
									<Link href="mailto:hr@globirix.com?subject=Financial Modeling Specialist – Middle East (2-Month Project) Job Code: SA-00002" className=" small tf-btn style-8">
										Apply Now
										<i className="icon-chevron-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}