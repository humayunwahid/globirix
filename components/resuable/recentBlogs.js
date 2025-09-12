'use client'
import { useEffect, useState } from "react"
import { sliderBlog } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"

export default function RecentBlogs() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://blogs.globirix.com/api/wp-json.php?cat=blogs&count=7&page=0")
        const data = await res.json()
        setBlogs(data.specific_post || [])
      } catch (error) {
        console.error("Error fetching blogs:", error)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <section className="s-new-blog-3 tf-spacing-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading mb-70">
              <div>
                <p className="s-sub-title mb-15">
                  <i className="icon-angles-right moveLeftToRight" />
                  news &amp; Blog
                </p>
                <p className="s-title text-main-green-3 text-anime-wave">
                  Read Our Blog
                  <span>&amp; News</span>
                </p>
              </div>
              <Link href="/blogs" className="tf-btn style-15 text-anime-style-1">
                View All Blog
                <i className="icon-chevron-right" />
              </Link>
            </div>

            <Swiper {...sliderBlog} className="swiper-container slider-blog">
              <div className="swiper-wrapper">
                {blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <SwiperSlide key={blog.ID}>
                      <div className="card-blog-item style-2 tf-hover">
                        <Link href={blog.permalink || "/"} passHref>
                          <div className="entry-image hover-1 hover-14">
                            <Image
                              width={500}
                              height={300}
                              src={blog.image || "/images/blog/default.webp"}
                              alt={blog.title}
                              layout="responsive"  // Make the image responsive
                              objectFit="cover"    // Ensure image covers the area without distortion
                            />
                            {blog.categories?.length > 0 && (
                              <div className="tag-wrap">
                                <p>{blog.categories[0].name}</p>
                              </div>
                            )}
                          </div>
                        </Link>
                        <div className="content">
                          <div className="entry-meta mb-20">
                            <ul className="meta-list">
                              <li className="entry date">
                                <div className="icon">
                                  <i className="icon-calendar-days" />
                                </div>
                                <span>{blog.date}</span>
                              </li>
                              <li className="entry author">
                                <div className="icon">
                                  <i className="icon-user" />
                                </div>
                                <span>{blog.author_name}</span>
                              </li>
                            </ul>
                          </div>
                          <Link href={blog.permalink || "/"} className="title fw-7 mb-25">
                            {blog.title}
                          </Link>
                          <p className="text mb-25">
                            {blog.excerpt?.slice(0, 120)}...
                          </p>
                          <Link href={blog.permalink || "/"} className="btn-view has-text">
                            <span className="plus"> + </span>
                            <span className="read font-main-2">Read More</span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <p>Loading blogs...</p>
                )}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
