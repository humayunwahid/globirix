
import Layout from "@/components/layout/Layout"
import BlogStandard from "@/components/pages/blogStandard"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Blogs - Globirix | Business Outsourcing Insights & Tips",
  description: "Read the latest insights, tips, and trends in business outsourcing, accounting, HR, payroll, and ERP solutions from Globirix experts.",
  keywords: "business outsourcing blog, accounting tips, HR insights, payroll trends, ERP solutions, outsourcing best practices, business process optimization",
  ogUrl: "https://globirix.com/blogs"
})

export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Blogs">
				<BlogStandard />
			</Layout>
		</>
	)
}