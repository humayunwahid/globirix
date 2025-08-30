
import Image from 'next/image'
import Link from 'next/link'
export default function Platforms() {
    return (
        <>

            <section className="s-partner-2 tf-spacing-3" id="platforms">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="content">
                                <p className="s-sub-title ">
                                    <i className="icon-angles-right moveLeftToRight" />
                                    platforms
                                </p>
                                <p className="s-title text-main-green-3 mb-40 text-anime-wave">
                                    Global Trusted
                                    <span>
                                        Platforms
                                    </span>
                                </p>
                                <p className="mb-40">We work with leading global and regional accounting tools and platforms.</p>
                                <Link href="/contact" className="tf-btn style-14 small text-anime-style-1">
                                    Become Our Customer
                                    <i className="icon-chevron-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="wg-partner d-flex flex-wrap">

                                <Link href="/#" className="partner-item text-center">
                                    <img className="img1" src="/images/platforms/excel.png" alt="Excel" width={120} height={60} />
                                    <img className="img2" src="/images/platforms/excel.png" alt="Excel" width={120} height={60} />
                                    {/* <h3>Advance Excel</h3> */}
                                </Link>

                                <Link href="/#" className="partner-item text-center">
                                    <img className="img1" src="/images/platforms/quickbooks.png" alt="QuickBooks" width={120} height={60} />
                                    <img className="img2" src="/images/platforms/quickbooks.png" alt="QuickBooks" width={120} height={60} />
                                    {/* <h3>QuickBooks Online & Desktop</h3> */}
                                </Link>

                                <Link href="/#" className="partner-item text-center">
                                    <img className="img1" src="/images/platforms/microsoft-dynamics-365.png" alt="Dynamics 365" width={120} height={60} />
                                    <img className="img2" src="/images/platforms/microsoft-dynamics-365.png" alt="Dynamics 365" width={120} height={60} />
                                    {/* <h3>Microsoft Dynamics 365</h3> */}
                                </Link>

                                <Link href="/#" className="partner-item text-center">
                                    <img className="img1" src="/images/platforms/xero.png" alt="Xero" width={120} height={60} />
                                    <img className="img2" src="/images/platforms/xero.png" alt="Xero" width={120} height={60} />
                                    {/* <h3>Xero</h3> */}
                                </Link>

                                <Link href="/#" className="partner-item text-center">
                                    <img className="img1" src="/images/platforms/sap.png" alt="SAP" width={120} height={60} />
                                    <img className="img2" src="/images/platforms/sap.png" alt="SAP" width={120} height={60} />
                                    {/* <h3>SAP</h3> */}
                                </Link>

                                 <Link href="/#" className="partner-item text-center">
                                    <img className="img1" src="/images/platforms/zoho.png" alt="SAP" width={120} height={60} />
                                    <img className="img2" src="/images/platforms/zoho.png" alt="SAP" width={120} height={60} />
                                    {/* <h3>SAP</h3> */}
                                </Link>


                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
