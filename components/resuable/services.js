
import Image from 'next/image'
import Link from 'next/link'
export default function Services() {
    return (
        <>

            <section className="s-we-do tf-spacing-3" >
                {/* <div className="tf-overlay" />
                <div className="bg-image">
                    <div className="rellax" data-rellax-speed="0.4">
                        <Image
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/images/section/bg-service.jpg" alt="" />
                    </div>
                </div> */}
                <div className="relative z-5">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading mb-70">
                                    <p className="s-sub-title mb-15 justify-center text-white">
                                        <i className="icon-angles-right moveLeftToRight" />
                                        what we do
                                    </p>
                                    <p className="s-title text-center text-anime-style-2">
                                        Comprehensive Solutions in <br />
                                        <span>Accounting, Audit, ERP & Payroll</span>
                                    </p>
                                </div>
                                <div className="grid-layout-3 s-service p-5">
                                    <div className="card-service-2 style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0s">
                                        <div className="content">
                                            <div className="icon hover-icon-2">
                                                <i className="flaticon-return-of-investment" />
                                            </div>
                                            <Link href="/our-services/accounting-reporting" className="title fw-7">
                                                Accounting & Reporting
                                            </Link>
                                            <p className="text">
                                                We handle end-to-end bookkeeping to financial statements, management reporting, and budgeting. We ensure compliance with both local and international accounting standards.
                                            </p>
                                            <Link href="/our-services/accounting-reporting" className="tf-btn-readmore style-3">
                                                Read More
                                                <i className="icon-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-service-2 style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="content">
                                            <div className="icon hover-icon-2">
                                                <i className="flaticon-data-management" />

                                            </div>
                                            <Link href="/our-services/data-entry-audit-support" className="title fw-7">
                                                Data Entry & Audit Support
                                            </Link>
                                            <p className="text">
                                                We provide accurate data entry, bank reconciliations, and audit-ready documentation for seamless financial operations.
                                            </p>
                                            <Link href="/our-services/data-entry-audit-support" className="tf-btn-readmore style-3">
                                                Read More
                                                <i className="icon-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-service-2 style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="content">
                                            <div className="icon hover-icon-2">
                                                <i className="flaticon-target-1
                                      " />
                                            </div>
                                            <Link href="/our-services/internal-control-financial-reporting" className="title fw-7">
                                                Internal Control over Financial Reporting
                                            </Link>
                                            <p className="text">
                                                We design and implement internal control frameworks to ensure compliance, transparency, and fraud prevention.
                                            </p>
                                            <Link href="/our-services/internal-control-financial-reporting" className="tf-btn-readmore style-3">
                                                Read More
                                                <i className="icon-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-service-2 style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0s">
                                        <div className="content">
                                            <div className="icon hover-icon-2">
                                                <i className="flaticon-solution" />
                                            </div>
                                            <Link href="/our-services/erp-functional-support" className="title fw-7">
                                                ERP Functional Support
                                            </Link>
                                            <p className="text">
                                                We assist with ERP user training, process documentation, and system integration support to ensure smooth implementation.
                                            </p>
                                            <Link href="/our-services/erp-functional-support" className="tf-btn-readmore style-3">
                                                Read More
                                                <i className="icon-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-service-2 style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="content">
                                            <div className="icon hover-icon-2">
                                                 <i className="flaticon-human-resources" />

                                            </div>
                                            <Link href="/our-services/hr-payroll-services" className="title fw-7">
                                                HR & Payroll Services
                                            </Link>
                                            <p className="text">
                                                We manage payroll processing, employee benefits, statutory compliance, and HR data management for smooth operations.
                                            </p>
                                            <Link href="/our-services/hr-payroll-services" className="tf-btn-readmore style-3">
                                                Read More
                                                <i className="icon-chevron-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <div className="card-service-2 style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0.2s">
										<div className="content">
											<div className="icon hover-icon-2">
												<i className="flaticon-solution" />
											</div>
											<Link href="/service-details" className="title fw-7">
												Operations Management
											</Link>
											<p className="text">
												Analyzing an optimizing internal processes to improve efficiency, reduce
												costs
											</p>
											<Link href="/service-details" className="tf-btn-readmore style-3">
												Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
