import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/post.jpg" alt='' fill className={styles.postImg} />
                </div>
                <div className={styles.date}>01.01.2024</div>
            </div>
            <div className={styles.bottom}>
                <h5 className={styles.title}>{post.title}</h5>
                <p className={styles.description}>{post.body}</p>
                <Link className={styles.link} href={`/portfolio/${post.id}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard