import { Parallax } from 'react-parallax';

const Cover = ({title, paragraph, img}) => {
    return (
       <div>
         <div  
        //  style={{backgroundImage: `url(${img})`}}
         >
 

</div>


<Parallax className="hero h-[700px]" blur={2} bgImage={img} bgImageAlt="the cat" strength={200}>
<div className="hero-overlay bg-opacity-60 bg-black">
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">{paragraph}</p>
    </div>
  </div>
  </div>
      </Parallax>


       </div>

 
    );
};

export default Cover;