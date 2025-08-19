import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Copyright &copy; 2025 byDep co.</div>
            <div className={styles.text}>All rights reserved.</div>
        </div>
    )
}

export default Footer