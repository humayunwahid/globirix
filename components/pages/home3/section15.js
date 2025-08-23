
import Image from 'next/image'
import Link from 'next/link'
export default function Section15() {
	return (
		<>

			<section className="s-page-contact tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="wg-office tf-hover">
									<div className="entry-image hover-1 wow zoomIn">
										<div className="image">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/widget/office-1.webp" data-src="/images/widget/office-1.jpg" className="lazyload" alt="" />
										</div>
									</div>
									<h3>
										<Link href="/#" className="name">
											Pakistan Office
										</Link>
									</h3>
									<p className="sub">
										Our team is ready to assist you every <br />
										step of the way ensuring
									</p>
									<span className="line" />
									<ul className="contact-infor-list style-2">
										<li>
											<Link href="https://maps.google.com/?q=55MainRoad,MelbourneAustralia" className="infor" target="_blank">
												55 Main Road, Melbourne
											</Link>
										</li>
										<li>
											<Link href="mailto:contact@globirix.com" className="infor">
												contact@globirix.com
											</Link>
										</li>
										<li>
											<Link href="/tel:0123456789" className="infor">
												+000 (123) 456 888
											</Link>
										</li>
									</ul>
								</div>
								<div className="wg-office tf-hover">
									<div className="entry-image hover-1 wow zoomIn">
										<div className="image">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/widget/office-2.webp" data-src="/images/widget/office-2.jpg" className="lazyload" alt="" />
										</div>
									</div>
									<h3>
										<Link href="/#" className="name">
											Canada Office
										</Link>
									</h3>
									<p className="sub">
										Our team is ready to assist you every <br />
										step of the way ensuring
									</p>
									<span className="line" />
									<ul className="contact-infor-list style-2">
										<li>
											<Link href="https://maps.google.com/?q=28ValenciaStreet,NewYork" className="infor" target="_blank">
												28 Valencia Street
											</Link>
										</li>
										<li>
											<Link href="mailto:contact@globirix.com" className="infor">
												contact@globirix.com
											</Link>
										</li>
										<li>
											<Link href="/tel:0123456789" className="infor">
												+000 (123) 456 888
											</Link>
										</li>
									</ul>
								</div>
								<div className="wg-office tf-hover">
									<div className="entry-image hover-1 wow zoomIn">
										<div className="image">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/widget/office-3.webp" data-src="/images/widget/office-3.jpg" className="lazyload" alt="" />
										</div>
									</div>
									<h3>
										<Link href="/#" className="name">
											USA Office
										</Link>
									</h3>
									<p className="sub">
										Our team is ready to assist you every <br />
										step of the way ensuring
									</p>
									<span className="line" />
									<ul className="contact-infor-list style-2">
										<li>
											<Link href="https://maps.google.com/?q=116Royalln,e-block,STroadLondon" className="infor" target="_blank">
												116 Royal ln, e-block, ST road
											</Link>
										</li>
										<li>
											<Link href="mailto:contact@globirix.com" className="infor">
												contact@globirix.com
											</Link>
										</li>
										<li>
											<Link href="/tel:0123456789" className="infor">
												+000 (123) 456 888
											</Link>
										</li>
									</ul>
								</div>

                                <div className="wg-office tf-hover">
									<div className="entry-image hover-1 wow zoomIn">
										<div className="image">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/widget/office-1.webp" data-src="/images/widget/office-3.jpg" className="lazyload" alt="" />
										</div>
									</div>
									<h3>
										<Link href="/#" className="name">
											Australia Office
										</Link>
									</h3>
									<p className="sub">
										Our team is ready to assist you every <br />
										step of the way ensuring
									</p>
									<span className="line" />
									<ul className="contact-infor-list style-2">
										<li>
											<Link href="https://maps.google.com/?q=116Royalln,e-block,STroadLondon" className="infor" target="_blank">
												116 Royal ln, e-block, ST road
											</Link>
										</li>
										<li>
											<Link href="mailto:contact@globirix.com" className="infor">
												contact@globirix.com
											</Link>
										</li>
										<li>
											<Link href="/tel:0123456789" className="infor">
												+000 (123) 456 888
											</Link>
										</li>
									</ul>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
