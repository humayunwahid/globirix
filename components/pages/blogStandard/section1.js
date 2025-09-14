"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/resuable/sidebar";

export default function Section1() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          "https://blogs.globirix.com/api/wp-json.php?cat=blogs",
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
                    {/* <div className="entry-meta">
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
                    </div> */}

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
            <Sidebar />
          </div>
          {/* End Sidebar */}
        </div>
      </div>
    </section>
  );
}
