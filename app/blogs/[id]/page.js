import Layout from "@/components/layout/Layout"
import BlogDetails from "@/components/pages/blogDetails"
export default function Blogs() {

    return (
        <>
            <Layout breadcrumbAlt={1}>
                <BlogDetails />
            </Layout>
        </>
    )
}