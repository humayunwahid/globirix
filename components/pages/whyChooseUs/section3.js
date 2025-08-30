import Image from 'next/image'
import Link from 'next/link'

export default function Section3() {
    return (
        <>
            <section className="s-we-do tf-spacing-3" id="technology">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading mb-70">
                                <p className="s-sub-title mb-15 justify-center">
                                    <i className="icon-angles-right moveLeftToRight" />
                                    Tools and Technology
                                </p>
                                <p className="s-title text-center text-anime-style-2">
                                    Fast, Secure & Reliable <br />
                                    <span>Cloud-Based Financial Solutions</span>
                                </p>
                            </div>

                            {/* Row 1 with 3 services */}
                            <div className="feature-group overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                                {/* Cloud-Based Accounting */}
                                <div className="box-icon style-8">
                                    <h3 className="title">Cloud-Based Accounting</h3>
                                    <span className="line mb-30" />
                                    <p className="text">
                                        Work anytime, anywhere with secure access to your financial data.
                                    </p>
                                </div>

                                {/* Automation & AI-Powered Accuracy */}
                                <div className="box-icon style-8">
                                    <h3 className="title">Automation & AI-Powered Accuracy</h3>
                                    <span className="line mb-30" />
                                    <p className="text">
                                        Reduce manual errors, speed up processing, and improve efficiency.
                                    </p>
                                </div>

                                {/* Integration with Business Systems */}
                                <div className="box-icon style-8">
                                    <h3 className="title">Integration with Business Systems</h3>
                                    <span className="line mb-30" />
                                    <p className="text">
                                        Seamless integration with ERP, payroll, invoicing, and CRM platforms.
                                    </p>
                                </div>
                            </div>

                            {/* Row 2 with 2 services */}
                            <div className="feature-group overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Data Security & Confidentiality */}
                                <div className="box-icon style-8">
                                    <h3 className="title">Data Security & Confidentiality</h3>
                                    <span className="line mb-30" />
                                    <p className="text">
                                        Advanced encryption and compliance standards to safeguard your sensitive information.
                                    </p>
                                </div>

                                {/* Real-Time Reporting */}
                                <div className="box-icon style-8">
                                    <h3 className="title">Real-Time Reporting</h3>
                                    <span className="line mb-30" />
                                    <p className="text">
                                        Instant dashboards and MIS reports for smarter decision-making.
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
