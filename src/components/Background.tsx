import './Background.css';

/**
 * Ambient atmosphere that sits behind every glass surface:
 * slow-drifting colour fields (the "contemporary art" splashes),
 * a fine grain, and a vignette to keep edges grounded.
 */
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__field bg__field--gold" />
      <div className="bg__field bg__field--violet" />
      <div className="bg__field bg__field--teal" />
      <div className="bg__grid" />
      <div className="bg__grain" />
      <div className="bg__vignette" />
    </div>
  );
}
