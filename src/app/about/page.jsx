import Image from 'next/image'
import styles from './about.module.css'

export const metadata = {
    title: 'byDep | About Us – Innovative Web Design & Development',
    description: 'Discover our creative web studio. We craft bold websites, landing pages, and digital experiences that inspire, engage, and grow your business.',
}

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.subtitle}>About Us</h1>
                <h2 className={styles.title}>We’re a creative studio that turns ideas into bold, beautiful websites.</h2>
                <p className={styles.description}>We love fresh design, smooth interfaces, and everything digital. Our mission is simple: to create projects that inspire, engage, and help your business grow.</p>
                <div className={styles.boxes}>
                    <div className={styles.boxitem}>
                        <h5>15+</h5>
                        <p>Year of expirience</p>
                    </div>
                    <div className={styles.boxitem}>
                        <h5>45K+</h5>
                        <p>People reached</p>
                    </div>
                    <div className={styles.boxitem}>
                        <h5>5K+</h5>
                        <p>Services & plugins</p>
                    </div>
                </div>
                <h3 className={styles.title}>What drives us</h3>
                <ul className={styles.list}>
                    <li>Creativity — we look for unique solutions that make brands stand out.</li>
                    <li>Technology — always using the best and latest from the web.</li>
                    <li>Emotions — every project should spark a real “wow-effect.”</li>
                    <li>Collaboration — we believe in easy communication and genuine teamwork with our clients.</li>
                </ul>
                <h3 className={styles.title}>What we do</h3>
                <ul className={styles.list}>
                    <li>Landing pages that impress from the very first scroll</li>
                    <li>Websites where design meets logic</li>
                    <li>E-commerce platforms with stylish, user-friendly interfaces</li>
                    <li>Branding, identity, and ongoing support</li>
                </ul>
                <h3 className={styles.title}>Our philosophy</h3>
                <p className={styles.description}>We don’t just build websites — we craft digital stories that make brands shine. With us, your project won’t just exist online, it will stand out and be loved by your audience.</p>
            </div>
            {/* <div className={styles.imageContainer}>
                <Image src="/about.png" alt="" fill className={styles.aboutImg} />
            </div> */}
        </div>
    )
}

export default AboutPage