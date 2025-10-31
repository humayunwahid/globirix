import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
import ERPFunctionalSupport from "@/components/pages/serviceDetails/erp-functional-support"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "ERP Functional Support Services - Globirix | Enterprise Resource Planning Solutions",
  description: "Expert ERP functional support services including system implementation, configuration, user training, maintenance, and optimization for various ERP platforms.",
  keywords: "ERP support, enterprise resource planning, ERP implementation, ERP configuration, system optimization, ERP training, functional support, ERP maintenance",
  ogUrl: "https://globirix.com/our-services/erp-functional-support"
})

export default function Home() {

    return (
        <>
            <Layout breadcrumbAlt={2} serviceName="ERP Functional Support">
                <ERPFunctionalSupport />
            </Layout>
        </>
    )
}