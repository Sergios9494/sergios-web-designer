export interface TestimonialAuthor {
  label: string;
  mark: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
}

export function TestimonialCard({ author, text }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-author">
        <span className="testimonial-mark" aria-hidden="true">{author.mark}</span>
        <h3>{author.label}</h3>
      </div>
      <div className="testimonial-stars" aria-label="5 out of 5 stars">
        <span aria-hidden="true">★★★★★</span>
      </div>
      <blockquote>“{text}”</blockquote>
    </article>
  );
}
