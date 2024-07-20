'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main>
      <h1>Star Wars Heroes</h1>
      <Link href="/heroes">To Heroes</Link>
    </main>
  );
};

export default HomePage;
