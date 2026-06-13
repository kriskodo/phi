import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrap from '../components/PageWrap';
import Reveal from '../components/Reveal';
import './About.css';

const figures = [
  { n: '1.618', l: 'the ratio we pour by' },
  { n: '40+', l: 'cocktails in rotation' },
  { n: '∞', l: 'ways to ask off-menu' },
];

const steps = [
  {
    k: 'Weigh',
    t: 'We build by the gram',
    b: 'Bartending by eye is a habit; we replaced it with a scale. Each spec is set in proportion, then tasted, then set again.',
  },
  {
    k: 'Compose',
    t: 'Flavour as colour',
    b: 'Sweet, sour, bitter and aromatic are our primaries. We layer them the way the artists on our walls layer paint.',
  },
  {
    k: 'Pour',
    t: 'The room does the rest',
    b: 'Low light, brass, a slow record. We serve the drink and then get out of the way of your evening.',
  },
];

export default function About() {
  return (
    <PageWrap>
      <section className="about-hero section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About</span>
            <h1 className="display about-hero__title">
              The golden ratio, <span className="gold-text">in a glass.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lead about-hero__lead">
              Phi — φ — is the proportion the world keeps returning to: in shells, in
              petals, in the way a face reads as beautiful. We took it as a discipline.
              A cocktail bar on Tsar Shishman where balance isn't a mood, it's a method.
            </p>
          </Reveal>

          <div className="figures">
            {figures.map((f, i) => (
              <Reveal as="div" className="figure" key={f.l} delay={0.1 + i * 0.1}>
                <span className="figure__n display gold-text">{f.n}</span>
                <span className="figure__l">{f.l}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-split">
            <Reveal as="div" className="about-split__sticky">
              <span className="eyebrow">How a Phi drink is made</span>
              <h2 className="display about-split__title">Method, not magic.</h2>
              <p className="lead">
                Three moves, repeated until it's right. It's the whole philosophy of the
                bar, compressed into how a single cocktail comes together.
              </p>
            </Reveal>

            <div className="steps">
              {steps.map((s, i) => (
                <Reveal as="div" className="step glass" key={s.k} delay={i * 0.1}>
                  <span className="step__k">{s.k}</span>
                  <h3 className="step__t">{s.t}</h3>
                  <p className="step__b">{s.b}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="art-band glass">
            <motion.div
              className="art-band__spiral"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              φ
            </motion.div>
            <div className="art-band__text">
              <span className="eyebrow">Walls included</span>
              <h2 className="display art-band__title">
                A rotating gallery you can drink in.
              </h2>
              <p className="lead">
                We give the walls to Sofia's artists and change the show often. Come for
                the cocktail, leave having found a painting. Ask the bar who made what.
              </p>
              <Link to="/visit" className="btn btn-gold">
                Come see it <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrap>
  );
}
