import { Dispatch, SetStateAction, useState } from "react"
import { GalleryInterface } from "../interface/gallery.interface"
import { Card } from "./card";
import { motion } from "motion/react";
import { size } from "../constants/size";


interface Props {
  gallery: GalleryInterface,
  selectedGallery: GalleryInterface | null,
  setSelectedGallery: Dispatch<SetStateAction<GalleryInterface | null>>
}

export function GalleryWithCard({ gallery, selectedGallery, setSelectedGallery }: Props) {
  const [isHover, setIsHover] = useState(false) ;

  if(selectedGallery?.id == gallery.id) {
    return (
      <div
        onClick={() => setSelectedGallery(null)}
        className="w-screen h-screen px-10 pt-10 -mb-10"
      >
        <motion.div
          layoutId={selectedGallery.id}
          className="flex flex-col pt-12 gap-14"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: selectedGallery.backgroundColor,
            borderRadius: 24
          }}
        >
          <section className="flex flex-col gap-2 items-center">
            <motion.h2
              layout="position"
              layoutId={`${selectedGallery.id}-name`} 
              className="font-bold"
              style={{ fontSize: 40 }}
            >
              {selectedGallery.name}
            </motion.h2>
            <div className="w-full overflow-hidden">
              <motion.p
                layout="position"
                layoutId={`${selectedGallery.id}-description`} 
                className="px-72 text-center"
                style={{ fontSize: 25 }}
              >
                {selectedGallery.description}
              </motion.p>
            </div>
          </section>
          <section className="flex items-center justify-center gap-4">
            {selectedGallery.cards?.map((card) => (
              <motion.div 
                layoutId={card.id}
                animate={{ x:0 , y:0 , rotate: 0 }}
                className="w-80 h-[410px] p-2 rounded-2xl overflow-hidden flex flex-col gap-1"
                style={{ backgroundColor: card.backgroundColor }}
              >
                <h4 className="font-semibold">
                  {card.title}
                </h4>
                <img 
                  src={card.image} 
                  alt="Card Image"
                  className="w-full h-2/3 rounded-lg object-cover" 
                />
                <p className="mt-2 text-center">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </section>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      layoutId={gallery.id} 
      className="mb-10 flex flex-col relative z-10"
      onClick={() => setSelectedGallery(gallery)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ 
        backgroundColor: gallery.backgroundColor,
        height: size.GALLERY_HEIGHT,
        width: size.GALLERY_WIDTH,
        borderRadius: 24
      }}
    >
      <div className="h-2/3 w-full flex justify-center items-center relative">
        {gallery.cards!.map((card, index) => (
          <Card 
            key={card.id}
            index={index} 
            card={card}
            isHover={isHover} 
          />
        ))}
      </div>
      <div className="h-1/3 w-full flex flex-col justify-center gap-2">
        <motion.h2
          layout="position"
          layoutId={`${gallery.id}-name`} 
          style={{ fontSize: 18 }} 
          className="font-bold text-center text-lg"
        >
          {gallery.name}
        </motion.h2>
        <div className="w-full overflow-hidden">
          <motion.p 
            layout="position"
            layoutId={`${gallery.id}-description`} 
            style={{ fontSize: 14 }}
            className="text-sm text-center px-4"
          >
            {gallery.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}