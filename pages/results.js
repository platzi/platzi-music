import React, { Component } from 'react';
import Link from 'next/link';


function ResultsPage() {
  return (
    <div>
      <h1>Resultados</h1>
      <Link href="/">
        <a>Ir a la home</a>
      </Link>
    </div>
  );
}

export default ResultsPage;
