import Head from 'next/head'

export type ItemType = {
  type: "large" | "small" |"banner" ;
  img?: string;
  text?: string;
}
const config = [
  {
    type: "large",
    img: "/images/img001.png",
  },
  {
    type: "small",
    img: "/images/img002.png",
  },
  {
    type: "small",
    img: "/images/img003.png",
  },
  {
    type: "banner",
    text: "lorem ipsum",
  },
  {
    type: "small",
    img: "/images/img002.png",
  },
  {
    type: "small",
    img: "/images/img003.png",
  },
  {
    type: "large",
    img: "/images/img001.png",
  },
]

export default function HomePage() {

const BuildSectionComponent = (item: ItemType, index: Number) => {
  const {type, img, text} = item
  switch (item.type) {
    case "large": 
    return <SectionLarge {... item}key={'SetionLarge-${index}'} />
    case "small": 
    return <SectionSmall {... item} key={'SetionSmall-${index}'} />
    case "banner": 
    return <SectionBanner {... item} key={'SetionBanner-${index}'} />
    default:
      return <></>

  }

}


  return (
    <>
      <Head>
        <title>Pagina de javo w6</title>
        <meta name="description" content="workshop6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" ></link>
      </Head>
      <main className= "stretch">
             <Home />
       {config.map((item,index) => BuildSectionComponent(item,index))}

      </main>
    </>
  )
}

export const Home = () => { 
  return (
    <div className='Home stretch'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col w-fit-content d-flex'>
            <h1 className='f-80 c-white'><b>aire</b></h1>
          </div>
          <div className='col w-fit-content d-flex flex-column mt-3'>
            <p className='mb-0 f-33 c-black lh-34'><b>diseño</b></p>
            <p className='mb-0 f-33 c-black lh-34'><b>audivisual</b></p>
            <p className='mb-0 f-33 c-black lh-34'><b>comunicacion</b></p>
          </div>
        </div>
      </div>
    </div>
   
  )

}

export const SectionLarge = ({type, img, text} : ItemType) => { 
  return (
    <div className='Section SectionLarge col-12' style={{backgroundImage:'url(${img})'}}>

        <div className='row'>
          
        </div>
      </div>
  
   
  )

}

export const SectionSmall = ({type, img, text} : ItemType) => { 
  return (
    <div className='Section SectionSmall col-12 col-md-6' style={{backgroundImage:'url(${img})'}}>
     
        <div className='row'>
          
        </div>
      </div>
  
   
  )

}
export const SectionBanner = ({type, img, text} : ItemType) => { 
  return (
    <div className='Section SectionBanner col-12' style={{backgroundImage:'url(${img})'}}>
 
        <div className='row'>
          
        </div>
      </div>
  
   
  )

}