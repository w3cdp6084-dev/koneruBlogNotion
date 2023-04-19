import "../styles/globals.css";
import "../styles/Card.scss";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add('noise');
    gsap.to('html', {
      backgroundPosition: '16px 16px, 0 0',
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;