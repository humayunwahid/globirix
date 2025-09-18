
'use client'
import { sliderPartner } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section11() {
	return (
		<>

			<section className="s-partner" id="partners">
				<Swiper {...sliderPartner} className="swiper-container slider-partner">
					<div className="swiper-wrapper">
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/1.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/1.webp" alt="" />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/2.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/2.webp" alt="" />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/3.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/3.webp" alt="" />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/4.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/4.webp" alt="" />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/5.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/5.webp" alt="" />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/6.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/6.webp" alt="" />
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/7.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/7.webp" alt="" />
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/8.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/8.webp" alt="" />
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/9.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/9.webp" alt="" />
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/10.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/10.webp" alt="" />
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/gray/10.webp" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/color/10.webp" alt="" />
							</Link>
						</SwiperSlide>
					</div>
				</Swiper>
			</section>

		</>
	)
}
