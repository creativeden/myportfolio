import Image from 'next/image'
import styles from './contact.module.css'

export const metadata = {
    title: 'Contact Our Creative Web Studio | Let’s Build Something Great',
    description: 'Get in touch with our web design agency. Email us or send a message — we’re ready to bring your ideas to life and create a website that works.',
}

const ContactPage = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.imageContainer}>
                <Image src="/contact.png" alt="" fill className={styles.contactImg} />
            </div> */}
            <div className={styles.formContainer}>
                <h1 className={styles.subtitle}>Contact Us</h1>
                <p className={styles.description}>We’re always open to new ideas, collaborations, and conversations.</p>
                <p className={styles.description}><strong>Email:</strong> <a href="mailto:ok@bydep.com">ok@bydep.com</a></p>
            </div>
        </div>
    )
}

export default ContactPage