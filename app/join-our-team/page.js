
import Layout from "@/components/layout/Layout"
import RegistrationForm from "@/components/resuable/registerationForm"
import RentAccountantForm from "@/components/resuable/rentAccountantForm"
import ToggleForms from "@/components/resuable/toggleForms"
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

