import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
import DataEntryAuditSupport from "@/components/pages/serviceDetails/data-entry-audit-support"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={2} serviceName="Data Entry & Audit Support">
                <DataEntryAuditSupport />
            </Layout>
        </>
    )
}