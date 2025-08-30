import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
import HRPayrollServices from "@/components/pages/serviceDetails/hr-payroll-services"
export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={2} serviceName="HR & Payroll">
                <HRPayrollServices />
            </Layout>
        </>
    )
}