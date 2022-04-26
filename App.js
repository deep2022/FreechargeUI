import React from 'react';
import Nav from './src/navigation';
import { LoadProvider } from './src/context/LoadingContext';
import ErrorBoundary from './src/components/ErrorBoundary';
const app = () => {
  return(
    <ErrorBoundary>
        <LoadProvider>
        <Nav />
      </LoadProvider>
    </ErrorBoundary>
  )
}
export default app;