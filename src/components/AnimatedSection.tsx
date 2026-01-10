import { ReactNode, Children, cloneElement, isValidElement } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/useScrollAnimation';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: AnimationType;
  duration?: number;
}

interface StaggeredItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  staggerDelay?: number;
  animation?: AnimationType;
  duration?: number;
}

const animationClasses: Record<AnimationType, { initial: string; animate: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0'
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0'
  },
  'fade-left': {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0'
  },
  'fade-right': {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0'
  },
  'zoom-in': {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100'
  },
  'fade': {
    initial: 'opacity-0',
    animate: 'opacity-100'
  }
};

export const AnimatedSection = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 700
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const { initial, animate } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export const StaggeredItem = ({
  children,
  className,
  index = 0,
  staggerDelay = 100,
  animation = 'fade-up',
  duration = 500
}: StaggeredItemProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const { initial, animate } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${index * staggerDelay}ms`
      }}
    >
      {children}
    </div>
  );
};

export const StaggeredContainer = ({
  children,
  className,
  staggerDelay = 100,
  animation = 'fade-up',
  duration = 500
}: StaggeredContainerProps) => {
  const childArray = Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, index) => {
        if (isValidElement(child)) {
          return (
            <StaggeredItem
              key={index}
              index={index}
              staggerDelay={staggerDelay}
              animation={animation}
              duration={duration}
            >
              {child}
            </StaggeredItem>
          );
        }
        return child;
      })}
    </div>
  );
};

export default AnimatedSection;
