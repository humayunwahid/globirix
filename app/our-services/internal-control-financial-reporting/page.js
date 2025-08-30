import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
import InternalControlFinancialReporting from "@/components/pages/serviceDetails/internal-control-financial-reporting"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={2} serviceName="Internal Control over Financial Reporting">
                <InternalControlFinancialReporting />
            </Layout>
        </>
    )
}