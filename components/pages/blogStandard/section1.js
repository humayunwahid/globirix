"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          "https://blogs.globirix.com/api/wp-json.php?cat=blogs&count=7&page=0",
          { cache: "no-store" }
        );
        const data = await res.json();
        setBlogs(data.specific_post || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <section className="s-blog-standard">
      <div className="tf-container">
        <div className="row">
          {/* Blog List */}
          <div className="col-lg-8">
            <div className="content-section">
              {loading ? (
                <p>Loading blogs...</p>
              ) : blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div
                    key={blog.ID}
                    className="article-blog-item mb-50 tf-hover"
                  >
                    {/* Image */}
                    <div className="entry-image hover-14 hover-1">
                      <Image
                        width={800}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                        className="lazyload"
                        src={blog.image || blog.thumbnail || "/images/blog/default.jpg"}
                        alt={blog.title}
                      />
                      <div className="tag-wrap">
                        {blog.categories?.map((cat) => (
                          <p key={cat.slug}>{cat.name}</p>
                        ))}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="entry-meta">
                      <ul className="meta-list">
                        <li className="entry author">
                          <div className="icon">
                            <i className="icon-user" />
                          </div>
                          <Link href={`/author/${blog.author_slug}`}>
                            {blog.author_name}
                          </Link>
                        </li>
                        <li className="entry date">
                          <div className="icon">
                            <i className="icon-calendar-days" />
                          </div>
                          <span>{blog.date}</span>
                        </li>
                      </ul>
                    </div>

                    {/* Title */}
                    <div className="entry-title">
                      <p className="font-main-2 text-anime-wave">
                        {blog.title}
                      </p>
                    </div>

                    {/* Excerpt */}
                    <div className="entry-text">
                      <p>{blog.excerpt}</p>
                    </div>

                    {/* Read More */}
                    <div className="entry-btn">
                      <Link
                        href={blog.permalink}
                        target="_blank"
                        className="tf-btn small text-anime-style-1"
                      >
                        Read More <i className="icon-chevron-right" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No blogs found.</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="tf-sidebar">
              {/* Search */}
              <div className="sb-item sb-search mb-30">
                <form action="#" className="form-sb-search">
                  <fieldset>
                    <input type="text" placeholder="Search here" required />
                  </fieldset>
                  <button type="submit" className="btn-search">
                    <i className="icon-search" />
                  </button>
                </form>
              </div>

              {/* Categories (static for now) */}
              <div className="sb-item mb-30">
                <div className="sb-title">
                  <i className="icon-bolt fs-20 color-main-black" />
                  <h5 className="title">Category</h5>
                </div>
                <div className="sb-content sb-category">
                  <ul className="category-list">
                    <li>
                      <Link href="#">Marketing Consulting</Link>
                    </li>
                    <li>
                      <Link href="#">Resources Consulting</Link>
                    </li>
                    <li>
                      <Link href="#">Management Consulting</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Recent Blogs */}
              <div className="sb-item mb-30">
                <div className="sb-title">
                  <i className="icon-bolt fs-20 color-main-black" />
                  <h5 className="title">Recent News</h5>
                </div>
                <div className="sb-content sb-news">
                  <ul className="news-list">
                    {blogs.slice(0, 4).map((blog) => (
                      <li key={blog.ID} className="tf-hover">
                        <div className="image hover-1">
                          <Image
                            width={100}
                            height={70}
                            src={blog.thumbnail || blog.image || "/images/blog/default.jpg"}
                            alt={blog.title}
                          />
                        </div>
                        <div className="content">
                          <div className="caption">
                            <Link href={blog.permalink} target="_blank" className="font-main-2">
                              {blog.title}
                            </Link>
                          </div>
                          <p className="date">{blog.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="sb-item sb-tag mb-30">
                <div className="sb-title">
                  <i className="icon-bolt fs-20 color-main-black" />
                  <h5 className="title">Popular Tags</h5>
                </div>
                <div className="sb-content sb-tag">
                  <ul className="tag-popular-list">
                    <li><Link href="#">Business</Link></li>
                    <li><Link href="#">Consulting</Link></li>
                    <li><Link href="#">Finance</Link></li>
                    <li><Link href="#">Startup</Link></li>
                  </ul>
                </div>
              </div>

              {/* Sidebar Banner */}
              <div className="sb-item sb-service">
                <div className="tf-overlay" />
                <div className="image">
                  <Image
                    width={300}
                    height={200}
                    style={{ width: "100%", height: "100%" }}
                    src="/images/blog/service-sidebar.jpg"
                    alt="sidebar service"
                  />
                </div>
                <div className="content">
                  <p className="font-main-2 text-anime-wave">
                    Professional & Experience Business <span>Services</span>
                  </p>
                  <Link href="#" className="tf-btn text-anime-style-1">
                    Get Consultation <i className="icon-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End Sidebar */}
        </div>
      </div>
    </section>
  );
}
