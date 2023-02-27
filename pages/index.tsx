import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Layout, Space , Typography,flex} from 'antd';


const inter = Inter({ subsets: ['latin'] })

const mainStyle:React.CSSProperties = {
  display:'flex',
  minHeight:'100vh',
  width:'100%',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#023047'
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop Customer Data</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={mainStyle}>

        <Typography.Title style={{color:'#ffb703'}}>Hello Customers</Typography.Title>
       
      </main>
    </>
  )
}
