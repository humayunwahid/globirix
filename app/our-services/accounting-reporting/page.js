
import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
import AccountingReporting from "@/components/pages/serviceDetails/accounting-reporting"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={2} serviceName="Accounting & Reporting">
                <AccountingReporting />
            </Layout>
        </>
    )
}