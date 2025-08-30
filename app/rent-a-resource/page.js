
import Layout from "@/components/layout/Layout"
import RegistrationForm from "@/components/resuable/registerationForm"
import RentAccountantForm from "@/components/resuable/rentAccountantForm"
export default function Home() {

    return (
        <>
            <Layout breadcrumbTitle="Rent A Resource"  mainCls="tf-spacing-10">
                <RentAccountantForm/>
                <RegistrationForm/>
            </Layout>
        </>
    )
}

