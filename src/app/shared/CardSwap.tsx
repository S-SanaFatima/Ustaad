import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react';
import gsap from 'gsap';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  isPaused?: boolean;
  onCardClick?: (idx: number) => void;
  onSwap?: (newFrontIndex: number) => void;
  skewAmount?: number;
  easing?: 'linear' | 'elastic';
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-10px_rgba(15,74,155,0.18)] [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] cursor-pointer select-none ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
  />
));

Card.displayName = 'Card';

type CardRef = RefObject<HTMLDivElement | null>;

interface Slot {
  x: number;
  y: number;
  z: number;
  scale: number;
  zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * 35,
  scale: 1 - i * 0.035,
  zIndex: total - i
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    scale: slot.scale,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

export const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 0,
  verticalDistance = 26,
  delay = 5000,
  pauseOnHover = false,
  isPaused = false,
  onCardClick,
  onSwap,
  skewAmount = 0,
  easing = 'elastic',
  children
}) => {
  const config = useMemo(
    () =>
      easing === 'elastic'
        ? {
            ease: 'elastic.out(0.6,0.9)',
            durDrop: 1.8,
            durMove: 1.8,
            durReturn: 1.8,
            promoteOverlap: 0.9,
            returnDelay: 0.05
          }
        : {
            ease: 'power1.inOut',
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2
          },
    [easing]
  );

  const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children]);
  const refs = useMemo<CardRef[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);
  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>(0);
  const container = useRef<HTMLDivElement>(null);

  // Initial Placement
  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
      }
    });
  }, [refs, cardDistance, verticalDistance, skewAmount]);

  const swap = useCallback(() => {
    if (order.current.length < 2) return;
    if (tlRef.current && tlRef.current.isActive()) return; // avoid overlapping transitions

    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    if (!elFront) return;

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(elFront, {
      y: '+=500',
      duration: config.durDrop,
      ease: config.ease
    });

    tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      if (!el) return;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, 'promote');
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          scale: slot.scale,
          duration: config.durMove,
          ease: config.ease
        },
        `promote+=${i * 0.15}`
      );
    });

    const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
    tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
    tl.call(
      () => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      },
      undefined,
      'return'
    );

    tl.to(
      elFront,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        scale: backSlot.scale,
        duration: config.durReturn,
        ease: config.ease
      },
      'return'
    );

    tl.call(() => {
      order.current = [...rest, front];
      if (onSwap && order.current.length > 0) {
        onSwap(order.current[0]);
      }
    });
  }, [refs, cardDistance, verticalDistance, config, onSwap]);

  // Restart interval timer helper
  const restartInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused && delay > 0) {
      intervalRef.current = window.setInterval(swap, delay);
    }
  }, [isPaused, delay, swap]);

  // Handle Autoplay & Pause State
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      tlRef.current?.pause();
    } else {
      tlRef.current?.play();
      restartInterval();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, restartInterval]);

  // Optional Hover pause only if pauseOnHover is explicitly true
  useEffect(() => {
    if (!pauseOnHover || !container.current) return;
    const node = container.current;
    const handleMouseEnter = () => {
      tlRef.current?.pause();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    const handleMouseLeave = () => {
      if (!isPaused) {
        tlRef.current?.play();
        restartInterval();
      }
    };
    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pauseOnHover, isPaused, restartInterval]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      tlRef.current?.kill();
    };
  }, []);

  const handleCardClick = (i: number) => {
    swap();
    restartInterval();
    onCardClick?.(i);
  };

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            child.props.onClick?.(e);
            handleCardClick(i);
          }
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={container}
      className="relative perspective-[1200px] transform-gpu mx-auto cursor-pointer"
      style={{ width, height }}
      onClick={() => {
        // Fallback container click triggers swap if clicked outside direct card targets
        if (order.current.length > 0) {
          handleCardClick(order.current[0]);
        }
      }}
    >
      <div className="absolute inset-0 [transform-style:preserve-3d]">
        {rendered}
      </div>
    </div>
  );
};

export default CardSwap;
