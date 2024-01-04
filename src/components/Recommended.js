import React, { useEffect, useRef } from 'react';

const Recommended = ({ setRecommended, setRecommBy }) => {
  const Recommref = useRef(null);



  useEffect(() => {
    const handleclick = (e) => {
      if (e.target != Recommref.current) {
        setRecommBy(e.target.innerText)
        setRecommended(false)
      }
    }
    Recommref.current.addEventListener('click', handleclick)

  }, [])
  return (
    <div className='recomm_container' ref={Recommref}>
      <p style={{ fontWeight: "bolder" }} >✔️Recommended</p>
      <p className='recomm_list_name'>NEWEST FIRST</p>
      <p className='recomm_list_name'>POPULAR</p>
      <p className='recomm_list_name'>PRICE:HIGH TO LOW</p>
      <p className='recomm_list_name'>PRICE:LOW TO HIGH</p>
    </div>
  )
}

export default Recommended
