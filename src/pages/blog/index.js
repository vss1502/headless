import Head from "next/head";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FeaturedImage from "@/components/FeaturedImage";
import Date from "@/components/Date";
import client from "@/lib/apollo/client";
import { getAllPosts } from "@/lib/queries/get-posts";

export async function getStaticProps() {
    

    const {data} = await client.query({
        query: getAllPosts
      });

      const allPosts = data.posts;
    
    return {
        props: {
            allPosts: allPosts,
        },
        revalidate: 10,
    }
}



export default function BlogHome({allPosts}) {

    return (
        <>
        <Head>
            <title>Blog</title>
        </Head>
        
        <SiteHeader />
        <h1>BLOG</h1>
            
        <main>
            <section>
            <ul>
                {allPosts.nodes.map((post) => {
                    return (
                        <li key={post.slug} >
                            <div>
                                <FeaturedImage post={post} />
                            </div>
                            <div>
                                <h2 >
                                    <Link href={`/blog/${post.slug}`} >{post.title}</Link>
                                </h2>
                                <div >
                                    Published on <Date dateString={post.date}/>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                                <div >
                                    Posted under {
                                        post.categories.nodes.map((category) => (
                                            <Link href={`/category/${category.slug}`} key={category.slug}>
                                                {category.name}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            </section>
        </main>
        
        <SiteFooter />
        </>
    )
}