import { Dispatch, SetStateAction } from "react"
import { galleries } from "../constants/galleries"
import { motion } from "motion/react"
import { size } from "../constants/size"

interface Props {
  gallery: typeof galleries[number],
  selectedGallery: typeof galleries[number] | null,
  setSelectedGallery: Dispatch<SetStateAction<typeof galleries[number] | null>>
}

export function GalleryWithoutCard({ gallery, selectedGallery, setSelectedGallery }: Props) {
  
  if(selectedGallery?.id == gallery.id) return (
    <div
      onClick={() => setSelectedGallery(null)} 
      className="w-screen h-screen px-40 pt-10 -mb-10"
    >
      <motion.div
        layoutId={gallery.id} 
        className="h-full aspect-square flex flex-col overflow-hidden"
        style={{ 
          backgroundColor: gallery.backgroundColor,
          borderRadius: 24,
          width: '100%',
        }}
        onClick={() => setSelectedGallery(gallery)}
      >
        <motion.div
          layout="size"
          layoutId={`${gallery.id}-image-wrapper`} 
          className="h-2/3"
        >
          <motion.img 
            layoutId={`${gallery.id}-image`} 
            src={selectedGallery.mainImage!} 
            alt="Gallery Image" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="h-1/5 flex flex-col justify-center gap-4 items-center overflow-hidden">
          <motion.h2 
            layout="position"
            layoutId={`${gallery.id}-name`} 
            className="font-bold"
            style={{ fontSize: 30 }}
          >
            {gallery.name}
          </motion.h2>
          <motion.p
            layout="position"
            layoutId={`${gallery.id}-description`} 
            style={{ fontSize: 20 }}
            className="text-center px-4"
          >
            {gallery.description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
  
  return (
    <motion.div
      layoutId={gallery.id} 
      className="flex flex-col overflow-hidden mb-10"
      style={{ 
        backgroundColor: gallery.backgroundColor,
        borderRadius: 24,
        width: size.GALLERY_WIDTH,
        height: size.GALLERY_HEIGHT
      }}
      onClick={() => setSelectedGallery(gallery)}
    >
      <motion.div
        layoutId={`${gallery.id}-image-wrapper`} 
        className="h-2/3 w-full flex justify-center items-center relative"
      >
        <motion.img 
          // layout="position"
          layoutId={`${gallery.id}-image`} 
          src={gallery.mainImage!} 
          alt="Gallerie Main Image" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="h-1/3 w-full flex flex-col justify-center gap-2">
        <motion.h2 
          layout="position"
          layoutId={`${gallery.id}-name`} 
          className="font-bold text-center"
          style={{ fontSize: 18 }}
        >
          <span>
            {gallery.name}
          </span>
        </motion.h2>
        <motion.p 
          layout="position"
          layoutId={`${gallery.id}-description`} 
          className="text-sm text-center px-4"
          style={{ fontSize: 16 }}
        >
          {gallery.description}
        </motion.p>
      </div>
    </motion.div>
  )
}