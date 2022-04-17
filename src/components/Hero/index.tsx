import './styles.scss';

interface HeroProps {
  heading: string;
  description: string;
  image: string;
}

export function Hero({ heading, description, image }: HeroProps) {
  return (
    <section className="hero" style={{backgroundImage: `url(${image})`}}>
      <div className="o-container">
        <h1>{heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </section>
  );
}
