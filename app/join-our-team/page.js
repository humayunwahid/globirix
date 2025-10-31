
import Layout from "@/components/layout/Layout"
import RegistrationForm from "@/components/resuable/registerationForm"
import RentAccountantForm from "@/components/resuable/rentAccountantForm"
import ToggleForms from "@/components/resuable/toggleForms"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Join Our Team - Globirix | Career Opportunities in Business Outsourcing",
  description: "Join the Globirix team and build your career in business outsourcing. Explore opportunities in accounting, HR, payroll, ERP, and data entry services.",
  keywords: "join globirix team, career opportunities, accounting jobs, HR careers, payroll jobs, ERP careers, business outsourcing careers, remote work",
  ogUrl: "https://globirix.com/join-our-team"
})

export default function Home() {

    return (
        <>
            <Layout breadcrumbTitle="Join Our Team"  mainCls="tf-spacing-10">
                {/* <RentAccountantForm/>
                <RegistrationForm/> */}
                <ToggleForms/>
            </Layout>
        </>
    )
}

