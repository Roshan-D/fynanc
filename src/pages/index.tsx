import * as React from 'react';
import Button from '@mui/material/Button';
import Head from 'next/head';
import NavBar from './NavBar';

export default function MyApp() {
  return (
    <>
    <Head>
      <title>fynanc</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>

    <div>
      <NavBar/>
    </div>
    </>
  );
}