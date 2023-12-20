import React from "react";
import Line from "./Line";
import Carousel from "./Carousel";
import Image from "next/image";

export default function FilmCard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const movie = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/359430920?h=e0905562f8" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script type="text/javascript" nonce="415754116c354ccf9481234efc2" src="//local.adguard.org?ts=1702972051404&amp;type=content-script&amp;dmn=vimeo.com&amp;url=https%3A%2F%2Fvimeo.com%2Fembed%3Fwidth%3D640%26height%3D360%26title%3D1%26byline%3D1%26portrait%3D1%26autoplay%3D0%26loop%3D0%26link%3D1%26caption%3D0%26color%3D00adef%26responsive%3D1%26fixed%3D0%26clip_id%3D359430920%26iframe%3Dtrue&amp;app=com.apple.Safari&amp;css=3&amp;js=1&amp;rel=1&amp;rji=1&amp;sbe=1"></script>
	  <script type="text/javascript" nonce="415754116c354ccf9481234efc2" src="//local.adguard.org?ts=1702972051404&amp;name=AdGuard%20Extra&amp;type=user-script"></script><script src="https://player.vimeo.com/api/player.js"></script>
	  <p><a href="https://vimeo.com/359430920">My Boyfriend&#039;s Daughter (short film) - Trailer</a> from <a href="https://vimeo.com/kathymeng">Kathy Meng</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`;

  return (

    <div className="text-black">
      <Line />
      <h1>Title (2020)</h1>
      <div className="flex flex-col">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nemo
          cupiditate ab ipsum, aliquid omnis libero distinctio rerum pariatur
          molestias ullam accusamus harum eligendi deserunt, odio consequuntur,
          nobis corrupti laborum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Est expedita, nesciunt quisquam eveniet eos quas ab
          ipsam, soluta animi neque nam consectetur ut unde tempora. Libero
          sequi voluptatem qui doloribus! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Error, molestiae, fuga aliquid sapiente
          debitis molestias dolores dolorum magni voluptas vero, earum ducimus
          commodi porro illo laboriosam quas dolor repudiandae pariatur.
        </p>
    	<Carousel>
			<img src="https://picsum.photos/200" alt="Lorem Picsum" />
			<img src="https://picsum.photos/200" alt="Lorem Picsum" />
			<img src="https://picsum.photos/200" alt="Lorem Picsum" />
			<img src="https://picsum.photos/200" alt="Lorem Picsum" />
    		
    		{/* <div dangerouslySetInnerHTML={{ __html: movie }} /> */}
    	</Carousel>
      </div>
    </div>
  );
}
