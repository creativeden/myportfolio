import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {post.img && <div className={styles.imgContainer}>
                    <Image src={post.img} alt='' fill className={styles.postImg} />
                </div>}
                <div className={styles.date}>{post.createdAt.toString().slice(0, 10)}</div>
            </div>
            <div className={styles.bottom}>
                <h5 className={styles.title}>{post.title}</h5>
                <p className={styles.description}>{post.description}</p>
                <Link className={styles.link} href={`/portfolio/${post.slug}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard