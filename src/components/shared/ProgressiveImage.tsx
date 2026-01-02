
import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ProgressiveImageProps extends HTMLMotionProps<"img"> {
    src: string;
    className?: string; // Applied to the img
    wrapperClassName?: string; // Applied to the wrapper div
    alt: string;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
    src,
    className = '',
    wrapperClassName = '',
    alt,
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative overflow-hidden w-full h-full ${wrapperClassName}`}>
            {/* Placeholder / Skeleton */}
            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
            )}

            {/* Actual Image */}
            <motion.img
                src={src}
                alt={alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onLoad={() => setIsLoading(false)}
                className={`w-full h-full object-cover ${className}`}
                {...props}
            />
        </div>
    );
};
