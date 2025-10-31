
import Layout from "@/components/layout/Layout"
import Career from "@/components/pages/career"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Careers - Globirix | Join Our Global Outsourcing Team",
  description: "Explore exciting career opportunities at Globirix. Join our team of professionals in accounting, HR, payroll, ERP, and business process outsourcing.",
  keywords: "careers at globirix, job opportunities, accounting jobs, HR careers, payroll jobs, ERP careers, outsourcing jobs, remote work opportunities",
  ogUrl: "https://globirix.com/careers"
})

export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Career">
				<Career />
			</Layout>
		</>
	)
}