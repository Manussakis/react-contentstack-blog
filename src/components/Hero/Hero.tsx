interface HeroProps {
  heading: string;
  description: string;
}

export function Hero({ heading, description }: HeroProps) {
  return (
    <section>
      <div className="container">
        <h1>{heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </section>
  );
}
