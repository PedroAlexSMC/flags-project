import React from 'react'
import Card from './Card';
import styled from 'styled-components';

const CardLink = styled.a`
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
      <>
      {names.map((item, key) => {
        return !item ? '' :(
          <CardLink onClick={()=>handleClick(item)}>
          <Card key={key} flag={item.flags.png} country={item.name.common} population={item.population} region={item.continents} capital={item.capital}></Card>
          </CardLink>
        );
      })}
      </>
    )
  }else{
    return(
      <>
      {data.map((item, key) => {
        return !item ? '' :(
          <CardLink onClick={()=>handleClick(item)}>
          <Card key={key} flag={item.flags.png} country={item.name.common} population={item.population} region={item.continents} capital={item.capital}></Card>
          </CardLink>
        );
      })}
      </>
    )
  }
  }
  return (
    <>
      {renderFlags()}
    </>
  )
}
