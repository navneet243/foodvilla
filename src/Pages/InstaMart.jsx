import React, { useState } from 'react'

const Section = ({title,description,isVisible,setIsVisible}) => {
  return (
    <div className='bg-orange-200 m-3 p-2'>
      <div className='flex'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        {
          isVisible
          ? <button className='px-5' onClick={() => setIsVisible(false)}>hide</button> 
          : <button className='px-5' onClick={() => setIsVisible(true)}>show</button>
        }
      </div>
      {isVisible && <p>{description}</p>}
    </div>
  )
}

const InstaMart = () => {
  const [visibleSection, setvisibleSection] = useState("about")
  return (
    <div>
        <Section 
          isVisible={visibleSection==="about"}
          setIsVisible={() => setvisibleSection("about")}
          title={'About Instamart'}
          description={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'}
        />
        <Section 
          isVisible={visibleSection==="team"}
          setIsVisible={() => setvisibleSection("team")}
          title={'Team Instamart'}
          description={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'}
        />
        <Section 
          isVisible={visibleSection==="contact"}
          setIsVisible={() => setvisibleSection("contact")}
          title={'Contact Instamart'}
          description={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'}
        />
    </div>
  )
}

export default InstaMart