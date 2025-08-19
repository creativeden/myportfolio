import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}> Made with ❤️ byDep Co.</div>
            <div className={styles.text}>Copyright &copy; 2025 byDep. All rights reserved.</div>
        </div>
    )
}

export default Footer