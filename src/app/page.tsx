import Link from "next/link"


export default function Home() {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href='/products'>Products</Link>
            <Link href="/blog">Blog</Link>
            <h1>Welcome home</h1>
        </>
    )
}