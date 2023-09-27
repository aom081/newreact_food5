import React, { useState } from 'react';
import './App.css'
import Card from './components/card';
import CardPost from './components/CardPost';
import CardAll from './components/CardAll';
import Search from './components/search';


function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchText, setSearchText] = useState('');

  function OnCardOpenClick(theCrad) {
    setSelectedCard(theCrad);
  }

  function handleBack() {
    setSelectedCard(null);
  }

  const cardElements = CardAll.filter((CardT) =>{
    return CardT.title.includes(searchText);
  }).map((CardT, index) => {
    return <Card key={index} CardT={CardT} onCardClick={OnCardOpenClick}  />;
  });

  let cardPost = null;
  if (!!selectedCard) {
    cardPost = <CardPost CardT={selectedCard} OnBack={handleBack} />
  }

  return (
    <div className='app'>
      <header>
          <h4 className='app-header'>  ภัตตาคาร ขยะ!! </h4>
      </header>
      <Search value={searchText} onValueChange={setSearchText} />
      <div className='app-grid'>
        {cardElements}

      </div>
       {cardPost} 
    </div>
  )
}

export default App
