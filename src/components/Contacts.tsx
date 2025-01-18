import { useRef, useEffect } from 'react';
import ContactButton from './ContactButton.tsx';
import { gsap } from 'gsap';

export default function Contacts() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tl = gsap.timeline({ delay: 3 });

  useEffect(() => {
    if (containerRef.current) {
      const buttons = containerRef.current.querySelectorAll('.contact-button');
      tl.fromTo(
        buttons,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="flex gap-8">
      <ContactButton icon={'github'} link="https://github.com/YSP97" />
      <ContactButton
        icon={'notion'}
        link="https://opaque-parade-b25.notion.site/c7e2c7c4929442b986ef2e1e3d668b8e?pvs=74"
      />
      <ContactButton icon={'email'} link="mailto:pus9717@gmail.com" />
      <ContactButton icon={'phone'} />
    </div>
  );
}
