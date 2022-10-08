import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/download.png"
          alt=""
          width={300}
          height={300}
        />
      </div>
      <h1></h1>
      <p></p>
    </section>
  );
};

export default Hero;
