
import Layout from "@/components/layout/Layout"
import OurService from "@/components/pages/ourService"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Our Services - Globirix | Professional Business Outsourcing Solutions",
  description: "Explore Globirix's comprehensive business outsourcing services including accounting, HR, payroll, ERP support, data entry, and audit services for global businesses.",
  keywords: "business outsourcing services, accounting services, HR outsourcing, payroll services, ERP support, data entry services, audit support, financial reporting",
  ogUrl: "https://globirix.com/our-services"
})

export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Our Services" mainCls="tf-spacing-10">
				<OurService />
			</Layout>
		</>
	)
}