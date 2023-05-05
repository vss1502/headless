import { getPostSlugs } from "@/lib/queries/get-posts-slugs";
import { getSinglePost } from "@/lib/queries/get-single-post";
import client from "@/lib/apollo/client";
import Head from "next/head";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FeaturedImage from "@/components/FeaturedImage";
import Date from "@/components/Date";


export async function getStaticProps({params}) {

    console.log(params);
    
    const {data} = await client.query({
        query: getSinglePost,
        variables: {
            slug: params.postSlug
          }
      });

    const postData = data.post;

    let featureImageUrl = "http://headless/wp-content/uploads/2023/04/images.png"

    if(postData.featuredImage && postData.featuredImage.node.mediaDetails.sizes[1].sourceUrl) {
        featureImageUrl = postData.featuredImage.node.mediaDetails.sizes[1].sourceUrl;
    }

    return {
        props: {
            postData,
            featuredImageUrl: "url(" + featureImageUrl + ")"
        }
    }
}

export async function getStaticPaths() {
    
    const {data} = await client.query({
        query: getPostSlugs
    });

    const postSlugs = data.posts.nodes;

    return {
        paths: postSlugs.map((s) => (
            {
                params: { 
                    postSlug: s.slug
                }
            }
        )),
        fallback: false
    }
}

export default function Post({postData, featuredImageUrl}) {
    return (
        <>
            <Head>
                <title key={postData.slug}>{postData.title}</title>
                <meta name="description" content={postData.excerpt} key="metadescription"></meta>
            </Head>
            
            <SiteHeader />
            
            <article>
                <section>
                    <div>
                        <h1>
                            {postData.title}
                        </h1>
                        <div>
                            Posted by onPoint, last updated on 
                            <Date dateString={postData.modified} />
                        </div>
                        <div dangerouslySetInnerHTML={{__html: postData.excerpt}}></div>
                    </div>
                </section>
                <section >
                    <div dangerouslySetInnerHTML={{__html: postData.content}}></div>
                </section>
            </article>
            <SiteFooter />
        </>
    )
}