'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function MobileMenu({ handleMobileMenu }) {
	const [activeAccordion, setActiveAccordion] = useState(null)
	const pathname = usePathname()

	const toggleAccordion = (key) => {
		setActiveAccordion((prev) => (prev === key ? null : key))
	}

	const isActive = (path) => (pathname === path ? "current" : "")
	const isParentActive = (paths = []) => paths.some((path) => pathname.startsWith(path)) ? "active" : ""

	const menuItems = [
		// {
			
		// 	title: "Home",
		// 	subMenu: [
		// 		{ title: "Home Consulting", path: "/" },
		// 		{ title: "Corporate Consulting", path: "/home-2" },
		// 		{ title: "Financial Advisor", path: "/home-3" },
		// 		{ title: "Marketing Consulting", path: "/home-4" }
		// 	]
		// },
				{ title: "Home", path: "/" },

		// {
		// 	title: "Page",
		// 	subMenu: [
		// 		{ title: "Team Member", path: "/team-member" },
		// 		{ title: "Team Details", path: "/team-details" },
		// 		{ title: "Pricing Table", path: "/pricing-table" },
		// 		{ title: "Career", path: "/career" },
		// 		{ title: "Awards", path: "/awards" },
		// 		{ title: "Mission Vision", path: "/mission-vision" },
		// 		{ title: "FAQs", path: "/faqs" },
		// 		{ title: "404", path: "/404" }
		// 	]
		// },
		{
			title: "About Us",
			path: "/about-us",
			subMenu: [
				{ title: "Executive Summary", path: "/about-us#summary" },
				{ title: "Vision & Mission", path: "/about-us#vision-mission" },
				{ title: "Partners Profile", path: "/about-us#partners" }
			]},
		{
			title: "Services",
			path: "/our-services",
			subMenu: [
				{ title: "Accounting and reporting", path: "/our-services/accounting-reporting" },
				{ title: "Data Entry & Audit Support", path: "/our-services/data-entry-audit-support" },
				{ title: "Internal Control over Financial Reporting", path: "/our-services/internal-control-financial-reporting" },
				{ title: "ERP Functional Support", path: "/our-services/erp-functional-support" },
				{ title: "HR & Payroll", path: "/our-services/hr-payroll-services" }
				// { title: "Service Details", path: "/" }
			]
		},
		// {
		// 	title: "Case",
		// 	subMenu: [
		// 		{ title: "Case Study 01", path: "/case-study-01" },
		// 		{ title: "Case Study 02", path: "/case-study-02" },
		// 		{ title: "Case Details", path: "/case-details" }
		// 	]
		// },
		{ title: "Benefits of Outsourcing", path: "/benefits-outsourcing" },
		{
			title: "Why Choose Us",
			path: "/why-choose-us",
			subMenu: [
				{ title: "Why we are Uniquely Positioned", path: "/why-choose-us#unique" },
				{ title: "Service Methodology", path: "/why-choose-us#methodology" },
				{ title: "Tools & Technology", path: "/why-choose-us#technology" },
				{ title: "Confidentiality and Security", path: "/why-choose-us#security" }
			]
		},
		{ title: "Blogs", path: "/blogs" },
		{ title: "Contact", path: "/contact" }
	]

	return (
		<ul id="menu-mobile-menu" className="menu">
			{menuItems.map((item, index) => {
				const parentActiveClass = isParentActive(item.subMenu?.map(i => i.path) || [])
				const isSubmenuActive = item.subMenu?.some((sub) => isActive(sub.path) === "current")
				const isOpen = activeAccordion === index || isSubmenuActive

				return (
					<li key={index} className={`menu-item menu-item-has-children-mobile  ${item.subMenu ? "menu-item-has-children-mobile" : ""} ${parentActiveClass}`}>
						<Link className={`item-menu-mobile ${isActive(item.path)}`} href={item.path || "#"} onClick={(e) => {
							if (!item.subMenu) {
								document.body.classList.remove("no-scroll");
								handleMobileMenu();
							} else if (item.path && e.target.tagName === 'A') {
								document.body.classList.remove("no-scroll");
								handleMobileMenu();
							}
						}}>
							{item.title}
							{item.subMenu && (
								<i className={`icon-chevron-down ${isOpen ? "open" : ""}`} onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									toggleAccordion(index);
								}} />
							)}
						</Link>
						{item.subMenu && (
							<ul className="sub-menu-mobile" style={{ display: isOpen ? "block" : "none" }}>
								{item.subMenu.map((sub, subIndex) => (
									<li key={subIndex} className={`menu-item ${isActive(sub.path)}`}>
										<Link href={sub.path} onClick={() => {
											document.body.classList.remove("no-scroll");
											handleMobileMenu();
										}}>{sub.title}</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				)
			})}
		</ul>
	)
}
