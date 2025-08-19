import Image from 'next/image'
import styles from './home.module.css'

export const metadata = {
    title: 'byDep | Web Design & Development Studio',
    description: 'We are a creative web agency crafting bold websites, digital experiences, and branding that help businesses stand out and grow.',
}

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Creative Thoughts Agency</h1>
                <p className={styles.description}>We turn bold ideas into digital experiences that inspire and engage.</p>
            </div>
            {/* <div className={styles.imageContainer}>
                <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
            </div> */}
        </div>
    )
}

export default Home