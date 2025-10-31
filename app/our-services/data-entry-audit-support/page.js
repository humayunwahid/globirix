import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
import DataEntryAuditSupport from "@/components/pages/serviceDetails/data-entry-audit-support"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Data Entry & Audit Support Services - Globirix | Accurate Data Management",
  description: "Professional data entry and audit support services including data processing, verification, audit assistance, compliance support, and quality assurance solutions.",
  keywords: "data entry services, audit support, data processing, data verification, audit assistance, compliance support, quality assurance, data management outsourcing",
  ogUrl: "https://globirix.com/our-services/data-entry-audit-support"
})

export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={2} serviceName="Data Entry & Audit Support">
                <DataEntryAuditSupport />
            </Layout>
        </>
    )
}