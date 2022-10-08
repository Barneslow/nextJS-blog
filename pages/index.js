import Head from "next/head";
import FeaturedPosts from "../components/home/FeaturedPosts";
import Hero from "../components/home/Hero";
import { getFeaturedPosts } from "../helpers/posts-utils";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to my Blog</title>
        <meta
          name="description"
          content="I post about my programming journey"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 60,
  };
}

export default HomePage;
