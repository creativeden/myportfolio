import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About agency</h2>
                <h1 className={styles.title}>We create digital ideas</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab nisi magnam ipsa dolores laboriosam commodi reiciendis? Ut, asperiores enim possimus est ratione, eius beatae sapiente dolores id vero ullam.</p>
                <div className={styles.boxes}>
                    <div className={styles.boxitem}>
                        <h5>10K+</h5>
                        <p>Year of expirience</p>
                    </div>
                    <div className={styles.boxitem}>
                        <h5>234K+</h5>
                        <p>People reached</p>
                    </div>
                    <div className={styles.boxitem}>
                        <h5>5K+</h5>
                        <p>Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/about.png" alt="" fill className={styles.aboutImg} />
            </div>
        </div>
    )
}

export default AboutPage