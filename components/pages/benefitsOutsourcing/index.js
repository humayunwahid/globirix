import Link from 'next/link'
export default function BenefitsOutsourcing() {
	return (
		<>

			<section className="s-we-do tf-spacing-3" id="outsourcing-benefits">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									Benefits of Outsourcing
								</p>
								<p className="s-title text-center text-anime-style-2">
									Smart, Efficient & Reliable <br />
									<span>Financial Outsourcing Solutions</span>
								</p>
							</div>

							{/* Row 1 with 3 services */}
							<div className="feature-group overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

								{/* Cost Efficiency */}
								<div className="box-icon style-8">
									<h3 className="title">Cost Efficiency</h3>
									<span className="line mb-30" />
									<p className="text">
										Save on hiring, training, and maintaining in-house staff. Reduce overhead expenses and pay only for the services you need.
									</p>
								</div>

								{/* Access to Expertise */}
								<div className="box-icon style-8">
									<h3 className="title">Access to Expertise</h3>
									<span className="line mb-30" />
									<p className="text">
										Work with qualified professionals, stay compliant with tax laws, and gain industry-specific knowledge without full-time hires.
									</p>
								</div>

								{/* Focus on Core Business */}
								<div className="box-icon style-8">
									<h3 className="title">Focus on Core Business</h3>
									<span className="line mb-30" />
									<p className="text">
										Free up your time for sales and growth while experts handle accounting so you can focus on strategy.
									</p>
								</div>
							</div>

							{/* Row 2 with 2 services */}
							<div className="feature-group overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

								{/* Scalability & Flexibility */}
								<div className="box-icon style-8">
									<h3 className="title">Scalability & Flexibility</h3>
									<span className="line mb-30" />
									<p className="text">
										Easily scale services up or down with flexible packages for bookkeeping, payroll, tax filing, and reporting.
									</p>
								</div>

								{/* Improved Accuracy & Compliance */}
								<div className="box-icon style-8">
									<h3 className="title">Improved Accuracy & Compliance</h3>
									<span className="line mb-30" />
									<p className="text">
										Minimize errors and ensure timely financial reporting with compliance to local and international regulations.
									</p>
								</div>
							</div>

							{/* Row 3 with 3 services */}
							<div className="feature-group overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

								{/* Peace of Mind */}
								<div className="box-icon style-8">
									<h3 className="title">Peace of Mind</h3>
									<span className="line mb-30" />
									<p className="text">
										No worries about staff turnover or training — rely on professional outsourcing support year-round.
									</p>
								</div>

								{/* Enhanced Data Security */}
								<div className="box-icon style-8">
									<h3 className="title">Enhanced Data Security</h3>
									<span className="line mb-30" />
									<p className="text">
										Protect sensitive financial data with strict confidentiality protocols and advanced security systems.
									</p>
								</div>

								{/* Reduced Risk */}
								<div className="box-icon style-8">
									<h3 className="title">Reduced Risk</h3>
									<span className="line mb-30" />
									<p className="text">
										Lower fraud and compliance risks with external checks, controls, and shared accountability.
									</p>
								</div>

								
							</div>

							{/* Row 4 with 2 services */}
							<div className="feature-group overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">

								{/* Timely Reporting & Decision Support */}
								<div className="box-icon style-8">
									<h3 className="title">Timely Reporting & Decision Support</h3>
									<span className="line mb-30" />
									<p className="text">
										Get accurate financial statements and MIS reports on time for smarter business decisions.
									</p>
								</div>
								
								{/* Access to Advanced Technology */}
								<div className="box-icon style-8">
									<h3 className="title">Access to Advanced Technology</h3>
									<span className="line mb-30" />
									<p className="text">
										Benefit from modern accounting software, automation tools, and real-time insights without extra investment.
									</p>
								</div>
								
							</div>

						</div>
					</div>
				</div>
			</section>



		</>
	)
}
