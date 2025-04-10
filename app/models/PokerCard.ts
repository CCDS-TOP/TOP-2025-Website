// Enumerations for Suit and Rank
export enum Suit {
    Spades = 'Spades',
    Hearts = 'Hearts',
    Diamonds = 'Diamonds',
    Clubs = 'Clubs',
  }
  
  export enum Rank {
    Ace = 'Ace',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
    Ten = '10',
    Jack = 'Jack',
    Queen = 'Queen',
    King = 'King',
  }
  
  // Constructing a card type from Suit and Rank
  export type PokerCard = `${Rank} of ${Suit}`;
  