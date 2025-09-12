'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Section14() {
    const [isAccordion, setIsAccordion] = useState(1)

    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            <section className="s-working tf-spacing-1" id="methodology">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <p className="s-sub-title mb-18 justify-center">
                                    <i className="icon-angles-right moveLeftToRight" />
                                    Methodology
                                </p>
                                <p className="s-title text-center text-anime-wave">
                                    Our Service Methodology
                                </p>
                                <p className="mb-70 text-center mt-2">We offer three flexible engagement models so you can choose the approach that best fits your needs!</p>
                                <div className="tf-accordion-type-3 accordion" id="accordionExample">
                                    {/* Model 01: Rent-a-Resource */}
                                    <div className={`accordion-item ${isAccordion === 1 ? 'active' : ''}`} onClick={() => handleAccordion(1)}>
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button  ${isAccordion === 1 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <span className="step">
                                                    Model 01
                                                </span>
                                                <span>
                                                    Rent-a-Resource
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="title">
                                                    Rent-a-Resource
                                                </p>
                                                <p className="text mb-25 tf-fade-item fade-1">
                                                    Hire a dedicated accounting professional who integrates directly into your team. We help you identify and onboard the right resource — whether for bookkeeping, payroll, financial reporting, or compliance — ensuring they are the best fit for your business.                                                </p>
                                                <p><strong>Best for:</strong> Businesses seeking <strong>long-term, dedicated professionals </strong>with flexibility to scale as needed.</p>
                                            </div>
                                        </div>
                                        <div className="image tf-hover">
                                            <div className="hover-1">
                                                <Image
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"
                                                    style={{ width: "100%", height: "auto" }}
                                                    src="/images/widget/accordion-type-3.webp" data-src="/images/widget/accordion-type-3.jpg" alt="" className="lazyload" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Model 02: Delivery-Based Services */}
                                    <div className={`accordion-item ${isAccordion === 2 ? 'active' : ''}`} onClick={() => handleAccordion(2)}>
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button  ${isAccordion === 2 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <span className="step">
                                                    Model 02
                                                </span>
                                                <span>
                                                    Delivery-Based Services
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="title">
                                                    Delivery-Based Services
                                                </p>
                                                <p className="text mb-25 tf-fade-item fade-1">
                                                    Let our team handle specific accounting and finance deliverables for you. From end-to-end bookkeeping and financial statements to management reporting, budgeting, and compliance, we deliver accurate results on time.
                                                </p>
                                                <p><strong>Best for:</strong> Businesses looking for <strong>project-based or outcome-focused support </strong>without hiring additional staff.</p>
                                            </div>
                                        </div>
                                        <div className="image tf-hover">
                                            <div className="hover-1">
                                                <Image
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"
                                                    style={{ width: "100%", height: "auto" }}
                                                    src="/images/widget/accordion-type-3-2.jpg" data-src="/images/widget/accordion-type-3-2.jpg" alt="" className="lazyload" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Model 03: Hire-a-Resource */}
                                    <div className={`accordion-item ${isAccordion === 3 ? 'active' : ''}`} onClick={() => handleAccordion(3)}>
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button  ${isAccordion === 3 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <span className="step">
                                                    Model 03
                                                </span>
                                                <span>
                                                    Hire-a-Resource
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="title">
                                                    Hire-a-Resource
                                                </p>
                                                <p className="text mb-25 tf-fade-item fade-1">
                                                    Empower your team with top-tier accounting talent — without the hassle of long hiring cycles. Our Hire-a-Resource service connects you with skilled professionals who seamlessly integrate into your operations. Whether you need support in bookkeeping, payroll, financial reporting, or regulatory compliance, we’ll match you with the right resource tailored to your specific business needs.
                                                </p>
                                                <p className="text mb-25 tf-fade-item fade-1">
                                                    We manage the sourcing, vetting, and onboarding, so you can stay focused on growing your business. Our professionals work under your direction while we take care of administrative details, ensuring you get the expertise you need, when you need it.
                                                </p>
                                                <p><strong>Best for:</strong> Businesses looking for <strong>dedicated, long-term support</strong> with the flexibility to scale resources up or down as needs evolve.</p>
                                            </div>
                                        </div>
                                        <div className="image tf-hover">
                                            <div className="hover-1">
                                                <Image
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"
                                                    style={{ width: "100%", height: "auto" }}
                                                    src="/images/widget/accordion-type-3-3.jpg" data-src="/images/widget/accordion-type-3-3.jpg" alt="" className="lazyload" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
