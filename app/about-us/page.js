
import Layout from "@/components/layout/Layout"
import AboutUs from "@/components/pages/aboutUs"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "About Us - Globirix | Professional Business Outsourcing Company",
  description: "Learn about Globirix's mission, vision, and expert team. We provide flexible accounting, HR, payroll, ERP, and business process outsourcing solutions worldwide.",
  keywords: "about globirix, business outsourcing company, accounting services, HR outsourcing, payroll services, ERP support, professional outsourcing team",
  ogUrl: "https://globirix.com/about-us"
})

export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="About Us" mainCls="padding-0">
				<AboutUs />
			</Layout>
		</>
	)
}