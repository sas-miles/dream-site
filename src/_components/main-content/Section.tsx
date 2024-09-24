import { useRef, useEffect } from "react";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  onVisible: (id: string, textContent: string) => void;
}

const Section = ({ id, children, onVisible }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          const textContent = Array.from(
            ref.current?.querySelectorAll("h1, h2, h3, h4, h5, h6, p") ?? [],
          )
            .map((el) => el.textContent)
            .join(" ");
          onVisible(id, textContent);
        }
      },

      { threshold: 0.5 },
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [id, onVisible]);

  return <div ref={ref}>{children}</div>;
};

export default Section;
