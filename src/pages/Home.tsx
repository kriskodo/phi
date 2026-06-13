import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrap from '../components/PageWrap';
import Reveal from '../components/Reveal';
import GoldenSpiral from '../components/GoldenSpiral';
import GlassIcon from '../components/GlassIcon';
import FlavorIcon from '../components/FlavorIcon';
import { courses, toBgn } from '../data/menu';
import { site } from '../data/site';
import './Home.css';

const heroWords = ['Balance,', 'poured', 'by', 'the', 'glass.'];

const pillars = [
  {
    title: 'Proportion',
    body: 'Every drink is built by weight, not by guess — each measure set against the last until it sits in balance.',
  },
  {
    title: 'Composition',
    body: 'A cocktail list that reads like a small gallery. Flavours layered the way a painter layers colour.',
  },
  {
    title: 'Place',
    body: 'A low-lit room on Tsar Shishman, where the city slows down and the evening finds its rhythm.',
  },
];

export default function Home() {
  const featured = courses[0].drinks.slice(0, 3);

  return (
    <PageWrap>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__grid container">
          <div className="hero__copy">
            <motion.span
              className="eyebrow hero__eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Cocktail Bar · {site.city}
            </motion.span>

            <h1 className="display hero__title">
              {heroWords.map((w, i) => (
                <span className="hero__word-wrap" key={i}>
                  <motion.span
                    className="hero__word"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 + i * 0.09, duration: 0.9, ease: [0.2, 0.85, 0.2, 1] }}
                  >
                    {w === 'poured' ? <em className="gold-text">poured</em> : w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="lead hero__lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Phi is the golden ratio — 1.618, the proportion nature returns to when it
              wants to feel right. We pour by it. Innovative cocktails meet contemporary
              art in one quiet room in Sofia.
            </motion.p>

            {/* The golden section, made literal: a line cut at 1 : 1.618 */}
            <motion.div
              className="phi-bar"
              aria-hidden="true"
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="phi-bar__seg phi-bar__seg--a"><i>1</i></span>
              <span className="phi-bar__node" />
              <span className="phi-bar__seg phi-bar__seg--b"><i>1.618</i></span>
            </motion.div>

            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.12, duration: 0.7 }}
            >
              <Link to="/menu" className="btn btn-gold">
                View the menu <span className="arrow">→</span>
              </Link>
              <Link to="/visit" className="hero__textlink">
                or plan a visit <span className="arrow">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hero__spiral"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
          >
            <div className="hero__phi-glow">φ</div>
            <GoldenSpiral className="hero__spiral-svg" />
          </motion.div>
        </div>

        {/* φ ticker */}
        <div className="ticker" aria-hidden="true">
          <motion.div
            className="ticker__track"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 2 }).map((_, k) => (
              <span className="ticker__group" key={k}>
                <span>φ = 1.61803398874989</span>
                <span className="ticker__dot">✦</span>
                <span>Innovative cocktails</span>
                <span className="ticker__dot">✦</span>
                <span>Contemporary art</span>
                <span className="ticker__dot">✦</span>
                <span>Tsar Shishman · Sofia</span>
                <span className="ticker__dot">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">The idea</span>
            <h2 className="display sect__title">
              Three measures, one ratio.
            </h2>
          </Reveal>
          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal as="div" className="pillar glass" key={p.title} delay={i * 0.12}>
                <span className="pillar__mark" aria-hidden="true" />
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured cocktails ─────────────────────────────── */}
      <section className="section featured">
        <div className="container">
          <div className="sect__head">
            <Reveal>
              <span className="eyebrow">From the φ series</span>
              <h2 className="display sect__title">Pours we're known for.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/menu" className="sect__link">
                The full list <span className="arrow">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="featured__grid">
            {featured.map((d, i) => (
              <Reveal as="div" className="fcard glass" key={d.name} delay={i * 0.1}>
                <div className="fcard__top">
                  <span className="fcard__glass"><GlassIcon type={d.glass} size={40} /></span>
                  <span className="fcard__price">{d.eur} EUR <small>/ {toBgn(d.eur)} BGN</small></span>
                </div>
                <h3 className="fcard__name">{d.name}</h3>
                <p className="fcard__comp">{d.ingredients}</p>
                <div className="fcard__flavors">
                  {d.flavors.map((f) => (
                    <span key={f} className="fcard__flavor"><FlavorIcon flavor={f} size={20} /></span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Atmosphere band ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="atmos glass">
            <div className="atmos__text">
              <span className="eyebrow">Inside Phi</span>
              <h2 className="display atmos__title">
                A room composed like a canvas.
              </h2>
              <p className="lead">
                Brass, low amber light and rotating works from Sofia artists. Sit at the
                bar and watch the build, or fold into a corner and let the night arrange
                itself around you.
              </p>
              <Link to="/about" className="btn btn-ghost">Our story</Link>
            </div>
            <div className="atmos__art" aria-hidden="true">
              <span className="atmos__big">1.618</span>
              <div className="atmos__bars">
                {[38, 62, 100, 62, 38, 23].map((h, i) => (
                  <motion.span
                    key={i}
                    style={{ height: `${h}%` }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="cta glass">
            <h2 className="display cta__title">
              The menu lives on your <span className="gold-text">table.</span>
            </h2>
            <p className="lead cta__lead">
              Scan the φ at your table, or open the list right here.
            </p>
            <Link to="/menu" className="btn btn-gold">
              Open the menu <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </PageWrap>
  );
}
