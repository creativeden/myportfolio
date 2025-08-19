import Image from 'next/image'

const Loading = () => {
    return (
        <div>
            <figure style={{ textAlign: 'center' }}>
                {/* <Image src="/Spinner.gif" alt="Spinner" width={64} height={64} /> */}
                <figcaption>Loading...</figcaption>
            </figure>
        </div>
    )
}
  
export default Loading