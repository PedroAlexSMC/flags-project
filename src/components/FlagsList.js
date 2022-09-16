import React from 'react'
import Card from './Card';
import styled from 'styled-components';

const cardLink = styled.a`
  cursor: pointer;
  width: auto;
  height: auto;
`

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
          <cardLink onClick={()=>handleClick(item)}>
          <Card key={key} flag={item.flags.png} country={item.name.common} population={item.population} region={item.continents} capital={item.capital}></Card>
          </cardLink>
        );
      })}
      </div>
    )
  }else{
    return(
      <div>
      {data.map((item, key) => {
        return !item ? '' :(
          <cardLink onClick={()=>handleClick(item)}>
          <Card key={key} flag={item.flags.png} country={item.name.common} population={item.population} region={item.continents} capital={item.capital}></Card>
          </cardLink>
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

{/* <>
            <img alt={`Flag of ${item.name.common}`} src={item.flags.png}></img>
            <p key={key}>{item.name.common}</p>
            <button type='button' onClick={()=>handleClick(item)}>More data</button>
          </> */}