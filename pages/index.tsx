import React, { useState } from 'react';
import PictureFrame from '@/components/picture_frame';
import FallingHearts from '@/components/falling_hearts';
import Image from 'next/image';

interface Quote {
  src: string;
  quote: string | JSX.Element; // Since some quotes are JSX Elements
}
interface ImageQuotes {
  [key: string]: Quote;
}

const imageQuotes: ImageQuotes = {
  "image1": { 
    src: "/piglet_pooh_photos/1.jpg", 
    quote: "‘A day without a friend is like a pot without a single drop of honey left inside,’ said Pooh."
  },
  "image2": { 
    src: "/piglet_pooh_photos/2.jpg", 
    quote: (
      <>
        ‘We'll be friends forever, won't we, Pooh?,’ asked Piglet.
        <br />
        ‘Even longer,’ Pooh answered.
      </>
    )
  },
  "image3": { 
    src: "/piglet_pooh_photos/3.jpg", 
    quote: "‘The things that make me different are the things that make me, me,’ said Piglet."
  },
  "image4": { 
    src: "/piglet_pooh_photos/4.jpg", 
    quote: (
      <>
        ‘I don't feel very much like Pooh today,’ said Pooh.
        <br />
        ‘There, there,’ said Piglet. ‘I'll bring you tea and honey until you do.’
      </>
    )
  },
  "image5": { 
    src: "/piglet_pooh_photos/5.jpg", 
    quote: (
      <>
        ‘How do you spell love?,’ asked Piglet.
        <br />
        ‘You don't spell it, you feel it,’ said Pooh.
      </>
    )
  },
  "image6": { 
    src: "/piglet_pooh_photos/6.jpg", 
    quote: "‘Some people care too much. I think it's called love,’ said Pooh."
  },
  "image7": { 
    src: "/piglet_pooh_photos/7.jpg", 
    quote: "‘Any day spent with you is my favourite day,’ said Pooh."
  },
  "image8": { 
    src: "/piglet_pooh_photos/8.jpg", 
    quote: "‘Sometimes the smallest things take up the most room in your heart,’ said Pooh."
  },
  "image9": { 
    src: "/piglet_pooh_photos/9.jpg", 
    quote: (
      <>
        ‘Supposing a tree fell down, Pooh, when we were underneath it?’
        <br />
        ‘Supposing it didn't,’ said Pooh after careful thought.
        <br />
        Piglet was comforted by this.
      </>
    )
  },
  "image10": { 
    src: "/piglet_pooh_photos/10.jpg", 
    quote: "‘Home is the comfiest place to be,’ said Pooh."
  },
  "image11": { 
    src: "/piglet_pooh_photos/11.jpg", 
    quote: (
      <>
        ‘It makes such a difference to have someone who believes in you,’ said Pooh.
      </>
    )
  },
  "image12": { 
    src: "/piglet_pooh_photos/12.jpg", 
    quote: "‘How lucky I am to have something that makes saying goodbye so hard,’ said Pooh."
  },
  "image13": { 
    src: "/piglet_pooh_photos/13.jpg", 
    quote: "‘If there ever comes a day when we can't be together, keep me in your heart, I'll stay there forever,’ said Pooh."
  },
  "image14": { 
    src: "/piglet_pooh_photos/14.jpg", 
    quote: "‘As soon as I saw you, I knew an adventure was going to happen,’ said Pooh."
  },
  "image15": { 
    src: "/piglet_pooh_photos/15.jpg", 
    quote: (
      <>
        ‘Piglet noticed that even though he had a Very Small Heart, it could hold a rather large amount of Gratitude.’
        <br />
        "- A.A. Milne
      </>
    )
  },
  "image16": { 
    src: "/piglet_pooh_photos/16.jpg", 
    quote: "‘A hug is always the right size,’ said Pooh."
  },
  "image17": { 
    src: "/piglet_pooh_photos/valentine.jpg", 
    quote: "‘💛 WILL YOU BE MY VALENTINE? 💛’ said Stu."
  },
};


export default function Home() {
  const [showFrame, setShowFrame] = useState(false);
  const imageKeys = Object.keys(imageQuotes);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showHearts, setShowHearts] = useState(false);

  const toggleVisibility = () => {
    setShowFrame(!showFrame);
  };

  const incrementImageKey = () => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + 1;
      if (nextIndex >= imageKeys.length) {
        setShowHearts(true);
        return prevIndex;
      } else {
        setShowHearts(false); 
        return nextIndex;
      }
    });
  };
  
  const imageKey = imageKeys[currentIndex];
  const { src, quote } = imageQuotes[imageKey];

  return (
    <div className="h-screen w-screen bg-white">
      {showHearts && <FallingHearts />}
      {/* Background image */}
      <div className={`absolute inset-0 z-0 cursor-pointer ${showFrame ? 'hidden' : ''}`} onClick={toggleVisibility}>
        <Image
          src="/background.png"
          alt="Background"
          layout="fill"
          className="object-cover object-top"
        />
      </div>

      {/* PictureFrame with onClick event to increment the current index */}
      <div className={`bg-white text-black ${showFrame ? '' : 'hidden'}`} onClick={incrementImageKey}>
        <PictureFrame src={src} quote={quote} alt={imageKey} />
      </div>
    </div>
  );
}

