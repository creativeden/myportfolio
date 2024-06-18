import Image from 'next/image'
import styles from './singlePortfolio.module.css'

const SinglePortfolioPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/post.jpg" alt='' fill className={styles.postImg} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image src="/noavatar.png" alt='' width={50} height={50} className={styles.avatar} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Autor</span>
                        <span className={styles.detailValue}>Tery Jefman</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo accusantium mollitia provident totam quia iusto! Odit deleniti vero, consequatur veritatis iusto harum labore quas beatae libero. Iure, odio velit.
                </div>
            </div>
        </div>
    )
}

export default SinglePortfolioPage