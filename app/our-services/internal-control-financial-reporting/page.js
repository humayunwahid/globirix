import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
import InternalControlFinancialReporting from "@/components/pages/serviceDetails/internal-control-financial-reporting"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Internal Control & Financial Reporting - Globirix | Risk Management Solutions",
  description: "Comprehensive internal control and financial reporting services including risk assessment, control design, SOX compliance, and financial reporting frameworks.",
  keywords: "internal controls, financial reporting, risk management, SOX compliance, control design, risk assessment, financial frameworks, compliance management",
  ogUrl: "https://globirix.com/our-services/internal-control-financial-reporting"
})

export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={2} serviceName="Internal Control over Financial Reporting">
                <InternalControlFinancialReporting />
            </Layout>
        </>
    )
}