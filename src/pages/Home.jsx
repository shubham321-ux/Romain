import React from "react";
import PageTransition from "../componenets/PageTransition";
import Section1 from "../componenets/Section1";
import Section2 from "../componenets/Section2";
import FormSection from "../componenets/FormSection";
import Toprated from "../componenets/Toprated";
import CampingGr from "../componenets/CampingGr";
import HikingDiv from "../componenets/HikingDiv";
import Hikingcard2 from "../componenets/Hikingcard2";
import SocialCards from "../componenets/SocialCards";
import Blogsection from "../componenets/Blogsection";
import Naturepictur from "../componenets/Naturepictur";
import Instagram from "../componenets/Instagram";
import ImageHover from "../componenets/ImageHover";
import moutains from "../assets/mountains.avif";
import mountain from "../assets/mouintaion.jpeg";
import mountman from "../assets/mountman.png";
import parasuit from "../assets/parasuit.png";
import Card from "../componenets/Card";
import tentSVG from "../assets/tentSVG.svg";
import fireSVG from "../assets/fireSVG.svg";
import wifiSVG from "../assets/wifiSVG.svg";
import map from "../assets/map.png";
import cointainerSVG from "../assets/cointainerSVG.svg";
import toiletSVG from "../assets/toiletSVG.svg";
import freezerSVG from "../assets/freezerSVG.svg";
import tent from "../assets/tent.png";
import hikingsvg from "../assets/hikesvg.svg";
import hinkingSvg from "../assets/hikingSvg.svg";
import profile from "../assets/socialpic.svg";
import blogimg from "../assets/blogimg.png";
import shimlaimage from "../assets/Travelling.png"
import travelimage from "../assets/bagtravle.png"

const Home = () => {
  const sectionData = {
    titleData: {
      style: false,
      title: "Book",
      subtitle: "Book Your Dream Vacation now",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type into electronic typesetting, remaining essentially unchanged."
    },
    cards: [
      {
        images: [tent, tent, tent],
        autoSlideDelay: 4000,
        title: "Shimla",
        rating: "4.5",
        reviews: "200",
        persons: "2-4",
        area: "30m2",
        isColumn: false,
        attachments: [tentSVG, fireSVG, fireSVG, wifiSVG, cointainerSVG, toiletSVG]
      },
      {
        images: [tent, tent, tent],
        autoSlideDelay: 5000,
        title: "Mountain View",
        rating: "4.5",
        reviews: "200",
        persons: "2-4",
        area: "30m2",
        isColumn: false,
        attachments: [tentSVG, fireSVG, wifiSVG, cointainerSVG, toiletSVG, freezerSVG]
      }
    ]
  };
  
  const topratedData = {
    titleData: {
      mainTitle: "Packages",
      subTitle: "Featured Activities"
    },
    cards: [
      {
        images: [tent, tent, tent],
        autoSlideDelay: 4000,
        title: "Mountain View",
        rating: "4.5",
        reviews: "200",
        persons: "2-4",
        area: "30m2",
        attachments: [tentSVG, fireSVG, wifiSVG, cointainerSVG, toiletSVG, freezerSVG]
      },
      {
        images: [tent, tent, tent],
        autoSlideDelay: 5000,
        title: "Mountain View",
        rating: "4.5",
        reviews: "200",
        persons: "2-4",
        area: "30m2",
        attachments: [tentSVG, fireSVG, wifiSVG, cointainerSVG, toiletSVG, freezerSVG]
      }
    ],
    buttonText: "SEE MORE"
  };

  const campingData = {
    titleData: {
      mainTitle: 'Camping Grounds',
      subTitle: 'Top Rated Packages',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type into electronic typesetting, remaining essentially unchanged.'
    }
  };


  const hikingDivData = {
    titleData: {
      mainTitle: "Activities",
      subTitle: "Change the way you travel, be closerto nature. Take a second to appreciateevery beauty",
      endless: true
    },
    mapImage: map,
    hikingData: [
      {
        image: hikingsvg,
        title: "Hiking",
        description: "Experience the thrill of mountain hiking with our expert guides."
      },
      {
        image: hikingsvg,
        title: "Camping",
        description: "Set up camp under the stars and enjoy the wilderness experience."
      },
      {
        image: hikingsvg,
        title: "Trekking",
        description: "Explore challenging trails and discover hidden natural wonders."
      },
      {
        image: hikingsvg,
        title: "Adventure",
        description: "Join us for exciting outdoor adventures and memorable experiences."
      }
    ]
  };
  
  const data = {
    titleData: {
      title: "Hiking",
      subTitle: "Hiking in the Hills"
    },
    hikingData: [
      {
        id: 1,
        title: "Hiking",
        img: hinkingSvg,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 2,
        title: "Hiking",
        img: hinkingSvg,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 1,
        title: "Hiking",
        img: hinkingSvg,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 2,
        title: "Hiking",
        img: hinkingSvg,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 1,
        title: "Hiking",
        img: hinkingSvg,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 2,
        title: "Hiking",
        img: hinkingSvg,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
      
    ]
  }

  const datainstagram = {
    titleData: {
      title: "Instagram",
      subTitle: ""
    },
    images: [
      travelimage,
      travelimage,
      travelimage,
      travelimage,
      travelimage,
      travelimage,
      travelimage,
      travelimage,
      travelimage,
      travelimage,
      travelimage
    ]
  };
  
  <Instagram {...data} />
  

  const datasocial = {
    socialData: [
      {
        rating: 4.5,
        name: "John Doe",
        pic: profile,
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        from: "New York, USA"
      },
      {
        rating: 4,
        name: "John Doe",
        pic: profile,
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        from: "New York, USA"
      },
      {
        rating: 4,
        name: "John Doe",
        pic: profile,
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        from: "New York, USA"
      }
    ]
  };
  

  const blogdata = {
    titleData: {
      title: "Blog",
      subTitle: "Our Latest News"
    },
    blogData: [
      {
        title: "Home is where RV is",
        img: blogimg,
        date: "1",
        month: "Jun",
        place: "California",
        author: "Melissa Burton",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttonText: "SEE ALL PACKAGES"
      },
      {
        title: "Adventure Awaits",
        img: blogimg,
        date: "15",
        month: "Jul",
        place: "Colorado",
        author: "John Smith",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttonText: "SEE ALL PACKAGES"
      },
      {
        title: "Adventure Awaits",
        img: blogimg,
        date: "15",
        month: "Jul",
        place: "Colorado",
        author: "John Smith",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttonText: "SEE ALL PACKAGES"
      }
    ]
  };
  
  
  const datanewsletter = {
    titleData: {
      style: false,
      title: "Our Journey",
      subtitle: "The Path Ahead",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type into electronic typesetting, remaining essentially unchanged."
    },
    gridData: [
      {
        image: shimlaimage,
        name: 'Mountain Trek',
        description: 'Experience the thrill of mountain climbing'
      },
      {
        image: shimlaimage,
        name: 'Forest Trail',
        description: 'Discover hidden paths in dense forests'
      },
      {
        image: shimlaimage,
        name: 'Beach Adventure',
        description: 'Explore coastal wonders and marine life'
      },
      {
        image: shimlaimage,
        name: 'Forest Trail',
        description: 'Discover hidden paths in dense forests'
      },
      {
        image: shimlaimage,
        name: 'Beach Adventure',
        description: 'Explore coastal wonders and marine life'
      },
      {
        image: shimlaimage,
        name: 'Beach Adventure',
        description: 'Explore coastal wonders and marine life'
      }
      
    ]
  };
  
  <Naturepictur {...data} />
  
  

  
  


  

  
  
  return(<>
  <PageTransition>
  <Section1
  mountainImage={mountain}
  mountmanImage={mountman}
  parasuitImage={parasuit}
  mainText="ROA MIN"
  secondText="TRIBE"
  fontSize="200px"
  secondFontSize="48px"
/>



<Section2 {...sectionData} />
  <FormSection/>
  <Toprated {...topratedData} />
  <CampingGr {...campingData} />
  <HikingDiv {...hikingDivData} />
  <Hikingcard2 {...data} />
  <SocialCards {...datasocial} />
  <Blogsection {...blogdata} />
  <Naturepictur {...datanewsletter} />
  <Instagram {...datainstagram} />
  <ImageHover imageUrl={moutains} />
  </PageTransition>
  </>)
 
};
export default Home;
