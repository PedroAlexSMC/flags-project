import React from 'react'

export default function FlagsList({data, search, modal, modalData}) {
    
    function handleClick(data){
        modalData(data);
    }

  function renderFlags(){
    if(search !== ''){
    const names = data.filter(item=>{
      let name = item.name.common.trim().toLowerCase()
      if(name.includes(search.trim().toLowerCase())) {
        return item
      }
      else{
        return ''
      }
    })
    console.log(names)
    return (
      <div>
      {names.map((item, key) => {
        return !item ? '' :(
          <>
            <img alt={`Flag of ${item.name.common}`} src={item.flags.png}></img>
            <p key={key}>{item.name.common}</p>
            <button type='button' onClick={()=>handleClick(item)}>More data</button>
          </>
        );
      })}
      </div>
    )
  }else{
    return(
      <div>
      {data.map((item, key) => {
        return !item ? '' :(
          <>
            <img alt={`Flag of ${item.name.common}`} src={item.flags.png}></img>
            <p key={key}>{item.name.common}</p>
            <button type='button' onClick={()=>handleClick(item)}>More data</button>
          </>
        );
      })}
      </div>
    )
  }
  }
  return (
    <>
      {renderFlags()}
    </>
  )
}
