import React, {
  JSXElementConstructor,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

interface Props {
  transitionDuration?: number;
  wrapperTag?: JSXElementConstructor<any>;
  childTag?: JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => void;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const { onComplete } = props;
  const wrapperRef = useRef<HTMLElement | null>(null);
  const WrapperTag = (props.wrapperTag || "div") as React.ElementType;
  const ChildTag = (props.childTag || "div") as React.ElementType;
  const visible = props.visible ?? true;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !visible) return undefined;

    const children = Array.from(wrapper.querySelectorAll<HTMLElement>(".fade-in-child"));
    const motionQuery =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    if (
      motionQuery?.matches ||
      typeof window.IntersectionObserver !== "function"
    ) {
      children.forEach((child) => child.classList.add("is-visible"));
      onComplete?.();
      return undefined;
    }

    let completed = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
          completed += 1;
          if (completed === children.length) onComplete?.();
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [onComplete, visible]);

  return (
    <WrapperTag className={props.className} ref={wrapperRef}>
      {React.Children.map(props.children, (child) => (
        <ChildTag
          className={`fade-in-child${props.childClassName ? ` ${props.childClassName}` : ""}`}
          style={{ transitionDuration: `${props.transitionDuration || 650}ms` }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
}
