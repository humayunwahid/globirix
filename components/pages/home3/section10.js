
'use client'
import { sliderFeedback2 } from '@/utils/swiperOptions'
import { sliderFeedback3 } from '@/utils/swiperOptions'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section10() {
	return (
		<>

			<section className="s-feedback-3 tf-spacing-1">
  <div className="tf-container w-1780">
    <div className="row">
      <div className="col-lg-12">
        <div className="heading mb-50">
          <p className="s-sub-title mb-15 justify-center">
            <i className="icon-angles-right moveLeftToRight" />
            customer feedback
          </p>
          <p className="s-title text-center text-anime-style-2">
            Customer
            <span> Say Us</span>
          </p>
        </div>

        <Swiper {...sliderFeedback3} className="swiper-container slider-feedback-3">
          <div className="swiper-wrapper">
            {/* 1 */}
            <SwiperSlide>
              <div className="wg-testimonial style-4 tf-hover">
                <div className="top">
                  <div className="image hover-1">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/avatar/testimonial-author-3.jpg"
                      alt="Operations Manager - Retail SME"
                    />
                  </div>
                  <div className="say">
                    {/* &ldquo;The Rent-a-Resource model was a game changer for us.&rdquo; <br /> */}
                    &ldquo;We needed a full-time accountant but didn’t want to commit to hiring in-house. Globirix matched us with a professional who integrated seamlessly into our team and has been managing our payroll and reporting flawlessly. It feels like we gained a team member overnight.&rdquo;
                  </div>
                </div>
                <div className="bot">
                  <div className="flex">
                    <Link href="/#" className="name fw-7">Operations Manager</Link>
                    <span> / Retail SME</span>
                  </div>
                  <div className="star-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star1_2" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* 2 */}
            <SwiperSlide>
              <div className="wg-testimonial style-4 tf-hover">
                <div className="top">
                  <div className="image hover-1">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/avatar/testimonial-author-4.jpg"
                      alt="CEO - Tech Startup"
                    />
                  </div>
                  <div className="say">
                    {/* &ldquo;Accurate, reliable, and always on time.&rdquo; <br /> */}
                    &ldquo;The delivery-based services from Globirix have taken the pressure off our internal team. From bookkeeping to compliance reports, everything is handled with precision and delivered on schedule. This has allowed us to focus on growing our core business without worrying about financial backlogs.&rdquo;
                  </div>
                </div>
                <div className="bot">
                  <div className="flex">
                    <Link href="/#" className="name fw-7">CEO</Link>
                    <span> / Tech Startup</span>
                  </div>
                  <div className="star-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star1_2" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* 3 */}
            <SwiperSlide>
              <div className="wg-testimonial style-4 tf-hover">
                <div className="top">
                  <div className="image hover-1">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/avatar/testimonial-author-5.jpg"
                      alt="Finance Director - Logistics Company"
                    />
                  </div>
                  <div className="say">
                    {/* &ldquo;Scalable support exactly when we need it.&rdquo; <br /> */}
                    &ldquo;During our peak season, we rented two part-time resources for three months to manage transaction processing. With Globirix, it was smooth, cost-effective, and completely hassle-free. When demand dropped, scaling down was just as easy. That flexibility is invaluable.&rdquo;
                  </div>
                </div>
                <div className="bot">
                  <div className="flex">
                    <Link href="/#" className="name fw-7">Finance Director</Link>
                    <span> / Logistics Company</span>
                  </div>
                  <div className="star-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star1_2" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* 4 */}
            <SwiperSlide>
              <div className="wg-testimonial style-4 tf-hover">
                <div className="top">
                  <div className="image hover-1">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/avatar/testimonial-author-3.jpg"
                      alt="Founder - Manufacturing Business"
                    />
                  </div>
                  <div className="say">
                    {/* &ldquo;True partners in our growth journey.&rdquo; <br /> */}
                    &ldquo;What sets Globirix apart is not just their technical expertise but their partnership mindset. They helped us restructure our management reporting and budgeting process, giving us better insights for decision-making. We see them as long-term partners, not just a service provider.&rdquo;
                  </div>
                </div>
                <div className="bot">
                  <div className="flex">
                    <Link href="/#" className="name fw-7">Founder</Link>
                    <span> / Manufacturing Business</span>
                  </div>
                  <div className="star-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star1_2" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</section>



		</>
	)
}
