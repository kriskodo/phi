import { motion } from 'framer-motion';
import PageWrap from '../components/PageWrap';
import Reveal from '../components/Reveal';
import { menu, abvLegend } from '../data/menu';
import './Menu.css';

export default function Menu() {
  return (
    <PageWrap>
      <section className="menu-head section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">φ · The list</span>
            <h1 className="display menu-head__title">The Menu</h1>
            <p className="lead menu-head__lead">
              Composed in golden proportion. Prices in лв. Ask the bar for anything
              off-list — most of what we love to make never makes the page.
            </p>
          </Reveal>

          <Reveal delay={0.15} as="div" className="legend">
            {Object.values(abvLegend).map((l) => (
              <span className="legend__item" key={l.label}>
                <span className="legend__dot" style={{ background: l.color }} />
                {l.label}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* sticky section jump-nav */}
      <nav className="menu-nav" aria-label="Menu sections">
        <div className="container menu-nav__inner">
          {menu.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="menu-nav__chip">
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      {menu.map((section) => (
        <section className="menu-sect section" id={section.id} key={section.id}>
          <div className="container">
            <div className="menu-sect__head">
              <Reveal>
                <span className="eyebrow">{section.kicker}</span>
                <h2 className="display menu-sect__title">{section.title}</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="menu-sect__blurb">{section.blurb}</p>
              </Reveal>
            </div>

            <ul className="drinks">
              {section.drinks.map((d, i) => (
                <Reveal as="li" className="drink glass" key={d.name} delay={i * 0.06}>
                  <div className="drink__main">
                    <div className="drink__nameline">
                      {d.abv && (
                        <span
                          className="drink__dot"
                          style={{ background: abvLegend[d.abv].color }}
                          title={abvLegend[d.abv].label}
                        />
                      )}
                      <h3 className="drink__name">{d.name}</h3>
                    </div>
                    <p className="drink__comp">{d.composition}</p>
                    {d.note && <p className="drink__note">{d.note}</p>}
                  </div>
                  <div className="drink__price">
                    <span>{d.price}</span>
                    <small>лв</small>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}

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
