import { motion } from "motion/react"
import { galleries } from "../constants/galleries"

interface Props {
  card: NonNullable<typeof galleries[number]['cards']>[number]
  isHover: boolean,
  index: number
}


export function Card({ card, isHover, index }: Props) {
  let x, y, rotate;

  const zIndex = 10 - index ;

  switch (index) {
    case 0:
      x = isHover ? -130 : -60 ;
      y = isHover ? 10 : 30 ;
      rotate = isHover ? -20 : -4;
      break;

    case 1:
      x = 0 ;
      y = isHover ? -50 : 0 ;
      rotate = 3;
      break;

    case 2:
      x = isHover ? 140 : 70 ;
      y = isHover ? 20 : 50 ;
      rotate = isHover ? 30 : 6;
      break;

    default:
      x = 0 ;
      y = 0 ;
      rotate = 0;
      break;
  }

  return (
    <motion.div 
      layoutId={card.id}
      initial={{ rotate, x, y }}
      animate={{ rotate, x, y }}
      className="absolute text-xs w-48 h-72 p-2 rounded-2xl overflow-hidden flex flex-col gap-1"
      style={{ backgroundColor: card.backgroundColor, zIndex }}
    >
      <h4 className="font-semibold">
        {card.title}
      </h4>
      <img 
        src={card.image} 
        alt="Card Image"
        className="w-full h-3/5 rounded-lg object-cover" 
      />
      <p className="mt-2 text-center">
        {card.description}
      </p>
    </motion.div>
  )
}