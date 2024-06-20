import PostCard from '@/components/postCard/postCard'
import styles from './portfolio.module.css'

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/', {next:{revalidate:3600}})
    // https://db37a77371102129.mokky.dev/portfolio

    if(!res.ok) {
        throw new Error('Something went wrong')
    }

    return res.json()
}

const PortfolioPage = async () => {

    const posts = await getData()

    return (
        <div className={styles.container}>
            {posts.map(post=>(
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    )
}

export default PortfolioPage