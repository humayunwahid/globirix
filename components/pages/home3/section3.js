'use client'
import { sliderBoxIcon } from '@/utils/swiperOptions'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"

export default function Section3() {
	return (
		<>

			<section className="s-feature-3">
				<div className="tf-container w-1860">
					<div className="row">
						<Swiper {...sliderBoxIcon} className="swiper-container slider-box-icon overflow-hidden mb-30">
							<div className="swiper-wrapper">
								<SwiperSlide>
									<div className="box-icon style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0s">
										<div className="icon style-circle">
											<i className="flaticon-problem-solving hover-icon-2" />
										</div>
										<Link href="/" className="title fw-7 fs-22">
											Our Facility
										</Link>
										<p className="text">
											Our state-of-the-art outsourcing facility offers secure infrastructure, advanced technology, and scalable resources.
										</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="box-icon style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0.1s">
										<div className="icon style-circle">
											<i className="flaticon-persuasive hover-icon-2" />
										</div>
										<Link href="/" className="title fw-7 fs-22">
											Our Culture
										</Link>
										<p className="text">
											We foster a culture of integrity, transparency, and excellence, building trust and delivering measurable results.
										</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="box-icon style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0.2s">
										<div className="icon style-circle">
											<i className="flaticon-statistics hover-icon-2" />
										</div>
										<Link href="/" className="title fw-7 fs-22">
											Our Peoples
										</Link>
										<p className="text">
											Our team of skilled professionals ensures the accuracy of financial reporting and keeps you compliant with regulations.
										</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="box-icon style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0.3s">
										<div className="icon style-circle">
											<i className="flaticon-interactivity hover-icon-2" />
										</div>
										<Link href="/" className="title fw-7 fs-22">
											Our Strategy
										</Link>
										<p className="text">
											Leveraging cutting-edge technology and automation tools, we streamline financial operations for faster, more accurate reporting.
										</p>
									</div>
								</SwiperSlide>
							</div>
						</Swiper>
					</div>
				</div>
			</section>

		</>
	)
}
