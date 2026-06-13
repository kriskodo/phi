import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import PageWrap from '../components/PageWrap';
import Reveal from '../components/Reveal';
import { site, menuUrl } from '../data/site';
import './Visit.css';

export default function Visit() {
  const [url, setUrl] = useState('');
  useEffect(() => setUrl(menuUrl()), []);

  return (
    <PageWrap>
      <section className="visit-hero section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Visit</span>
            <h1 className="display visit-hero__title">
              Find us on <span className="gold-text">Shishman.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lead visit-hero__lead">
              No bookings needed for two. For a group, send a note and we'll hold a
              corner. Walk in and the evening takes it from there.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section visit-grid-sect">
        <div className="container visit-grid">
          {/* QR — the headline of this page */}
          <Reveal as="div" className="qr glass">
            <div className="qr__panel">
              {url && (
                <QRCodeSVG
                  value={url}
                  size={196}
                  bgColor="#f4efe6"
                  fgColor="#0a0a0e"
                  level="M"
                  marginSize={2}
                />
              )}
              <span className="qr__phi">φ</span>
            </div>
            <div className="qr__text">
              <span className="eyebrow">Scan for the menu</span>
              <h2 className="qr__title display">It's on your table, too.</h2>
              <p>
                Every table carries this φ. Point a camera at it and the full list opens
                instantly — the same one you can browse right here.
              </p>
              <Link to="/menu" className="btn btn-ghost">Open the menu instead</Link>
            </div>
          </Reveal>

          {/* Hours */}
          <Reveal as="div" className="hours glass" delay={0.1}>
            <span className="eyebrow">Hours</span>
            <ul className="hours__list">
              {site.hours.map((h) => (
                <li key={h.days} className={h.time === 'Closed' ? 'is-closed' : ''}>
                  <span>{h.days}</span>
                  <span className="hours__dots" aria-hidden="true" />
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Where / contact */}
          <Reveal as="div" className="where glass" delay={0.16}>
            <span className="eyebrow">Where</span>
            <p className="where__addr display">
              {site.address}
              <br />
              {site.city}, Bulgaria
            </p>
            <div className="where__links">
              <a href={`mailto:${site.email}`} className="where__link">{site.email}</a>
              {site.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="where__link">
                  {s.label} · {s.handle}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="map glass">
            <iframe
              title="Phi on the map — Tsar Shishman, Sofia"
              src="https://www.google.com/maps?q=Tsar%20Shishman%2024,%20Sofia,%20Bulgaria&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </PageWrap>
  );
}
