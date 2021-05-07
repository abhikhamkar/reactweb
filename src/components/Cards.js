import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Idea's!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={'https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}
              text='“The home should be the treasure chest of living.” – Le Corbusier '
              label='Space'
              path='/services'
            />
            <CardItem
              src={'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80'}
              text='“We shape our homes and then our homes shape us.” – Winston Churchill'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={'https://images.unsplash.com/photo-1539693010221-cd218dfe6565?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}
              text='“A room is not a room without natural light.” – Louis Kahn'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={'https://images.unsplash.com/photo-1559310278-18a9192d909f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'}
              text='“Real comfort, visual and physical, is vital to every room.” – Mark Hampton'
              label='Adornment'
              path='/products'
            />
            <CardItem
              src={'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}
              text='“No pattern should be without some sort of meaning.” – William Morris'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
