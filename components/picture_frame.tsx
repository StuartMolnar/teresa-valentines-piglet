// picture_frame.tsx
import React from 'react';

interface PictureFrameProps {
    src: string;
    quote: React.ReactNode;
    alt: string;
}

interface PictureContentProps {
    src: string;
    alt: string;
    className?: string;
}

interface PictureQuoteProps {
    quote: React.ReactNode;
    className?: string;
}

const PictureContent: React.FC<PictureContentProps> = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`w-full h-full z-0 p-[20%] ${className}`}
        />
    );
}

const PictureQuote: React.FC<PictureQuoteProps> = ({ quote, className }) => {
    return (
        <div className={`absolute bg-red-300 inset-0 flex items-center justify-center m-[20%] ${className}`}>
            <div className="flex-row pl-[20%] pr-[10%]">
                <div className="text-white md:text-2xl">{quote}</div>
                
            </div>
        </div>
    );
}

const PictureFrame: React.FC<PictureFrameProps> = ({ src, quote, alt }) => {
    return (
        <div className="relative max-w-3xl mx-auto items-center group cursor-pointer">
        
        <img
            src="/picture-frame-nobg.png"
            alt="Picture Frame"
            className="w-full h-full z-20 absolute"
        />
        
        
        <PictureContent src={src} alt={alt}/>
        <PictureQuote quote={quote} className="z-10 opacity-0 group-hover:opacity-80" />
        </div>
    );
};




export default PictureFrame;

