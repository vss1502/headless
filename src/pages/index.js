import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout/Layout'
import SiteHeader from '@/components/SiteHeader/SiteHeader'
import SiteFooter from '@/components/SiteFooter/SiteFooter'
import Block from '@/components/Block'
import client from "@/lib/apollo/client";
import { getHomePage } from "@/lib/queries/get-home-page";



export async function getStaticProps() {
    

    const {data} = await client.query({
        query: getHomePage
      });

      const HomePage = data.pageBy;
    
    return {
        props: {
            HomePage: HomePage,
        }
    }
}



export default function Home({HomePage}) {

    const blocks = HomePage.blocks;


  return (
      <>
      <Layout>
        <Head>
            <title key="pagetitle">{HomePage?.title}</title>
            <meta name="description" content="page descritpion" key="metadescription" />
        </Head> 
            <main>
                <p>Home page content</p>
                <div>
                    {blocks?blocks.map((block, index) => <Block block={block} key={index}/>):null}
                </div>
            </main>
      </Layout>
      </>
  );
}

