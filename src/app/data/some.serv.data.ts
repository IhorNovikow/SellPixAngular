export interface Review {
  date: Date;
  text: string;
  userid: string;
}

export interface Game {
  img: {
    big: string;
    average: string;
    small: string;
  };
  title: string;
  category: {
    new: Boolean;
    hit: Boolean;
    popular: Boolean;
    preview: Boolean;
    secondBaner: Boolean;
  };
  price: {
    priceOld: number;
    priceNow: number;
    discount: number;
  };
  mainPoints: {
    genre: string;
    activation: string;
    releaseDate: string;
    publisher: string;
    developer: string;
    region: string;
  };
  discription: {
    discription: string;
    systemRequirements: string;
    activation: string;
  };
  _id: number;
  photo: string[];
  reviews: Review[];
}
/*
`Видеоигра в жанре квест,
разработанная студией BlueTwelve Studio
и изданная компанией Annapurna Interactive.
Игра вышла 19 июля 2022 года для Windows,
PlayStation 4 и PlayStation 5. Ранее игра
была известна под названиями HK Project и
HK Devblog, которые происходят от давнего
блога её разработчиков. В игре рассказывается
о бродячем коте, который попадает в мир,
населённый роботами, и решает вернуться к
своей семье. Игра представляет собой приключенческую
игру от третьего лица. В ней есть элементы открытого
мира, а также упор, сделанный на атмосферу и искусство[4][5]. Игрок`
*/
export const ansverServ: Game[] = [
  {
    _id: 3417148,
    img: {
      big: './assets/photo/main-game/Battlefield_2042/baner/fon.png',
      average:
        './assets/photo/main-game/Battlefield_2042/average/battleField.jpg',
      small:
        './assets/photo/main-game/Battlefield_2042/average/battleField.jpg',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: true,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 30,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',
      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },
    photo: [
      './assets/photo/main-game/Battlefield_2042/photo/photo1.jpg',
      './assets/photo/main-game/Battlefield_2042/photo/photo2.jpg',
      './assets/photo/main-game/Battlefield_2042/photo/photo3.jpg',
      './assets/photo/main-game/Battlefield_2042/photo/photo4.jpg',
      './assets/photo/main-game/Battlefield_2042/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3415176,
    img: {
      big: './assets/photo/main-game/Stray/baner/F4tauV8VGO6x.jpg',
      average: './assets/photo/main-game/Stray/average/Stray.png',
      small: './assets/photo/main-game/Stray/average/Stray.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: false,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 20,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Stray/photo/photo1.jpg',
      './assets/photo/main-game/Stray/photo/photo2.jpg',
      './assets/photo/main-game/Stray/photo/photo3.jpg',
      './assets/photo/main-game/Stray/photo/photo4.jpg',
      './assets/photo/main-game/Stray/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3415403,
    img: {
      big: './assets/photo/main-game/Cities_Skylines/baner/cities_skylines.jpg',
      average:
        './assets/photo/main-game/Cities_Skylines/average/cities_skylines.png',
      small:
        './assets/photo/main-game/Cities_Skylines/average/cities_skylines.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: false,
      secondBaner: false,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 15,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Cities_Skylines/photo/photo1.jpg',
      './assets/photo/main-game/Cities_Skylines/photo/photo2.jpg',
      './assets/photo/main-game/Cities_Skylines/photo/photo3.jpg',
      './assets/photo/main-game/Cities_Skylines/photo/photo4.jpg',
      './assets/photo/main-game/Cities_Skylines/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3412445,
    img: {
      big: './assets/photo/main-game/Dead_Cells/baner/H2x1_NSwitch_DeadCells_image1600w.jpg',
      average: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
      small: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: false,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 25,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Dead_Cells/photo/photo1.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo2.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo3.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo4.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3415932,
    img: {
      big: './assets/photo/main-game/Dead_Cells/baner/H2x1_NSwitch_DeadCells_image1600w.jpg',
      average: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
      small: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: false,
    },
    price: {
      priceOld: 500,
      priceNow: 150,
      discount: 70,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Dead_Cells/photo/photo1.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo2.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo3.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo4.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3415034,
    img: {
      big: './assets/photo/main-game/Dead_Cells/baner/H2x1_NSwitch_DeadCells_image1600w.jpg',
      average: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
      small: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: false,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 20,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Dead_Cells/photo/photo1.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo2.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo3.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo4.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3424142,
    img: {
      big: './assets/photo/main-game/Dead_Cells/baner/H2x1_NSwitch_DeadCells_image1600w.jpg',
      average: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
      small: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: false,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 10,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Dead_Cells/photo/photo1.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo2.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo3.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo4.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3415027,
    img: {
      big: './assets/photo/main-game/Dead_Cells/baner/H2x1_NSwitch_DeadCells_image1600w.jpg',
      average: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
      small: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: false,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 15,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Dead_Cells/photo/photo1.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo2.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo3.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo4.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3435734,
    img: {
      big: './assets/photo/main-game/Dead_Cells/baner/H2x1_NSwitch_DeadCells_image1600w.jpg',
      average: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
      small: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: false,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 10,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Dead_Cells/photo/photo1.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo2.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo3.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo4.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3435760,
    img: {
      big: './assets/photo/main-game/Dead_Cells/baner/H2x1_NSwitch_DeadCells_image1600w.jpg',
      average: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
      small: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: false,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 50,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Dead_Cells/photo/photo1.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo2.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo3.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo4.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3435710,
    img: {
      big: './assets/photo/main-game/Dead_Cells/baner/H2x1_NSwitch_DeadCells_image1600w.jpg',
      average: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
      small: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: false,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 15,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Dead_Cells/photo/photo1.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo2.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo3.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo4.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
  {
    _id: 3414995,
    img: {
      big: './assets/photo/main-game/Dead_Cells/baner/H2x1_NSwitch_DeadCells_image1600w.jpg',
      average: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
      small: './assets/photo/main-game/Dead_Cells/average/deadCell.png',
    },
    title: '',
    category: {
      new: true,
      hit: true,
      popular: true,
      preview: true,
      secondBaner: false,
    },
    price: {
      priceOld: NaN,
      priceNow: NaN,
      discount: 10,
    },
    mainPoints: {
      genre: 'Экшен, Шутер',
      activation: 'Steam',
      releaseDate: '08 июля 2022',
      publisher: 'Forever Entertainment',
      developer: 'MegaPixel Studio S. A.',
      region: 'Россия и СНГ',
    },
    discription: {
      discription: '',

      systemRequirements: `ОС: Windows 10 (64-разрядная версия)
      Процессор (AMD): AMD Ryzen 5 1600
      Процессор (Intel): Core i5 6600K
      Память: 8ГБ ОЗУ
      Видеопамять: 4 ГБ
      Видеокарта (NVIDIA): NVIDIA GeForce® GTX 1050 Ti
      Видеокарта (AMD): AMD Radeon™ RX 560
      Версия DirectX: 12
      Требования к соединению с Интернетом: скорость 512 кбит/с или выше
      Место на жёстком диске: 100 ГБ`,
      activation: 'Steam',
    },

    photo: [
      './assets/photo/main-game/Dead_Cells/photo/photo1.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo2.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo3.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo4.jpg',
      './assets/photo/main-game/Dead_Cells/photo/photo5.jpg',
    ],
    reviews: [
      {
        date: new Date(),
        text: 'это перввый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это второй отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это третий отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это четвертый отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
      {
        date: new Date(),
        text: 'это мне надоело считать отзыв о данной игре',
        userid: '1212',
      },
    ],
  },
];








export interface News {
  preview: boolean;
  _id: string;
  img: {
    big: string;
    average: string;
    small: string;
  };
  statistics: {
    date: Date;
    view: number;
    coments: number;
  };
  title: string;
  discription: {
    mainText: string;
    subText: string;
  };
}
export const someNews: News[] = [
  {
    preview: true,
    _id: '1qwerty',
    img: {
      big: './assets/photo/news/news1/backgroundBaner.png',
      average: './assets/photo/news/news1/photoGame.png',
      small: './assets/photo/news/news1/cardBlog01.png',
    },
    statistics: {
      date: new Date(),
      view: 100,
      coments: 12,
    },
    title: 'Патч для Battlefield 2042',
    discription: {
      mainText: `С каждым годом всё заметнее
      становится тенденция на упрощение игр.
      Разработчики стремятся сделать свои проекты
      как можно более дружелюбными к самым разным
      типам игроков, увеличивая количество прав на
      ошибку и давая чрезмерно прямые указания в лоб.
      Для расширения охвата аудитории ли это сделано,
      или же современные творцы просто пересмотрели
      подходы к созданию игр, но подобное массовое
      упрощение несёт за собой определенные последствия.`,

      subText: `Первым делом следует разобрать, что
      же это за последствия, и какое влияние они
      оказывают на разных геймеров.
      Раньше игровая индустрия по
      многим причинам была развлечением
      нишевым. Ещё двадцать лет назад
      количество людей, увлекающихся играми,
      было в разы меньше относительно нашего
      времени. У разработчиков были развязаны
      руки — геймеры, которым особо не с чем было
      сравнить удобство игр того времени, просто
      занимались их прохождением, не сильно жалуясь
      на ужасный геймдизайн или несбалансированность
      сегментов. И при этом получали удовольствие.
      Создатели же могли особо не забивать себе голову
      тем, чтобы людям было комфортно в это играть, так
      что они могли тщательнее сконцентрироваться на
      реализации идей, от части которых приходилось бы
      отказываться в угоду удобству.`,
    },

  },
  {
    preview: false,
    _id: '2qwerty',
    img: {
      big: './assets/photo/news/news1/backgroundBaner.png',
      average: './assets/photo/news/news1/photoGame.png',
      small: './assets/photo/news/news2/cardBlog02.png',
    },
    statistics: {
      date: new Date(),
      view: 23432,
      coments: 232432,
    },
    title: 'Новое обновление Cyberpunk',
    discription: {
      mainText: `С каждым годом всё заметнее
      становится тенденция на упрощение игр.
      Разработчики стремятся сделать свои проекты
      как можно более дружелюбными к самым разным
      типам игроков, увеличивая количество прав на
      ошибку и давая чрезмерно прямые указания в лоб.
      Для расширения охвата аудитории ли это сделано,
      или же современные творцы просто пересмотрели
      подходы к созданию игр, но подобное массовое
      упрощение несёт за собой определенные последствия.`,

      subText: `Первым делом следует разобрать, что
      же это за последствия, и какое влияние они
      оказывают на разных геймеров.
      Раньше игровая индустрия по
      многим причинам была развлечением
      нишевым. Ещё двадцать лет назад
      количество людей, увлекающихся играми,
      было в разы меньше относительно нашего
      времени. У разработчиков были развязаны
      руки — геймеры, которым особо не с чем было
      сравнить удобство игр того времени, просто
      занимались их прохождением, не сильно жалуясь
      на ужасный геймдизайн или несбалансированность
      сегментов. И при этом получали удовольствие.
      Создатели же могли особо не забивать себе голову
      тем, чтобы людям было комфортно в это играть, так
      что они могли тщательнее сконцентрироваться на
      реализации идей, от части которых приходилось бы
      отказываться в угоду удобству.`,
    },
  },
  {
    preview: false,
    _id: '3qwerty',
    img: {
      big: './assets/photo/news/news1/backgroundBaner.png',
      average: './assets/photo/news/news1/photoGame.png',
      small: './assets/photo/news/news3/cardBlog03.png',
    },
    statistics: {
      date: new Date(),
      view: 11230,
      coments: 222312,
    },
    title: 'Starfield перенесли',
    discription: {
      mainText: `С каждым годом всё заметнее
      становится тенденция на упрощение игр.
      Разработчики стремятся сделать свои проекты
      как можно более дружелюбными к самым разным
      типам игроков, увеличивая количество прав на
      ошибку и давая чрезмерно прямые указания в лоб.
      Для расширения охвата аудитории ли это сделано,
      или же современные творцы просто пересмотрели
      подходы к созданию игр, но подобное массовое
      упрощение несёт за собой определенные последствия.`,

      subText: `Первым делом следует разобрать, что
      же это за последствия, и какое влияние они
      оказывают на разных геймеров.
      Раньше игровая индустрия по
      многим причинам была развлечением
      нишевым. Ещё двадцать лет назад
      количество людей, увлекающихся играми,
      было в разы меньше относительно нашего
      времени. У разработчиков были развязаны
      руки — геймеры, которым особо не с чем было
      сравнить удобство игр того времени, просто
      занимались их прохождением, не сильно жалуясь
      на ужасный геймдизайн или несбалансированность
      сегментов. И при этом получали удовольствие.
      Создатели же могли особо не забивать себе голову
      тем, чтобы людям было комфортно в это играть, так
      что они могли тщательнее сконцентрироваться на
      реализации идей, от части которых приходилось бы
      отказываться в угоду удобству.`,
    },
  },
];
