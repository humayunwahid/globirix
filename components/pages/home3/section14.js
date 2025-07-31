'use client'
import Image from 'next/image'
import { useState } from 'react'
export default function Section14() {
    const [isAccordion, setIsAccordion] = useState(1)

    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>

            <section className="s-working tf-spacing-1">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <p className="s-sub-title mb-18 justify-center">
                                    <i className="icon-angles-right moveLeftToRight" />
                                    Why we are uniquely positioned
                                </p>
                                <p className="s-title mb-70 text-center text-anime-wave">
                                    Services  Methodology 
                                    {/* <br /> */}
                                    
                                    {/* <span>
                                        Process
                                    </span> */}
                                </p>
                                <div className="tf-accordion-type-3 accordion" id="accordionExample">
                                    <div className={`accordion-item ${isAccordion === 1 ? 'active' : ''}`} onClick={() => handleAccordion(1)}>
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button  ${isAccordion === 1 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <span className="step">
                                                    Step 01
                                                </span>
                                                <span>
                                                    Find a Resource
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="title">
                                                    Find a Resource
                                                </p>
                                                <p className="text mb-25 tf-fade-item fade-1">
                                                    This initial phase involves understanding the client’s
                                                    needs,
                                                    <br />
                                                    challenges, and goals. Consultants conduct in-depth.
                                                </p>
                                                <ul className="benefit-list">
                                                    <li className="tf-fade-item fade-2">
                                                        <div className="icon">
                                                            <i className="flaticon-check-mark" />
                                                        </div>
                                                        <p>
                                                            Stakeholder Interviews &amp; Data Gathering
                                                        </p>
                                                    </li>
                                                    <li className="tf-fade-item fade-3">
                                                        <div className="icon">
                                                            <i className="flaticon-check-mark" />
                                                        </div>
                                                        <p>
                                                            Comprehensive Business Analysis
                                                        </p>
                                                    </li>
                                                </ul>
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
                                    <div className={`accordion-item ${isAccordion === 2 ? 'active' : ''}`} onClick={() => handleAccordion(2)}>
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button  ${isAccordion === 2 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <span className="step">
                                                    Step 02
                                                </span>
                                                <span>
                                                    Rent a Resource
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="title">
                                                    Rent a Resource
                                                </p>
                                                <p className="text mb-25 tf-fade-item fade-1">
                                                    This initial phase involves understanding the client’s
                                                    needs,
                                                    <br />
                                                    challenges, and goals. Consultants conduct in-depth.
                                                </p>
                                                <ul className="benefit-list">
                                                    <li className="tf-fade-item fade-2">
                                                        <div className="icon">
                                                            <i className="flaticon-check-mark" />
                                                        </div>
                                                        <p>
                                                            Stakeholder Interviews &amp; Data Gathering
                                                        </p>
                                                    </li>
                                                    <li className="tf-fade-item fade-3">
                                                        <div className="icon">
                                                            <i className="flaticon-check-mark" />
                                                        </div>
                                                        <p>
                                                            Comprehensive Business Analysis
                                                        </p>
                                                    </li>
                                                </ul>
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
                                    <div className={`accordion-item ${isAccordion === 3 ? 'active' : ''}`} onClick={() => handleAccordion(3)}>
                                        <h2 className="accordion-header">
                                            <button className={`accordion-button  ${isAccordion === 3 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <span className="step">
                                                    Step 03
                                                </span>
                                                <span>
                                                    Delivery Based Model
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="title">
                                                    Delivery Based Model
                                                </p>
                                                <p className="text mb-25 tf-fade-item fade-1">
                                                    This initial phase involves understanding the client’s
                                                    needs,
                                                    <br />
                                                    challenges, and goals. Consultants conduct in-depth.
                                                </p>
                                                <ul className="benefit-list">
                                                    <li className="tf-fade-item fade-2">
                                                        <div className="icon">
                                                            <i className="flaticon-check-mark" />
                                                        </div>
                                                        <p>
                                                            Stakeholder Interviews &amp; Data Gathering
                                                        </p>
                                                    </li>
                                                    <li className="tf-fade-item fade-3">
                                                        <div className="icon">
                                                            <i className="flaticon-check-mark" />
                                                        </div>
                                                        <p>
                                                            Comprehensive Business Analysis
                                                        </p>
                                                    </li>
                                                </ul>
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
