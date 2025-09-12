import Section1 from "./section1"

export default function BlogDetails({ blogData }) {
	if (!blogData) {
		return (
			<div className="tf-container">
				<div className="text-center py-5">
					<h3>Blog post not found</h3>
				</div>
			</div>
		)
	}

	return (
		<>
			<Section1 blogData={blogData} />
		</>
	)
}