export interface GameMongo{
  _id: string
  digiSellerID: string
  img: {
    average: string
    big: string
  }
  title:string
  category:{
    hit:boolean
    new:boolean
    popular:boolean
    preview:boolean
    secondBaner:boolean
  }
  price: {
    discount:number,
    priceNow: number;
  }
  mainPoints:{
    activation: string
    developer: string
    genre: string
    publisher: string
    region: string
    releaseDate: string
  }
  discription:{
    activation: string
    discription: string
    systemRequirements:string
  }
  linkSell:string
  photo:string[]
}
