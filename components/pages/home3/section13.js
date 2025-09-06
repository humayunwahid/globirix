import Image from 'next/image'
import Link from 'next/link'

export default function Section13() {
    return (
        <>

            <section className="s-about-company tf-spacing-2" id="vision-mission">
                <div className="relative z-5">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content-section">
                                    <p className="s-sub-title">
                                        <i className="icon-angles-right moveLeftToRight" />
                                        Mission & Vision
                                    </p>
                                    <p className="s-title mb-60 text-anime-wave-right text-clamp-4">
                                        Simplifying Finance, Fueling Growth, & Building <span> long-term success together</span>
                                    </p>
                                    <ul className="list mb-50">
                                        <li>
                                            <p className="font-main-2">
                                                Company Mission
                                            </p>
                                            <p className="text">
                                            To empower businesses worldwide with <b>flexible financial talent and technology-driven accounting solutions.</b> Through our Rent-a-Resource model and end-to-end accounting services, we deliver clarity, compliance, and confidence — enabling clients to focus on growth while we safeguard accuracy, confidentiality, and trust.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-main-2">
                                                Company Vision
                                            </p>
                                            <p className="text">
                                                To be the world's most <b>trusted partner for on-demand financial expertise and outsourced accounting</b> — 
  recognized for our Professionalism, Precision, Performance, Proactivity, and Partnership. 
  We envision a future where organizations of every size and industry can simplify financial 
  management, scale effortlessly, and achieve sustainable success with us by their side.
  </p>
                                        </li>
                                    </ul>
                                    <Link href="/about-us" className="tf-btn">
                                        Learn More About Us
                                        <i className="icon-chevron-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="image-wrap">
                                    <div className="image">
                                        <Image
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            style={{ width: "100%", height: "auto" }}
                                            src="/images/section/s-about.webp" data-src="/images/section/s-about.webp" alt="" className="lazyload tf-animate-2" />
                                    </div>
                                    <span className="half-circle item-1 wow rollInRight" />
                                    <span className="half-circle item-2 wow rollInRight" data-wow-delay="0.5s" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tf-marquee slider-saylo style-2">
                    <div className="wrap-marquee">
                        <div className="marquee-item">
                            <p className="font-main-2 text">
                                Globirix Consulting
                            </p>
                        </div>
                        <div className="marquee-item">
                            <p className="font-main-2 text">
                                Globirix Consulting
                            </p>
                        </div>
                        <div className="marquee-item">
                            <p className="font-main-2 text">
                                Globirix Consulting
                            </p>
                        </div>
                        <div className="marquee-item">
                            <p className="font-main-2 text">
                                Globirix Consulting
                            </p>
                        </div>
                        <div className="marquee-item">
                            <p className="font-main-2 text">
                                Globirix Consulting
                            </p>
                        </div>
                        <div className="marquee-item">
                            <p className="font-main-2 text">
                                Globirix Consulting
                            </p>
                        </div>
                        <div className="marquee-item">
                            <p className="font-main-2 text">
                                Globirix Consulting
                            </p>
                        </div>
                        <div className="marquee-item">
                            <p className="font-main-2 text">
                                Globirix Consulting
                            </p>
                        </div>
                        <div className="marquee-item">
                            <p className="font-main-2 text">
                                Globirix Consulting
                            </p>
                        </div>
                        <div className="marquee-item">
                            <p className="font-main-2 text">
                                Globirix Consulting
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
