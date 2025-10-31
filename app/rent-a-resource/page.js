
import Layout from "@/components/layout/Layout"
import RegistrationForm from "@/components/resuable/registerationForm"
import RentAccountantForm from "@/components/resuable/rentAccountantForm"
import ToggleForms from "@/components/resuable/toggleForms"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Rent A Resource - Globirix | Hire Dedicated Professionals",
  description: "Rent dedicated accounting, HR, payroll, and ERP professionals from Globirix. Flexible resource hiring solutions for your business needs.",
  keywords: "rent a resource, hire dedicated professionals, accounting staff, HR professionals, payroll experts, ERP specialists, resource outsourcing, staff augmentation",
  ogUrl: "https://globirix.com/rent-a-resource"
})

export default function Home() {

    return (
        <>
            <Layout breadcrumbTitle="Rent A Resource"  mainCls="tf-spacing-10">
                {/* <RentAccountantForm/>
                <RegistrationForm/> */}
                <ToggleForms/>
            </Layout>
        </>
    )
}

