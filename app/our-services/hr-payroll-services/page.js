import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
import HRPayrollServices from "@/components/pages/serviceDetails/hr-payroll-services"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "HR & Payroll Services - Globirix | Human Resources Outsourcing Solutions",
  description: "Comprehensive HR and payroll outsourcing services including employee management, payroll processing, benefits administration, and HR compliance solutions.",
  keywords: "HR outsourcing, payroll services, human resources management, employee management, payroll processing, benefits administration, HR compliance, workforce management",
  ogUrl: "https://globirix.com/our-services/hr-payroll-services"
})

export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={2} serviceName="HR & Payroll">
                <HRPayrollServices />
            </Layout>
        </>
    )
}