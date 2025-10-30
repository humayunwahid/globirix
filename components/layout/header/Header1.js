import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleWelcomeBox, isWelcomeBox }) {
	return (
		<>
			<div className="tf-topbar">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="topbar-inner">

								{/* <div className="tf-marquee slider-saylo">
									<div className="wrap-marquee">
										<div className="marquee-item">
											<p className="font-main-4 text">
											We provide flexible accounting and financial outsourcing solutions designed to streamline operations, ensure compliance, and support strategic decision-making. You can either hire a dedicated professional through our Rent-a-Resource model or rely on us to deliver full-service outsourcing — whichever best fits your needs.
 
											</p>
										</div>
										<div className="marquee-item">
											<p className="font-main-4 text">
												Our Key Services To Empower Your Business Are: 
											</p>
										</div>
										<div className="marquee-item">
											<p className="font-main-4 text">
												Accounting & Reporting
											</p>
										</div>
										<div className="marquee-item">
											<p className="font-main-2 text">
												Data Entry & Audit Support
											</p>
										</div>
										<div className="marquee-item">
											<p className="font-main-2 text">
												HR & Payroll
											</p>
										</div>
										<div className="marquee-item">
											<p className="font-main-2 text">
												ERP Financial Support
											</p>
										</div>
										<div className="marquee-item">
											<p className="font-main-2 text">
												Internal Controls Over Financial Reporting
											</p>
										</div>

									</div>
								</div> */}

								<div className="topbar-left">
									<div className="icon">
										<i className="flaticon-tag" />
									</div>
									<p>Welcome to Globirix : Flexible Resource Outsourcing for Every Business</p>
								</div>
								<div className="topbar-right">
									<ul className="infor-list">
										{/* <li>
											<div className="icon">
												<i className="flaticon-open-mail" />
											</div>
											<Link href="mailto:info@globirix.com">
												info@globirix.com
											</Link>
										</li> */}
										{/* <li>
											<div className="icon">
												<i className="flaticon-opportunity" /> 
											</div>
											<Link href="/career">
												Current Job Openings
											</Link>
										</li> */}
										<li>
											<div className="icon">
												<i className="flaticon-phone-call" />
											</div>
											<p>
												WhatsApp :<Link href="https://api.whatsapp.com/send/?phone=923442140971&text=Hello%21+I%27m+visiting+your+website+and+would+like+to+chat.&type=phone_number&app_absent=0"> +92 344 214 0971
												</Link>
											</p>
										</li>
											{/* <li>
												<div className="icon">
													<i className="flaticon-clock" />
												</div>
												<a>
													Working Hours : 08am - 05pm
												</a>
											</li> */}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* /.Topbar */}
			{/* Header */}
			<header className="tf-header">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-inner">
								<div className="header-left">
									<div className="logo-site">
										<Link href="/">
											<Image
												width="220"
												height="220"
												id="logo_header" src="/images/logo/logo.png" data-retina="./images/logo/logo@2x.png" alt="" />
											{/* <h2 className="text-white">Globirix</h2> */}

										</Link>
									</div>
								</div>
								<div className="header-center">
									<nav className="main-nav">
										<Menu />
									</nav>
								</div>
								<div className="header-right">
									<Link href="/rent-a-resource" className="tf-btn small">
										Rent a Resource
										<i className="icon-chevron-right" />
									</Link>
									<Link href="/join-our-team?tab=2" className="tf-btn2 small">
										Join Our Team
										<i className="icon-chevron-right" />
									</Link>
									<div className="union mobile-button" onClick={handleMobileMenu}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
									<div className="union btn-open-welcome" onClick={handleWelcomeBox}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
								</div>
							</div>
							<div className={isMobileMenu ? "mobile-nav-wrap active" : "	mobile-nav-wrap"}>
								<div className="overlay-mobile-nav" onClick={handleMobileMenu} />
								<div className="inner-mobile-nav overflow-y-auto">
									<div className="top">
										<div className="logo">
											<Link href="/" rel="home" className="main-logo">
												{/* <Image
													width="139"
													height="39"
													// sizes="(max-width: 768px) auto, 80vw"
													// style={{ width: "100%", height: "auto" }}
													id="mobile-logo_header" alt="" src="/images/logo/logo-4.png" /> */}
												<h4>Globirix</h4>
											</Link>
											<div className="mobile-nav-close" onClick={handleMobileMenu}>
												<i className="icon-xmark" />
											</div>
										</div>
										<nav id="mobile-main-nav" className="mobile-main-nav">
											<MobileMenu handleMobileMenu={handleMobileMenu} />
										</nav>
									</div>
									<div className="bottom">
										<div className="wrap">
											<p className="title">
												Contact Us
											</p>
											<ul className="contact-list mb-20">
												<li>
													<p>
														Address: <Link href="https://www.google.com/maps?q=55East10thStreet,NewYork,NY10003,UnitedStates" target="_blank">
															55 East 10th Street, New York, NY 10003, United States
														</Link>
													</p>
												</li>
												<li>
													<p>
														Email: <Link href="mailto:info@globirix.com">
															info@globirix.com
														</Link>
													</p>
												</li>
												<li>
													<p>
														Call: <Link href="/tel:+00012345688">
															+000 (123) 456 88
														</Link>
													</p>
												</li>
											</ul>
											<ul className="social-list">
												<li>
													<Link href="/#">
														<i className="icon-facebook" />
													</Link>
												</li>
												<li>
													<Link href="/#">
														<i className="icon-twitter" />
													</Link>
												</li>
												<li>
													<Link href="/#">
														<i className="icon-linkedin" />
													</Link>
												</li>
												<li>
													<Link href="/#">
														<i className="icon-youtube" />
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}
