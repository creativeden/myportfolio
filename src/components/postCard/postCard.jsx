import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/post.jpg" alt='' fill className={styles.postImg} />
                </div>
                <div className={styles.date}>01.01.2024</div>
            </div>
            <div className={styles.bottom}>
                <h5 className={styles.title}>Title</h5>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum earum ratione quas facere veniam voluptatem asperiores a placeat nostrum doloremque vel reiciendis, id similique aspernatur. Dolorem fugit cum quo.</p>
                <Link className={styles.link} href="/portfolio/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard