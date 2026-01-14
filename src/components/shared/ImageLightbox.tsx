import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string | null;
    altText: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
    isOpen,
    onClose,
    imageSrc,
    altText,
}) => {
    if (!imageSrc) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-[10010] p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-200"
                        aria-label="Close lightbox"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Image Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative max-w-full max-h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                    >
                        <img
                            src={imageSrc}
                            alt={altText}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
