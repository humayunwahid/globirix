
import Layout from "@/components/layout/Layout"
import Contact from "@/components/pages/contact"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Contact Us - Globirix | Get in Touch for Business Outsourcing Solutions",
  description: "Contact Globirix for professional business outsourcing solutions. Reach out to our expert team for accounting, HR, payroll, ERP, and data entry services.",
  keywords: "contact globirix, business outsourcing contact, get quote, outsourcing consultation, accounting services contact, HR outsourcing inquiry",
  ogUrl: "https://globirix.com/contact"
})

export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle=" Contact Us" mainCls="padding-0">
				<Contact />
			</Layout>
		</>
	)
}