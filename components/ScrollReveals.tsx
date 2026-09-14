"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const revealEls = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      if (reduced) {
        revealEls.forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
        return;
      }

      const viewportH = window.innerHeight;

      revealEls.forEach((el) => {
        const authoredDelay = parseFloat(el.dataset.revealDelay || "0");
        const aboveFold = el.getBoundingClientRect().top < viewportH;
        // Above-the-fold elements already animate in via PageTransition;
        // keep their extra stagger short so it reads as one motion, not two.
        const delay = aboveFold ? authoredDelay * 0.5 : authoredDelay;
        const duration = aboveFold ? 0.45 : 0.6;

        gsap.fromTo(
          el,
          { opacity: 0, y: aboveFold ? 14 : 32 },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const isNarrow = window.innerWidth < 760;
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "8") * (isNarrow ? 0.45 : 1);
        gsap.fromTo(
          el,
          { yPercent: -speed },
          {
            yPercent: speed,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 60);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
