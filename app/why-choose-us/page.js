
import Layout from "@/components/layout/Layout"
import WhyChooseUs from "@/components/pages/whyChooseUs"
import { generateMetadata as generateSEOMetadata } from '@/components/elements/SEOHead'

export const metadata = generateSEOMetadata({
  title: "Why Choose Us - Globirix | Leading Business Outsourcing Partner",
  description: "Discover why businesses worldwide choose Globirix for outsourcing. Expert team, proven processes, cost-effective solutions, and 24/7 support for your success.",
  keywords: "why choose globirix, business outsourcing benefits, expert team, proven processes, cost-effective solutions, 24/7 support, reliable outsourcing partner",
  ogUrl: "https://globirix.com/why-choose-us"
})

export default function Home() {

    return (
        <>
            <Layout breadcrumbTitle="Why Choose Us" mainCls="">
                <WhyChooseUs />
            </Layout>
        </>
    )
}

