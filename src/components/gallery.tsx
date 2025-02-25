import { Dispatch, SetStateAction } from "react";
import { GalleryWithCard } from "./gallery-with-card";
import { GalleryWithoutCard } from "./gallery-without-card";
import { GalleryInterface } from "../interface/gallery.interface";

interface Props {
  gallery: GalleryInterface,
  selectedGallery: GalleryInterface | null,
  setSelectedGallery: Dispatch<SetStateAction<GalleryInterface | null>>
}

export function Gallery({ gallery, selectedGallery, setSelectedGallery }: Props) {
  
  if(gallery.mainImage) {
    return (
      <GalleryWithoutCard
        gallery={gallery}
        selectedGallery={selectedGallery}
        setSelectedGallery={setSelectedGallery}
      />
    )
  }

  return (
    <GalleryWithCard
      gallery={gallery}
      selectedGallery={selectedGallery}
      setSelectedGallery={setSelectedGallery} 
    />
  )

}