// src/components/Layout.jsx
import React from 'react';
import ProcessSection from './ProcessSection';  // Importing the ProcessSection component

const Layout = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <ProcessSection />  {/* Using ProcessSection here */}
        {/* Other sections */}
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;

