import PostCard from '@/components/postCard/postCard'
import styles from './portfolio.module.css'

const PortfolioPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
        </div>
    )
}

export default PortfolioPage