import Layout from "@/components/layout/Layout"
import Home1 from "@/components/pages/home1"
import Home2 from "@/components/pages/home2"
import Home3 from "@/components/pages/home3"
export default function Home() {

	return (
		<>
			<Layout headerStyle={1} footerStyle={1} hero={1} mainCls="padding-0">
				<Home3 />
			</Layout>
		</>
	)
}