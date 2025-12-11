"use client";

import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
    images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                    >
                        <ImageWithFallback
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="w-8 h-8 text-white" />
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative max-w-7xl w-full h-full max-h-[90vh] flex items-center justify-center p-2"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="relative w-full h-full">
                                <ImageWithFallback
                                    src={selectedImage}
                                    alt="Enlarged view"
                                    className="object-contain w-full h-full select-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}