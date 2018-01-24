import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";
import initializeSwiperTestimonial from './testimonial.js';

class Testimonial extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    initializeSwiperTestimonial();
  }

  render() {
    return (
      <div className="swiper-container swiper-testimonial">
        <h3 className="testTitle">See what people have to say about Justin C. Schilling</h3>
        <div className="swiper-wrapper">
          <div className="swiper-slide testimonial-flex">
            <div className="quote-block">"It's rare to find someone so down to earth, hardworking and dedicated to their craft. As a director, there's nothing better than an actor who has not only thoroughly prepared but is also willing and eager to try new directions to see where their performance ends up. Justin fully trusts his directors and costars, enabling the opportunity for remarkable performances to shine. Having worked with hundreds of actors, I would enthusiastically work with Justin over and over again."</div>
            <div className="credit-block">Ashleigh Coffelt from Miss Ash Productions</div>
          </div>
          <div className="swiper-slide testimonial-flex">
            <div className="quote-block">"As a producer on The Damaged it was so great to work with an actor like Justin who invested himself 120% into a role and a project. He showed up on set every day with a positive attitude that helped set the tone with the rest of the cast/crew for the day. He gives valuable input for every scene he’s in and helps craft a realistic character, while at the same time taking in notes and adjusting to the directors needs. The amount of dedication he puts into his roles is clearly evident by the performance captured onscreen."</div>
            <div className="credit-block">Joe Ralko, Producer for "The Damaged"</div>
          </div>
          <div className="swiper-slide testimonial-flex">
            <div className="quote-block">"Nothing is more satisfying than seeing a character you’ve written come to life in the best way possible. Justin brought energy, charisma, and total commitment to the character of “Officer Zack Knewlls” and  it was a pleasure to work with him on set. After casting Justin, the character was implemented into more scenes based solely on Justin’s performance and likability. I look forward to working with him again on future projects and collaborations."</div>
            <div className="credit-block">Vincent Cotroneo, Writer of "The Damaged"</div>
          </div>
          <div className="swiper-slide testimonial-flex">
            <div className="quote-block">"Justin was such a fun spirit on set. He always brought 100% to each scene, and helped add more to the character then what was written on the page. His energy was high and he was full of helpful suggestions that added more realism to the character. I️ worked so well with him and he was such a funny guy on and off camera. He always knew how to make everyone laugh, and I️ admire that, as making a film can be so stressful, he helped us all feel as ease and helped bring smiles to everyone throughout each day. I plan to work with Justin again and I️ can’t wait for that opportunity."</div>
            <div className="credit-block">Rob Cuollo, Director of "The Damaged"</div>
          </div>
          <div className="swiper-slide testimonial-flex">
            <div className="quote-block">"Justin is always energetic, always ON when working. Positive attitude from beginning to end and great work ethic."</div>
            <div className="credit-block">Fernando Martinez from Adorama NYC.</div>
          </div>
          <div className="swiper-slide testimonial-flex">
            <div className="quote-block">"Justin Schilling is an incredible actor and has gone above and beyond contributing to the productions I have worked with him on.  He's witty, quick thinking, engaging, and most of all committed to the production.  You can always count on him to deliver a high quality, stellar performance."</div>
            <div className="credit-block">Max Phillips, Director & Writer of "Library of Mabel Jones".</div>
          </div>
        </div>
        <div className="swiper-scrollbar swiper-scrollbar-testimonial"></div>
      </div>
    )
  }
}

export default Testimonial;
