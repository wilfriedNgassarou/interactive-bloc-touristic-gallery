import { galleries } from "./constants/galleries"
import { Gallery } from "./components/gallery"
import { useState } from "react"
import { size } from "./constants/size"
import { GalleryInterface } from "./interface/gallery.interface"
import { AnimatePresence, motion } from "motion/react"

function App() {
  const [selectedGallery, setSelectedGallery] = useState<GalleryInterface | null>(null)
  
  const baseX = window.innerWidth / -2
  let fullX = baseX;

  if(selectedGallery?.id == galleries[0].id) {
    fullX = baseX + size.GALLERY_WIDTH + size.GAP
  }

  if(selectedGallery?.id == galleries[2].id) {
    fullX = baseX - size.GALLERY_WIDTH - size.GAP
  }

  return (
    <section className="w-full h-dvh overflow-hidden">
      <AnimatePresence initial={false}>
        {selectedGallery == null && (
          <motion.header
            key="header"
            initial={{ y: 100, scale: .4 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 100, scale: .4 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: .3 }}
            className="flex flex-col gap-4 absolute top-16 w-full"
          >
            <h1 className="text-center text-4xl font-bold">
              Visitez le Cameroun !
            </h1>
            <p className="text-center font-medium">
              Explorez les meilleurs lieux touristiques et <br />
              historique du Cameroun
            </p>
          </motion.header>
        )}
      </AnimatePresence>
      <section 
        className="w-[200%] h-full flex justify-center items-end"
        style={{ gap: size.GAP, transform: `translateX(${fullX}px)` }}
      >
        {galleries.map((gallery) => (
          <Gallery
            key={gallery.id} 
            gallery={gallery} 
            selectedGallery={selectedGallery}
            setSelectedGallery={setSelectedGallery}
          />
        ))}
      </section>
    </section>
  )
}

export default App
