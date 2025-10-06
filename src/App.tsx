import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Footer from './components/Footer'

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'))
const WorkSection = lazy(() => import('./components/WorkSection'))
const VideoSlider = lazy(() => import('./components/VideoSlider'))
const WorkMarquee = lazy(() => import('./components/WorkMarquee'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Expertise = lazy(() => import('./components/Expertise'))
const Awards = lazy(() => import('./components/Awards'))
const TrustedBrands = lazy(() => import('./components/TrustedBrands'))

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
)

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <ErrorBoundary>
                    <Hero />
                    <WorkSection />
                    <VideoSlider />
                    <WorkMarquee />
                    <Portfolio />
                    <Expertise />
                    <Awards />
                    <TrustedBrands />
                  </ErrorBoundary>
                </Suspense>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
