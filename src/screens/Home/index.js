import React from 'react';
import Farmers from './components/Farmers';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Farmers header={Header} />
    </>
  );
}
