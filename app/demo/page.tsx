'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [images, setImages] = useState<string[]>([]);

  // Get all images from the gallery folder
  useEffect(() => {
    // This will be populated by images in /public/gallery/
    // For now, we'll use a placeholder array
    // In production, you'd use an API route to read the directory
    const galleryImages: string[] = [];

    // Check for images 1-50 (adjust range as needed)
    for (let i = 1; i <= 50; i++) {
      galleryImages.push(`/gallery/${i}.jpg`);
    }

    setImages(galleryImages);
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-Hospital-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-Hospital-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-Hospital-gray-600 max-w-3xl mx-auto">
            Explore our collection of Disintox® product images and real-world applications.
          </p>
        </div>

        {/* Simple Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((imagePath, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={imagePath}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                onError={(e) => {
                  // Hide broken images
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-Hospital-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-bold">
                    Image {index + 1}
                  </div>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Instructions */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8">
          <h2 className="text-2xl font-bold text-Hospital-gray-900 mb-4 text-center">
            📸 How to Add Photos
          </h2>
          <div className="max-w-2xl mx-auto">
            <ol className="space-y-3 text-Hospital-gray-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary-600">1.</span>
                <span>Place your images in the <code className="bg-Hospital-gray-100 px-2 py-1 rounded">public/gallery/</code> folder</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary-600">2.</span>
                <span>Name them: <code className="bg-Hospital-gray-100 px-2 py-1 rounded">1.jpg</code>, <code className="bg-Hospital-gray-100 px-2 py-1 rounded">2.jpg</code>, <code className="bg-Hospital-gray-100 px-2 py-1 rounded">3.jpg</code>, etc.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary-600">3.</span>
                <span>They will automatically appear on this page!</span>
              </li>
            </ol>
            <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <p className="text-sm text-Hospital-gray-700">
                <strong>Tip:</strong> Supported formats are JPG, PNG, and WebP. Keep file sizes under 2MB for best performance.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-Hospital-gray-200 p-8">
          <h2 className="text-2xl font-bold text-Hospital-gray-900 mb-6 text-center">
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎥</div>
              <h3 className="font-bold text-Hospital-gray-900 mb-2">Video Demonstrations</h3>
              <p className="text-sm text-Hospital-gray-600 mb-4">
                Watch detailed product usage videos
              </p>
              <Link
                href="/resources#videos"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                Watch Videos →
              </Link>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📄</div>
              <h3 className="font-bold text-Hospital-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-Hospital-gray-600 mb-4">
                Download product specs and certificates
              </p>
              <Link
                href="/resources"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                View Resources →
              </Link>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-bold text-Hospital-gray-900 mb-2">Products</h3>
              <p className="text-sm text-Hospital-gray-600 mb-4">
                Explore our complete product range
              </p>
              <Link
                href="/products"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                View Products →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-Hospital-gray-300 transition-colors z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 text-white hover:text-Hospital-gray-300 transition-colors z-10"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 text-white hover:text-Hospital-gray-300 transition-colors z-10"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              width={1200}
              height={900}
              className="max-w-full max-h-full object-contain"
              quality={95}
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <div className="text-2xl font-bold">
                Image {selectedImage + 1}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
