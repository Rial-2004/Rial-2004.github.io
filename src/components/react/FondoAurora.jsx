import { useEffect, useState } from 'react';
import SoftAurora from './SoftAurora.jsx';

const temaActual = () => document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

export default function FondoAurora() {
  const [tema, setTema] = useState('light');

  useEffect(() => {
    setTema(temaActual());
    const obs = new MutationObserver(() => setTema(temaActual()));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  return (
    <SoftAurora
      color1="#bfe3ff"
      color2="#6fa0ff"
      speed={0.4}
      brightness={tema === 'dark' ? 1 : 0.9}
      lightMode={tema === 'light'}
      opacity={0.55}
      enableMouseInteraction={false}
      clickPulse={false}
    />
  );
}
