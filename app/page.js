import Layout from "@/components/layout/Layout"
import Home1 from "@/components/pages/home1"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Globirix - Flexible Outsourcing for Every Business",
  description: "Expert accounting, bookkeeping, payroll, and ERP support services. Flexible outsourcing solutions for businesses worldwide with experienced professionals.",
  keywords: "accounting outsourcing, bookkeeping services, payroll processing, financial reporting, ERP support, audit support, business accounting",
  ogUrl: "https://globirix.com"
})
import Home2 from "@/components/pages/home2"
import Home3 from "@/components/pages/home3"
export default function Home() {

	return (
		<>
			<Layout headerStyle={1} footerStyle={1} hero={1} mainCls="padding-0">
				<Home3 />
			</Layout>
		</>
	)
}