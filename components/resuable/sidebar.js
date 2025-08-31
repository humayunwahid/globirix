import Link from "next/link";

const Sidebar = () => {
 const services = [
    { name: "Accounting & Reporting", href: "/our-services/accounting-reporting" },
    { name: "Data Entry & Audit Support", href: "/our-services/data-entry-audit-support" },
    { name: "Internal Control over Financial Reporting", href: "/our-services/internal-control-financial-reporting" },
    { name: "ERP Functional Support", href: "/our-services/erp-functional-support" },
    { name: "HR & Payroll Services", href: "/our-services/hr-payroll-services" },
  ];

  const downloads = [
    { label: "Download PDF", icon: "icon-file-pdf", href: "/#", style: "" },
    { label: "Download Doc", icon: "icon-file", href: "/#", style: "style-2" },
  ];

  return (
    <div className="tf-sidebar">
      {/* Popular Services */}
      <div className="sb-item mb-20">
        <div className="sb-title">
          <i className="icon-repair fs-20 color-main-black" />
          <h5 className="title">Popular Services</h5>
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
            Ready to Get Free <br />
            <span>Consultation ?</span>
          </p>
          <form action="#" className="form-contact bg-transparent style-3">
            <div className="cols mb-10">
              <fieldset>
                <input type="text" placeholder="Full Name" required />
              </fieldset>
            </div>
            <div className="cols mb-10">
              <fieldset>
                <input type="email" placeholder="Email" required />
              </fieldset>
            </div>
            <div className="cols mb-10">
              <fieldset>
                <input type="text" placeholder="Subject" required />
              </fieldset>
            </div>
            <div className="cols mb-10">
              <fieldset>
                <textarea
                  className="h-100px"
                  placeholder="Write message"
                ></textarea>
              </fieldset>
            </div>
            <button type="submit" className="tf-btn full text-anime-style-1">
              Get Consultation
              <i className="icon-chevron-right" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
