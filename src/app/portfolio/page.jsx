import PostCard from '@/components/postCard/postCard'
import styles from './portfolio.module.css'
import { getPosts } from '@/lib/data'

//FETCH DATA WITH AN API
const getData = async () => {
    const res = await fetch('http://localhost:3000/api/portfolio/', {next:{revalidate:0}})
    //3600

    if(!res.ok) {
        throw new Error('Something went wrong')
    }

    return res.json()
}

const PortfolioPage = async () => {
    //FETCH DATA WITH AN API
    const posts = await getData()

    //FETCH DATA WITHOUT AN API
    // const posts = await getPosts()

    return (
        <div className={styles.container}>
            {posts.map(post=>(
                <div className={styles.post} key={post._id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    )
}

export default PortfolioPage