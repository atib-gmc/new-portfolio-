import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel2({ images }: { images: string[] }) {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      stopOnHover={true}
    >{images?.map((src, i) => (
      <img src={src} key={i} alt={src} />
    ))}</Carousel>
  )
}
