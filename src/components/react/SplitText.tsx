import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import type { SplitTextProps } from '@types';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

// Extend HTMLElement to include our custom property
declare global {
  interface HTMLElement {
    _rbsplitInstance?: GSAPSplitText;
  }
}

interface GSAPSplitTextInstance {
  chars?: Element[];
  words?: Element[];
  lines?: Element[];
  revert(): void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onAnimationComplete,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const animationCompletedRef = useRef<boolean>(false);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);


  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      const el = ref.current;

      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch (error) {
          console.warn('Error reverting split instance:', error);
        }
        el._rbsplitInstance = undefined;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      let sign = '';
      if (marginValue !== 0) {
        sign = marginValue < 0 
          ? `-=${Math.abs(marginValue)}${marginUnit}`
          : `+=${marginValue}${marginUnit}`;
      }
      const start = `top ${startPct}%${sign}`;

      let targets: Element[] = [];
      const assignTargets = (self: GSAPSplitTextInstance) => {
        if (splitType.includes('chars') && self.chars?.length) {
          targets = self.chars;
        } else if (!targets.length && splitType.includes('words') && self.words?.length) {
          targets = self.words;
        } else if (!targets.length && splitType.includes('lines') && self.lines?.length) {
          targets = self.lines;
        }
        if (!targets.length) {
          targets = self.chars || self.words || self.lines || [];
        }
      };

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        onSplit: (self: GSAPSplitTextInstance) => {
          assignTargets(self);
          gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onAnimationComplete?.();
              },
              willChange: 'transform, opacity',
              force3D: true
            }
          );
        }
      });

      el._rbsplitInstance = splitInstance;

      return () => {
        ScrollTrigger.getAll().forEach((st: ScrollTrigger) => {
          if (st.trigger === el) st.kill();
        });
        try {
          splitInstance.revert();
        } catch (error) {
          console.warn('Error reverting split instance on cleanup:', error);
        }
        if (el) {
          el._rbsplitInstance = undefined;
        }
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
      ],
      scope: ref
    }
  );

  const renderTag = (): React.ReactElement => {
    const style: React.CSSProperties = {
      textAlign,
      overflow: 'hidden',
      display: 'inline-block',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      willChange: 'transform, opacity'
    };
    const classes = `split-parent ${className}`;
    
    const commonProps = {
      ref: ref as React.RefObject<any>,
      style,
      className: classes,
      children: text
    };

    switch (tag) {
      case 'h1':
        return React.createElement('h1', commonProps);
      case 'h2':
        return React.createElement('h2', commonProps);
      case 'h3':
        return React.createElement('h3', commonProps);
      case 'h4':
        return React.createElement('h4', commonProps);
      case 'h5':
        return React.createElement('h5', commonProps);
      case 'h6':
        return React.createElement('h6', commonProps);
      case 'span':
        return React.createElement('span', commonProps);
      case 'div':
        return React.createElement('div', commonProps);
      default:
        return React.createElement('p', commonProps);
    }
  };
  return renderTag();
};

export default SplitText;
