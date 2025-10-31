import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ConsultationForm from "./consultationForm";


const Sidebar = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          "https://blogs.globirix.com/api/wp-json.php?cat=blogs&count=5&page=0",
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

 const services = [
    { name: "Accounting & Reporting", href: "/our-services/accounting-reporting" },
    { name: "Data Entry & Audit Support", href: "/our-services/data-entry-audit-support" },
    { name: "Internal Control over Financial Reporting", href: "/our-services/internal-control-financial-reporting" },
    { name: "ERP Functional Support", href: "/our-services/erp-functional-support" },
    { name: "HR & Payroll Services", href: "/our-services/hr-payroll-services" },
  ];

  const downloads = [
    { label: "Download PDF", icon: "icon-file-pdf", href: "/#", style: "" },
    // { label: "Download Doc", icon: "icon-file", href: "/#", style: "style-2" },
  ];



  return (
    <div className="tf-sidebar">
      {/* Popular Services */}
      <div className="sb-item mb-20">
        <div className="sb-title">
          <i className="icon-repair fs-20 color-main-black" />
          <h5 className="title">Our Services</h5>
        </div>
        <div className="sb-content sb-category">
          <ul className="category-list">
            {services.map((service, index) => (
              <li key={index}>
                <Link href={service.href}>
                  {service.name}
                  <i className="icon-chevron-right" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Blogs */}
      <div className="sb-item mb-30">
        <div className="sb-title">
          <i className="icon-bolt fs-20 color-main-black" />
          <h5 className="title">Recent Blogs</h5>
        </div>
        <div className="sb-content sb-news">
          {loading ? (
            <p>Loading latest blogs...</p>
          ) : blogs.length > 0 ? (
            <ul className="news-list">
              {blogs.slice(0, 4).map((blog) => (
                <li key={blog.ID} className="tf-hover">
                  <div className="image hover-1">
                    <Image
                      width={100}
                      height={70}
                      src={
                        blog.thumbnail || blog.image || "/images/blog/default.jpg"
                      }
                      alt={blog.title}
                    />
                  </div>
                  <div className="content">
                    <div className="caption">
                      <Link
                        href={blog.permalink}
                        target="_blank"
                        className="font-main-2"
                      >
                        {blog.title}
                      </Link>
                    </div>
                    <p className="date">{blog.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recent blogs found.</p>
          )}
        </div>
      </div>



      {/* Company Information */}
      <div className="sb-item mb-20">
        <div className="sb-title">
          <i className="icon-house fs-20 color-main-black" />
          <h5 className="title">Company Information</h5>
        </div>
        <div className="sb-content sb-download">
          <ul className="btn-down-list">
            {downloads.map((file, index) => (
              <li key={index}>
                <Link
                  href={file.href}
                  className={`btn-download ${file.style}`}
                >
                  {file.label}
                  <div className="icon">
                    <i className={file.icon}></i>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div className="sb-item sb-contact">
        <div className="sb-content">
          <p className="s-title style-2 mb-30 text-anime-wave">
            Ready to Book Your Free 
            Consultation?
          </p>
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
