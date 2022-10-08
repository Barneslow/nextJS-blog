import Image from "next/image";
import Link from "next/link";

import styles from "./PostItem.module.css";

const PostItem = (props) => {
  const { post } = props;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const linkPath = `/posts/${post.slug}`;
  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={post.title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{post.title}</h3>
            <time>{formattedDate}</time>
            <p>{post.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
