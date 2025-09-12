

"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function Section1({ blogData }) {
	// Helper function to format date
	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' }
		return new Date(dateString).toLocaleDateString('en-US', options)
	}

	// Helper function to create excerpt from content
	const createExcerpt = (content, wordLimit = 50) => {
		const strippedContent = content.replace(/<[^>]*>/g, '')
		const words = strippedContent.split(' ')
		if (words.length > wordLimit) {
			return words.slice(0, wordLimit).join(' ') + '...'
		}
		return strippedContent
	}

	// Get primary category for tag display
	const primaryCategory = blogData.categories?.[0]

	return (
		<>
			<section className="s-blog-details">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="content">
								{/* Featured Image */}
								<div className="entry-image tf-hover mb-40">
									<div className="hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="lazyload" 
											src={blogData.image || "/images/blog/blog-details.jpg"} 
											alt={blogData.title || ""} 
										/>
									</div>
									{primaryCategory && (
										<div className="tag-wrap">
											<p>{primaryCategory.name}</p>
										</div>
									)}
								</div>

								{/* Blog Title */}
								<p className="title font-main-2 s1 text-anime-wave">
									{blogData.title}
								</p>

								{/* Blog Meta Info */}
								<div className="blog-meta mb-20">
									<span className="author">By {blogData.author?.name}</span>
									<span className="date"> • {formatDate(blogData.pub_date)}</span>
									{blogData.views > 0 && <span className="views"> • {blogData.views} views</span>}
									{blogData.seo?.estimated_reading_time && (
										<span className="read-time"> • {blogData.seo.estimated_reading_time} min read</span>
									)}
								</div>

								{/* Blog Content */}
								<div 
									className="blog-content mb-35"
									dangerouslySetInnerHTML={{ __html: blogData.content }}
								/>

								{/* Tags and Social Share */}
								<span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>Tags</h6>
										<ul className="tag-popular-list style-2">
											{blogData.categories?.map((category, index) => (
												<li key={index}>
													<Link href={`/category/${category.slug}`}>
														{category.name}
													</Link>
												</li>
											))}
										</ul>
									</div>
									<div className="socials">
										<h6>Share</h6>
										<ul className="social-list style-2">
											<li>
												<Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogData.url || '')}`} target="_blank">
													<i className="icon-facebook" />
												</Link>
											</li>
											<li>
												<Link href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogData.title || '')}&url=${encodeURIComponent(blogData.url || '')}`} target="_blank">
													<i className="icon-twitter" />
												</Link>
											</li>
											<li>
												<Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogData.url || '')}`} target="_blank">
													<i className="icon-linkedin" />
												</Link>
											</li>
											<li>
												<Link href={`https://www.youtube.com/`} target="_blank">
													<i className="icon-youtube" />
												</Link>
											</li>
										</ul>
									</div>
								</div>

								{/* Author Box */}
								<div className="author-post mb-70">
									<div className="entry-image-author wow zoomIn">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "100%" }}
											className="lazyload" 
											src={blogData.author?.image || "/images/avatar/entry-author.jpg"} 
											alt={blogData.author?.name || "Author"} 
										/>
									</div>
									<div className="entry-infor-author">
										<h6 className="name">
											<Link href={`/author/${blogData.author?.slug}`} className="hover-text-main-golden">
												{blogData.author?.name}
											</Link>
										</h6>
										<p className="duty mb-10">Author</p>
										<p className="text-note mb-20">
											{blogData.author?.description || "Passionate writer and content creator sharing insights and stories."}
										</p>
										<ul className="social-list style-3">
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

								{/* Navigation to Previous/Next Posts */}
								<div className="btn-blog-group mb-70">
									<div className="btn-next btn-blog tf-hover">
										<div className="image hover-2">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												className="lazyload" 
												src="/images/blog/recent-new-1.jpg" 
												alt="" 
											/>
										</div>
										<div className="content">
											<div className="caption">
												<Link href="/#" className="font-main-2">
													Previous Post
												</Link>
											</div>
											<p className="date">
												{formatDate(blogData.pub_date)}
											</p>
										</div>
									</div>
									<div className="btn-prev btn-blog tf-hover">
										<div className="image hover-2">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												className="lazyload" 
												src="/images/blog/recent-new-2.jpg" 
												alt="" 
											/>
										</div>
										<div className="content">
											<div className="caption">
												<Link href="/#" className="font-main-2">
													Next Post
												</Link>
											</div>
											<p className="date">
												{formatDate(blogData.pub_date)}
											</p>
										</div>
									</div>
								</div>

								{/* Comments Section */}
								{blogData.comment_status === 'open' && (
									<div className="comment-wrap">
										<h3 className="text-anime-wave">
											Leave A Comment
										</h3>
										<p className="note mb-30">
											Your email address will not be published. Required fields are marked *
										</p>
										<form action="#" className="form-comment style-3">
											<div className="cols mb-20">
												<fieldset>
													<input type="text" placeholder="Name" required />
												</fieldset>
												<fieldset>
													<input type="email" placeholder="Email" required />
												</fieldset>
											</div>
											<div className="cols fieldset-text">
												<fieldset>
													<textarea placeholder="Message" required />
												</fieldset>
											</div>
											<div className="checkbox-item">
												<label>
													<span className="text">Save my name, email, and website in this browser for the next time I comment.</span>
													<input type="checkbox" className="checkbox-item" />
													<span className="btn-checkbox" />
												</label>
											</div>
											<div className="bot">
												<button type="submit" className="tf-btn style-3 text-anime-style-1">
													Send Comment
													<i className="icon-chevron-right" />
												</button>
											</div>
										</form>
									</div>
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

								{/* Categories */}
								<div className="sb-item mb-30">
									<div className="sb-title">
										<i className="icon-bolt fs-20 color-main-black" />
										<h5 className="title">Categories</h5>
									</div>
									<div className="sb-content sb-category">
										<ul className="category-list">
											{blogData.categories?.map((category, index) => (
												<li key={index}>
													<Link href={`/category/${category.slug}`}>
														{category.name}
														<i className="icon-chevron-right" />
													</Link>
												</li>
											))}
											{/* Add static categories if needed */}
											<li>
												<Link href="/category/marketing">
													Marketing Consulting
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/category/resources">
													Resources Consulting
													<i className="icon-chevron-right" />
												</Link>
											</li>
										</ul>
									</div>
								</div>

								{/* Recent News - You'll need to fetch this separately */}
								<div className="sb-item mb-30">
									<div className="sb-title">
										<i className="icon-bolt fs-20 color-main-black" />
										<h5 className="title">Recent News</h5>
									</div>
									<div className="sb-content sb-news">
										<ul className="news-list">
											{/* You'll need to pass recent posts as a separate prop */}
											<li className="tf-hover">
												<div className="image hover-1">
													<img
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/recent-new-1.jpg" alt="" />
												</div>
												<div className="content">
													<div className="caption">
														<Link href="/#" className="font-main-2">
															Recent Blog Post
														</Link>
													</div>
													<p className="date">
														{formatDate(new Date())}
													</p>
												</div>
											</li>
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
											{blogData.categories?.map((category, index) => (
												<li key={index}>
													<Link href={`/category/${category.slug}`}>
														{category.name}
													</Link>
												</li>
											))}
											{/* Add static popular tags */}
											<li><Link href="/tag/business">Business</Link></li>
											<li><Link href="/tag/consulting">Consulting</Link></li>
											<li><Link href="/tag/tech">Tech</Link></li>
											<li><Link href="/tag/finance">Finance</Link></li>
										</ul>
									</div>
								</div>

								{/* Service CTA */}
								<div className="sb-item sb-service">
									<div className="tf-overlay" />
									<div className="image">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/blog/service-sidebar.jpg" alt="" />
									</div>
									<div className="content">
										<p className="font-main-2 text-anime-wave">
											Professional &amp; Experience Business
											<span> Services </span>
										</p>
										<Link href="/contact" className="tf-btn text-anime-style-1">
											Get Consultation
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}