import { TestimonialCard, type TestimonialAuthor } from "./testimonial-card";

export interface Testimonial {
  author: TestimonialAuthor;
  text: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({ title, description, testimonials }: TestimonialsSectionProps) {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials-heading reveal">
        <span>CLIENT TESTIMONIALS / 06</span>
        <div>
          <h2 id="testimonials-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="testimonial-marquee" data-cursor>
        <div className="testimonial-track">
          {[0, 1].map((groupIndex) => (
            <div className="testimonial-group" key={groupIndex} aria-hidden={groupIndex === 1 || undefined}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`${groupIndex}-${index}`} {...testimonial} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="testimonial-note">HOVER TO PAUSE / DRAG YOUR EYES, NOT THE CARDS ↗</p>
    </section>
  );
}
