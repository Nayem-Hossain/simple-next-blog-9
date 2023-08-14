import Link from 'next/link'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <h1>Welcome & Explore insightful articles on various topics.</h1>
        <div>
          <Link href="/blogs">
            <p className="link link-success">see blogs</p>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
