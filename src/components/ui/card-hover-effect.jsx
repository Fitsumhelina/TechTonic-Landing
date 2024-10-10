import { cn } from "./../lib/utils"; // Ensure 'cn' is defined properly in your utils
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"; // Import useState from React

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <a
          className="relative group block p-2 h-full w-full"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security measure for external links
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-customBlue p-4 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-red border border-slate-400 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// CardTitle Component
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn(" font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

// CardDescription Component
export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-8 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
