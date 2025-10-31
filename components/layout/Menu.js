'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
	const pathname = usePathname()

	const isActive = (path) => pathname === path ? "current" : ""
	const isParentActive = (paths) => paths.some(path => pathname.startsWith(path)) ? "current" : ""

	return (
		<ul className="nav-list">
			{/* <li className={`item has-child ${isParentActive(["/home-2", "/home-3", "/home-4"])}`}> */}
			<li className={`item ${isParentActive(["/home-2", "/home-3", "/home-4"])}`}>
				<Link href="/"><span>Home</span></Link>
				{/* <ul className="sub-nav">
					<li className={isActive("/")}>
						<Link href="/"><span> Home Consulting </span></Link>
					</li>
					<li className={isActive("/home-2")}>
						<Link href="/home-2"><span> Corporate Consulting </span></Link>
					</li>
					<li className={isActive("/home-3")}>
						<Link href="/home-3"><span> Financial Advisor </span></Link>
					</li>
					<li className={isActive("/home-4")}>
						<Link href="/home-4"><span> Marketing Consulting </span></Link>
					</li>
				</ul> */}
			</li>
			{/* <li className={`item has-child ${isParentActive(["/team-member", "/team-details", "/pricing-table", "/career", "/awards", "/mission-vision", "/faqs", "/404"])}`}>
				<Link href="#"><span>Pages</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/team-member")}><Link href="/team-member"><span> Team Member </span></Link></li>
					<li className={isActive("/team-details")}><Link href="/team-details"><span> Team Details </span></Link></li>
					<li className={isActive("/pricing-table")}><Link href="/pricing-table"><span> Pricing Table </span></Link></li>
					<li className={isActive("/career")}><Link href="/career"><span> Career </span></Link></li>
					<li className={isActive("/awards")}><Link href="/awards"><span> Awards </span></Link></li>
					<li className={isActive("/mission-vision")}><Link href="/mission-vision"><span> Mission Vision </span></Link></li>
					<li className={isActive("/faqs")}><Link href="/faqs"><span> FAQs </span></Link></li>
					<li className={isActive("/404")}><Link href="/404"><span> 404 </span></Link></li>
				</ul>
			</li> */}
			<li className={`item has-child ${isParentActive(["/about-us", "/about-us"])}`}>
				<Link href="/about-us"><span>About Us</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/about-us#summary")}><Link href="/about-us#summary"><span> Executive Summary </span></Link></li>
					<li className={isActive("/about-us#vision-mission")}><Link href="/about-us#vision-mission"><span> Vision & Mission </span></Link></li>
					<li className={isActive("/about-us#partners")}><Link href="/about-us#partners"><span> Partners Profile </span></Link></li>
					
				</ul>
			</li>
			<li className={`item has-child ${isParentActive(["/our-services/accounting-reporting", "/our-services/data-entry-audit-support", "/our-services/internal-control-financial-reporting", "/our-services/erp-functional-support", "/our-services/hr-payroll-services"])}`}>
				<Link href="/our-services"><span>Services</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/our-services/accounting-reporting")}><Link href="/our-services/accounting-reporting"><span> Accounting and reporting </span></Link></li>
					<li className={isActive("/our-services/data-entry-audit-support")}><Link href="/our-services/data-entry-audit-support"><span> Data Entry & Audit Support </span></Link></li>
					<li className={isActive("/our-services/internal-control-financial-reporting")}><Link href="/our-services/internal-control-financial-reporting"><span> Internal Control over Financial Reporting </span></Link></li>
					<li className={isActive("/our-services/erp-functional-support")}><Link href="/our-services/erp-functional-support"><span> ERP Functional Support </span></Link></li>
					<li className={isActive("/our-services/hr-payroll-services")}><Link href="/our-services/hr-payroll-services"><span> HR & Payroll </span></Link></li>
				</ul>
			</li>
			{/* <li className={`item ${isActive("/benefits-outsourcing")}`}><Link href="/benefits-outsourcing"><span>Benefits of Outsourcing</span></Link></li> */}

			<li className={`item has-child ${isParentActive(["/why-choose-us", "/why-choose-us"])}`}>
				<Link href="/why-choose-us"><span>Why Choose Us</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/why-choose-us#unique")}><Link href="/why-choose-us#unique"><span> Why we are Uniquely Positioned </span></Link></li>
					<li className={isActive("/why-choose-us#methodology")}><Link href="/why-choose-us#methodology"><span> Service Methodology </span></Link></li>
					<li className={isActive("/why-choose-us#technology")}><Link href="/why-choose-us#technology"><span> Tools & Technology </span></Link></li>
					<li className={isActive("/why-choose-us#security")}><Link href="/why-choose-us#security"><span> Confidentiality and Security </span></Link></li>
				</ul>
			</li>
			{/* <li className={`item has-child ${isParentActive(["/case-study-01", "/case-study-02", "/case-details"])}`}>
				<Link href="#"><span>Case</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/case-study-01")}><Link href="/case-study-01"><span> Case Study 01 </span></Link></li>
					<li className={isActive("/case-study-02")}><Link href="/case-study-02"><span> Case Study 02 </span></Link></li>
					<li className={isActive("/case-details")}><Link href="/case-details"><span> Case Details </span></Link></li>
				</ul>
			</li> */}
			
						{/* <li className={`item ${isActive("/blogs")}`}><Link href="/blogs"><span>Blogs</span></Link></li> */}

						<li className={`item ${isActive("/blogs")}`}><Link href="/careers"><span>Careers</span></Link></li>

						<li className={`item ${isActive("/blogs")}`}><Link href="/contact"><span>Contact</span></Link></li>

		
			{/* <li className={`item ${isActive("/contact")}`}><Link href="/contact"><span>Contact</span></Link></li> */}
		</ul>
	)
}
