
import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
import AccountingReporting from "@/components/pages/serviceDetails/accounting-reporting"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Accounting & Reporting Services - Globirix | Professional Financial Solutions",
  description: "Expert accounting and reporting services including bookkeeping, financial statements, MIS reporting, budgeting, forecasting, and regulatory compliance solutions.",
  keywords: "accounting services, financial reporting, bookkeeping, financial statements, MIS reporting, budgeting, forecasting, regulatory compliance, accounting outsourcing",
  ogUrl: "https://globirix.com/our-services/accounting-reporting"
})

export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={2} serviceName="Accounting & Reporting">
                <AccountingReporting />
            </Layout>
        </>
    )
}