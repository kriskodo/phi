import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageWrap from '../components/PageWrap';
import Reveal from '../components/Reveal';
import GoldenSpiral from '../components/GoldenSpiral';
import FlavorIcon from '../components/FlavorIcon';
import GlassIcon from '../components/GlassIcon';
import { courses, spirits, toBgn, menuKicker, flavorLabels } from '../data/menu';
import './Menu.css';

function Price({ eur }: { eur: number }) {
  return (
    <p className="drink__price">
      {eur % 1 === 0 ? eur : eur.toFixed(1)} EUR <span>/ {toBgn(eur)} BGN</span>
    </p>
  );
}

export default function Menu() {
  const [openSpirit, setOpenSpirit] = useState<string | null>(null);

  return (
    <PageWrap>
      {/* ── Header ─────────────────────────────────────────── */}
      <section className="menu-head section">
        <div className="container menu-head__inner">
          <Reveal>
            <h1 className="display menu-head__title">Our Menu</h1>
            <span className="menu-head__kicker">{menuKicker}</span>
          </Reveal>
          <motion.div
            className="menu-head__spiral"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.1, ease: 'easeOut' }}
          >
            <GoldenSpiral className="menu-head__spiral-svg" />
          </motion.div>
          <Reveal delay={0.1} as="div" className="menu-head__label">
            <span className="rule" /> Cocktails <span className="rule" />
          </Reveal>
        </div>
      </section>

      {/* sticky jump-nav */}
      <nav className="menu-nav" aria-label="Menu sections">
        <div className="container menu-nav__inner">
          {courses.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="menu-nav__chip">{c.name}</a>
          ))}
          <a href="#spirits" className="menu-nav__chip">Spirits</a>
        </div>
      </nav>

      {/* ── Courses ────────────────────────────────────────── */}
      {courses.map((course) => (
        <section className="course section" id={course.id} key={course.id}>
          <div className="container">
            <Reveal as="div" className="course__head">
              <h2 className="display course__name">{course.name}</h2>
              <span className="course__rule" />
              <p className="course__intro">{course.intro}</p>
            </Reveal>

            <ul className="drinks">
              {course.drinks.map((d, i) => (
                <Reveal as="li" className="drink" key={d.name} delay={i * 0.05}>
                  <div className="drink__glass"><GlassIcon type={d.glass} /></div>
                  <div className="drink__body">
                    <h3 className="drink__name">
                      {d.name}
                      {!d.real && <span className="drink__tba" title="Placeholder — share the real pour">tbc</span>}
                    </h3>
                    <p className="drink__ings">{d.ingredients}</p>
                    <div className="flavors">
                      {d.flavors.map((f) => (
                        <span className="flavor" key={f}>
                          <FlavorIcon flavor={f} size={26} />
                          <small>{flavorLabels[f]}</small>
                        </span>
                      ))}
                    </div>
                    <Price eur={d.eur} />
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* ── Spirits ────────────────────────────────────────── */}
      <section className="course section" id="spirits">
        <div className="container">
          <Reveal as="div" className="course__head">
            <h2 className="display course__name">Spirits</h2>
            <span className="course__rule" />
            <p className="course__intro">By the 50ml pour. Tap a category to expand.</p>
          </Reveal>

          <ul className="spirits">
            {spirits.map((s) => {
              const open = openSpirit === s.name;
              return (
                <li className="spirit" key={s.name}>
                  <button
                    className="spirit__row"
                    aria-expanded={open}
                    onClick={() => setOpenSpirit(open ? null : s.name)}
                  >
                    <span className="spirit__name">{s.name} <em>({s.note})</em></span>
                    <span className={`spirit__chev ${open ? 'is-open' : ''}`} aria-hidden="true">⌄</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        className="spirit__panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                      >
                        <p>
                          A rotating selection of {s.name.toLowerCase()} from{' '}
                          {s.fromEur} EUR / {toBgn(s.fromEur)} BGN. Ask the bar for the
                          current bottles — the full list lives behind the counter.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section menu-foot">
        <div className="container">
          <Reveal as="div" className="menu-foot__card glass">
            <motion.span
              className="menu-foot__phi"
              animate={{ rotate: [0, 4, 0, -4, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
              φ
            </motion.span>
            <p className="lead">
              Everything is made to order. Allergies or preferences? Tell us — we'll
              compose around them.
            </p>
          </Reveal>
        </div>
      </section>
    </PageWrap>
  );
}
