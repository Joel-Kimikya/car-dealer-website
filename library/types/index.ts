import { StaticImageData } from 'next/image';

export interface IOwner {
  name: string;
  age: number;
}

export type ICard = {
  rating: string;
  title: string;
  description: string;
  price: string;
  image: StaticImageData;
};

export interface IAdd {
  a: number;
  b: number;
}
