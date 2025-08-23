'use client'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'

export default function Section5() {
	return (
		<>

			<section className="s-service tf-spacing-1 mt-60">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content">
								<p className="s-sub-title mb-17">
									<i className="icon-angles-right moveLeftToRight" />
									Consulting Services
								</p>
								<p className="s-title mb-70 text-anime-wave-right">
									The Quality Consulting Service to Grow Your Business <span>and Sales</span>
								</p>

								<p className="text mb-30">
									Scale your accounting team without the cost of permanent hiring. Choose the engagement model that fits your business
								</p>

								{/* <div className="image tf-hover mb-40">
									<div className="hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/s-service.jpg" data-src="/images/section/s-service.jpg" alt="" className="lazyload tf-animate-2" />
									</div>
								</div> */}
								{/* Why Rent a Resource with Us */}
								<p className="s-sub-title mb-17 text-black">
									<i className="moveLeftToRight" />
									Why Rent a Resource with Us?
								</p>
								
								<ul class="benefit-list mb-70">
										<li class="tf-fade-item fade-2">
											<div class="icon">
												<i class="flaticon-check-mark"></i>
											</div>
											<p>Flexible hiring model without long-term commitments.</p>
										</li>
										<li class="tf-fade-item fade-2">
											<div class="icon">
												<i class="flaticon-check-mark"></i>
											</div>
											<p>Access to skilled and qualified professionals on demand</p>
										</li>
										<li class="tf-fade-item fade-2">
											<div class="icon">
												<i class="flaticon-check-mark"></i>
											</div>
											<p>Cost savings compared to permanent in-house hires</p>
										</li>
										<li class="tf-fade-item fade-2">
											<div class="icon">
												<i class="flaticon-check-mark"></i>
											</div>
											<p>Quick onboarding with minimal downtime.</p>
										</li>
									</ul>

								<div className="bot mt-5">
									<div className="counter-wrap">
										<div className="wg-counter">
											<div className="odometer"><CounterUp count={10} /></div>
											<span className="sub-odo">+</span>
										</div>
										<p className="sub-counter font-main-3 lh-21">
											Satisfied Clients
										</p>
									</div>
									<span className="line style-stand">
									</span>
									<Link href="/our-service" className="tf-btn style-3">Explore All Services <i className="icon-chevron-right" /></Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							{/* Rent a Resource Accordion */}
							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0s">
								<div className="icon hover-icon-2">
									<i className="flaticon-data-management" />
								</div>
								<Link href="/#" className="title fw-7">
									Part-Time Resource
								</Link>
								<p className="text">
									Flexible support for a few hours a week or month. Perfect for startups, SMEs, and businesses needing light but consistent assistance.
								</p>
								{/* <Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link> */}
							</div>

							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon hover-icon-2">
									<i className="flaticon-human-resources" />
								</div>
								<Link href="/#" className="title fw-7">
									Full-Time Resource
								</Link>
								<p className="text">
									A dedicated professional working exclusively for you. Get the benefits of an in-house accountant without payroll, benefits, or overhead costs.
								</p>
								{/* <Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link> */}
							</div>

							<div className="box-icon default tf-hover-icon mb-20 wow fadeInUp" data-wow-delay="0.2s">
								<div className="icon hover-icon-2">
									<i className="flaticon-target-1" />
								</div>
								<Link href="/#" className="title fw-7">
									Project-Based Resource
								</Link>
								<p className="text">
									Specialized expertise for one-off assignments. Ideal for audits, financial modeling, ERP migration, compliance, or short-term projects.
								</p>
								{/* <Link href="/our-service" className="tf-btn-readmore style-3">
									Read More
									<i className="icon-chevron-right" />
								</Link> */}
							</div>


						</div>
					</div>
				</div>
			</section>

		</>
	)
}
