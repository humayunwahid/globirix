import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
import ERPFunctionalSupport from "@/components/pages/serviceDetails/erp-functional-support"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={2} serviceName="ERP Functional Support">
                <ERPFunctionalSupport />
            </Layout>
        </>
    )
}