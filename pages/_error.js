import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
    <h1>oopsies, something went wrong</h1>
    <p>Try going <Link href="/"><a>home</a></Link></p>
    </div>
);

export default errorPage;