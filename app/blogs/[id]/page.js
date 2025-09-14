import Layout from "@/components/layout/Layout"
import BlogDetails from "@/components/pages/blogDetails"

// ✅ Fetch post data by slug
async function fetchPostBySlug(slug) {
  
  const res = await fetch(`https://blogs.globirix.com/api/post.php?slug=${slug}`, {
    cache: "no-store",
  });

  // if (!res.ok) {
  //   throw new Error(`Failed to fetch post: ${res.status}`);
  // }

  const data = await res.json();
  return data?.[0];
}

export default async function Blogs({ params }) {

   const postData = await fetchPostBySlug(params.id);
   const slug = params.id;

  if (!postData) {
    notFound(); // Triggers Next.js 404 page
  }


  return (
    <Layout breadcrumbAlt={1} blogTitle={postData.title}>
      {postData ? (
        <BlogDetails blogData={postData} />
     
      ) : (
        <p className="text-center py-10">Blog not found.</p>
      )}
    </Layout>
  )
}
