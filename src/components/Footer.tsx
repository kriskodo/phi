import { Link } from 'react-router-dom';
import { site } from '../data/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__rule container" />
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__phi">φ</span>
          <p className="footer__tag">{site.tagline}</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Visit</h4>
            <p>{site.address}</p>
            <p>{site.city}, Bulgaria</p>
          </div>
          <div className="footer__col">
            <h4>Reach us</h4>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
          <div className="footer__col">
            <h4>Explore</h4>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/visit">Visit & hours</Link>
          </div>
        </div>
      </div>

      <div className="footer__base container">
        <span>© {new Date().getFullYear()} Phi · Cocktail Bar</span>
        <span className="footer__ratio">designed in golden proportion · φ 1.618</span>
      </div>
    </footer>
  );
}
