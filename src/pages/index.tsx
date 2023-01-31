import * as React from 'react';
import Button from '@mui/material/Button';
import Head from 'next/head';
import NavBar from './NavBar';
import NestedGrid from './NestedGrid';
import { Grid } from '@mui/material';

export default function MyApp() {
  return (
    <>
    <Head>
      <title>fynanc</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Grid container spacing={2}>
      <Grid lg={3}>
        <NavBar/>
      </Grid>
      <Grid lg={9}>
        <NestedGrid/>
      </Grid>
    </Grid>
    </>
  );
}