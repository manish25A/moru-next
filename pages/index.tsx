import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Users</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to  <span >application</span>
        </h1>
        <div className={styles.grid}>
          <a href="/users/user-list" className={styles.card}>
            <h2>User List &rarr;</h2>
            <p>See users</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
