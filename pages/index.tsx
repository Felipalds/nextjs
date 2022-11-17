import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home({repositories}) {
    return(
      <div>
        <h1>Hello world</h1>
        <ul>
          {repositories.map((repo) => <li key={repo}>{repo}</li>)}
        </ul>
      </div>

    )
}

export const getServerSideProps : GetServerSideProps = async() => {
  const response = await fetch('https://api.github.com/users/felipalds/repos')
  const data = await response.json()
  const repositoryNames = data.map((item : any) => item.name)

  return {
    props: {
      repositories: repositoryNames
    }
  }
}
