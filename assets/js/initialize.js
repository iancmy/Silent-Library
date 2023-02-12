import User from "./Users.js";

// books json array
const booksArray = [
  {
    title: "Cowboys",
    author: "Lucille Recht Penner",
    genre: "selfhelp",
    description:
      "Depicts how cowboys lived in the Old West, describes their methods of raising cattle, and discusses their pastimes",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=NFnqumxakqoC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=NFnqumxakqoC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f10590-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A Collection of Picture Books",
    author: "ALLISON. JONES",
    genre: "children",
    description: "No description",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f10591-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Key to the Treasure",
    author: "Peggy Parish",
    genre: "graphicnovel",
    description:
      "For use in schools and libraries only. While spending the summer on their grandparents' farm, Liza, Bill, and Ted unravel a series of coded clues that solve a family mystery.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f10592-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Otto and the Secret Light of Christmas",
    author: "Nora Surojegin",
    genre: [],
    description:
      'Otto, an elfin adventurer, finds a postcard on the seashore showing pictures of beautiful sparkling lights in the night sky with the words, "The light of Christmas!" Otto decides he must find this brightness. So he heads north, trudging through the dark forests and skiing towards the fells of Lapland, in search of the secret light of Christmas.',
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=YK6IjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=YK6IjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f10593-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Egypt",
    author: "Jeff Reynolds",
    genre: "history",
    description:
      "Describes the geography, history, culture, industry, and people of England",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=kIIKAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=kIIKAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f10594-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Mickey McGuffin's Ear",
    author: "John Hall",
    genre: "graphicnovel",
    description:
      "\"Ever know a kid who had trouble listening? Was that kid maybe even you? Then you'll understand why our hero says: 'It's not an easy job to hear all that stuff...'\"--Jacket.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=OA6aAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=OA6aAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f10595-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Caring Animals",
    author: "Rosanna Hansen",
    genre: "horror",
    description:
      "Describes a variety of animals who help people with disabilities, including dolphins who assist people with paralysis and a seeing-eye horse.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=RlLtaAtfKrEC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=RlLtaAtfKrEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f10596-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Kids Pick the Funniest Poems",
    author: "Bruce Lansky",
    genre: "history",
    description:
      "Contents: Being a kid.--Parents.--Brothers and sisters.--Friends.--School days.--Disasters.--Monsters.--Strange stories.--Advice.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=LFssSHPJyYMC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=LFssSHPJyYMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f10597-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "One God, One You",
    author: "Jason Crabb",
    genre: "shortstory",
    description:
      'Evan is a young boy who loves to sing and play his ukulele. At a Jason Crabb concert, he receives an unexpected present: his very own Jase the Crabb(r). In his dream-land adventure with Jase, (r) Evan learns just how special and important his love of music is. He discovers that the things he enjoys doing most are gifts from God gifts with a purpose and a perfect plan straight from heaven."',
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Vp3UmgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Vp3UmgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f10598-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Silver Door",
    author: "Holly Lisle",
    genre: "science&tech",
    description:
      "When Genna is chosen as the Sunrider of prophecy, her destiny is to unite the magic of the sun and the moon for the good of both Nightlings and humans.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Sj5MWqEPsDkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Sj5MWqEPsDkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f10599-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Nils, the Island Boy",
    author: "Unknown",
    genre: "graphicnovel",
    description:
      "On a small island in the south of Denmark there stands a little Danish house with a red roof and a big chimeny. In that house lives Nils, with his mother and his father and a little bit of a sister, no bigger than a doll.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=lsleiGakE_gC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=lsleiGakE_gC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f1059a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Tomorrow Girls #1: Behind the Gates",
    author: "Eva Gray",
    genre: "scifi",
    description:
      "In 2020, America has been changed by hurricanes, earthquakes, and revolution. The world is at war. For four 13-year-old girls, the war means being sent away for their own safety. But Louisa, Maddie, Rosie, and Evelyn are about to find out that nothing is safe--and they have only each other to rely on now.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f1059b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Atlantis",
    author: "Unknown",
    genre: "action&adventure",
    description: "No description",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f1059c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Ducks",
    author: "Ralph Whitlock",
    genre: "romance",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=pczLv__OEfsC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=pczLv__OEfsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f1059d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Each Moment a Smile",
    author: "Susan Sister",
    genre: "scifi",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f1059e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Elsa",
    author: "Joy Adamson",
    genre: "art&photog",
    description:
      "A record of an adopted lion cub that was later tained for her return to the wild.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=MioOAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=MioOAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f1059f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "You Wouldn't Want to Live Without Soap!",
    author: "Alex Woolf",
    genre: "essays",
    description:
      "For use in schools and libraries only. Would you rather put your grubby clothes in the washing machine, or take them down to the river and beat the dirt out of them? You re lucky to have the choice! Soaps and detergents are among the great benefits of modern life. They help to keep us comfort",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=NUw4jgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=NUw4jgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105a0-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Ghost at Dawn's House",
    author: "Ann M. Martin",
    genre: "scifi",
    description:
      "The members of the Baby-sitters Club split their time between babysitting and investigating the spooky noises behind Dawn's bedroom wall.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f105a1-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Amazing Animals of the the World 2",
    author: "Grolier",
    genre: "graphicnovel",
    description:
      "Amazing Animals of the World 2 brings you pictures of 400 fascinating creatures and important information about how and where they live.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=IWWFRAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=IWWFRAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105a2-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Henry's Leg",
    author: "Ann Pilling",
    genre: "romance",
    description: "No description",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=DYWzQAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=DYWzQAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105a3-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Budding Ballerina",
    author: "Jane O'Connor",
    genre: "essays",
    description:
      "When Fancy Nancy learns that her father and the rest of her family have a lot to learn about ballet, she decides to open up her own ballet school.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=nDyNnAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=nDyNnAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105a4-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "An American Tail",
    author: "Emily Perl Kingsley",
    genre: "science&tech",
    description:
      "Separated from his family during the boat trip from Russia to America, a young immigrant mouse arrives in New York City aboard a bottle and shares adventures with fellow immigrants from many different countries.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=lvCWM-iW7JkC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=lvCWM-iW7JkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105a5-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Friends Learn Ballet",
    author: "Janeen Brian",
    genre: "art&photog",
    description:
      "Ellie practices ballet steps with her friend Natalie and both dream of becoming ballet dancers. Includes a vocabulary list, discussion questions, and a note for grownups.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sEAZiIiZEJYC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sEAZiIiZEJYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105a6-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Body Shout",
    author: "P.C. Butler",
    genre: "science&tech",
    description:
      'Sure, there\'s a party "in your mouth" as you gobble up your favorite fast foods and wash them down with sweet, sugary drinks, but what if "the rest of your body" could tell you how those choices make them feel? Body Shout is a quirky short story about how our everyday habits affect our bodies and why we should make smart, healthy decisions. Body Shout is creatively written and illustrated, and speaks from a unique, but wise perspective. Entertaining and educational for all ages, its message is both timeless and timely.',
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f105a7-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Fire Trucks and Rescue Vehicles",
    author: "Jean Coppendale",
    genre: "shortstory",
    description:
      "See photographs of real rescue vehicles in action while reading about the job each one performs.--Amazon.com.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=r4KMNAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=r4KMNAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105a8-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Fuzzwippers Have Feelings Too",
    author: "Marilynn Halas",
    genre: "children",
    description:
      "From the Fuzzwipper series, Fuzzardan is bullied by Festus because of his blue fur until his human friend helps him find the true source of Festus' problem and all end up being friends.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_2e2MQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_2e2MQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105a9-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Youth and Crime",
    author: "John Muncie",
    genre: "shortstory",
    description:
      "A newly updated and significantly expanded fifth edition of Youth and Crime. The most comprehensive and authoritative textbook on youth crime and youth justice available.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sbrYzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sbrYzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105aa-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "If Not Me, Then Who?",
    author: "Kwame Osei",
    genre: "essays",
    description: "No description",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=t-66oQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=t-66oQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105ab-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Hello, We're the Fuzzwippers",
    author: "Marilynn Halas",
    genre: "action&adventure",
    description:
      "Winner of the Mom's Choice Award, Fuzzwippers are friendly creatures that reach out to anyone who needs to be assured they are wanted and needed. Children of all ages will be fascinated by these new-found friends who whisper to them in the language of Imaginarius and accompany them wherever they go. Introduce your children to their very own Fuzzwippers! Hello, We're the Fuzzwippers is the first book of the Fuzzwipper series which promotes self-esteem, socio-emotional health, and life skills for children through the power of story.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ll5jLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ll5jLwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105ac-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "One's Own Self",
    author: "Unknown",
    genre: "essays",
    description: "No description",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f105ad-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Junior Pet Care",
    author: "Zuza Vrbova",
    genre: "essays",
    description: "A guide to the purchase, training, and care of kittens.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=MzfLzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=MzfLzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105ae-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Grizzly",
    author: "Annabel Johnson",
    genre: "essays",
    description:
      "A young boy and his estranged father find themselves united, for the first time on a camping trip, by facing the sinister threat of a grizzly bear.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=vD5kAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=vD5kAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105af-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Risk Factors and Characteristics of Juvenile Sexual Offenders with Psychopathic Personality Traits",
    author: "Gipsy Juliette Alvarez de la Campa",
    genre: "history",
    description:
      "Although juveniles make up a relatively small percentage of the population, they tend to be overrepresented in sexual crime statistics (Sickmund & Puzanchera, 2014). Multiple factors influence the likelihood that an adolescent will engage in a sexual offense (Price 2014; Prisco, 2015; Vizard 2004; Vizard et al., 2007; Weinrott, 1997; Withington et al., 2013). One such factor commonly identified in the literature is psychopathy; a significant risk factor for engagement in criminal activity as well as recidivism. The purpose of the current literature review was to attempt to integrate the existing research regarding JSOs with personality traits of psychopathy. The current paper attempted to answer three questions: (1) What are the characteristics and risk factors associated with sexual offending in JSOs with psychopathic personality traits? (2) What are the characteristics and risk factors associated with recidivism in JSOs with psychopathic personality traits? (3) Can a typology be identified for JSOs with psychopathic personality traits? There is limited research regarding this particular group of JSOs. A review of the literature was conducted utilizing electronic databases to identify relevant, peer reviewed articles. The existing research suggests that psychopathic JSOs tend to engage in both general and sexual offending. A combination of psychopathy and sexual inadequacy/deviance is the most robust risk factor for sexual recidivism. Existing risk assessment measures are only moderately predictive of sexual recidivism.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f105b0-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Circus",
    author: "Colin Maclean",
    genre: "fantasy",
    description: "Describes the sights and sounds of a circus.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f105b1-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Fuzzwippers Make Great Travelers",
    author: "Marilynn Halas",
    genre: "fantasy",
    description:
      "Winner of the Mom's Choice Award for excellence in family friendly media, Fuzzwippers Make Great Travelers empowers children to explore our world as they open their minds and hearts to embrace diversity and other cultures. The Fuzzwipper series includes tips for children and a parent's pointer too. The Fuzzwipper series promotes self-esteem, socio-emotional health, and life skills for children through the power of story. Fuzzany and Alexandra travel to Hawaii and learn that trying new things means making mistakes but that if you never give up, you will learn a little about a new skill, and a lot about yourself.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=OaK4kQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=OaK4kQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f105b2-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Cleopatra VII",
    author: "Kristiana Gregory",
    genre: "scifi",
    description:
      "While her father is in hiding after attempts on his life, twelve-year-old Cleopatra records in her diary how she fears for her own safety and hopes to survive to become Queen of Egypt some day.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f105b3-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Tell Time",
    author: "Peter Ralph",
    genre: "mystery",
    description: "No description",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f105b4-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Tell Me how Opposites",
    author: "A. M. Lefevre",
    genre: "mystery",
    description: "No description",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f105b5-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Comparison of Ages of Epiphyseal Union in North American and Bosnian Skeletal Material",
    author: "MC. Schaefer",
    genre: "children",
    description:
      "The accurate determination of age at death is a critical component in the analysis of human skeletal remains. Population specific techniques are often used without due consideration of the provenance of the material being studied. This communication considers the ages at which epiphyseal union occur in young Bosnian males and compares those findings to data published by McKern and Stewart on young North American soldiers killed during the Korean War. Of the ten epiphyses considered in this study, all elements were observed to be at least two years in advance in the Bosnian sample compared to the American sample. This article demonstrates that whilst standards based on an American sample produce broadly applicable age ranges for use on forensic work in the Balkans, the age ranges generated produce an upper age limit that is often two or more years older than the chronological age. Therefore, it is desirable, that wherever possible, appropriate standards should be devised for more accurate aging reflecting population specific profiles.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f105b6-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "While the Clock Ticked",
    author: "Franklin W. Dixon",
    genre: "art&photog",
    description:
      "A clock in a vacant house provides a clue to the whereabouts of a gang of harbor thieves",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f105b7-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Printed Books, Autographs, Maps and Decorative Graphics Including Art Books, Historical Autographs, Literature and Sets & Bindings ...",
    author: "Christie's East (Firm)",
    genre: "history",
    description: "No description",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f4d620-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Snowboard Standoff",
    author: "Scott Ciencin",
    genre: "essays",
    description:
      "Isaac Foster, captain of Team Rogue, is not sure what to expect from Kai Palakiko, who is new to snowboarding, but an expert surfer and a last minute addition to the team--can Kai adapt his talent in time for the big competition?",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=hqiY4ss4hTcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=hqiY4ss4hTcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d621-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Allosaurus",
    author: "Rob Shone",
    genre: "mystery",
    description:
      'In graphic novel format, describes Allosaurus, whose name means "strange lizard," examining what their lives may have been like.',
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=WchgEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=WchgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d622-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Nancy Drew #8: Global Warning",
    author: "Stefan Petrucha",
    genre: "mystery",
    description:
      "When Nancy, Bess, and George visit a new Bio-Dome facility equipped with different world environments and animals, Sasquatch appears within the Arctic dome, creating havoc and endangering the future of the facility.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=VHDYFqGCgNsC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=VHDYFqGCgNsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d623-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Neon Genesis Evangelion",
    author: "Yoshiyuki Sadamoto",
    genre: "essays",
    description:
      "After a profoundly disturbing vision leads Rei to sacrifice herself in combat against the penultimate Angel, Armisael, Kaworu takes the opportunity to try to get closer to his own target. But Shinji's anger and confusion at Kaworu's advances develop into even darker feelings. Older teens.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=fdvrGJ0PdKwC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=fdvrGJ0PdKwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d624-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Soccer Longshot",
    author: "C. J. Renner",
    genre: "fantasy",
    description:
      "Matty is the captain of the local soccer club, the Strikers, but he needs a girl named Lola and a group of streetballers to teach him to play with flare and intensity.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=OrGZzwqDeNQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=OrGZzwqDeNQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d625-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "BMX Breakthrough",
    author: "Carl Bowen",
    genre: [],
    description:
      "Since his accident Billy Cruz has lost some of his confidence and has been holding back when doing his BMX tricks--will he regain confidence in time for the next competition and sort out his feelings for the super-competitive Penny Allen?",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=M4yty_GX1Z4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=M4yty_GX1Z4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d626-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "End Zone Thunder",
    author: "Scott Ciencin",
    genre: "science&tech",
    description:
      "When Joans and Hank both want to be team captain, their competition hurts the teams chances at being state champions.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=M1Xb0WXwgTEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=M1Xb0WXwgTEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d627-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Odyssey; Based On Homer's Epic Poem",
    author: "Gareth Hinds",
    genre: "essays",
    description: "No description",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=nYGZ-iVt5c8C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=nYGZ-iVt5c8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d628-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Price of Victory",
    author: "Stewart Ross",
    genre: "selfhelp",
    description:
      "From falling statues to sinking boats, Pylades and his brother Kinesias, a champion athlete, are on a dangerous adventure when someone wants to murder Kinesias before he can compete at the Olympic Games in ancient Greece.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=p4CcZWhHhdcC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=p4CcZWhHhdcC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d629-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Octopus Island",
    author: "Erica Farber",
    genre: "history",
    description:
      "While on a school field trip, LC and his friends are shipwrecked on Octopus Island--said to be guarded by a giant octopus.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=CU9tAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=CU9tAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d62a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Power at the Plate",
    author: "Scott Ciencin",
    genre: "essays",
    description:
      "Luke Thorson is a good baseball player and a good student, but he is not as popular as his older half-brother Jake who is the team's captain and power hitter--can the two put aside their rivalry and work together to win the championship?",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=0aoo-N6xyvAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=0aoo-N6xyvAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d62b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Prince",
    author: "Erica Farber",
    genre: "science&tech",
    description:
      "LC tells his friends about his ancestor, Lionel Critter, who looked just like the prince, changed places with him, and was nearly crowned king.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=dLGns-qZP0kC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=dLGns-qZP0kC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d62c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Jaguar Paw Puzzle",
    author: "Erica Farber",
    genre: "horror",
    description:
      "While on a school field trip to visit his archaeologist uncle, LC and his friends help foil an international ring of smugglers when they recover a stolen Mayan statue.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=OBGnAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=OBGnAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d62d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Golden Eagle",
    author: "Erica Farber",
    genre: "essays",
    description:
      "While on a school field trip, LC meets an Indian who helps him catch the thief stealing eagles' eggs.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=xIXoAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=xIXoAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d62e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Terror Trail",
    author: "Stewart Ross",
    genre: "children",
    description:
      "The story of two Mauritanian children whose father's service to Rome had earned him citizenship, but were sold into slavery anyway.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=mOLFb_ZkwnUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=mOLFb_ZkwnUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d62f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Alien from Outer Space",
    author: "Erica Farber",
    genre: "fantasy",
    description:
      "The Critter Kids gather around the camp fire to listen to the story about what happened during the town's blackout.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=xh7iUYZnEU0C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=xh7iUYZnEU0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d630-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Swamp Thing",
    author: "Erica Farber",
    genre: "action&adventure",
    description:
      "While on a school trip to a nature sanctuary, LC and his friends investigate stories of the monster called the Swamp Thing.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=4pVeAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=4pVeAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d631-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "War Correspondents",
    author: "Rob Shone",
    genre: "science&tech",
    description:
      "Sketches featuring three famous war correspondents presented in graphic novel format accompany information about the history of war reporting and requirements for the job of war correspondent.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=cHxgEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=cHxgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d632-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Fantastic Fossils",
    author: "Rob Shone",
    genre: "scifi",
    description: "Describes various fossil finds in a graphic-novel format.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=9D4Pm44Xh9EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=9D4Pm44Xh9EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d633-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Out from Boneville",
    author: "Jeff Smith",
    genre: "mystery",
    description:
      "The adventure starts when cousins Fone Bone, Phoney Bone, and Smiley Bone are run out of Boneville and later get separated and lost in the wilderness, meeting monsters and making friends as they attempt to return home.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2dOACAh-SWUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=2dOACAh-SWUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d634-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Solving Crimes with Trace Evidence",
    author: "Gary Jeffrey",
    genre: "mystery",
    description:
      "Describes how pieces of trace evidence, including fingerprints, fibers, and blood, are used to help solve criminal investigations, and includes three case studies in graphic novel format that used the processing of trace evidence.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2cM9tHJr8bMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=2cM9tHJr8bMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d635-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Mary Shelley's Frankenstein",
    author: "Unknown",
    genre: "mystery",
    description:
      "A monster assembled by a scientist from parts of dead bodies develops a mind of his own as he learns to loathe himself and hate his creator. Kids.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=efvgnSsUWDEC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=efvgnSsUWDEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d636-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Jimmy Corrigan",
    author: "Chris Ware",
    genre: "horror",
    description:
      "A graphic novel chronicles four generations of the Corrigan men, from 1893 to 1983.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=B6kVBZ2hdI0C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=B6kVBZ2hdI0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d637-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "White Space is Not Your Enemy",
    author: "Rebecca Hagen",
    genre: "selfhelp",
    description:
      'Designing a website or brochure without an art background? Then step away from the computer and read this engaging, conversational introduction to visual communications first. Written for the beginner, White Space is Not Your Enemy, Second Edition, is a practical graphic design and layout guide that introduces the concepts and practices necessary for producing effective visual communication across a variety of formats--from web to print. This beautifully illustrated, full-color book covers all of the basics to help you develop your eye and produce evocative designs that work. Topics include: What is design? Pre-design research and brainstorming. The "works-every-time layout" and "13 layout sins." The elements and principles of design. Layouts for impact. Getting along with type. Choosing and using color. Working with photos and illustrations. Intros to infographics, storyboarding and multimedia components. Output for the web and print. Visit www.whitespacedesignbook.com for additional supporting materials.',
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=HgnczLnCZ30C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=HgnczLnCZ30C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d638-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Henry V",
    author: "John McDonald",
    genre: "mystery",
    description:
      "In graphic novel format, presents an adaptation of Shakespeare's classic tale about King Henry V's attempt to unite England under his rule.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=fb1TRwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=fb1TRwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d639-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Bob Marley",
    author: "Gary Jeffrey",
    genre: [],
    description:
      "Biography, in graphic novel format, of Bob Marley, the reggae music genius.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=cz0ib3cb3F4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=cz0ib3cb3F4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d63a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Astronauts",
    author: "David West",
    genre: "mystery",
    description:
      "Sketches featuring three famous astronauts presented in graphic novel format accompany information about the requirements for the job of astronaut.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=bnxgEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=bnxgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d63b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Bone",
    author: "Jeff Smith",
    genre: "selfhelp",
    description:
      "The Bone cousins, Gran'ma Ben, and a baby rat creature travel through fields of mysterious ghost circles to rescue Princess Thorn.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f4d63c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Nancy Drew #1: The Demon of River Heights",
    author: "Stefan Petrucha",
    genre: "scifi",
    description:
      "\"Join Nancy Drew, along with Bess and George, as they search for missing student filmmakers and discover the deadly secret behind the local urban myth known as 'The demon of River Heights'\"--P. [4] of cover.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=XMsVngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=XMsVngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d63d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "UFOs",
    author: "Gary Jeffrey",
    genre: "romance",
    description:
      "In graphic novel format, presents three events about unidentified flying saucers and human and alien encounters.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=N3T4olM8K28C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=N3T4olM8K28C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f4d63e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Time Travel Trap",
    author: "Dan Jolley",
    genre: "art&photog",
    description:
      "Another book in the graphic novel series which lets the reader create the action by choosing which plot path to follow.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=YRlOnwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=YRlOnwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d63f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Smurfs #7: The Astrosmurf",
    author: "Unknown",
    genre: "history",
    description:
      "Papa Smurf helps one of his little Smurfs to achieve a dream of becoming an Astrosmurf and traveling to an alien planet inhabited by Swoofs.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=RC1VngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=RC1VngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d640-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Robert Koch",
    author: "Thomas D. Brock",
    genre: "mystery",
    description:
      "Chronicles the life of Robert Koch, focusing on his contributions to the fields of medicine and bacteriology, discussing his research trips to India, findings on the causes of tuberculosis, cholera, and anthrax, postulates, Nobel Prize, and other related topics.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=rtxJvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=rtxJvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d641-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Bone 4",
    author: "Jeff Smith",
    genre: "scifi",
    description:
      "When he is fooled by the townsfolk into thinking that he is a skilled dragonslayer, Phoney Bone takes on the challenge to find the Red Dragon while Thorn deals with haunted dreams and missing Gran'ma Ben",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=F7OfPAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=F7OfPAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d642-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "L. Frank Baum's The Wizard of Oz",
    author: "L. Frank Baum",
    genre: "action&adventure",
    description:
      "A graphic novel version of the classic fantasy novel tells of Dorothy's adventures in the magical land of Oz.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=YQzYAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=YQzYAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d643-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Geronimo Stilton #6: Who Stole the Mona Lisa?",
    author: "Geronimo Stilton",
    genre: "horror",
    description:
      "When the Pirate Cats travel back in time to steal Leonardo da Vinci's Mona Lisa, Geronimo Stilton and his friends try to stop them.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=u8dKngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=u8dKngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d644-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Smurfs #8: The Smurf Apprentice",
    author: "Unknown",
    genre: "romance",
    description:
      'Stealing a magic formula from Gargamel in the hope of transforming himself into a being who is more like Papa Smurf, a young Smurf mistakenly changes himself into a monstrous lizard, in a latest graphic novel collection that also includes "Smurftraps" and "Halloween." Simultaneous.',
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=aLA3nwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=aLA3nwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d645-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Kingdom Hearts",
    author: "Unknown",
    genre: "graphicnovel",
    description:
      "When a storm hits his island, fourteen-year-old Sora is swept into a mysterious land where he meets Court Wizard Donald and Captain Goofy, who are on a mission to find King Mickey and return him to his throne at Disney Castle.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=EU30nQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=EU30nQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d646-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Printing and Painting the News in Victorian London",
    author: "Andrea Korda",
    genre: [],
    description: "No description",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=eoAxuwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=eoAxuwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f4d647-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Mystery of the Egyptian Amulet",
    author: "Scott Peters",
    genre: [],
    description:
      "12-year-old Zet tries to visit his best friend, a young student-apprentice at a jewelry workshop. But the huge, snaggletooth man at the door won't let him in! Something strange is going on behind those tall, spooky gates. Is Zet's best friend in trouble? Zet and his sister Kat have a mystery on their hands. The siblings start looking for answers. Then Zet and Kat receive a strange amulet. It's a clue, but to what? Can they solve the message of the amulet and rescue their friend? The young sleuths set out to follow the clues. Little do they know what danger and adventure lie in store! Discover ancient Egypt mysteries with this brother and sister detective team! This action-packed, fast-paced page turner appeals to mystery fans and reluctant readers alike. Fans of classics like the Hardy Boys and Nancy Drew will love following kid detective Zet and his sister Kat on the trail to save their friend. Well researched facts fill this historical adventure set in Ancient Egypt.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=A5smjgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=A5smjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74720-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Tuesday",
    author: "David Wiesner",
    genre: "shortstory",
    description:
      "Frogs rise on their lily pads, float through the air, and explore nearby houses while their inhabitants sleep.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=gGWvDUUi58cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=gGWvDUUi58cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f74721-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Road to Gandolfo",
    author: "Robert Ludlum",
    genre: "selfhelp",
    description:
      'A wickedly funny Robert Ludlum you\'ve never met before. All the explosive paving of "The Bourne Identity," the Byzantine treachery of "The Parsifal Mosaic," the relentless action of "The Bourne Ultimatum." The Principal Cast: General Mackenzie Hawkings, legend, hero, rogue. Sam Devereaux, bright young lawyer from Harvard, now in the army, can\'t wait to get out. General Hawken\'s four ex-wives, a quartet of incredibly endowed women who\'ve formed a club: Hawkin\'s Harem. The Premise: Kidnap Pope Francesco I, the most beloved pontiff since John XX III. Ransom: One American dollar for every Catholic in the world. The Problem: Pope Francesco I says: " Gentle souls, why not?"',
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Z7e_EXyVg3YC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Z7e_EXyVg3YC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74722-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Not a Sound",
    author: "Heather Gudenkauf",
    genre: "shortstory",
    description:
      "When she discovers the body of a fellow nurse deep in the woods near her cabin, Amelia Winn, who lost her hearing in an accident two years earlier, is plunged into a mystery that could shatter her carefully reconstructed life.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Mht4vgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Mht4vgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74723-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Mystery of the Winged Lion",
    author: "Carolyn Keene",
    genre: "horror",
    description: "No description",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=dDJIMR4-RE0C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=dDJIMR4-RE0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74724-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Case of the Creative Crime",
    author: "Carolyn Keene",
    genre: "romance",
    description:
      "AT RIVER ARTS, NANCY'S PERFECTING HER PERFORMANCE -- UNDER COVER! Set high above the river, the grand old Pennington estate is the perfect place for an arts colony. College students can work with established artists; and the owner, elderly Marianna Pennington, gets to keep her home. But when Rhoda Benton, the colony's director, gets a disturbing threat, Nancy and Bess start hunting for an elusive suspect. From the owner's nephew, who wants to build condos on the property, to a handsome young artist determined to break all the rules, there's no lack of candidates. But Nancy's best lead comes from someone who wants to remain anonymous -- someone she'll have to meet at midnight at the edge of a cliff.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=F5LuM6C6klYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=F5LuM6C6klYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f74725-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Clue of the Dancing Puppet",
    author: "Carolyn Keene",
    genre: "children",
    description:
      "The young detective and her friends probe the mysterious movements of puppets on the Van Pelt estate",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=PDJmuDhn1v4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=PDJmuDhn1v4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74726-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Nancy's Mysterious Letter",
    author: "Carolyn Keene",
    genre: [],
    description:
      "Nancy receives a letter meant for a British heiress who has the same name and, in her attempts to contact the other young woman, faces danger from a man who operates a Lonely Hearts Club mail fraud.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=MjBgKGFYarUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=MjBgKGFYarUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74727-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Secret in the Old Lace",
    author: "Carolyn Keene",
    genre: "art&photog",
    description:
      "While in Belgium investigating the mystery surrounding an antique cross, Nancy and her friends learn that her entry in a short story contest may somehow be involved.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=M1o-ngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=M1o-ngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74728-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Whispering Statue",
    author: "Carolyn Keene",
    genre: "selfhelp",
    description:
      "Nancy and her friends establish headquarters in a seaside yacht club to investigate strange happenings in a book store and the disappearance of a marble statue.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=uPZDQ8DEdwgC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=uPZDQ8DEdwgC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74729-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Bike Race Mystery",
    author: "Carolyn Keene",
    genre: "art&photog",
    description:
      "When George's bicycle disappears shortly before the big bike race, Nancy Drew and her friends investigate.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Pcr2xoSwZ_sC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Pcr2xoSwZ_sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f7472a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Mysterious Mannequin",
    author: "Carolyn Keene",
    genre: "scifi",
    description:
      "The gift of an oriental rug with a coded message woven into its border and the disappearance of a Turkish client start Nancy Drew on a new search for a missing mannequin.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=lWlodLPFRrcC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=lWlodLPFRrcC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7472b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Secret of the Forgotten City",
    author: "Carolyn Keene",
    genre: "essays",
    description:
      "Nancy and her friends become involved in a search for lost treasure.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=RIPPuisSTgUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=RIPPuisSTgUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7472c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Heaven's Keep",
    author: "William Kent Krueger",
    genre: "shortstory",
    description:
      "Receiving evidence that a plane crash that killed his wife may not have been an actual event and that she may still be alive, Cork O'Connor travels to Wyoming to investigate allegations about the pilot's identity and is confronted by a series of deadly interferences.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=AeAPAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=AeAPAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f7472d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Portrait in Crime",
    author: "Carolyn Keene",
    genre: "romance",
    description:
      "Nancy Drew returns to the Hamptons to investigate the disappearance of a local artist's paintings, and to continue her romance with Sasha, the Russian ballet star.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ifoDAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ifoDAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7472e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Riddle in the Rare Book",
    author: "Carolyn Keene",
    genre: "mystery",
    description:
      "When a series of rare-book thefts strikes the Bloom's Bookstore & Coffeehouse in River Heights, Nancy Drew finds her only clue in the handwriting of a dead woman. Original.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=UywJAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=UywJAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7472f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "For Love Or Money",
    author: "Carolyn Keene",
    genre: "scifi",
    description:
      "When rich citizen Charles Pierce becomes engaged to his younger housekeeper Nila, the bride-to-be is threatened by jealous heirs, and a skeptical Nancy Drew is hired to investigate.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Ac_nsUJi06EC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Ac_nsUJi06EC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74730-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "תורה שבעל פה",
    author: "Unknown",
    genre: "art&photog",
    description: "No description",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f74731-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Loves Music, Loves to Dance",
    author: "Mary Higgins Clark",
    genre: [],
    description:
      'When Robin probes the disappearance of her close friend, Marcy, a young woman who answers an ad in a magazine "personals" section, she finds herself the prey of a serial killer with a special fetish',
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=OHqsQwFrKO0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=OHqsQwFrKO0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f74732-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Party Weekend",
    author: "Carolyn Keene",
    genre: "science&tech",
    description:
      "Volunteering to help run a weekly charity event that features music, dancing, and games, Nancy is called upon to prevent Charley Stern from ruining the evening with his antics, and then Nancy must find the thief who has stolen the first night's proceeds. Original.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=GJx_Bg5fFT4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=GJx_Bg5fFT4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74733-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Golden Ball and Other Stories",
    author: "Agatha Christie",
    genre: "scifi",
    description:
      "Presents fifteen brilliant tales by the master of mystery fiction",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2zs_gq_DPC4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=2zs_gq_DPC4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74734-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Secret in the Old Attic",
    author: "Carolyn Keene",
    genre: [],
    description:
      "Nancy Drew must use clues in a dead man's letters to find some unpublished musical manuscripts that will save an old man and his granddaughter from financial ruin.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2topAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=2topAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74735-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Secret of the Wooden Lady",
    author: "Carolyn Keene",
    genre: "fantasy",
    description:
      "Nancy Drew and her friends visit an old clipper ship in Boston Harbor and help Captain Easterly uncover a mystery",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=RdspAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=RdspAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74736-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Ricochet",
    author: "Sandra Brown",
    genre: "art&photog",
    description:
      "When Detective Sergeant Duncan Hatcher is summoned to the home of Judge Cato Laird in the middle of the night to investigate a fatal shooting, he knows that discretion and kid-glove treatment are the keys to staying in the judge's good graces and keepingh",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=KProIPug-OsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=KProIPug-OsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f74737-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "False Moves",
    author: "Carolyn Keene",
    genre: "history",
    description:
      "Nancy comes to the aid of her former boyfriend, Ned, to prove that his new girlfriend is not a thief and to find stolen jewels.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=fl7HPg0g5GcC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=fl7HPg0g5GcC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74738-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "High Action Treasure Chest Books",
    author: "Unknown",
    genre: "graphicnovel",
    description:
      "A lively collection of famous firsts and unsolved mysteries designed to fire children's imaginations while affording them valuable experience with the written word.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f74739-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Secret in the Old Lace",
    author: "Carolyn Keene",
    genre: "scifi",
    description:
      "While in Belgium investigating the mystery surrounding an antique cross, Nancy and her friends learn that her entry in a short story contest may somehow be involved.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=qz-cY1aE3vkC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=qz-cY1aE3vkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7473a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Secret Rules",
    author: "Carolyn Keene",
    genre: "history",
    description:
      "Listening to the dilemmas of her college friends, Nancy Drew encounters her own problems when she begins working on a story about a frat prank that is out of control, and her feelings for Jake are complicated by his uncertain nature. Original.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=PBn1v3ZLKwoC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=PBn1v3ZLKwoC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7473b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "They Found Him Dead",
    author: "Georgette Heyer",
    genre: "art&photog",
    description:
      'The redoubtable Superintendent Hannasyde delves further into the "death by misadventure" case of one Silas Kane and the murder of Kane\'s nephew and heir, discovering that nothing is quite as it seems.',
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=GCAtmQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=GCAtmQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7473c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Clue on the Silver Screen",
    author: "Carolyn Keene",
    genre: "children",
    description:
      "While attending a film festival on Martha's Vineyard, teen detective Nancy Drew investigates the disappearance of a brilliant film, whose never-seen ending someone is murderously determined to keep secret. Original.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_BUFAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_BUFAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7473d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Mystery of the Ivory Charm",
    author: "Carolyn Keene",
    genre: [],
    description:
      "Nancy Drew determines whether an ivory elephant charm really protects its wearer from harm when she investigates the involvement of a member of the Bengleton Wild-Animal Show in a mysterious scheme.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=YS1gVN9rhEIC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=YS1gVN9rhEIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7473e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "If Books Could Kill",
    author: "Kate Carlisle",
    genre: "history",
    description:
      "While attending the Edinburgh Book Fair, book restoration expert Brooklyn Wainwright investigates the murder of her ex, who had an original copy of a scandalous text that could change history and destroy the British monarchy.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=3wKYRAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=3wKYRAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7473f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Mysteries of Life in Children's Literature",
    author: "Mitchell Kalpakgian",
    genre: "graphicnovel",
    description:
      'In between "Once upon a time" and "happily ever after" we embark on adventures that seem an eternity away from our everyday lives, and yet through these adventures we are brought back to the innocence and beauty of the truth. InThe Mysteries of Life in Children\'s Literature, journey through a treasury of well-known fables and folk tales, as well as others not so well known, and discover the wisdom hiding within them.',
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=B9BCAgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=B9BCAgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74740-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Mystery at Lilac Inn",
    author: "Carolyn Keene",
    genre: "graphicnovel",
    description:
      "More information to be announced soon on this forthcoming title from Penguin USA",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=8tjZAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=8tjZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74741-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Nancy Drew #11: Monkey-Wrench Blues",
    author: "Stefan Petrucha",
    genre: "science&tech",
    description:
      "When Hinkley builds a prototype for a new high-efficiency car, he asks Nancy and her mechanic Bess to drive it in a government-sponsored race in which the winner receives a government development contract, but someone is determined to keep Nancy and Bess from winning. Simultaneous.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ZaGP7ji1BTYC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ZaGP7ji1BTYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74742-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Mystery of the Tolling Bell",
    author: "Carolyn Keene",
    genre: "romance",
    description:
      "Nancy Drew and her two friends help uncover a gang of swindlers while vacationing in a seaside town.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=TJDQkWyLNo4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=TJDQkWyLNo4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74743-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A Race Against Time",
    author: "Carolyn Keene",
    genre: "horror",
    description: "Another Nancy Drew mystery.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=aAdYPgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=aAdYPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74744-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Sailing Between the Stars",
    author: "Steven James",
    genre: "scifi",
    description:
      'A refreshing and humorous perspective on the mysteries of Christianity navigates through the "uncommon sense" of Jesus, showing a God who is illogical, unreasonable, unrealistic, and unmistakably true. Original.',
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=9FmcAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=9FmcAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74745-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A Murder is Announced",
    author: "Agatha Christie",
    genre: "essays",
    description:
      "A childish practical joke? Or a hoax intended to scare poor Letitia Blacklock? Unable to resist the mysterious invitation, a crowd begins to gather at Little Paddocks at the appointed time when, without warning, the lights go out...",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=x9RHJ8_BfpwC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=x9RHJ8_BfpwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74746-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Ghost",
    author: "Robert Harris",
    genre: [],
    description:
      "Having served as Great Britain's longest-enduring prime minister, Adam Lang accepts a large cash advance to write a tell-all memoir of his life and controversial political career, an effort for which he hires a ghostwriter who uncovers dangerous secrets about the former leader's term. 250,000 first printing.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=014rAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=014rAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f74747-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "On Fire",
    author: "Nancy Holder",
    genre: "fantasy",
    description:
      "\"Based on the hit MTV series Teen Wolf--a teenage boy's life changes forever after he's bitten by a werewolf.Scott was just a regular guy until one bite changed his life. Now he struggles to understand who he is and what he might become. Is he more wolf than human--or is it the other way around? Whichever it is, it's not going to be easy. Scott tries to control his urges, but mostly he's scared that it's his urges that could end up controlling him. On Fire is the story of what happens when you to walk the line between what you want and what you can't help from wanting. Will the bite end up being a gift? Or will it be a curse? And what will it all mean for Scott's relationship with Allison--the girl he can't get enough of? Only time will tell if he should embrace his newfound powers, or if he should fear them\"--",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=3Hr5ONX-2G8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=3Hr5ONX-2G8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f7bc50-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Goodnight Kiss",
    author: "R. L. Stine",
    genre: "science&tech",
    description:
      "A summer at the beach turns into a nightmare when Matt realizes that his girlfriend, April, and his best friend, Todd, have turned into vampires. Original.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=vVZ8x7QglF4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=vVZ8x7QglF4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f7bc51-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Classics of Horror",
    author: "Bram Stoker",
    genre: "fantasy",
    description: "No description",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f7bc52-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Knife",
    author: "R. L. Stine",
    genre: "scifi",
    description:
      "Student volunteer Laurie Masters stumbles onto a ghastly secert at Shadyside Hospital--a secret that the nurses and doctors are willing to kill to cover up.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=RQDiooLMQq8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=RQDiooLMQq8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f7bc53-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "We Have Always Lived in the Castle",
    author: "Shirley Jackson",
    genre: "art&photog",
    description:
      "The inhabitants of the Rochester house wield a strange power over their neighbors.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=c8RlAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=c8RlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc54-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Forbidden Body",
    author: "Douglas E. Cowan",
    genre: "horror",
    description:
      "\"Throughout history, the religious imagination has attempted to control nothing so much as our bodies: what they are and what they mean; what we do with them, with whom, and under what circumstances; how they may be displayed-or, more commonly, how they must be hidden. Religious belief and mandate affect how our bodies are used in ritual practice, as well as how we use them to identify and marginalize threatening religious Others. This book examines how horror culture treats religious bodies that have stepped (or been pushed) out of their 'proper' place. Unlike most books on religion and horror, This book explores the dark spaces where sex, sexual representation, and the sexual body come together with religious belief and scary stories. Because these intersections of sex, horror, and the religious imagination force us to question the nature of consensus reality, supernatural horror, especially as it concerns the body, often shows us the religious imagination at work in real time. It is important to note that the discussion in this book is not limited either to horror cinema or to popular fiction, but considers a wide range of material, including literary horror, weird fiction, graphic storytelling, visual arts, participative culture, and aspects of real-world religious fear. It is less concerned with horror as a genre (which is mainly a function of marketing) and more with the horror mode, a way of storytelling that finds expression across a number of genres, a variety of media, and even blurs the boundary between fiction and non-fiction. This expanded focus not only deepens the pool of potential examples, but invites a much broader readership in for a swim\"--",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=KL5HEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=KL5HEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f7bc55-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "English Gothic",
    author: "Jonathan Rigby",
    genre: "action&adventure",
    description:
      "Traces the rise and fall of the horror genre from its nineteenth century beginnings to the present day, encompassing the lost films of the silent era, the Karloff and Lugosi chillers of the 1930's, the lurid classics from Hammer's house of horror and the explicit shockers of the 1970's.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=DaUqAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=DaUqAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc56-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Five Nights at Freddy's: Fazbear Frights #9",
    author: "Scott Cawthon",
    genre: "romance",
    description:
      "A pulse-pounding collection of three terrifying Five Night's at Freddy's tales.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=mDW2zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=mDW2zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc57-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Halloween Party",
    author: "R.L. Stine",
    genre: "romance",
    description:
      "An invitation to a Halloween party hosted by the beautiful but mysterious Justine Cameron spells danger, terror, and murder for the guests.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=EL_R7Tiig74C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=EL_R7Tiig74C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f7bc58-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Thinner",
    author: "Stephen King",
    genre: "shortstory",
    description:
      "After an old gypsy woman is killed by his car, lawyer Billy Halleck is stricken with a flesh-wasting malady and must undertake a nightmarish journey to confront the forces of death",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=1YP-hfna5ewC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=1YP-hfna5ewC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc59-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Bunny Call (Five Nights at Freddy's: Fazbear Frights #5), Volume 5",
    author: "Scott Cawthon",
    genre: "fantasy",
    description: "No description",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=uCJrzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=uCJrzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc5a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Fear Street Saga",
    author: "R. L. Stine",
    genre: "mystery",
    description:
      "A collector's edition of a special Fear Street trilogy features a see-through vellum and foil dual stepback cover that comes complete with a fold-out color poster of the Fear Family Tree that describes the Fear Street history. Reissue.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=UI23AAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=UI23AAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc5b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Werewolf of Fever Swamp",
    author: "R. L. Stine",
    genre: "horror",
    description:
      "When a strange howling is heard and a rabbit is torn to shreds, everyone thinks that Grady's new dog is responsible, and Grady is determined to prove them wrong.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=XFXWnQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=XFXWnQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc5c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Into the Pit (Five Nights at Freddy's: Fazbear Frights #1)",
    author: "Scholastic",
    genre: "history",
    description:
      "Five Nights at Freddy's fans won't want to miss this pulse-pounding collection of three novella-length tales that will keep even the bravest player up at night . . . What do you wish for most? It's a question that Oswald, Sarah, and Millie think they know the answer to. Oswald wishes his summer wasn't so boring, Sarah wishes to be beautiful, and Millie wishes she could just disappear from the face of the earth. But in the twisted world of Five Nights at Freddy's, their hearts' deepest desires have an unexpected cost. In this volume, horror master Scott Cawthon spins three sinister novella-length stories from different corners of his series' canon. Each story comes complete with accompanying artwork from fan-favorite game artist LadyFiszi, who brings the horror to life in startling new ways. Readers beware: This collection of terrifying tales is enough to unsettle even the most hardened Five Nights at Freddy's fans.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=8CWdwwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=8CWdwwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc5d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Slawter",
    author: "Darren Shan",
    genre: "action&adventure",
    description:
      "More chills and thrills in Darren Shan's horrifying Demonata series. Let the Slawter commence...",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=zRCISxY0oDwC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=zRCISxY0oDwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc5e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Unnatural Creatures",
    author: "Neil Gaiman",
    genre: "shortstory",
    description:
      "The griffin, the sunbird, manticores, unicorns ­- all manner of glorious creatures never captured in zoos, museums or photographs are packed vividly into this collection of stories. Neil Gaiman has included some of his own childhood favourites alongside stories classic and modern to spark the imagination of readers young and old. All contributors have given their work free to benefit Dave Eggers' literacy charity, 826DC. Also includes a new Neil Gaiman Story.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=qMikAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=qMikAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40f7bc5f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Clive Barker Omnibus",
    author: "Clive Barker",
    genre: "essays",
    description:
      "This volume contains Books of Blood 1-3, comprising 15 stories from Clive Barker.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=SMV0GwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=SMV0GwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc60-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Stephen King's Danse Macabre",
    author: "Stephen King",
    genre: "romance",
    description:
      "Information on the horror phenomenon including books, movies, radio, and T.V.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=oPYGelk-5GYC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=oPYGelk-5GYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc61-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Long Walk",
    author: "Stephen King",
    genre: "action&adventure",
    description:
      "In a futuristic America ruled by ultraconservatives, one hundred of the nation's hardiest boys must endure a five-hundred-mile marathon race known as the Long Walk, a lethal contest of determination and endurance in which each tortured step becomes a harrowing struggle for survival, in order to win fame and fortune. Reissue.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=WXTWAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=WXTWAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc62-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Four Past Midnight",
    author: "Stephen King",
    genre: "graphicnovel",
    description:
      "The survivors of a plane crash awake in a nightmare, a writer finds himself at the end of an accusing finger, a businessman struggles to uncover the evil driving him mad, and a ravenous dog inhabits a camera, in a horror quartet",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=oLr2iVoNENAC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=oLr2iVoNENAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc63-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Six",
    author: "E. C. Richard",
    genre: "children",
    description:
      "Contains Episodes 1-6. Six complete strangers from all walks of life are kidnapped, imprisoned together, and forced into horrible acts. Their unseen masters force The Six to choose: die, or complete an act that will bring chaos to the outside world, with each act building toward a horrifying master plan.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40f7bc64-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Horror in Architecture",
    author: "Joshua Comaroff",
    genre: "action&adventure",
    description:
      "In Horror in Architecture, normal compositions become strange: extra limbs appear, holes open where they should not, individual objects are doubled or split or perversely occupied. These buildings reimagine the possibilities of architectural language, shifting from natural norms to other, more rarefied and exciting options. They define an expanded aesthetic field that marries the beautiful to the distorted, the awkward, the manifold, and the indeterminate. Through an investigation that spans architecture, art, and literature, this study limns horror through its shifting forms and identifies a creeping unease that lingers at the very center of the modern project.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=3AKIMAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=3AKIMAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc65-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Please Don't Feed the Vampire!",
    author: "R. L. Stine",
    genre: "art&photog",
    description:
      'You are invited to choose from over 20 spooky endings. You buy something called "Vampire in a can" and at first you think it\'s just a goofy vampire costume, but then you notice a packet in the bottom of the can labeled: DANGER--KEEP AWAY!',
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=cYKtHAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=cYKtHAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc66-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Making Friends with Frankenstein",
    author: "Colin McNaughton",
    genre: "action&adventure",
    description:
      "There are 56 poems in this book of verse and pictures. In addition to ghouls, ghosts, beasts and weirdos of every description, the cast-list includes new and memorable characters such as The Wild Bill Hickok Bird and The Doom Merchant.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=h57iAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=h57iAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc67-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Certain Dark Things",
    author: "M J Pack",
    genre: "romance",
    description:
      "What grotesque surprises will you find in the secret place between the shadow and the soul? In her debut short story collection, M.J. Pack offers up a new breed of terror sure to delight any true horror fan. Don't miss out on tales of telepathic twins, a campfire ghost story gone terribly wrong, pills that induce life-threatening nightmares, and the disturbing new sideshow at Coney Island: Lady Alligator. Take a haunting trip down infamous Bubblehead Road and follow Danny around the country as he's pursued by unseen (and unrelenting) creatures. Prepare yourself, you're about to indulge in some certain dark things...",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=9luYjgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=9luYjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc68-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Thinner",
    author: "Richard Bachman",
    genre: "essays",
    description:
      "'Thinner' - the old gypsy man barely whispers the word. Billy feels the touch of a withered hand on his cheek. Billy Halleck, prosperous if overweight citizen, happily married, shuddered then turned angrily away. The old woman's death had been none of his fault. The courts had cleared him. She'd just stumbled in front of his car. Now he simply wanted to forget the whole messy business. Later, when the scales told him he was losing weight, it was what the doctor ordered. His wife was pleased - as she should have been. But . . . 'Thinner' - the word, the old man's curse, has lodged in Billy's mind like a fattening worm, eating at his flesh, at his reason. And with his despair, comes violence.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=MsJluAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=MsJluAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc69-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Forest of Hands & Teeth",
    author: "Carrie Ryan",
    genre: "graphicnovel",
    description:
      "In Mary's world there are simple truths. The Sisterhood always knows best. The Guardians will protect and serve. The Unconsecrated will never relent. And you must always mind the fence that surrounds the village; the fence that protects the village from the Forest of Hands and Teeth. But, slowly, Mary's truths are failing her. She's learning things she never wanted to know about the Sisterhood and its secrets, and the Guardians and their power, and about the Unconsecrated and their relentlessness. When the fence is breached and her world is thrown into chaos, she must choose between her village and her future - between the one she loves and the one who loves her. And she must face the truth about the Forest of Hands and Teeth. Could there be life outside a world surrounded in so much death?",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=QKVzPwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=QKVzPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc6a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Babysitter II",
    author: "R. L. Stine",
    genre: "mystery",
    description:
      "Recovered from an earlier brush with death, Jenny finds a new baby-sitting job, but when the phone rings one night, her nightmare begins all over again.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=PeAbHAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=PeAbHAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc6b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Night of the Living Dummy II",
    author: "R. L. Stine",
    genre: "science&tech",
    description:
      "When Amy's ventriloquist dummy, Dennis, is broken, her father buys her Slappy, unaware that the dummy is possessed by an evil presence.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_Jpv0u5mgM0C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_Jpv0u5mgM0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc6c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Unseen",
    author: "Paul Jennings",
    genre: "scifi",
    description:
      "Collection of eight humourous, entertaining and slightly vulgar short stories. Suggested level: primary, intermediate.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ai-4hMPk9ogC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ai-4hMPk9ogC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc6d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Ocean at the End of the Lane",
    author: "Neil Gaiman",
    genre: "art&photog",
    description:
      "THE OCEAN AT THE END OF THE LANE is a novel about memory and magic and survival, about the power of stories and the darkness inside each of us, created by the unparalleled imaginative power of Neil Gaiman.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=j-6LMQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=j-6LMQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc6e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Vampire's Assistant",
    author: "Darren Shan",
    genre: "romance",
    description:
      "Half-vampire Darren Shan struggles with his new life as a vampire's assistant as he tries desperately to resist the one thing that can keep hum alive - human blood.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=DVFgPgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=DVFgPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc6f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "All-Day Nightmare",
    author: "R. L. Stine",
    genre: [],
    description:
      "The reader wakes up with no memories in an spooky old house and must decide how to get out and reach safety.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=cBBUGwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=cBBUGwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc70-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Voodoo Moon",
    author: "Wendy Corsi Staub",
    genre: "art&photog",
    description:
      "If her soul is bound by an evil spell, Call back her spirit with a ringing bell. Salt in her left hand, gold in her right Will cast out the dark and restore her soul's light. The Halliwells are on vacation. It's time to party in New Orleans. But on Prue, Piper, and Phoebe's first night in the Big Easy, Phoebe has a dream filled with images of strange, violent rituals under a full moon. Soon after, a new friend of Prue's disappears -- on the night of the full moon! When the Charmed Ones try to find her, they are drawn into a dark world of voodoo sorcery ... a powerful magic like nothing the sisters have ever seen.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=IRbNGELu0ncC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=IRbNGELu0ncC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc71-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Diseases of the Head",
    author: "Matt Rosen",
    genre: "action&adventure",
    description:
      "Diseases of the Head is an anthology of essays from contemporary philosophers, artists, and writers working at the crossroads of speculative philosophy and speculative horror. At once a compendium of multivocal endeavors, a breviary of supposedly illicit ponderings, and a travelogue of philosophical exploration, this collection centers itself on the place at which philosophy and horror meet. Employing rigorous analysis, incisive experimentation, and novel invention, this anthology asks about the use that speculation can make of horror and horror of speculation, about whether philosophy is fictional or fiction philosophical, and about the relationship between horror, the exigencies of our world and time, and the future developments that may await us in philosophy itself. From philosophers working on horrific themes, to horror writers influenced by heresies in the wake of post-Kantianism, to artists engaged in projects that address monstrosity and alienation, Diseases of the Head aims at nothing less than a speculative coup d'état.Refusing both total negation and absolute affirmation, refusing to deny everything or account for everything, refusing the posture of critique and the posture of all-encompassing unification, this collection of essays aims at exposition and construction, analysis and creation - it desires to fight for some thing, but not everything, and not nothing. And it desires, most of all, to speak from the position of its own insufficiency, its own partiality, its own under-determinacy, which is always indicative of the practice of thinking, of speculation. Considering themes of anonymity, otherness and alterity, the gothic, extinction and the world without us, the end times, the apocalypse, the ancient and the world before us, and the uncanny or unheimlich, among other motifs, this anthology seeks to articulate the cutting edge which can be found at the intersection of speculative philosophy and speculative horror.Matt Rosen is a philosopher. He is the author of numerous books and pamphlets, including Speculative Annihilationism (Zero Books, 2019) and the forthcoming treatise Angst and Abnegation. His theoretical writings have also appeared in journals and anthologies. His work centers on radical ethics and alterity, and his interests range across a variety of areas, including moral philosophy, metaphysics, literature, mysticism, psychoanalysis, theology, politics, and aesthetics.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=EPHczQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=EPHczQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc72-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Night of the Gargoyles",
    author: "Eve Bunting",
    genre: "mystery",
    description:
      "In the middle of the night, the gargoyles that adorn the walls of a museum come to life and frighten the night watchman.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=bOWqmdZ3saIC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=bOWqmdZ3saIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc73-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Grizzly Tales for Gruesome Kids",
    author: "Jamie Rix",
    genre: "history",
    description: "No description",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=o13yAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=o13yAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc74-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Lord of the Shadows",
    author: "Darren Shan",
    genre: "action&adventure",
    description:
      "One boy's terrifying journey from human to half-vampire to Vampire Prince. Where he will rule the night and destroy the world.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Q3fusSYGLuwC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Q3fusSYGLuwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc75-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Go Eat Worms!",
    author: "R. L. Stine",
    genre: [],
    description:
      "Discovering the creatures of his basement worm farm in unlikely and unwanted places, like his bed, his toothbrush, and his spaghetti, worm-obsessed Todd finds himself grossed out by the very things with which he used to torture his sister.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=zOrwGwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=zOrwGwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc76-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Stray Dogs",
    author: "Tony Fleecs",
    genre: "fantasy",
    description:
      "It's scary being the newdog. In this suspenseful new series, readersmeet Sophie, a dog who can't remember what happened. She doesn't know how sheended up in this house. She doesn't recognize any of these other dogs. She knowssomething terrible happened but she just... can't... recall... Wait! Where's herlady? It's all coming back to her now, and it's enough to raise Sophie'shackles. Now Sophie has to figure out where she is, what's happening and howshe's going to survive this. They saythere's no such thing as a bad dog, just bad owners. STRAY DOGS is a heartbreakingly adorablesuspense thriller by My Little Pony comic artists TONY FLEECS and TRISHFORSTNER. It's Lady and the Tramp meets Silence of the Lambs. Collects STRAY DOGS #1-5",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=klZGzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=klZGzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40f7bc77-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Remarkable Books",
    author: "DK",
    genre: "romance",
    description:
      "Imagine a world without Principia Mathematica, Rights of Man, the Bible, Shakespeare, or the Mahabharata. Remarkable Books features 75 of the world’s most momentous titles – from The Art of War to Anne Frank’s Diary – and reveals their far-ranging impact. Books are the medium through which scientists, storytellers, and philosophers introduce their ideas. Discover seminal religious and political titles, cornerstones of science such as On the Origin of Species, and ancient texts such as the I Ching, which is still used today to answer fundamental questions about human existence. Get up close to see fascinating details, such as Vesalius’ exquisite anatomical illustrations in Epitome, Leonardo da Vinci’s annotated notebooks, or the hand-decorated pages in the Gutenberg Bible. Discover why Euclid’s Elements of Geometry was the most influential maths title ever published, and marvel at rare treasures such as the Aubin Codex, which tells the history of the Aztecs and the early Spanish colonial period in Mexico. Remarkable Books gathers stories, diaries, scientific treatises, plays, dictionaries, and religious texts into a stunning celebration of the power of books.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=55KPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=55KPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb00-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Art as Experience",
    author: "John Dewey",
    genre: "action&adventure",
    description:
      "Based on John Dewey's lectures on esthetics, delivered as the first William James Lecturer at Harvard in 1932, Art as Experience has grown to be considered internationally as the most distinguished work ever written by an American on the formal structure and characteristic effects of all the arts: architecture, sculpture, painting, music, and literature.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=hJtPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=hJtPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb01-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Public Monuments",
    author: "Sergiusz Michalski",
    genre: "horror",
    description:
      "Elizabeth A. Kaye specializes in communications as part of her coaching and consulting practice. She has edited Requirements for Certification since the 2000-01 edition.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ClFKgeZdpW8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ClFKgeZdpW8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb02-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Color Therapy",
    author: "Cindy Wilde",
    genre: "graphicnovel",
    description:
      "From the Bestselling international coloring book series. Color can be therapeutic, and creating beautiful art is a soothing and stress-relieving activity. Choose any color section from the book and complete the stunning illustrations to lift your mood and focus your mind. Even amateur artists can create something exquisite, as no drawing skills are required.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ykADtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ykADtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb03-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Discourse, Figure",
    author: "Jean-François Lyotard",
    genre: "graphicnovel",
    description:
      "Antony Hudek is research fellow at Camberwell College of Arts, University of the Arts, London. --",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=psx7ZLe-DIUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=psx7ZLe-DIUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb04-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Modest−Witness@Second−Millennium.FemaleMan−Meets−OncoMouse",
    author: "Donna Jeanne Haraway",
    genre: "romance",
    description:
      "Haraway explores the world of contemporary technoscience through the role of stories, figures, dreams, theories, advertising, scientific advances and politics. Kinship relations among the many cyborg creatures of the 20th century are also discussed.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ftO4jLQ2RM8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ftO4jLQ2RM8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb05-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Sacred Image in the Age of Art",
    author: "Marcia B. Hall",
    genre: "action&adventure",
    description:
      "Underlying the religious art of the Renaissance is a tension between the needs of the Church and the impulse to create great works. This beautifully illustrated book presents sacred images from the 15th and 16th centuries, leading up to two pivotal events in 1563. The Council of Trent, which signified the beginning of the Counter-Reformation, defined requirements that curtailed the freedom of painters and patrons in creating art for churches, while the founding of the Accademia del Desegno in Florence symbolically acknowledged that artists had achieved the status of creators not craftsmen. The author takes a fresh look at some of the greatest painters of the Italian Renaissance not typically associated with sacred imagery and shows how they navigated their way through the paradox of 'limited freedom' to forge a new kind of religious art. -- from Book Jacket",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=m3oxcgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=m3oxcgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb06-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Children's Drawing Books:How to Draw Plants",
    author: "Tina Sun",
    genre: "fantasy",
    description:
      "Children's Drawing Books:How to Draw Plants is a painting book suitable for children. It is most suitable for children aged 3 to 8. Through the step-by-step decomposition of painting, it is easy and pleasant to understand the skills of line and line combination of painting.Children can learn how to draw many kinds of plants through this book. For example: globe, rose, lily, bamboo, mushroom, sunflower, lotus, cactus, sunflower, lily of the valley, Dogtail grass, chrysanthemum, violet, dandelion, peony, cattail, Christmas tree, lovely little tree, vegetable.Children's Drawing Books:How to Draw Plants this book includes step-by-step painting and creativity and color development.Creativity and ColorThe color in children's eyes is very important. Their creativity is more precious than the painting itself.Plants don't have only one color. What is the color in their eyes? How to express the color in your eyes? This book will tell them a different world of painting.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=XufcDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=XufcDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb07-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Origins of Monsters",
    author: "David Wengrow",
    genre: "graphicnovel",
    description:
      'It has often been claimed that "monsters"--supernatural creatures with bodies composed from multiple species--play a significant part in the thought and imagery of all people from all times. The Origins of Monsters advances an alternative view. Composite figurations are intriguingly rare and isolated in the art of the prehistoric era. Instead it was with the rise of cities, elites, and cosmopolitan trade networks that "monsters" became widespread features of visual production in the ancient world. Showing how these fantastic images originated and how they were transmitted, David Wengrow identifies patterns in the records of human image-making and embarks on a search for connections between mind and culture. Wengrow asks: Can cognitive science explain the potency of such images? Does evolutionary psychology hold a key to understanding the transmission of symbols? How is our making and perception of images influenced by institutions and technologies? Wengrow considers the work of art in the first age of mechanical reproduction, which he locates in the Middle East, where urban life began. Comparing the development and spread of fantastic imagery across a range of prehistoric and ancient societies, including Mesopotamia, Egypt, Greece, and China, he explores how the visual imagination has been shaped by a complex mixture of historical and universal factors. Examining the reasons behind the dissemination of monstrous imagery in ancient states and empires, The Origins of Monsters sheds light on the relationship between culture and cognition.',
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=fY6GAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=fY6GAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb08-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Real World Colouring Books Series 63",
    author: "John Boom",
    genre: "science&tech",
    description:
      "Real World Colouring Books - Are for advanced users and adults and consist of 50 real-life images converted for colouring use. Every series is different and has a mixture of wildlife, vehicles, nature, buildings and other interesting things to colour in. You?re only limited by your own imagination as to how you colour in each picture. If you like this series just try another of our wonderful colouring books.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_OKqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_OKqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb09-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Rembrandt's Beautiful Portraits - Biography 5th Grade | Children's Biography Books",
    author: "Baby Professor",
    genre: "horror",
    description:
      "Rembrandt was a Renaissance artist, too. This book will feature his life and art in a way that young learners would understand. The key to edutaining biography books is to present facts in a simplified format. Reading the life story of a person who made it big, despite all odds, will inspire you to do your best too. Read to learn today!",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=UhFCDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=UhFCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb0a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Fifth Grade Hindi Book",
    author: "Mathiarasu R",
    genre: "art&photog",
    description:
      "Mathiarasu Books provides Fifth Grade Hindi books for Child reading in an easy way and shortcut methods with QR Codes updated Audios, Videos & Text files on scanning those QR codes.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=rQZ2EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=rQZ2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb0b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Grandpa Mudcake and the Rickety Robot",
    author: "Sophia J. Ferguson",
    genre: "children",
    description:
      "A trip to the golf course, a gardening accident and a very rickety robot… In this sixth book in The Grandpa Mudcake Series, Grandpa Mudcake builds a robot in his shed. Grandpa hopes the robot will make his life a bit easier. With a little help from his grandson, Little Jimmy, Grandpa puts the robot to the test. As usual, things don't go quite according to plan. • What happens when Grandpa visits the golf course? • What name does Little Jimmy give to the robot? • Why is Grandpa asked to leave the DIY store? Discover the answers to these questions in this funny picture book for 3-7 year olds. With its quirky illustrations, this book will amuse children and parents alike. For fun stuff, and more, visit: www.reginald-stinkbottom.com (WARNING: With Sound Effects!) More Quirky Picture Books by Sophia J. Ferguson: • The Adventures of Reginald Stinkbottom • The Reginald Stinkbottom Colouring Book • Grandpa Mudcake and the Crazy Haircut • Grandpa Mudcake and the Crazy Tea Party • Grandpa Mudcake and the Kitchen Calamity • Grandpa Mudcake and the Angry Chihuahua • Grandpa Mudcake Goes Internet Shopping • BRAND NEW: Grandpa Mudcake and the Nosey Chicken",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=jKoxEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=jKoxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb0c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Industrial Art Text-books",
    author: "Bonnie E. Snow",
    genre: "science&tech",
    description: "No description",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=eB9GAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=eB9GAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb0d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Color the Classics: Wizard of Oz",
    author: "Jae-Eun Lee",
    genre: "art&photog",
    description:
      "A visually stunning rendition of the classic story, The Wizard of Oz, providing hours of coloring as a stunning art piece Color the Classics: The Wizard of Oz is a part of Waves of Color’s “Color the Classics” line—a collection of books that allows you to color your favorite literary classics for hours of fun and relaxation. The Wizard of Oz takes colorists down the nostalgic yellow brick road, reimagining many of the story’s beloved characters in Jae-Eun Lee’s whimsical and highly-detailed illustrations. Enjoy hours of calming creativity as you re-experience this classic story like you’ve never seen it before.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=8X2QEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=8X2QEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb0e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "The College and Adult Reading List of Books in Literature and the Fine Arts",
    author:
      "National Council of Teachers of English. Committee on College and Adult Reading List",
    genre: "action&adventure",
    description: "No description",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ZTg6AAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ZTg6AAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb0f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Big Activity Book for Anxious People",
    author: "Jordan Reid",
    genre: "essays",
    description:
      "Reid & Williams are \"funny as hell.\"--Amy Morrison, founder of Pregnant Chicken Feeling anxious? Who isn't! Your most irrational (and sometimes rational) fears are hilarious fodder for this sharp and relatable activity book. These days, anxiety is simply part of the human experience. Part journal, part coloring book, part weird coping mechanisms, and part compendium of soothing facts, The Big Activity Book for Anxious People will be an outlet for anyone who wants to take a break from reality, laugh through her fears, and realize with every page that she is not alone--and to help her figure out what to do when it's 3AM and she's wide awake worrying about whether she cc'ed the right \"Bob\" on that email. (Probably.) Activities include: Fun Facts about Aging! Public Speaking: A Diagram Your Hotel Room Carpet: A Petri Dish of Horrors Obscure Diseases You Probably Don't Have Zen Mantras For The Anxiously Inclined Soothing Facts about Hand Sanitizer On a bad day, try coloring in the soothing grandma. On a really bad day, find step-by-step instructions on how to build an underground bunker. Reid and Williams want everyone to remember that they're in good company: anxious people are some of the funniest and most interesting and creative humans on the planet. (They know, because they are two of them.)",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=WOiNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=WOiNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb10-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Modern Crochet Mandalas",
    author: "Interweave Editors",
    genre: "mystery",
    description:
      "50+ mandalas in fresh, modern colors! In Modern Crochet Mandalas, you'll find more than 50 uniquely delightful pieces to stitch up whenever the mood strikes. Bursting with imagination and a playful use of color, these mandalas will keep you happily stitching the day away. Mandalas are the perfect crocheted pieces. Whether you're a beginner or a more experienced crocheter, they offer a unique canvas for experimentation with color, texture, and many types of stitches, all within a relatively small space. Inside, you'll find a detailed set of directions accompany each piece, as well as stitch chart and gorgeous color photographs--the perfect combination of inspiration and instruction. Featuring a foreword and numerous patterns by Sandra Eng of (@mobiusgirl on Instagram), Modern Crochet Mandalas is a fresh new direction for your crochet passion.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=nZGQEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=nZGQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb11-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "The First Proofs of the Universal Catalogue of Books on Art, Compiled for the Use of the National Art Library and the Schools of Art in the United Kingdom",
    author: "Unknown",
    genre: "shortstory",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=FWdRAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=FWdRAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb12-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Art and Revolution",
    author: "John Berger",
    genre: "mystery",
    description:
      'In this prescient and beautifully written book, Booker Prize-winning author John Berger examines the life and work of Ernst Neizvestny, a Russian sculptor whose exclusion from the ranks of officially approved Soviet artists left him laboring in enforced obscurity to realize his monumental and very public vision of art. But Berger\'s impassioned account goes well beyond the specific dilemma of the pre-glasnot Russian artist to illuminate the very meaning of revolutionary art. In his struggle against official orthodoxy--which involved a face-to-face confrontation with Khruschev himself--Neizvestny was fighting not for a merely personal or aesthetic vision, but for a recognition of the true social role of art. His sculptures earn a place in the world by reflecting the courage of a whole people, by commemorating, in an age of mass suffering, the resistance and endurance of millions. "Berger is probably our most perceptive commentator on art.... A civilized and stimulating companion no matter what subject happens to cross his mind."--Philadelphia Inquirer',
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=LjmMWaDx16gC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=LjmMWaDx16gC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb13-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The First Proofs of the Universal Catalogue of Books on Art",
    author: "ohne Autor",
    genre: "romance",
    description: "Reprint of the original, first published in 1870.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=FnDcDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=FnDcDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb14-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Real World Colouring Books Series 104",
    author: "John Boom",
    genre: "essays",
    description:
      "Real World Colouring Books - Are for advanced users and adults and consist of 50 real-life images converted for colouring use. Every series is different and has a mixture of wildlife, vehicles, nature, buildings and other interesting things to colour in. These art therapy books can help stimulate your brain and keep you and your mind occupied. You're only limited by your own imagination as to how you colour in each picture. If you like this series just try another and collect the whole series of our wonderful colouring books.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Ive4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Ive4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb15-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Real World Colouring Books Series 83",
    author: "John Boom",
    genre: "mystery",
    description:
      "Real World Colouring Books - Are for advanced users and adults and consist of 50 real-life images converted for colouring use. Every series is different and has a mixture of wildlife, vehicles, nature, buildings and other interesting things to colour in. These art therapy books can help stimulate your brain and keep you and your mind occupied. You're only limited by your own imagination as to how you colour in each picture. If you like this series just try another of our wonderful colouring books.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Bhq3DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Bhq3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb16-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Glitch Feminism",
    author: "Legacy Russell",
    genre: [],
    description:
      "A New York Times Best Art Book of 2020 A new manifesto for cyberfeminism: finding liberation in the glitch between body, gender, and technology The divide between the digital and the real world no longer exists. We are connected all the time. How do we find out who we are in this digital era? Where do we create the space to explore our identity? How can we come together in solidarity? A glitch is normally thought of as an error, a faulty overlaying, but, as Legacy Russell shows, liberation can be found within the fissures between gender, technology, and the body. The glitch offers an opportunity for us to perform and transform ourselves in an infinite variety of identities. In Glitch Feminism, Russell makes a series of radical demands through memoir, art, and critical theory, as well as the work of contemporary artists—including Juliana Huxtable, Sondra Perry, boychild, Victoria Sin, and Kia LaBeija—who have travelled through the glitch in their work. Timely and provocative, Glitch Feminism shows how error can lead to revolution.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=1Vf6DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=1Vf6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb17-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Real World Colouring Books Series 28",
    author: "John Boom",
    genre: "children",
    description:
      "Real World Colouring Books - Are for advanced users and adults and consist of 50 real-life images converted for colouring use. Every series is different and has a mixture of wildlife, vehicles, nature, buildings and other interesting things to colour in. You're only limited by your own imagination as to how you colour in each picture. If you like this series just try another of our wonderful colouring books.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=0uSnDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=0uSnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb18-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Industrial Art Text-books",
    author: "Bonnie E. Snow",
    genre: "selfhelp",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2hxGAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=2hxGAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb19-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Golden Bowl",
    author: "Henry James",
    genre: "horror",
    description:
      "The novel opens with Prince Amerigo musing in Bond Street on his approaching marriage, and on the likely consequences of an alliance between Roman aristocracy and American millions ...",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Op8fAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Op8fAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb1a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Catalogue of the Books in the Library at the Assay Office (Classic Reprint)",
    author: "UNKNOWN. AUTHOR",
    genre: "shortstory",
    description:
      "Excerpt from Catalogue of the Books in the Library at the Assay Office An engraving representing a winged figure of a woman standing on a globe and holding in the right hand a cup and a bridle, in the left hand a serpent; dated 1555. (la Fortune, Bartsch. About the Publisher Forgotten Books publishes hundreds of thousands of rare and classic books. Find more at www.forgottenbooks.com This book is a reproduction of an important historical work. Forgotten Books uses state-of-the-art technology to digitally reconstruct the work, preserving the original format whilst repairing imperfections present in the aged copy. In rare cases, an imperfection in the original, such as a blemish or missing page, may be replicated in our edition. We do, however, repair the vast majority of imperfections successfully; any imperfections that remain are intentionally left to preserve the state of such historical works.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=vSIZswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=vSIZswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb1b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Bridgman's Complete Guide to Drawing from Life",
    author: "George B. Bridgman",
    genre: "essays",
    description:
      "Bridgman's classic, essential guide is now completely redesigned! This fifth edition preserves the renowned artist and lecturer's comprehensive original work--featuring more than 1,000 drawings and 22 expert lessons on mastering the human figure from every angle--but repackages it with an eye-catching cover. In addition, the interior art has been cleaned and the design freshened in two-color. It's sure to remain one of the premier figure-drawing publications of all time.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=5uVfswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=5uVfswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb1c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Emoji Coloring Books for Girls: Cute Emoji Coloring Books for Stress, Relief and Relaxation (Emoji Coloring Books for Kids)",
    author: "Yq Publishing",
    genre: "graphicnovel",
    description:
      'This brand new Emoji Coloring Books For Girls is the ideal way for girls to rediscover the simple relaxation and joy of coloring. It can also be the game for the whole family looking to release tension and build up stress in a fun, humorous and therapeutic way. This Emoji Coloring Book features over 30 uniquely crafted single page designs. This allows you to remove each page for framing or hanging. Emoji Coloring Books For Girls Details: Each coloring page is printed on a separate sheet to avoid bleed through Suitable for markers, crayons, felt tips, gel pens, coloring pencils and more due to single sided Hand-picked quality designs from start to finish Premium glossy-finished cover design Large 8.5" x 11.0" format The variety of designs ensure there is something for every skill level This book also makes a fantastic funny gift idea. If you have a friend or family member who is a girl they will be sure to love your Emoji Coloring Book. SCROLL UP AND ORDER YOUR EMOJI COLORING BOOKS FOR GIRLS INSTANTLY',
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=idkrvAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=idkrvAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb1d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Illustrations of Rockwell Kent",
    author: "Rockwell Kent",
    genre: "art&photog",
    description:
      "Rockwell Kent was generally considered the most important American book illustrator of the 1920s and 30s, gracing such works as Candide, Moby Dick, and The Canterbury Tales. This retrospective brings together his finest work for the first time, gathering pen-and-ink pieces and woodcuts from not only important novels, but magazines and advertisements. Introduction by Fridolf Johnson.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=fp3odT7cV74C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=fp3odT7cV74C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb1e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A Clearance Catalogue of Interesting Books at Reduced Prices",
    author: "Davis & Orioli (Firm)",
    genre: "science&tech",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40fbdb1f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Catalogue of the Valuable Collection of Coins, Medals, Numismatic Books, &C",
    author: "A. B. Sage and Co",
    genre: "essays",
    description:
      "Excerpt from Catalogue of the Valuable Collection of Coins, Medals, Numismatic Books, &C: The Property of a Gentleman of This City, Which Will Be Sold at Public Auction, by Bangs, Merwin and Co., At Their Sales Rooms, No. 13 Park Row, N. Y. On Tuesday, June 7, 1859 30 50. Groat. 1567. Rare, Jj' 51. Twopence. 1563. Rare 1 37 52. Charles I. Shilling. Rare 1 3 9 53. Do. Groat. Numerals behind bust. Pierced, but other wise fine 1 f; 54. Charles II. Half Crown. 1671. Rare 1 /_f' 55. Do. Threepence. Pierced 1 56. William and Mary Half Crown. 1689. Very fine 1 a?) 57. Do. Do. Do. Different from above. Very fine 1 '7 From the Bogert Collection. ﬂ, if 58. Do. Do. Do. Maunday Set. Fine and rare 4 m /j' 59. William III. Half Crown. 1697. Very fine 1 From the Bogert Collection. a 60. Do. Sixpence. Pierced. About the Publisher Forgotten Books publishes hundreds of thousands of rare and classic books. Find more at www.forgottenbooks.com This book is a reproduction of an important historical work. Forgotten Books uses state-of-the-art technology to digitally reconstruct the work, preserving the original format whilst repairing imperfections present in the aged copy. In rare cases, an imperfection in the original, such as a blemish or missing page, may be replicated in our edition. We do, however, repair the vast majority of imperfections successfully; any imperfections that remain are intentionally left to preserve the state of such historical works.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=jVzPswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=jVzPswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb20-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "A Selection of Rare and Important Books on Architecture, Furniture, Decoration and Ornament and Garden Architecture and Design, Including Festival Books, Colour Plate Books and Topographical Views",
    author: "Marlborough Rare Books",
    genre: "art&photog",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40fbdb21-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Adult Coloring Books Marine Fun: Life Escapes Adult Coloring Books 48 Grayscale Coloring Pages of Tropical Fish, Ocean Life, Coral, Urchins, Octopus,",
    author: "Kimberly Hawthorne",
    genre: "graphicnovel",
    description:
      "Adult Coloring Books Marine Fun Includes FREE PDF version and Color Guide Life Escapes Adult Coloring Books 48 grayscale coloring pages of tropical fish, ocean life, coral, urchins, octopi, sea horses and more Pages are printed on one side, size 8.5x11 in. Feel free to use any or all your favorite coloring tools, such as colored pencils, gel pens, brush-tip markers, chalk, pastels and more. Includes FREE Digital Version and Color GuideAs a bonus, you can download a PDF and print your favorite images to color again and again for endless fun. Not sure which colors to use? View or Download a full color version of each design.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=fGOnwwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=fGOnwwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb22-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Master Guide to Drawing Anime: Romance",
    author: "Christopher Hart",
    genre: "selfhelp",
    description:
      '"This how-to-draw-anime book from bestselling author Christopher Hart teaches the fundamentals of drawing anime for the Romance genre using easy-to-follow, step-by-step instruction"--',
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sREqxQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sREqxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb23-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Art of The Incredibles",
    author: "Mark Cotta Vaz",
    genre: "mystery",
    description:
      "From Pixar Animation Studios, the Academy Awardwinning studio that brought us such blockbusters as Toy Story, Monsters, Inc., and Finding Nemo, comes The Incredibles, a hilarious, action-packed story of a family of superheroes living an underground suburban existence. The sleekly designed settings and characters were conceptualized and developed by writer/director Brad Bird and Pixar's creative team of artists, illustrators, and designers, resulting in a celluloid sensation rich with detail. The Art of The Incredibles celebrates their talent, featuring concept and character sketches, storyboards, and lighting studies, and invites readers into the elaborate creative process of animation through interviews with all the key players at Pixar.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=YyniCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=YyniCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fbdb24-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Pop Art (Postcard Books)",
    author: "Unknown",
    genre: "romance",
    description: "No description",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=yTdJGgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=yTdJGgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb25-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Encyclopedia of Writing and Illustrating Children's Books",
    author: "Desdemona McCannon",
    genre: "scifi",
    description:
      '"Inspiration, drawing skills, narrative, storyboards, characters, typography, page layouts"--Cover.',
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=S7TlLAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=S7TlLAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb26-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Coloring Books: Magical Kingdom: An Adult Coloring Book with 40 Assorted Pictures of Elves, Princesses, Mermaids, Fairies, Imps, and T",
    author: "James Manning",
    genre: "art&photog",
    description:
      "An adult coloring book with 40 assorted pictures of elves, princesses, mermaids, fairies, imps, and their mysterious homes",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=yaqjuQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=yaqjuQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fbdb27-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Bedford Glossary of Critical and Literary Terms",
    author: "Ross C. Murfin",
    genre: "selfhelp",
    description:
      "This is the third edition of an essential glossary for students, now thoroughly updated and expanded with more than 50 new literary and critical terms. This title offers a comprehensive reference that clearly and accessibly defines over 850 important literary and critical terms from classical times to the present. It is thoroughly updated and expanded, with more than 50 new terms, including traditional terms, important contemporary terms and introductions to emerging fields of critical study. It features more contemporary examples, including references to movies, TV shows, and bestselling books, and includes new visual examples.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2EgqAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=2EgqAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcc560-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Betrayals",
    author: "Bridget Collins",
    genre: "selfhelp",
    description:
      "\"Dizzyingly wonderful . . . a perfectly constructed work of fiction, with audacious twists . . . Collins plays her own game here with perfect skill.\" -- The Times (UK) An intricate and utterly spellbinding literary epic brimming with enchantment, mystery, and dark secrets from the highly acclaimed author of the #1 international bestseller The Binding. If your life was based on a lie, would you risk it all to tell the truth? At Montverre, an ancient and elite academy hidden high in the mountains, society's best and brightest are trained for excellence in the grand jeu--the great game--an arcane and mysterious competition that combines music, art, math, poetry, and philosophy. Léo Martin once excelled at Montverre but lost his passion for scholarly pursuits after a violent tragedy. He turned to politics instead and became a rising star in the ruling party, until a small act of conscience cost him his career. Now he has been exiled back to Montverre, his fate uncertain. But this rarified world of learning Léo once loved is not the same place he remembers. Once the exclusive bastion of men, Montverre's most prestigious post is now held by a woman: Claire Dryden, also known as the Magister Ludi, the head of the great game. At first, Léo feels an odd attraction to the magister--a mysterious, eerily familiar connection--though he's sure they've never met before. As the legendary Midsummer Game approaches--the climax of the academy's year--long-buried secrets rise to the surface and centuries-old traditions are shockingly overturned. A highly imaginative and intricately crafted literary epic, The Betrayals confirms Bridget Collins as one of the most inventive and exquisite new voices in speculative fiction.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=UzrBzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=UzrBzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcc561-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Eat, Pray, Love",
    author: "Elizabeth Gilbert",
    genre: "fantasy",
    description:
      "The Number One international bestseller, Eat, Pray Love is a journey around the world, a quest for spiritual enlightenment and a story for anyone who has battled with divorce, depression and heartbreak.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=QdCNeNx6LJUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=QdCNeNx6LJUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fcc562-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Eat, Pray, Love",
    author: "Elizabeth Gilbert",
    genre: "romance",
    description:
      "Traces the author's decision to travel the world for a year after suffering a midlife crisis and divorce, a journey that took her to three places in her quest to explore her own nature and learn the art of spiritual balance.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=h5ZCPgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=h5ZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcc563-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Literary Theories",
    author: "Julian Wolfreys",
    genre: "romance",
    description:
      "Every student of literature needs to understand how to use literary theory to analyse and interpret the text. Literary Theories challenges the out-dated notion that theory is something separable from the act of reading and interpretation and, believing that the best way to learn is through practical application, plunges the student into the midst of a range of critical readings. Clearly argued and lucidly written, these essays offer the student reader an interactive introduction to the ways in which contemporary literary theories challenge us to rethink interpretation, literary writing and critical reading.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_kdGEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_kdGEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec70-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Girls in the Attic",
    author: "Marius Gabriel",
    genre: "action&adventure",
    description:
      "The bestselling author of The Designer presents a sweeping story of blind faith, family allegiance and how love makes one man question everything he thought he knew. Max Wolff is a committed soldier of the Reich. So when he is sent home wounded, only to discover that his mother is sheltering two young Jewish women in their home, he is outraged. His mother's act of mercy is a gross betrayal of everything Max stands for. He has dedicated his life to Nazism, fighting to atone for the shame of his anti-Hitler father's imprisonment. It's his duty to turn the sisters over to the Gestapo. But he hesitates, and the longer Max fails to do his duty, the harder it becomes. When Allied bombers fill the skies of Germany, Max is forced to abandon all dogma and face the brutality of war in order to defend precious lives. But what will it cost him?",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=wdAEzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=wdAEzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec71-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Well-tempered Critic",
    author: "Northrop Frye",
    genre: "horror",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40fcec72-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Readers' Liberation",
    author: "Jonathan Rose",
    genre: "graphicnovel",
    description:
      "Reader's Liberation addresses questions of what we should be reading to obtain information, examining how past readers encountered the same problems that today's readers face, and how they dealt with them.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=twpDDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=twpDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fcec73-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "You Made Me Love You",
    author: "John Edgar Wideman",
    genre: "action&adventure",
    description:
      "Fifty-seven short stories drawn from past collections celebrate the lifelong significance of this major American writer's essential contribution to a form--illuminating the ways that he has made it his own.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=5EoiEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=5EoiEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fcec74-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Love Songs of W.E.B. Du Bois",
    author: "Honorée Fanonne Jeffers",
    genre: "essays",
    description:
      "The great scholar, W.E.B. Du Bois, once wrote about what he called \"Double Consciousness,\" a sensitivity that every African American possesses in order to survive. From an early age, Ailey fights a battle for belonging that's made all the more difficult by a hovering trauma. To come to terms with her own identity, Ailey embarks on a journey through her family's past. In doing so Ailey must learn to embrace her full heritage, a legacy of oppression and resistance, bondage and independence, cruelty and resilience that is the story -- and the song -- of America itself.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=hti-zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=hti-zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec75-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "I Couldn't Love You More",
    author: "Esther Freud",
    genre: "scifi",
    description:
      "A sweeping story of three generations of women, crossing from London to Ireland and back again, and the enduring effort to retrieve the secrets of the past It's London, 1960, and Aoife Kelly--once the sparkling object of young men's affections--runs pubs with her brusque, barking husband, Cash. Their courtship began in wartime London, before they returned to Ireland with their daughters in tow. One of these daughters--fiery, independent-minded Rosaleen--moves back to London, where she meets and begins an affair with the famous sculptor Felix Lehmann, a German-Jewish refugee artist over twice her tender eighteen years. When Rosaleen finds herself pregnant with Felix's child, she is evicted from her flat, dismissed from her job, and desperate to hide the secret from her family. Where, and to whom, can she turn? Meanwhile, Kate, another generation down, lives in present-day London with her young daughter and husband, an unsuccessful musician and destructive alcoholic. Adopted and floundering to find a sense of herself in the midst of her unhappy marriage, Kate sets out to track down her birth mother, a search that leads her to a Magdalene Laundry in Ireland and the harrowing history that it holds. Stirring and nostalgic at moments, visceral and propulsive at others, I Couldn't Love You More is a tender, candid portrait of love, sex, motherhood, and the enduring ties of family. It is impossible not to fall under the spell of this tale of mothers and daughters, wives and muses, secrets and outright lies.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=5WL4zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=5WL4zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec76-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Last Tiara",
    author: "M. J. Rose",
    genre: "romance",
    description:
      "From New York Times and Wall Street Journal bestseller M.J. Rose comes a provocative and moving story of a young female architect in post-World War II Manhattan, who stumbles upon a hidden treasure and begins a journey to discovering her mother's life during the fall of the Romanovs. Sophia Moon had always been reticent about her life in Russia and when she dies, suspiciously, on a wintry New York evening, Isobelle despairs that her mother's secrets have died with her. But while renovating the apartment they shared, Isobelle discovers something among her mother's effects-a stunning silver tiara, stripped of its jewels. Isobelle's research into the tiara's provenance draws her closer to her mother's past-including the story of what became of her father back in Russia, a man she has never known. The facts elude her until she meets a young jeweler, who wants to help her but is conflicted by his loyalty to the Midas Society, a covert international organization whose mission is to return lost and stolen antiques, jewels, and artwork to their original owners. Told in alternating points of view, the stories of the two young women unfurl as each struggles to find their way during two separate wars. In 1915, young Sofiya Petrovitch, favorite of the royal household and best friend of Grand Duchess Olga Nikolaevna, tends to wounded soldiers in a makeshift hospital within the grounds of the Winter Palace in St. Petersburg and finds the love of her life. In 1948 New York, Isobelle Moon works to break through the rampant sexism of the age as one of very few women working in a male-dominated profession and discovers far more about love and family than she ever hoped for. In M.J. Rose's deftly constructed narrative, the secrets of Sofiya's early life are revealed incrementally, even as Isobelle herself works to solve the mystery of the historic Romanov tiara (which is based on an actual Romanov artifact that is, to this day, still missing)-and how it is that her mother came to possess it. The two strands play off each other in finely-tuned counterpoint, building to a series of surprising and deeply satisfying revelations.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=MXb1zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=MXb1zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec77-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Making and Seeing Modern Texts",
    author: "Jonathan Locke Hart",
    genre: "romance",
    description: "No description",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40fcec78-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Phone Booth at the Edge of the World",
    author: "Laura Imai Messina",
    genre: "selfhelp",
    description:
      "When Yui loses both her mother and her daughter in the tsunami, she begins to mark the passage of time from that date onward: Everything is relative to March 11, 2011, the day the tsunami tore Japan apart, and when grief took hold of her life. Yui struggles to continue on, alone with her pain. Then, one day she hears about a man who has an old disused telephone booth in his garden. There, those who have lost loved ones find the strength to speak to them and begin to come to terms with their grief. As news of the phone booth spreads, people travel to it from miles around. Soon Yui makes her own pilgrimage to the phone booth, too. But once there she cannot bring herself to speak into the receiver. Instead she finds Takeshi, a bereaved husband whose own daughter has stopped talking in the wake of her mother's death.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=U8y0zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=U8y0zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec79-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Painting the Light",
    author: "Sally Cabot Gunning",
    genre: [],
    description:
      "From the critically acclaimed author of Monticello and The Widow's War comes a vividly rendered historical novel of love, loss, and reinvention, set on Martha's Vineyard at the turn of the nineteenth century. Martha's Vineyard, 1898. In her first life, Ida Russell had been a painter. Five years ago, she had confidently walked the halls of Boston's renowned Museum School, enrolling in art courses that were once deemed \"unthinkable\" for women to take, and showing a budding talent for watercolors. But no more. Ida Russell is now Ida Pease, resident of a seaside farm on Vineyard Haven, and wife to Ezra, a once-charming man who has become an inattentive and altogether unreliable husband. Ezra runs a salvage company in town with his business partner Mose Barstow, but he much prefers their nightly card games at the local pub to his work in their Boston office, not to mention filling haystacks and tending sheep on the farm at home--duties that have fallen to Ida and their part-time farmhand Lem. Ida, meanwhile, has left her love for painting behind. It comes as no surprise to Ida when Ezra is hours late for a Thanksgiving dinner, only to leave abruptly for another supposedly urgent business trip to Boston. But then something truly unthinkable happens: a storm strikes, and the Portland sinks. Ezra and Mose are presumed dead. In the wake of this shocking tragedy, Ida must settle the affairs of Ezra's estate, a task that brings her to a familiar face from her past--Henry Barstow, Mose's brother and executor. As she joins Henry in sifting through the remnants of her husband's life and work, Ida must learn to separate truth from lies and what matters from what doesn't. Painting the Light is an arresting portrait of a woman, and a considered meditation on loss and love.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Y8vIzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Y8vIzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec7a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Animal",
    author: "Lisa Taddeo",
    genre: "art&photog",
    description:
      '"Joan has spent a lifetime enduring the cruelties of men. But when one of them commits a shocking act of violence in front of her, she flees New York City in search of Alice, the only person alive who can help her make sense of her past. In the sweltering hills above Los Angeles, Joan unravels the horrific event she witnessed as a child--that has haunted her every waking moment--while forging the power to finally strike back."--',
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=jJ0tEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=jJ0tEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fcec7b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Acts of Desperation",
    author: "Megan Nolan",
    genre: "graphicnovel",
    description:
      "The female narrator falls completely into the power of a male writer. When he suddenly rejects her, she resolves to hang on to him and his love at all costs...even if it destroys her.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=77-nzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=77-nzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec7c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Liar's Wife",
    author: "Mary Gordon",
    genre: "scifi",
    description:
      "Four novellas about relationships at home and abroad are set in different historical periods and explore the experiences of such protagonists as an American grad student who escapes to Italy after a compromising love affair. By the award-winning author of The Love of My Youth.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=OmHJngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=OmHJngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec7d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "City of Girls",
    author: "Elizabeth Gilbert",
    genre: "scifi",
    description:
      "Eighty-nine-year-old Vivian reflects on the time when she was young, wild, and living with her Aunt Peg in Manhattan, whose midtown theatre introduced her to an entire cosmos of characters.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=6EGREAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=6EGREAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec7e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Foundling",
    author: "Ann Leary",
    genre: "mystery",
    description:
      "\"It's 1927 and eighteen-year-old Mary Engle is hired to work as a secretary at a remote but scenic institution for mentally disabled women called the Nettleton State Village for Feebleminded Women of Childbearing Age. She's immediately in awe of her employer--brilliant, genteel Dr. Agnes Vogel. Dr. Vogel had been the only woman in her class in medical school. As a young psychiatrist she was an outspoken crusader for women's suffrage. Now, at age forty, Dr. Vogel runs one of the largest and most self-sufficient public asylums for women in the country. Mary deeply admires how dedicated the doctor is to the poor and vulnerable women under her care. Soon after she's hired, Mary learns that a girl from her childhood orphanage is one of the inmates. Mary remembers Lillian as a beautiful free spirit with a sometimes-tempestuous side. Could she be mentally disabled? When Lillian begs Mary to help her escape, alleging the asylum is not what it seems, Mary is faced with a terrible choice. Should she trust her troubled friend with whom she shares a dark childhood secret? Mary's decision triggers a hair-raising sequence of events with life-altering consequences for all.\"--Amazon.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=0whuEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=0whuEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fcec7f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Career of Evil",
    author: "Robert Galbraith",
    genre: "science&tech",
    description:
      "When a woman's severed leg is delivered to Robin Ellacott, her boss, private detective Cormoran Strike, looks into his past to determine who is responsible.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=vWCpAQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=vWCpAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec80-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Two Or Three Years Later",
    author: "Ror Wolf",
    genre: "history",
    description:
      "Ror Wolf creates strangely entertaining and condensed stories that call into question the very nature of what makes a story a story. Almost an anti-book, this title takes as its basis the small, diurnal details of life, transforming these oft-overlooked ordinary experiences of nondescript people in small German villages into artistic meditations on ambiguity, repetition, and narrative.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=QwW5kQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=QwW5kQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec81-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "I Am Breaking Into Your Home Because I Cannot Read",
    author: "David D. Flanagan",
    genre: "action&adventure",
    description: "No description",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=DsMTKQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=DsMTKQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec82-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Waiting for the Waters to Rise",
    author: "Maryse Condé",
    genre: "essays",
    description:
      "Babakar is an African doctor living alone until the child Anaïs comes into his life. Forced to abandon his solitude, he takes her to Haiti in search of her family.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=gNyWzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=gNyWzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec83-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "College Kaleidoscope Proudly Presents the Best of Autumn Voices",
    author: "Unknown",
    genre: "fantasy",
    description: "No description",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40fcec84-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Concept of Success in Adult Literacy",
    author: "Alan Huntington Charnley",
    genre: "action&adventure",
    description:
      "A study which describes the aims and achievements of students who come forward for Adult Literacy, recording their perception in their own words.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40fcec85-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Islanders",
    author: "Christopher Priest",
    genre: "action&adventure",
    description:
      "Describes the islands that comprise the Dream Archipelago and its most interesting inhabitants.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=-otKAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=-otKAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec86-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Into the Sun",
    author: "Deni Ellis Béchard",
    genre: "fantasy",
    description:
      "Drawn to the secret fabrications of these strangers, and increasingly convinced the events that led to the fatal explosion weren't random, Michiko follows a paper trail that leads beyond Kabul to Louisiana, Maine, Quebec, and Dubai. As the investigation deepens, Michiko's research steadily uncovers old grudges and secret traumas, private desires that have public consequences. The victims' fictions of omission make each complicit in his or her own death. In a city of contesting accounts, the American state's manipulation of the war narrative-writ large on an international stage-is undercut by the innumerable, privately manipulated narratives running in and through each individual life. Though Afghanistan is occupied territory, Kabul belongs to the people that live there: to the hungry, determined, and resourceful locals who are just as willing as their occupiers to reinvent themselves to survive.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=-KhzjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=-KhzjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec87-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Brotherhood",
    author: "Mohamed Mbougar Sarr",
    genre: "romance",
    description:
      "WINNER of the French Voices Grand Prize, Prix Ahmadou Kourouma, and Grand Prix du Roman Métis Mohamed Mbougar Sarr's searing and thought-provoking debut novel, Brotherhood takes place in the imaginary town of Kalep, where a fundamentalist Islamist government has spread its brutal authority. Under the regime of the so-called Brotherhood, two young people are publicly executed for having loved each other. In response, their mothers begin a secret correspondence, their only outlet for the grief they share and each woman's personal reckoning with a leadership that would take her beloved child's life. At the same time, spurred on by their indignation at what seems to be an escalation of The Brotherhood's brutality, a band of intellectuals and free-thinkers seeks to awaken the conscience of the cowed populace and foment rebellion by publishing an underground newspaper. While they grapple with the implications of what they have done, the regime's brutal leader begins a personal crusade to find the responsible parties, and bring them to his own sense of justice. In this brilliant analysis of tyranny and brutality, Mbougar Sarr explores the ways in which resistance and heroism can often give way to cowardice, all while giving voice to the moral ambiguities and personal struggles involved in each of his characters' search to impose the values they hold most dear.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=WzDAzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=WzDAzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec88-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A History of Present Illness",
    author: "Anna DeForest",
    genre: "science&tech",
    description:
      "A young woman puts on a white coat for her first day as a student doctor. So begins this powerful debut, which follows our unnamed narrator through cadaver dissection, surgical rotation, difficult births, sudden deaths, and a budding relationship with a seminarian. In the troubled world of the hospital, where the language of blood tests and organ systems so often hides the heart of the matter, she works her way from one bed to another, from a man dying of substance use and tuberculosis, to a child in pain crisis, to a young woman, fading from confusion to aphasia to death. The long hours and heartrending work begin to blur the lines between her new life as a physician and the lifelong traumas she has fled. In brilliant, wry, and biting prose, A History of Present Illness is a boldly honest meditation on the body, the hope of healing in the face of total loss, and what it means to be alive.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=DCXAzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=DCXAzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec89-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Half Life",
    author: "Jillian Cantor",
    genre: "shortstory",
    description:
      "The USA Today bestselling author of In Another Time reimagines the pioneering, passionate life of Marie Curie using a parallel structure to create two alternative timelines, one that mirrors her real life, one that explores the consequences for Marie and for science if she'd made a different choice. In Poland in 1891, Marie Curie (then Marya Sklodowska) was engaged to a budding mathematician, Kazimierz Zorawski. But when his mother insisted she was too poor and not good enough, he broke off the engagement. A heartbroken Marya left Poland for Paris, where she would attend the Sorbonne to study chemistry and physics. Eventually Marie Curie would go on to change the course of science forever and be the first woman to win a Nobel Prize.But what if she had made a different choice? What if she had stayed in Poland, married Kazimierz at the age of twenty-four, and never attended the Sorbonne or discovered radium? What if she had chosen a life of domesticity with a constant hunger for knowledge in Russian Poland where education for women was restricted, instead of studying science in Paris and meeting Pierre Curie? Entwining Marie Curie's real story with Marya Zorawska's fictional one, Half Life explores loves lost and destinies unfulfilled--and probes issues of loyalty and identity, gender and class, motherhood and sisterhood, fame and anonymity, scholarship and knowledge. Through parallel contrasting versions of Marya's life, Jillian Cantor's unique historical novel asks what would have happened if a great scientific mind was denied opportunity and access to education. It examines how the lives of one remarkable woman and the people she loved - as well as the world at large and course of science and history--might have been irrevocably changed in ways both great and small.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=9rKXzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=9rKXzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec8a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "I Am Breaking Into Your Home Because I Cannot Read",
    author: "David D. Flanagan",
    genre: "science&tech",
    description: "No description",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=fW4etAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=fW4etAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec8b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Talker",
    author: "Mary Sojourner",
    genre: "science&tech",
    description:
      'Amid the harsh beauty of the contemporary Southwest, these stories explore lives of the down and out with uncanny grit and grace."',
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_hopjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_hopjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec8c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Validity of Literary - Critical Approaches to the Bible",
    author: "Joel Christensen",
    genre: "scifi",
    description: "No description",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40fcec8d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Companions",
    author: "Christina Hesselholdt",
    genre: "scifi",
    description: "No description",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=4CmatAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=4CmatAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec8e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Higher Ground",
    author: "Anke Stelling",
    genre: "essays",
    description:
      "A prize-winning novel about class, money, creativity, and motherhood, that ultimately reveals what happens when the hypocrisies we live by are exposed... Resi is a writer in her mid-forties, married to Sven, a painter. They live, with their four children, in an apartment building in Berlin, where their lease is controlled by some of their closest friends. Those same friends live communally nearby, in a house they co-own and have built together. Only Resi and Sven, the token artists of their social circle, are renting. As the years have passed, Resi has watched her once-dear friends become more and more ensconced in the comforts and compromises of money, success, and the nuclear family. After Resi's latest book openly criticizes stereotypical family life and values, she receives a letter of eviction. Incensed by the true natures and hard realities she now sees so clearly, Resi sets out to describe the world as it really is for her fourteen-year-old daughter, Bea. As Berlin, that creative mecca, crumbles under the inexorable march of privatization and commodification, taking relationships with it, Resi is determined to warn Bea about the lures, traps, and ugly truths that await her. Written with dark humor and clarifying rage, Anke Stelling's prize-winning novel is a ferocious and funny account of motherhood, parenthood, family, and friendship thrust into battle. Lively, rude, and wise, it throws down the gauntlet to those who fail to interrogate who they have become.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sY-azQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sY-azQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec8f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Dictionary of Literary Terms",
    author: "Rajimwale Sharad",
    genre: "art&photog",
    description: "No description",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40fcec90-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Dust to Dust",
    author: "Tami Hoag",
    genre: "horror",
    description:
      "The killing of an Internal Affairs cop draws veteran detective Sam Kovac and his young female partner Nikki into the disturbing and vexing case. (Suspense)",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=W1_FAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=W1_FAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec91-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Sense of an Ending",
    author: "Julian Barnes",
    genre: "romance",
    description:
      '"The Sense of an Ending follows Tony Webster, a middle-aged man, as he contends with a past he never thought much about--until his closest childhood friends return with a vengeance: one of them from the grave, another maddeningly present. Tony thought he left this all behind as he built a life for himself, and his career has provided him with a secure retirement and an amicable relationship with his ex-wife and daughter, who now has a family of her own. But when Tony is presented with a mysterious legacy, he is forced to reconsider a variety of things he thought he understood all along, and he must revise his estimation of his own nature and place in the world. A novel so compelling that it begs to be read in a single setting, The Sense of an Ending has the psychological and emotional depth and sophistication of Henry James at his best, and is a crowning achievement of Julian Barnes\'s oeuvre."--',
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "40fcec92-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Lost Landscape",
    author: "Joyce Carol Oates",
    genre: "romance",
    description:
      "A momentous memoir of childhood and adolescence from one of our finest and most beloved writers, as we've never seen her before In The Lost Landscape, Joyce Carol Oates vividly re-creates the early years of her life in western New York State, powerfully evoking the romance of childhood and the way it colors everything that comes after. From early memories of her relatives to remembrances of a particularly poignant friendship with a red hen, from her first friendships to her first experiences with death, The Lost Landscape is an arresting account of the ways in which Oates's life (and her life as a writer) was shaped by early childhood and how her later work was influenced by a hardscrabble rural upbringing. In this exceptionally candid, moving, and richly reflective recounting of her early years, Oates explores the world through the eyes of her younger self and reveals her nascent experiences of wanting to tell stories about the world and the people she meets. If Alice in Wonderland was the book that changed a young Joyce forever and inspired her to look at life as offering end-less adventures, she describes just as unforgettably the harsh lessons of growing up on a farm. With searing detail and an acutely perceptive eye, Oates renders her memories and emotions with exquisite precision to truly transport the reader to a bygone place and time, to the lost landscape of the writer's past but also to the lost landscapes of our own earliest, and most essential, lives.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=N9rLsgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=N9rLsgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fcec93-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Empowerment of Women Through Self Help Groups",
    author: "G. Sreeramulu",
    genre: "action&adventure",
    description:
      "The book is an in-depth study of Empowerment of Women Through Self Help Groups. It covers the problems and perspectives of Self Help Groups and suggest several measures. The study has evaluated the implementation of several schemes in Anantapur District in particular and in Andhra Pradesh in general such as rearing goats, dairying, petty business activities, making of soft toys and so on. The findings are very much encouraging, such as Women are now managing their families, Panchayat Raj Institutions, are able to concentrate on their children s education and health. Contents include: Introduction, Public Policy Theoretical Perspectives, Evaluation, Aims and Objectctives of Self Help Groups in Anantapur District, Socio-Economic Background of the Sample Study, Problems and perspectives of Self Help Groups, Performance of Self Help Groups and Conclusion. This outstanding Text-cum-Reference book will be of great use to Scholars, Administrators, Planners, Policy-makers, Statesmen and Students of Political Science, Economics, Sociology, Commerce and Women Studites.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Mmtn9-YpF6EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Mmtn9-YpF6EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c00-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Optimizing the Self",
    author: "Ole Jacob Madsen",
    genre: "science&tech",
    description:
      'This book provides an analysis of the social representations of leading self-help genres, including neurolinguistic programming, cognitive self-help therapy, mindfulness, self-management, self-esteem, self-leadership and self-control. Exploring the globalised therapeutic culture of today, the book argues that psychology as science is often abandoned to aid the individual pursuit for self-realization and self-optimization. Opposing the view that self-help culture is external to psychology, Madsen argues that it is firmly embedded within psychology, playing an important role in people s lives. Each chapter traces and critically interprets a range of self-help philosophies and techniques, examining the claims of self-help literature to represent the most innovative psychological, medical or neurobiological research. Discussing each genre in turn, chapters examine key research alongside self-help literature to explore the effectiveness and impact of leading self-help genres in various social contexts and environments. The book offers a contemporary critical overview of issues concerning self-help, combining critical psychology with the theory of social representation to provide a broad perspective on self-help as a valid psychology. Optimizing the Self will be of interest to academics, researchers and postgraduate students in the fields of social representation, critical and cultural psychology and theory, clinical psychology, and the sociology of culture and science. The book will also be of use to critical and cultural psychologists and theorists, as well as clinical psychologists. "',
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=aJNkvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=aJNkvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fe4c01-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Self-Determination Theory and Healthy Aging",
    author: "Betsy Ng",
    genre: "fantasy",
    description:
      "This book pioneers evidence-based research on healthy aging through the application of self determination theory (SDT). Its uniqueness is located in the fact that to date, no other work has applied SDT to the empirical study of aging populations. The authors focus on how SDT drives healthy, successful and active aging, and note that the motivation factors underpinning healthy aging are often neglected, or altogether absent, in the existing literature. This edited volume is particularly timely given the expanding aging crisis in many North American, European and Asian contexts. The collection of chapters meets this challenge head-on in comparing these contexts vis-a-vis a broad international scope, and subsequent discussions on important specialty issues in aging, such as hearing and memory loss. The work offers global perspectives on aging, autonomy and associated life challenges, as well as factors relating to the sustainability of healthy aging in terms of physical and mental well-being. This book will be highly relevant to researchers in the SDT community, as well as specialists in aging and gerontology. It will also be of interest to lifespan psychologists and developmental psychologists.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=BFMEEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=BFMEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c02-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Revisiting the Use of Self",
    author: "Deena Mandell",
    genre: "selfhelp",
    description:
      'In recent years, several developments have stimulated new ways of thinking about the social worker\'s "self" or "selves" in all aspects of practice. The focus on practice with diverse populations, and the emphasis on "anti-oppressive" practice have highlighted elements of the relationship between social worker and client. The objective of this book is threefold: 1. Offer the reader a historical/developmental overview of the concept of "use of self" and critically explore its adequacy for contemporary ethical practice. 2. Provide the reader with first-person, practitioners\' accounts of their own "use of self" in examples of reflective practice approaches. 3. Broaden the scope of the concept of critical "use of self" to fields of service where it is under-theorized in, for example, community work and corrections.',
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=R9hgnEV6RfsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=R9hgnEV6RfsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c03-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Empowerment of Women Through Self Help Groups",
    author: "G. Sreeramulu",
    genre: "art&photog",
    description:
      "The book is an in-depth study of Empowerment of Women Through Self Help Groups. It covers the problems and perspectives of Self Help Groups and suggest several measures. The study has evaluated the implementation of several schemes in Anantapur District in particular and in Andhra Pradesh in general such as rearing goats, dairying, petty business activities, making of soft toys and so on. The findings are very much encouraging, such as Women are now managing their families, Panchayat Raj Institutions, are able to concentrate on their children s education and health. Contents include: Introduction, Public Policy Theoretical Perspectives, Evaluation, Aims and Objectctives of Self Help Groups in Anantapur District, Socio-Economic Background of the Sample Study, Problems and perspectives of Self Help Groups, Performance of Self Help Groups and Conclusion. This outstanding Text-cum-Reference book will be of great use to Scholars, Administrators, Planners, Policy-makers, Statesmen and Students of Political Science, Economics, Sociology, Commerce and Women Studites.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Mmtn9-YpF6EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Mmtn9-YpF6EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c04-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Liberation in the Face of Uncertainty",
    author: "Hubert J. M. Hermans",
    genre: "mystery",
    description:
      "This book uses Dialogical Self Theory to respond to the challenges of climate change, well-being, and disenchantment of the world.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=GCZTEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=GCZTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c05-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Measuring Ego Development",
    author: "Jane Loevinger",
    genre: "selfhelp",
    description: "No description",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=XkdqAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=XkdqAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fe4c06-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Confronting the Existential Threat of Dementia",
    author: "Richard Cheston",
    genre: "essays",
    description:
      "This book explores how dementia acts as an existential threat, both to people diagnosed with the condition, and to their carers. The authors highlight how dementia not only gradually erodes our most fundamental abilities, but that it does so at a time of life when the resources of individuals, couples, and families are already stretched. While over time many people who are living with dementia are able to adapt to their diagnosis and acknowledge its impact on them, for many others it remains too threatening and painful to do this. The book draws on examples from clinical practice and experimental studies to argue that a range of responses, such as searching for long-dead parents or clinging to previous identities, all represent ways in which people living with dementia attempt to protect themselves against the emotional impact of the condition. Finally, the authors set out new ways of intervening to boost psychological resources and thereby support people in facing the existential threat of dementia.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=3DidDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=3DidDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c07-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Contemporary Masculinities",
    author: "Brendan Gough",
    genre: "children",
    description:
      "This book assesses the construction of masculinities in relation to appearance, embodiment and emotions by drawing on perspectives in psychology, sociology, gender studies and public health. Brendan Gough questions conventional assumptions about masculinity and men’s health and responds to recent trends in critical studies of masculinities which discuss ‘positive’ or ‘healthy’ masculine identities. The book showcases discursively inflected qualitative research using data sources where men’s own accounts are prioritised: in-depth interviews and online discussion forums. Chapters discuss men’s appearance concerns and activities and examine male mental health, focusing on vulnerability and its management. Current trends and key concepts, including intersectionality, inequalities and embodiment are also considered throughout. This book will appeal to students and academics within social sciences and humanities interested in gender issues in general and masculinity in particular.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=v4pWDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=v4pWDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c08-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Moral Certainty and the Foundations of Morality",
    author: "Neil O'Hara",
    genre: "history",
    description:
      "What lies at the foundation of our moral beliefs? If we dig down far enough do we find that our moral values have no ground at all to stand on, and so are apt to collapse upon serious philosophical investigation? This book seeks to answer these and related questions by positing an indubitable foundation for our moral beliefs – they arise from the phenomenon of ‘primary recognition’, and are fundamentally shaped by ‘basic moral certainties’. Drawing on philosophers such as Ludwig Wittgenstein and Knud Ejler Løgstrup, this book draws together insights from both Analytic and Continental philosophy to provide a convincing new picture of our moral foundations. And it does so in a way that eschews moral conservativism and opens the way for a rich understanding of the variety and particularity of our human moral systems, while also keeping a significant place for those moral beliefs that occur universally, across cultures.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=LZNRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=LZNRDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c09-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Male Eating Disorders",
    author: "Russell Delderfield",
    genre: "science&tech",
    description:
      "This book takes a novel approach to the study of male eating disorders – an area that is often dominated by clinical discourses. The study of eating disorders in men has purportedly suffered from a lack of dedicated attention to personal and socio-cultural aspects. Delderfield tackles this deficiency by spotlighting a set of personal accounts written by a group of men who have experiences of disordered eating. The text presents critical interpretations that aim to situate these experiences in the social and cultural context in which these disorders occur. This discursive work is underpinned by an eclectic scholarly engagement with social psychology and sociology literature around masculinities, embodiment and fatness, belonging, punishment, stigma, and control; leading to understandings about relationships with food, body and self. This is undertaken with a reflexive element, as the personal intersects with the professional. This text will appeal to students, scholars and clinicians in social sciences, humanities, and healthcare studies, including public health.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=4Ld9DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=4Ld9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c0a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Aging and Human Nature",
    author: "Mark Schweda",
    genre: [],
    description:
      "This book focuses on ageing as a topic of philosophical, theological, and historical anthropology. It provides a systematic inventory of fundamental theoretical questions and assumptions involved in the discussion of ageing and old age. What does it mean for human beings to grow old and become more vulnerable and dependent? How can we understand the manifestations of ageing and old age in the human body? How should we interpret the processes of change in the temporal course of a human life? What impact does old age have on the social dimensions of human existence? In order to tackle these questions, the volume brings together internationally distinguished scholars from the fields of philosophy, theology, cultural studies, social gerontology, and ageing studies. The collection of their original articles makes a twofold contribution to contemporary academic discourse. On one hand, it helps to clarify and deepen our understanding of ageing and old age by examining it from the fundamental point of view of philosophical, theological, and historical anthropology. At the same time, it also enhances and expands the discourses of philosophical, theological, and historical anthropology by systematically taking into account that human beings are essentially ageing creatures.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=MnDJDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=MnDJDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c0b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Phenomenology of Suicide",
    author: "Maurizio Pompili",
    genre: "children",
    description:
      "This book will help the reader to understand the suicidal mind from a phenomenological point of view, shedding light on the feelings of suicidal individuals and also those of clinicians. In accordance with the importance that the phenomenological approach attaches to subjectivity and sense of self as the starting points for knowledge, emphasis is placed on the need for the clinician to focus on the subjective experiences of the at-risk individual, to set aside prior assumptions, judgments, or interpretations, and to identify ways of bridging gaps in communication associated with negative emotions. The vital importance of empathy is stressed, drawing attention to the insights offered by neuroimaging studies and the role of mirror neurons in social cognition. It is widely acknowledged that when a clinician meets a person who wants to die by suicide, the clinician does not fully understand what is going on inside the mind of that individual. This book recognizes that any approach to suicide prevention must promote understanding of suicidal thoughts and feelings. The awareness that it fosters and the innovative perspectives that it presents will appeal to a wide readership.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=bHg5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=bHg5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c0c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Ego Psychology and Social Work Practice",
    author: "Eda Goldstein",
    genre: "science&tech",
    description:
      "While ego psychological theory still holds a pre-eminent position in clinical social work practice, the field has changed in many ways. This revised edition addresses these major changes, bringing the reader up to date.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=hMmd3Rq13ZAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=hMmd3Rq13ZAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c0d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Identity Structure Analysis and Teacher Mentorship",
    author: "Graham Passmore",
    genre: "horror",
    description:
      "This book examines the benefits of applying the Identity Structure Analysis (ISA) to teacher professional development. At present no government, local authority or school is actively applying Identity Structure Analysis to monitor school improvement: in a profession where turnover is extremely high, ISA is framed as a way for professional development to meet the needs of the specific teacher. Examining idiographic ISA analyses as well as practical advice for implementing professional development programs, the authors scrutinise how ISA can be used in conjunction with mentoring to offset teacher turnover. This practical volume will be of interest and value to scholars and researchers of teacher identity and professional development, as well as researchers and policymakers interested in reducing teacher turnover.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=T-69DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=T-69DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c0e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A Critical Study of Self-help and Self-improvement Practices",
    author: "Scott Cherry",
    genre: "horror",
    description:
      "his book looks at what holds the term 'self-help' together when the words seem to appear as entirely independent phenomena. It undertakes to examine the relationships between self-help books and self-help groups, and self and help, drawing on textual, discursive, and ethnographic modes of inquiry.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=IxW5uAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=IxW5uAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fe4c0f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Beyond the Psychology Industry",
    author: "Paul Rhodes",
    genre: "science&tech",
    description:
      "This book provides a scholarly yet accessible approach to critical psychology, specifically discussing therapeutic practices that are possible outside of the mainstream psychology industry. While there are many books that deconstruct or dismantle clinical psychology, few provide a compendium of potential alternatives to mainstream practice. Focusing on five main themes in reference to this objective: suffering, decolonization, dialogue, feminism and the arts, these pages explore types of personal inquiry, cultural knowledge or community action that might help explain and heal psychological pain beyond the confines of the therapy room. Chapters focus on the role of cultural knowledge, including spiritual traditions, relational being, art, poetry, feminism and indigenous systems in promoting healing and on community-based-initiatives, including open dialogue, justice-based collaboration and social prescribing. Beyond the Psychology Industry will be of interest to researchers, clinical psychologists, therapists, academics in mental health, and cultural psychologists.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=U2vDDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=U2vDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c10-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "SELF - Driving Positive Psychology and Wellbeing",
    author: "Frédéric Guay",
    genre: "art&photog",
    description:
      "Research on the Self relates to various phenomena including self?esteem, self?concept, self?verification, self?awareness, identity, self?efficacy, passion, self?determination, goals etc. that are predictive of optimal functioning and well?being. Such a research endeavor is consistent with the positive psychology movement focusing on the scientific study of what makes people psychologically healthy, happy, and satisfied in their lives, as well as on their strengths and virtues. The positive psychology movement cultivates a sensible approach to optimal human functioning and well?being in various life contexts. Chapters in this volume will illustrate some of the best of the research on the interplay between the self and positive psychology, to show the potential of this research for transforming our societies. SELF – Driving Positive Psychology and Well?being thus provides a unique insight into self and its fundamental role for well?being. This volume is intended to develop both theoretical and methodological ideas and to present empirical evidence of various phenomenon important for well ?being. The scope of the volume is thus very broad, and provides a framework for the development of the chapter as authors see most appropriate.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=N9g1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=N9g1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c11-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Falling Awake",
    author: "Todd L. Blattner",
    genre: "mystery",
    description:
      'Waking is a natural shift from unconsciousness to awareness. Falling awake is a special case of waking where we relax out of old patterns, ease out of resistance, and surrender to the grace and love that are always present beneath the surface of appearances. Although falling awake, like falling asleep, cannot be forced, it can be prepared for. Integrating perspectives from physical, social and psychological sciences, philosophy, religion and energy awareness, and calling on many years of experience as a teacher, counsellor and Buddhist monk, Blattner takes us step by step into an expanded understanding of the universe in which we live, the mind/body system that we call "self," and that which may lie beyond. With gentleness and kindness, Falling Awake shows us how to move beyond the programs and limiting belief systems that support the problems in our lives, and awaken into an increasingly gentle, joyful, and expanded experience of the art of living.',
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=0YO7DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=0YO7DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c12-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Self, Value, and Narrative",
    author: "Anthony Rudd",
    genre: "shortstory",
    description:
      "Anthony Rudd presents a striking new account of the self as an ethical, evaluative being. He draws on Kierkegaard's thought to present a case for an ancient and currently neglected view: that the tensions which are constitutive of selfhood can only be reconciled through the understanding of the self as guided by an objective Good.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=J6VV61eT9kUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=J6VV61eT9kUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c13-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Dailyom",
    author: "Madisyn Taylor",
    genre: "scifi",
    description:
      "This inspirational book delivers messages of healing, awareness, and well-being. A companion to the popular Daily OM Website, it is a valuable guide that will enable you to find balance and wellness through conscious awareness. As you read these passages, which touch on topics including meditation, relationships, nature, and more, you'll see that they'll make the journey of your life much more meaningful. The gentle and affirming wisdom contained within these pages is intended to make each of your days a little happier, less stressful, and more satisfying. It will introduce you to elements of Mother Nature's majesty that you may never have noticed before, guide you as you discover the inward peace you've longed for, and inspire you to embrace change in every corner of your existence. As you open your mind to the possibilities contained within, you'll discover that the power to create a fulfilling and more purposeful life was in you all along.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=AI4IFFsFe_EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=AI4IFFsFe_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c14-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Men's Discourses of Depression",
    author: "D. Galasinski",
    genre: "essays",
    description:
      "An original and timely study of men's experiences of depression in which the author tackles the discursively constructed relationship between the self and depression showing its linguistic and social complexity and analyses the relationship between depression and masculinity.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=6hGHDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=6hGHDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c15-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Embodied Hot Cognitive Vulnerability to Emotional Disorders​",
    author: "Alexandru Tiba",
    genre: "shortstory",
    description:
      "The way we make sense of emotional situations has long been considered a foundation for the construction of our emotional experiences. Sometimes emotional meanings become distorted and so do our emotional experiences become disturbed. In the last decades, an embodied construction of emotional meanings has emerged. In this book, the embodied simulation framework is introduced for distorted emotional and motivational appraisals such as irrational beliefs, focusing on hyper-reactive emotional and motivational neural embodied simulations as core processes of cognitive vulnerability to emotional disorders. By embodying distorted emotional cognition we can extend the traditional views of the development of distorted emotional appraisals beyond learning from stress-sensitization process. Conclusions for the conceptualization of distorted emotional appraisals and treatment implications are discussed. Distorted emotional cognitions such as rigid thinking (I should succeed), awfulizing (It’s awful) and low frustration tolerance (I can’t stand it) are both vulnerabilities to emotional disorders and targets of psychotherapy. In this book, I argue that distorted emotional cognitions which act as proximal vulnerability to emotional disorders are embodied in hyper-reactive neural states involved in dysregulated emotions. Traditionally, excessive negative knowledge has been considered the basis of the cognitive vulnerability to emotional disorders. I suggest that the differences in the affective embodiments of distorted cognition confer its vulnerability status, rather than the differences in dysfunctional knowledge. I propose that negative knowledge and stress-induced brain changes conflate each other in building cognitive vulnerability to disturbed emotion. This model of distorted emotional cognition suggests new integration of learning and medication interventions in psychotherapy. This book is an important contribution to the literature given that a new model for the conceptualization of cognitive vulnerability is presented which extends the way we integrate biological, behavioral, and memory interventions in cognitive restructuring. This work is part of a larger project on embodied clinical cognition.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=elf9DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=elf9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c16-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Act Thin, Stay Thin",
    author: "Richard B. Stuart",
    genre: "art&photog",
    description: "No description",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=VpA_AAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=VpA_AAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fe4c17-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Mind Made Flesh",
    author: "Nicholas Humphrey",
    genre: "science&tech",
    description:
      "In a series of essays, Nicholas Humphrey invites us to take another look at a variety of central and not-so-central issues, of contemporary psychology including: the evolution of consciousness, multiple personality disorder and cave art.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=AT0R7OevIJIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=AT0R7OevIJIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c18-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Self-Understanding in Childhood and Adolescence",
    author: "William Damon",
    genre: "essays",
    description:
      "Reports data from several cross-sectional and longitudinal studies of children's and adolescent's self conceptions and presents new methods for interviewing children about themselves and for analyzing their responses for developmental level and schematic orientation. Annotation copyrighted by Book News, Inc., Portland, OR",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=jO4zAAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=jO4zAAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c19-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "A Study of the Relationship of the Self-concept to Adjustment in a Selected Group of College Women",
    author: "Frances Helen DeLisle",
    genre: "action&adventure",
    description: "No description",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=oYIUjjWVT0AC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=oYIUjjWVT0AC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "40fe4c1a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The User's Guide to Being Human",
    author: "Scott Edmund Miller",
    genre: "history",
    description:
      '"The author examines eight human inner capacities by which people shape their lives. He outlines a step-by-step program to harness this great potential freely available within people to bring out the best in themselves and create the life they dream of leading" --Provided by publisher.',
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=qcDJC7tYRXwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=qcDJC7tYRXwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c1b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "George Herbert Mead",
    author: "Peter Hamilton",
    genre: "scifi",
    description: "No description",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Fboif9RLYwUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Fboif9RLYwUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c1c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Breaking Free from Me",
    author: "J. Matthew Nance",
    genre: "fantasy",
    description:
      'Are you ready for an alternative to popular culture\'s "me-first" approach to life? Now, from the author of Living Wisely, comes timeless straight talk in the new book, Breaking Free ... From Me. If you are desperate for a different kind of life that really satisfies, then you can find in these pages the way to get self in sync with the bigger picture of life. Breaking Free ... From Me will help you... Discover the remedy for self-absorption Pinpoint mental roadblocks keeping you from the joy of truly giving self away Move on from "Me-ville" to places you never dared Learn how to view yourself through God\'s eyes Apply the book of Jonah, verse by verse, to your own life and those you influence',
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=6W2VByugzekC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=6W2VByugzekC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c1d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Social Self",
    author: "Joseph P. Forgas",
    genre: "scifi",
    description:
      "First Published in 2004. Routledge is an imprint of Taylor & Francis, an informa company.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=c7N-w-xw_hgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=c7N-w-xw_hgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c1e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Children of Alcoholism",
    author: "Barbara L. Wood",
    genre: [],
    description:
      "Can Islamic societies embrace democracy? InDemocracy in Modern Iran, Ali Mirsepassi maintains that it is possible, demonstrating that Islam is not inherently hostile to the idea of democracy. Rather, he provides new perspective on how such a political and social transformation could take place, arguing that the key to understanding the integration of Islam and democracy lies in concrete social institutions rather than pre-conceived ideas, the every day experiences rather than abstract theories. Mirsepassi, an Iranian native, provides a rare inside look into the country, offering a deep understanding of how Islamic countries like Iran and Iraq can and will embrace democracy. Democracy in Modern Iranchallenges readers to think about Islam and democracy critically and in a far more nuanced way than is done in black-and-white dichotomies of Islam vs. Democracy, or Iran vs. the West. This essential volume contributes important insights to current discussions, creating a more complex conception of modernity in the Eastern world and, with it, Mirsepassi offers to a broad Western audience a more accurate, less clichéd vision of Irans political reality.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=13ATCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=13ATCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c1f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Epistemology, Ethics, and Meaning in Unusually Personal Scholarship",
    author: "Amber Esping",
    genre: [],
    description:
      "This book uses Viktor Frankl’s Existential Psychology (logotherapy) to explore the ways some professors use unusually personal scholarship to discover meaning in personal adversity. A psychiatrist imprisoned for three years in Nazi concentration camps, Frankl believed the search for meaning is a powerful motivator, and that its discovery can be profoundly therapeutic. Part I begins with four stories of professors finding meaning. Using the case studies as a foundation, Part II investigates issues of epistemology and ethics in unusually personal research from an existential perspective. The book offers advice for graduate students and faculty who want to live and work more meaningfully in the academy.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=lMJNDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=lMJNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c20-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Road to Freedom",
    author: "Peter Allman",
    genre: "history",
    description:
      'We are not human beings that have spiritual experiences. We are truly spiritual beings that are currently having a human experience. In "The Road to Freedom: Letting Go of Your Baggage," Peter Allman explains that our primary purpose is to create a divine union between our human essence and our spiritual essence and provides the road map for doing so. The ego is the main reason the divine union does not occur. The ego is a way of thinking. It is a mind - a mindset - that is built on the absence of the Divine and creates a false sense of self. The ego mind sees the world in terms of "I want this" or "I don\'t want this." The three letters of ego could stand for "edging God out." People of all faiths have a prayer that is similar to "Not my will, but Thy will be done." "My will" equates to the ego. "Thy will" equates to our spiritual nature. It is said we need to live "in" the world but not be of the world. We need human strengths to live "in the world." Because we have a great capacity to subvert the will of God to our own, we need to access our spiritual nature to be able to "not be of the world."',
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=omMvUTontj4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=omMvUTontj4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c21-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Self in Understanding and Treating Psychological Disorders",
    author: "Michael Kyrios",
    genre: "history",
    description:
      "A unique exploration of how the 'self' influences psychopathology, psychotherapy, emphasizing the need to integrate self-constructs into evidence-based conceptual models.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=vFNyCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=vFNyCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c22-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Epistemic Authority",
    author: "Linda Trinkaus Zagzebski",
    genre: "science&tech",
    description:
      "Gives an extended argument for epistemic authority from the implications of reflective self-consciousness. Epistemic authority is compatible with autonomy, but epistemic self-reliance is incoherent. The book argues that epistemic and emotional self-trust are rational and inescapable, that consistent self-trust commits us to trust in others, and that among those we are committed to trusting are some whom we ought to treat as epistemic authorities, modelled on the well-known principles of authority of Joseph Raz. Some of these authorities can be in the moral and religious domains. The book investigates the way the problem of disagreement between communities or between the self and others is a conflict within self-trust, and argue against communal self-reliance on the same grounds as the book uses in arguing against individual self-reliance. The book explains how any change in belief is justified--by the conscientious judgment that the change will survive future conscientious self-reflection. The book concludes with an account of autonomy. --Publisher's description.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=T3bF5Nj70b0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=T3bF5Nj70b0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c23-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Caribbean Achievement in Britain",
    author: "Winniey E. Maduro",
    genre: "graphicnovel",
    description:
      "This book explores a range of psychosocial resources, and discusses them in relation to lived experiences and outcomes in educational and socioeconomic domains. It offers close insights into the complex relationship between psychosocial resources, such as familial influence, religiosity, aspirations, and socioeconomic progression in Britain. This is achieved by exploring the lived experiences of a sample group of Caribbeans, one of Britain's most internally diverse but discernibly disadvantaged social groups. Detailed accounts of the participants’ experiences are offered to provide insights to a wide range of stakeholders in education. Teachers, behaviour specialists, parents, policy advocates, psychologists, social researchers, social justice warriors and lay people will all benefit from this empirically informed perspective on psychosocial resources and their implications for educational attainment and socioeconomic progress. The book implores the reader to appreciate more fully how psychosocial resources play out in outcomes of achievement and progression, and how such outcomes may be improved among members of some disadvantaged social groups. It will be an invaluable resource for students, researchers, and educators in the fields of Education, Sociology, and Psychology.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=L0RADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=L0RADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c24-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Empathic Ground",
    author: "Judith Blackstone",
    genre: "essays",
    description:
      "Brings Asian theories of consciousness into dialogue with Western psychotherapeutic practices.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=SfuVczPIGxIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=SfuVczPIGxIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c25-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Self-restoration of People Living with HIV/AIDS in China",
    author: "Rongting Hou",
    genre: [],
    description:
      "This book adopts an approach based on relational psychoanalysis, developed in the USA in and since the 1990s and guided by the self-psychology championed by Kohut and the Post-Kohutians. How people infected with HIV/AIDS live their lives is a growing concern in China. The book, based on relational psychoanalysis, explores their self-restoration, and more specifically, how adopting an attitude of “dying to live” helps them face tremendous challenges in life. By interviewing selected individuals at a given organization, the author focuses on their life experiences and on corresponding interventional mechanisms. The book’s three most important features are as follows: 1) its application of self-psychology by Heinz Kohut into the context of psychological intervention; 2) a wealth of qualitative data gathered through in-depth interviews; and 3) the author’s self-reflection and analysis. The book offers a valuable guide for graduate students, researchers, and policymakers alike. By interviewing selected individuals at a given organization, the book focuses on the life histories of selected individuals after being diagnosed with AIDS (screening HIV positive) and on corresponding interventional mechanisms. Further, itemploys the self and self-object as key explanatory terms for the necessary psychotherapeutic interventions,and in order to create guidelines that sufficiently reflect the illness and corresponding interventions. Given its scope and focus, the book offers a valuable guide for graduate students, researchers, and policymakers alike.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=pZUFEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=pZUFEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c26-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Don't Read This...Your Ego Won't Like It!",
    author: "Dov Baron",
    genre: "scifi",
    description:
      "Don't Read This...unless you're looking for a practical guide for applying the art and science of manifestation that your ego won't like¿but you will love!While our ego minds can be tempted by the rich promises of the 'Law of Attraction' movement, it is the very conditioning of the ego-mind that prevents so many of us from realizing true abundance. Is there a flaw in the science of it? Is the ego-mind sabotaging our best efforts? Or are we missing a piece of the puzzle when it comes to applying the theory to our daily lives?Mind master and manifestation expert Dov Baron delivers the key that unlocks the mystery once and for all: The Equation For Manifestation¿. This easy, practical, step-by-step process will help you get past the ego-mind so that you can align yourself completely with your desired outcomes. You will discover the \"X factor\" that will help you bridge the gap between wishful thinking and practical results. You will finally be able to apply the art and science of conscious manifestation in your life.Applying the techniques in this book, you will realize the true root of any limited beliefs still holding you back from attaining the levels of success that may be eluding you and eradicate them!Whether you're looking to attract vibrant health, abundant wealth or empowering relationships, you will find a treasure trove of practical wisdom within¿but beware: Your Ego Won't like It!",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=gWBNdOQsw38C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=gWBNdOQsw38C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "40fe4c27-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "I've Got Senses!: Senses Books for Kids",
    author: "Speedy Publishing LLC",
    genre: "art&photog",
    description:
      "Help your child understand what his/her senses are with this easy-to-remember informative book. Deserving of a place in your mini-library, the book kicks off with a description of body parts before moving on to each sense. Absorption of information is made easy through a written description followed by a themed picture. Learning is made much more fun and effective with this colored book. Buy a copy today!",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=WtlPCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=WtlPCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b20-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Quantum Theory",
    author: "David Bohm",
    genre: "fantasy",
    description:
      "This advanced undergraduate-level text presents the quantum theory in terms of qualitative and imaginative concepts, followed by specific applications worked out in mathematical detail.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=GKVGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=GKVGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b21-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Understanding Thermodynamics",
    author: "Hendrick C. Van Ness",
    genre: "scifi",
    description:
      "Clearly written treament elucidates fundamental concepts and demonstrates their plausibility and usefulness. Language is informal, examples are vivid and lively, and the perspectivie is fresh. Based on lectures delivered to engineering students, this work will also be valued by scientists, engineers, technicians, businessmen, anyone facing energy challenges of the future.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=dFw6DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=dFw6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b22-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Devil's Delusion",
    author: "David Berlinski",
    genre: "horror",
    description:
      "From a bestselling author, an “incendiary and uproarious” assault on the pretensions of scientific atheists (National Review) Militant atheism is on the rise. Prominent thinkers including Richard Dawkins, Sam Harris, Daniel Dennett, and Christopher Hitchens have published best-selling books denigrating religious belief. And these authors are merely the leading edge of a larger movement that includes much of the scientific community. In response, mathematician David Berlinski, himself a secular Jew, delivers a biting defense of religious thought. The Devil's Delusion is a brilliant, incisive, and funny book that explores the limits of science and the pretensions of those who insist it is the ultimate touchstone for understanding our world.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=chI4DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=chI4DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b23-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Silent Spring",
    author: "Rachel Carson",
    genre: "art&photog",
    description:
      "Discusses the reckless annihilation of fish and birds by the use of pesticides and warns of the possible genetic effects on humans.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=bCwuxmvsDoYC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=bCwuxmvsDoYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b24-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Einstein's Theory of Relativity",
    author: "Max Born",
    genre: "romance",
    description:
      "A Nobel Prize-winning physicist explains the historical background and scientific principles of Einstein's famous theory",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=wUGKAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=wUGKAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b25-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Science and the Secrets of Nature",
    author: "William Eamon",
    genre: "history",
    description:
      'By explaining how to sire multicolored horses, produce nuts without shells, and create an egg the size of a human head, Giambattista Della Porta\'s Natural Magic (1559) conveys a fascination with tricks and illusions that makes it a work difficult for historians of science to take seriously. Yet, according to William Eamon, it is in the "how-to" books written by medieval alchemists, magicians, and artisans that modern science has its roots. These compilations of recipes on everything from parlor tricks through medical remedies to wool-dyeing fascinated medieval intellectuals because they promised access to esoteric "secrets of nature." In closely examining this rich but little-known source of literature, Eamon reveals that printing technology and popular culture had as great, if not stronger, an impact on early modern science as did the traditional academic disciplines.',
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=v9LgDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=v9LgDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b26-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Popular Books on Natural Science",
    author: "Aaron David Bernstein",
    genre: "horror",
    description: "No description",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Du5HAAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Du5HAAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b27-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "How and Why Do Birds Fly",
    author: "Baby Professor",
    genre: "history",
    description:
      "Learn about the aerodynamics in birds that once led to the creation of our modern-day aircraft. This picture book will teach you the howÕs and whyÕs of flight. With complex information broken down into bits that are more easily understood, your child will surely ÒsoarÓ to the great heights of knowledge soon. Grab a copy today!",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=xeRPCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=xeRPCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b28-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Mexico For Kids: People, Places and Cultures - Children Explore The World Books",
    author: "Baby Professor",
    genre: "art&photog",
    description:
      "Welcome to Mexico! Are you ready to tour around the place and meet new people? Then go ahead and open this book! Here, you will get your first truly Mexican experience through pictures and texts. You will have an idea of what life is like in this part of the planet. You can use this book as an introduction prior to an actual visit. Grab a copy now!",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=NGk7DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=NGk7DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b29-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Reference Books for the Historian of Science",
    author: "Jane Pugh",
    genre: "mystery",
    description: "No description",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=kQUVAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=kQUVAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b2a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Earth Materials",
    author: "Cornelis Klein",
    genre: "graphicnovel",
    description:
      "Key concepts in mineralogy and petrology are explained alongside beautiful full-color illustrations, in this concisely written textbook.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=V7nUnYKmrxgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=V7nUnYKmrxgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b2b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "1St Grade Geography: Continents of the World",
    author: "Baby Professor",
    genre: "selfhelp",
    description:
      "At first grade, your child is expected to know all the continents of the world. But if he/she is lagging behind, don't worry because this educational book can help. Information presented here is done with the use of vibrantly colored pictures that call the attention. The use of colors and images allows for the better processing of memory and retention. Order a copy now!",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=RN5PCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=RN5PCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b2c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Believing Brain",
    author: "Michael Shermer",
    genre: "art&photog",
    description:
      "The Believing Brain is bestselling author Michael Shermer's comprehensive and provocative theory on how beliefs are born, formed, reinforced, challenged, changed, and extinguished. In this work synthesizing thirty years of research, psychologist, historian of science, and the world's best-known skeptic Michael Shermer upends the traditional thinking about how humans form beliefs about the world. Simply put, beliefs come first and explanations for beliefs follow. The brain, Shermer argues, is a belief engine. From sensory data flowing in through the senses, the brain naturally begins to look for and find patterns, and then infuses those patterns with meaning. Our brains connect the dots of our world into meaningful patterns that explain why things happen, and these patterns become beliefs. Once beliefs are formed the brain begins to look for and find confirmatory evidence in support of those beliefs, which accelerates the process of reinforcing them, and round and round the process goes in a positive-feedback loop of belief confirmation. Shermer outlines the numerous cognitive tools our brains engage to reinforce our beliefs as truths. Interlaced with his theory of belief, Shermer provides countless real-world examples of how this process operates, from politics, economics, and religion to conspiracy theories, the supernatural, and the paranormal. Ultimately, he demonstrates why science is the best tool ever devised to determine whether or not a belief matches reality.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=i_ihCeNpcaQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=i_ihCeNpcaQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b2d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "List of Books Received from the USSR and Translated Books",
    author:
      "National Lending Library for Science and Technology (Great Britain)",
    genre: [],
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=FFNQAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=FFNQAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b2e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Real Anthony Fauci",
    author: "Robert F. Kennedy",
    genre: "selfhelp",
    description:
      "#1 on AMAZON, and a NEW YORK TIMES, WALL STREET JOURNAL, USA TODAY and PUBLISHERS WEEKLY NATIONAL BESTSELLER Pharma-funded mainstream media has convinced millions of Americans that Dr. Anthony Fauci is a hero. He is anything but. As director of the National Institute of Allergy and Infectious Diseases (NIAID), Dr. Anthony Fauci dispenses $6.1 billion in annual taxpayer-provided funding for scientific research, allowing him to dictate the subject, content, and outcome of scientific health research across the globe. Fauci uses the financial clout at his disposal to wield extraordinary influence over hospitals, universities, journals, and thousands of influential doctors and scientists—whose careers and institutions he has the power to ruin, advance, or reward. During more than a year of painstaking and meticulous research, Robert F. Kennedy Jr. unearthed a shocking story that obliterates media spin on Dr. Fauci . . . and that will alarm every American—Democrat or Republican—who cares about democracy, our Constitution, and the future of our children’s health. The Real Anthony Fauci reveals how “America’s Doctor” launched his career during the early AIDS crisis by partnering with pharmaceutical companies to sabotage safe and effective off-patent therapeutic treatments for AIDS. Fauci orchestrated fraudulent studies, and then pressured US Food and Drug Administration (FDA) regulators into approving a deadly chemotherapy treatment he had good reason to know was worthless against AIDS. Fauci repeatedly violated federal laws to allow his Pharma partners to use impoverished and dark-skinned children as lab rats in deadly experiments with toxic AIDS and cancer chemotherapies. In early 2000, Fauci shook hands with Bill Gates in the library of Gates’ $147 million Seattle mansion, cementing a partnership that would aim to control an increasingly profitable $60 billion global vaccine enterprise with unlimited growth potential. Through funding leverage and carefully cultivated personal relationships with heads of state and leading media and social media institutions, the Pharma-Fauci-Gates alliance exercises dominion over global health policy. The Real Anthony Fauci details how Fauci, Gates, and their cohorts use their control of media outlets, scientific journals, key government and quasi-governmental agencies, global intelligence agencies, and influential scientists and physicians to flood the public with fearful propaganda about COVID-19 virulence and pathogenesis, and to muzzle debate and ruthlessly censor dissent.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ApUfEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ApUfEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b2f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Cosmic Code",
    author: "Heinz R. Pagels",
    genre: "history",
    description:
      '" This is one of the most important books on quantum mechanics ever written for lay readers, in which an eminent physicist and successful science writer, Heinz Pagels, discusses and explains the core concepts of physics without resorting to complicated mathematics. "Can be read by anyone. I heartily recommend it!" -- New York Times Book Review. 1982 edition"--',
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=rAMEaOVX7swC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=rAMEaOVX7swC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b30-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Food Biochemistry and Food Processing",
    author: "Y. H. Hui",
    genre: "graphicnovel",
    description:
      "The biochemistry of food is the foundation on which the research and development advances in food biotechnology are built. In Food Biochemistry and Food Processing, lead editor Y.H. Hui has assembled over fifty acclaimed academicians and industry professionals to create this indispensable reference and text on food biochemistry and the ever-increasing development in the biotechnology of food processing. While biochemistry may be covered in a chapter or two in standard reference books on the chemistry, enzymes, or fermentation of food, and may be addressed in greater depth by commodity-specific texts (e.g., the biotechnology of meat, seafood, or cereal), books on the general coverage of food biochemistry are not so common. Food Biochemistry and Food Processing effectively fills this void. Beginning with sections on the essential principles of food biochemistry, enzymology and food processing, the book then takes the reader on commodity-by-commodity discussions of biochemistry of raw materials and product processing. Later sections address the biochemistry and processing aspects of food fermentation, microbiology, and food safety. As an invaluable reference tool or as a state-of-the-industry text, Food Biochemistry and Food Processing fully develops and explains the biochemical aspects of food processing for scientist and student alike.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=oQS3zZJPVO4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=oQS3zZJPVO4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b31-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Caffeine",
    author: "Victor R. Preedy",
    genre: "action&adventure",
    description:
      "This text covers caffeine in relation to nutrition, focussing on beverages, then concentrating on chemistry, crystal structures of complexes in caffeine and biochemistry. Essays are conducted by LC-MS, capillary electrophoresis and automated flow methods. The effects of caffeine on the brain, sleep, and exercise are also considered.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=HHGxK357LoIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=HHGxK357LoIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b32-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Language Game",
    author: "Morten Christiansen",
    genre: "scifi",
    description:
      "Forget the language instinct--this is the story of how we make up language as we go Language is perhaps humanity's most astonishing capacity--and one that remains poorly understood. In The Language Game, cognitive scientists Morten H. Christiansen and Nick Chater show us where generations of scientists seeking the rules of language got it wrong. Language isn't about hardwired grammars but about near-total freedom, something like a game of charades, with the only requirement being a desire to understand and be understood. From this new vantage point, Christiansen and Chater find compelling solutions to major mysteries like the origins of languages and how language learning is possible, and to long-running debates such as whether having two words for \"blue\" changes what we see. In the end, they show that the only real constraint on communication is our imagination.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=mgJtzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=mgJtzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b33-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Staying with the Trouble",
    author: "Donna Jeanne Haraway",
    genre: [],
    description:
      "Donna J. Haraway refigures our current epoch, moving away from the Anthropocene toward the Chthulucene: an epoch in which we stay with the trouble of living and dying on a damaged earth while living with and understanding the nonhuman in complex ways conducive to building more livable futures.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=QShEjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=QShEjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b34-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Saunders' Scientific Books",
    author: "J. F. Hartz Co",
    genre: "shortstory",
    description: "No description",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "41010b35-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Bibliographia Zoologiae Et Geologiae: Volume 1",
    author: "Louis Agassiz",
    genre: "romance",
    description:
      "This four-volume catalogue, published 1848-54, provides an extensive list of the zoological and geological literature available at the time.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=H6fwFREPWu0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=H6fwFREPWu0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b36-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Age of Wonder",
    author: "Richard Holmes",
    genre: "horror",
    description:
      "Shortlisted for the BBC Samuel Johnson Prize for Non-Fiction and the Royal Society Prize for Science Books Richard Holmes, prize-winning biographer of Coleridge and Shelley, explores the scientific ferment that swept across Britain at the end of 18th century in this ground-breaking new biography . 'The Age of Wonder' is Richard Holmes's first major work of biography in over a decade. It has been inspired by the scientific ferment that swept through Britain at the end of the eighteenth century, 'The Age of Wonder' and which Holmes now radically redefines as 'the revolution of Romantic Science'. The book opens with Joseph Banks, botanist on Captain Cook's first Endeavour voyage, stepping onto a Tahitian beach in 1769, hoping to discover Paradise. Many other voyages of discovery swiftly follow, while Banks, now President of the Royal Society in London, becomes our narrative guide to what truly emerges as an Age of Wonder. Banks introduces us to the two scientific figures that dominate the book: astronomer William Herschel and chemist Humphry Davy. Herschel's tireless dedication to the stars, assisted (and perhaps rivalled) by his comet-finding sister Caroline, changed forever the public conception of the solar system, the Milky Way galaxy and the meaning of the universe itself. Davy first shocked the scientific community with his near-suicidal gas experiments in Bristol, then went on to save thousands of lives with his Safety Lamp and established British chemistry as the leading professional science in Europe. But at the cost, perhaps, of his own heart. Holmes proposes a radical vision of science before Darwin, exploring the earliest ideas of deep time and deep space, the creative rivalry with the French scientific establishment, and the startling impact of discovery on great writers and poets such as Mary Shelley, Coleridge, Byron and Keats. With his trademark sense of the human drama, he shows how great ideas and experiments are born out of lonely passion, how scientific discoveries (and errors) are made, how intense relationships are forged and broken by research, and how religious faith and scientific truth collide. The result is breathtaking in its originality, its story-telling energy, and not least, in its intellectual significance.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_iT94Ii3AWwC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_iT94Ii3AWwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b37-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "New Technical Books",
    author: "New York Public Library",
    genre: "selfhelp",
    description: "No description",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=457iAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=457iAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b38-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Forbidden Knowledge",
    author: "Hannah Marcus",
    genre: "fantasy",
    description:
      "Forbidden Knowledge explores the censorship of medical books from their proliferation in print through the prohibitions placed on them during the Counter-Reformation. How and why did books banned in Italy in the sixteenth century end up back on library shelves in the seventeenth? Historian Hannah Marcus uncovers how early modern physicians evaluated the utility of banned books and facilitated their continued circulation in conversation with Catholic authorities. Through extensive archival research, Marcus highlights how talk of scientific utility, once thought to have begun during the Scientific Revolution, in fact began earlier, emerging from ecclesiastical censorship and the desire to continue to use banned medical books. What’s more, this censorship in medicine, which preceded the Copernican debate in astronomy by sixty years, has had a lasting impact on how we talk about new and controversial developments in scientific knowledge. Beautiful illustrations accompany this masterful, timely book about the interplay between efforts at intellectual control and the utility of knowledge.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=7-r5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=7-r5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b39-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Saving Darwin",
    author: "Karl Giberson",
    genre: "horror",
    description:
      "Evolution Is Not the Bible's Enemy Saving Darwin explores the history of the controversy that swirls around evolution science, from Darwin to current challenges, and shows why—and how—it is possible to believe in God and evolution at the same time.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=kaSOs4TcP4IC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=kaSOs4TcP4IC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b3a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "The Big Book for Future Botanists : Lessons on Plant Structures, Flowering vs. Non-Flowering Plants, Trees and Carnivorous Plants | Biology Books for Kids Junior Scholars Edition | Children's Biology Books",
    author: "Baby Professor",
    genre: "essays",
    description:
      "Botany is a the science that studies plants. This ebook is dedicated to the science of botany and to all future botanists. Lessons covered include plant structures, flowering and non-flowering plants, trees and carnivorous plants. Lessons are made complete with compelling visuals to add fun to learning. Grab a copy today.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Ni2WDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Ni2WDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b3b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Dictionaries & Books",
    author: "Associated Technical Services. Dictionary and Book Division",
    genre: "science&tech",
    description: "No description",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=H4NoRp8XW-8C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=H4NoRp8XW-8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b3c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Homo Deus",
    author: "Yuval Noah Harari",
    genre: "history",
    description:
      "**THE MILLION COPY BESTSELLER** Sapiens showed us where we came from. In uncertain times, Homo Deus shows us where we're going. 'Homo Deus will shock you. It will entertain you. It will make you think in ways you had not thought before' Daniel Kahneman, bestselling author of Thinking, Fast and Slow Yuval Noah Harari envisions a near future in which we face a new set of challenges. Homo Deus explores the projects, dreams and nightmares that will shape the twenty-first century and beyond - from overcoming death to creating artificial life. It asks the fundamental questions: how can we protect this fragile world from our own destructive power? And what does our future hold?",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=dWYyCwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=dWYyCwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b3d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Shikimic Acid",
    author: "Edwin Haslam",
    genre: "art&photog",
    description:
      "Reflects extensive coverage of major synthetic developments over the last 20 years. Discusses both primary and secondary metabolites in relation to how they are influenced by shikimic acid. Includes such topics as synthetic organic chemistry, enzymology of the common pathways in which shikimic acid plays a key role, biosynthetic problems associated with secondary metabolism and molecular evolution.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Y3wvAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Y3wvAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b3e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "From So Simple a Beginning",
    author: "Professor Charles Darwin",
    genre: "scifi",
    description:
      "Collects Darwin's four seminal works in a slipcase, introduced and edited by a two-time Pulitzer Prize-winning Harvard professor, and includes an index that links Darwinian evolutionary concepts to contemporary biological beliefs.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_9NlQgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_9NlQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b3f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Ark and Beyond",
    author: "Ben A. Minteer",
    genre: "history",
    description:
      "Scores of wild species and ecosystems around the world face a variety of human-caused threats, from habitat destruction and fragmentation to rapid climate change. But there is hope, and it, too, comes in a most human form: zoos and aquariums. Gathering a diverse, multi-institutional collection of leading zoo and aquarium scientists as well as historians, philosophers, biologists, and social scientists, The Ark and Beyond traces the history and underscores the present role of these organizations as essential conservation actors. It also offers a framework for their future course, reaffirming that if zoos and aquariums make biodiversity conservation a top priority, these institutions can play a vital role in tackling conservation challenges of global magnitude. While early menageries were anything but the centers of conservation that many zoos are today, a concern with wildlife preservation has been an integral component of the modern, professionally run zoo since the nineteenth century. From captive breeding initiatives to rewilding programs, zoos and aquariums have long been at the cutting edge of research and conservation science, sites of impressive new genetic and reproductive techniques. Today, their efforts reach even further beyond recreation, with educational programs, community-based conservation initiatives, and international, collaborative programs designed to combat species extinction and protect habitats at a range of scales. Addressing related topics as diverse as zoo animal welfare, species reintroductions, amphibian extinctions, and whether zoos can truly be “wild,” this book explores the whole range of research and conservation practices that spring from zoos and aquariums while emphasizing the historical, scientific, and ethical traditions that shape these efforts. Also featuring an inspiring foreword by the late George Rabb, president emeritus of the Chicago Zoological Society / Brookfield Zoo, The Ark and Beyond illuminates these institutions’ growing significance to the preservation of global biodiversity in this century.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=nYtAswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=nYtAswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b40-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Print Is Dead",
    author: "Jeff Gomez",
    genre: "horror",
    description:
      'For over 1500 years books have weathered numerous cultural changes remarkably unaltered. Through wars, paper shortages, radio, TV, computer games, and fluctuating literacy rates, the bound stack of printed paper has, somewhat bizarrely, remained the more robust and culturally relevant way to communicate ideas. Now, for the first time since the Middle Ages, all that is about to change. Newspapers are struggling for readers and relevance; downloadable music has consigned the album to the format scrap heap, and the digital revolution is now about to leave books on the high shelf of history. In "Print Is Dead," Gomez explains how authors, producers, distributors, and readers must not only acknowledge these changes, but drive digital book creation, standards, storage, and delivery as the first truly transformational thing to happen in the world of words since the printing press.',
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=CfhpngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=CfhpngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b41-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Origin of Species",
    author: "Charles Darwin",
    genre: "selfhelp",
    description:
      'Perhaps the most readable and accessible of the great works of scientific imagination, The Origin of Species sold out on the day it was published in 1859. Theologians quickly labeled Charles Darwin the most dangerous man in England, and, as the Saturday Review noted, the uproar over the book quickly "passed beyond the bounds of the study and lecture-room into the drawing-room and the public street." Yet, after reading it, Darwin\'s friend and colleague T. H. Huxley had a different reaction: "How extremely stupid not to have thought of that." Based largely on Darwin\'s experience as a naturalist while on a five-year voyage aboard H.M.S. Beagle, The Origin of Species set forth a theory of evolution and natural selection that challenged contemporary beliefs about divine providence and the immutability of species. A landmark con- tribution to philosophical and scientific thought, this edition also includes an introductory historical sketch and a glossary Darwin later added to the original text. Charles Darwin grew up considered, by his own account, "a very ordinary boy, rather below the common standard of intellect." A quirk of fate kept him from the career his father had deemed appro- priate--that of a country parson--when a botanist recommended Darwin for an appointment as a naturalist aboard H.M.S. Beagle from 1831 to 1836. Darwin is also the author of the five-volume work Zoology of the Voyage of the Beagle (1839) and The Descent of Man (1871).',
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=FD7YtQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=FD7YtQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b42-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Meet the Reindeer",
    author: "Caitlind L. Alexander",
    genre: "selfhelp",
    description:
      "This book is a shortened version of our popular “Reindeer: Nomads of the North” and is intended for beginning readers. With only 1234 easy to read words, young children can experience for themselves the joy of learning about the reindeer. They will find out the answers to these questions: What is the difference between a caribou and a reindeer? Why are a reindeer’s hairs hollow? What sound do reindeer make when they walk? Do female reindeer have antlers? How big can a reindeer herd get to be? And many more! Ages 5-8 Reading Level: 2.0 LearningIsland.com believes in the value of children practicing reading for 15 minutes every day. Our 15-Minute Books give children lots of fun, exciting choices to read, from classic stories, to mysteries, to books of knowledge. Many books are appropriate for hi-lo readers. Open the world of reading to a child by having them read for 15 minutes a day.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=XQ72AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=XQ72AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b43-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Earth Science, Books a la Carte Plus Masteringgeology with Etext -- Access Card Package",
    author: "Edward J. Tarbuck",
    genre: [],
    description:
      "NOTE: Books a la Carte are unbound, three-hole-punch versions of the textbook. This lower cost option is easy to transport and comes with same access code or media that would be packaged with the bound book. XXXXXXXXXXXXXXXXXXXXXXX Ideal for undergraduates with little or no science background, Earth Science provides a student-friendly overview of our physical environment that offers balanced, up-to-date coverage of geology, oceanography, astronomy, and meteorology. The authors' texts have always been recognized for their readability, currency, dynamic art program, delivery of basic principles and instructor flexibility. The Fourteenth Edition incorporates a new active learning approach, a fully updated and mobile visual program, and MasteringGeology(tm)--the most complete, easy-to-use, engaging tutorial and assessment tool available.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=he0wnwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=he0wnwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b44-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Wild Cultures",
    author: "Christophe Boesch",
    genre: "graphicnovel",
    description:
      "A journey into the lives of chimpanzees, revealing the many parallels and differences between us.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Wl3hb2qHQJEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Wl3hb2qHQJEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b45-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Botany of Desire",
    author: "Michael Pollan",
    genre: "scifi",
    description:
      "“Pollan shines a light on our own nature as well as on our implication in the natural world.” —The New York Times “A wry, informed pastoral.” —The New Yorker The book that helped make Michael Pollan, the New York Times bestselling author of How to Change Your Mind, Cooked and The Omnivore’s Dilemma, one of the most trusted food experts in America Every schoolchild learns about the mutually beneficial dance of honeybees and flowers: The bee collects nectar and pollen to make honey and, in the process, spreads the flowers’ genes far and wide. In The Botany of Desire, Michael Pollan ingeniously demonstrates how people and domesticated plants have formed a similarly reciprocal relationship. He masterfully links four fundamental human desires—sweetness, beauty, intoxication, and control—with the plants that satisfy them: the apple, the tulip, marijuana, and the potato. In telling the stories of four familiar species, Pollan illustrates how the plants have evolved to satisfy humankind’s most basic yearnings. And just as we’ve benefited from these plants, we have also done well by them. So who is really domesticating whom?",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=tiq0ZTidIuoC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=tiq0ZTidIuoC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41010b46-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Control System Design",
    author: "Bernard Friedland",
    genre: [],
    description:
      "Introduction to state-space methods covers feedback control; state-space representation of dynamic systems and dynamics of linear systems; frequency-domain analysis; controllability and observability; shaping the dynamic response; and more. 1986 edition.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ssMqAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ssMqAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41010b47-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "World's Most Popular Short Stories",
    author: "Maupassant, Anton Chekhov, O Henry & Saki",
    genre: "horror",
    description:
      "World’s Most Popular Short Stories is a collection of tales that are soothing, yet scintillating, motivational and magical, and a gentle mix of the common and the special. Handpicked stories by four master craftsmen – Guy de Maupassant, Anton Chekhov, O Henry and Saki – will not only give you a taste of their contemporary societies and cultures, but also take you on an adventure of a lifetime. Their extraordinary stories are a mixture of tragedy and humorous satire, irony and the macabre, in which the stupidities and hypocrisy of conventional society are viciously pilloried. You will meet the common folks who love to spend evenings in the company of girls, and you will also meet couples from humble origins working hard to repay a debt which was wrongly assumed in the first place. You can run into love seeking you in some stories, and destiny waiting to change the course of lives in others. The heady mix of humour, satire and drama makes these stories an essential cocktail of emotions.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=3CPNDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=3CPNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083710-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Art of Short Selling",
    author: "Kathryn F. Staley",
    genre: "graphicnovel",
    description:
      'A one-of-a-kind book that shows you how to cash in on the latestinvesting trend--short selling "The Art of Short Selling is the best description of this difficulttechnique."--John Train, Train, Thomas, Smith Investment Counsel,and author of The New Money Masters "Kathryn Staley has done a masterful job explaining the highlyspecialized art of short selling. Her approach to telling the truestories of famous investment \'scams\' will keep the readerspellbound, while teaching the investor many cruciallessons."--David W. Tice, Portfolio Manager, Prudent BearFund "Selling short is still a misunderstood discipline, but even themost raging bull needs to know this valuable technique to masterthe ever-changing markets."--Jim Rogers, author, InvestmentBiker On the investment playing field, there is perhaps no game moreexciting than short selling. With the right moves, it can yieldhigh returns; one misstep, however, can have disastrousconsequences. Despite the risk, a growing number of players areanteing up, sparked in part by success stories such as that ofGeorge Soros and the billions he netted by short selling theBritish pound. In The Art of Short Selling, Kathryn Staley, anexpert in the field, examines the essentials of this importantinvestment vehicle, providing a comprehensive game plan with whichyou can effectively play--and win--the short selling game. Whether used as a means of hedging bets, decreasing the volatilityof total returns, or improving returns, short selling must behandled with care--and with the right know-how. As Staley pointsout, "Short selling is not for the faint of heart. If a stock movesagainst the position holder, the effect on a portfolio and networth can be devastating. Investors need to understand the impacton their accounts as well as the consequences of getting bought inbefore they indulge in short selling." The Art of Short Sellingguides you--clearly and concisely--through the ins and outs of thishigh-risk, high-stakes game. The first--and most important--move in selling short is to identifyflaws in a business before its share prices drop. To help youtackle this key step, Staley shows you how to evaluate companyfinancial statements and balance sheets, make sense of returnratios, detect inconsistencies in inventory, and analyze thestatement of cash flows. Through real-world examples thatillustrate the shorting of bubble, high multiple growth, and themestocks, you\'ll proceed step by step through the complete processand learn to carry out all the essentials for a successful shortsell, including quantifying the risk factor and orchestratingcorrect timing, as well as implementing advanced valuationtechniques to execute the sell/buy. Packed with landmark, cutting-edge examples, up-to-the-minuteguidelines, and pertinent regulations, The Art of Short Selling isa timely and comprehensive reference that arms you with thenecessary tools to make a prepared and confident entrance onto theshort selling playing field.',
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=nw2MEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=nw2MEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083711-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Global Economic History: A Very Short Introduction",
    author: "Robert C. Allen",
    genre: "scifi",
    description:
      "Together these countries pioneered new technologies that have made them ever richer.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=FrDsDaWycjQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=FrDsDaWycjQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083712-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Short Textbook of Anesthesia",
    author: "Ajay Yadav",
    genre: "mystery",
    description:
      "This sixth edition has been fully revised to present students with the latest advances in anaesthesia. Divided into nine sections, the book begins with the basic concepts of anatomy and physiology, then provides discussion on equipment for anaesthesia, preoperative assessment, airway management, and monitoring. The following sections discuss general and regional anaesthesia, anaesthesia for coexisting diseases in various parts of the anatomy, and subspecialty anaesthetic management such as for laparoscopy, ENT surgery, ophthalmic surgery, trauma and burns, and more. The final chapters cover intensive care management and cardiopulmonary and cerebral resuscitation, with the cardiopulmonary resuscitation (CPR) guidelines based on American Heart Association (AHA) guidelines. The new edition includes the most recent advances in drugs, equipment and techniques, and features clinical photographs, diagrams and tables to assist learning. Each chapter concludes with a summary of key points for quick revision. Key points Fully revised, sixth edition presenting latest advances in anaesthesia CPR guidelines based on American Heart Association (AHA) guidelines Features photographs, illustrations and key points for each topic Previous edition (9788188511907) published in 2016",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=VK52DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=VK52DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083713-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Information: A Very Short Introduction",
    author: "Luciano Floridi",
    genre: "action&adventure",
    description:
      "Introduction; 1 The information revolution; 2 The language of information; 3 Mathematical information; 4 Semantic information; 5 Physical information; 6 Biological information; 7 Economic information; 8 The ethics of information; Conclusion; References.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=AiXR3qoXd-EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=AiXR3qoXd-EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083714-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Liberalism",
    author: "Michael Freeden",
    genre: "history",
    description:
      "In this Very Short Introduction, Michael Freeden explores the concept of liberalism, one of the longest-standing and central political theories and ideologies. Combining a variety of approaches, he distinguishes between liberalism as a political movement, as a system of ideas, and as a series of ethical and philosophical principles.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=dLy6BwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=dLy6BwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083715-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "World's Greatest Short Stories",
    author: "Grapevine Publishers",
    genre: "art&photog",
    description:
      "Short stories remain the most interesting form of story telling over the centuries. Many of the greatest writers to have lived, started with short stories, before embarking on the journey of writing something longer. This book is an attempt to handpick the greatest works in short story writing over the years, including some of the most recognizable names in the field of literature. Stories from all slices of life, which will make you laugh, cry, smile or sulk.Including writers like Rudyard Kipling, James Joyce, Rabindranath Tagore, Saki, Anton Chekhov, Oscar Wilde, H.G. Wells, Jack Landon, Mark Twain, Dickens, D.H. Lawrence, Leo Tolstoy, Arthur Conan Doyle, Thomas Hardy, O. Henry, Victor Hugo, Somerset among many others.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=X0fizgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=X0fizgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41083716-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Creating Short Fiction",
    author: "Damon Knight",
    genre: "selfhelp",
    description:
      "Explains effective use of structure and pacing, and offers advice for creating realistic dialogue, plot, and characters",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ANfI-0uMyXwC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ANfI-0uMyXwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41083717-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Evolution",
    author: "Brian Charlesworth",
    genre: "mystery",
    description:
      "This text is about the central role of evolution in shaping the nature and diversity of the living world. It describes the processes of natural selection, how adaptations arise, and how new species form, as well as summarizing the evidence for evolution",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=QDclDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=QDclDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083718-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Ethics: a Very Short Introduction",
    author: "Simon Blackburn",
    genre: "mystery",
    description:
      "Simon Blackburn tackles the major moral questions surrounding birth, death, happiness, desire, and freedom, and considers how we should think about the meaning of life. This new edition highlights the importance of an understanding of approaches to ethics and its foundations, and how this relates to our modern world of eroding trust.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=tpAREAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=tpAREAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083719-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Italy",
    author: "Harry Hearder",
    genre: "essays",
    description:
      "Presents a clear, concise account of Italian history from the Ice Age to the present.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Rm1e0nWo5N8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Rm1e0nWo5N8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "4108371a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "50 Short Science Fiction Tales",
    author: "Isaac Asimov",
    genre: "science&tech",
    description:
      "Includes science fiction tales by Issac Asimov, Anthony Boucher, Robert A. Heinlein, and Jack Finney",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=1M0Y2RYqffIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=1M0Y2RYqffIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "4108371b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Tragedy: A Very Short Introduction",
    author: "Adrian Poole",
    genre: "mystery",
    description:
      "What has tragedy been made to mean by dramatists, story-tellers, critics, philosophers, politicians, and journalists? This work shows the relevance of tragedy to the modern world, and extends beyond drama and literature into visual art and everyday experience.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ongRDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ongRDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "4108371c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Economics",
    author: "Partha Dasgupta",
    genre: "science&tech",
    description:
      "Economics has the capacity to offer us deep insights into some of the most formidable problems of life, and offer solutions to them too. Combining a global approach with examples from everyday life, Partha Dasgupta reveals the connections between economics, politics, and development, and shows how these interactions create the world we live in today.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=jR8UrNy9BfYC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=jR8UrNy9BfYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "4108371d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Confucianism",
    author: "Daniel K. Gardner",
    genre: "horror",
    description:
      "This volume shows the influence of the Sage's teachings over the course of Chinese history--on state ideology, the civil service examination system, imperial government, the family, and social relations--and the fate of Confucianism in China in the nineteenth and twentieth centuries, as China developed alongside a modernizing West and Japan. Some Chinese intellectuals attempted to reform the Confucian tradition to address new needs; others argued for jettisoning it altogether in favor of Western ideas and technology; still others condemned it angrily, arguing that Confucius and his legacy were responsible for China's feudal, ''backward'' conditions in the twentieth century and launching campaigns to eradicate its influences. Yet Chinese continue to turn to the teachings of Confucianism for guidance in their daily lives.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=kOm-AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=kOm-AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "4108371e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Statistics: A Very Short Introduction",
    author: "David J. Hand",
    genre: "scifi",
    description:
      "Statistics has evolved into an exciting discipline which uses deep theory and powerful software to shed light on the world around us: from clinical trials in medicine, to economics, sociology, and countless other subjects vital to understanding modern life. This Very Short Introduction explores and explains how statistics works today.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=06QSDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=06QSDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "4108371f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Feminism: A Very Short Introduction",
    author: "Margaret Walters",
    genre: "shortstory",
    description:
      "This book provides an historical account of feminism, exploring its earliest roots and key issues such as voting rights and the liberation of the sixties. Margaret Walters brings the subject completely up to date by providing a global analysis of the situation of women, from Europe and the United States to Third World countries.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=6CcqAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=6CcqAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41083720-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Cryptography: A Very Short Introduction",
    author: "Fred Piper",
    genre: "science&tech",
    description:
      "A clear and informative introduction to the science of codebreaking, explaining what algorithms do, how they are used, the risks associated with using them, and why governments should be concerned.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=HvR0DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=HvR0DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083721-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Borders: A Very Short Introduction",
    author: "Alexander C. Diener",
    genre: "science&tech",
    description:
      "'Borders' offers insights into the form and function of historical and contemporary political and social boundaries. The authors show how and why borders will undoubtedly remain controversial topics and at the forefront of global headlines for years to come.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=rNVvCW_eCwwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=rNVvCW_eCwwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083722-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A Short History of (Nearly) Everything Paranormal",
    author: "Terje Simonsen",
    genre: "mystery",
    description:
      "This is the most entertaining and broad survey of the paranormal ever made, combining forgotten lore, evidence from parapsychological experiments and the testament of scientists, archaeologists, anthropologists, psychologists, physicists and philosophers, and also quite a few celebrities. Exploring the possibility that paranormal phenomena may be - and that some most likely are - objectively real, this travelogue through the twilight zone of human consciousness is both scientifically rigorous and extremely entertaining.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=1knaDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=1knaDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083723-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Astrophysics: A Very Short Introduction",
    author: "James Binney",
    genre: "selfhelp",
    description:
      "Astrophysics is the physics of the stars, and more widely the physics of the Universe. It enables us to understand the structure and evolution of planetary systems, stars, galaxies, interstellar gas, and the cosmos as a whole. In this Very Short Introduction, the leading astrophysicist James Binney shows how the field of astrophysics has expanded rapidly in the past century, with vast quantities of data gathered by telescopes exploiting all parts of the electromagnetic spectrum, combined with the rapid advance of computing power, which has allowed increasingly effective mathematical modelling. He illustrates how the application of fundamental principles of physics - the consideration of energy and mass, and momentum - and the two pillars of relativity and quantum mechanics, has provided insights into phenomena ranging from rapidly spinning millisecond pulsars to the collision of giant spiral galaxies. This is a clear, rigorous introduction to astrophysics for those keen to cut their teeth on a conceptual treatment involving some mathematics. ABOUT THE SERIES: The Very Short Introductions series from Oxford University Press contains hundreds of titles in almost every subject area. These pocket-sized books are the perfect way to get ahead in a new subject quickly. Our expert authors combine facts, analysis, perspective, new ideas, and enthusiasm to make interesting and challenging topics highly readable",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=DM55CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=DM55CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083724-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Marx",
    author: "Peter Singer",
    genre: "art&photog",
    description:
      '"First published 1980 as an Oxford University Press paperback; Reissued 1996; First published as a Very Short Introduction 2000"--Title page verso.',
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=oWpNDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=oWpNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083725-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Nouvelles en français",
    author: "Richard Coward",
    genre: "mystery",
    description:
      "This is an all new version of the popular PARALLEL TEXT series, containing eight pieces of contemporary fiction in the original French and in English translation. Including stories by Bolanger, Cotnoir, Le Clezio and Germain, this volume gives afascinating insight into French culture and literature as well as providing an invaluable educational tool.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=g1RcAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=g1RcAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41083726-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Romanticism: A Very Short Introduction",
    author: "Michael Ferber",
    genre: "selfhelp",
    description:
      "The only short introduction to Romanticism that incorporates not only the English but the Continental movements, and not only literature but music, art, religion, and philosophy.-publisher description.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=zpY4nX4fUvIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=zpY4nX4fUvIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083727-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Short Stories in German for Intermediate Learners",
    author: "Olly Richards",
    genre: "essays",
    description:
      "An unmissable collection of eight unconventional and captivating short stories for young adult and adult intermediate learners of German. Short Stories in German for Intermediate Learners has been written especially for students from a low-intermediate to intermediate level, designed to give a sense of achievement, and most importantly - enjoyment!",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2J2bzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=2J2bzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41083728-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Vintage Book of Contemporary American Short Stories",
    author: "Tobias Wolff",
    genre: "mystery",
    description:
      "A collection of short stories features the work of Carol Bly, Ann Beattie, Allan Gurganus, Joyce Carol Oates, and others",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=1q4GtKCPl3MC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=1q4GtKCPl3MC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41083729-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Democracy and Truth",
    author: "Sophia Rosenfeld",
    genre: "art&photog",
    description:
      '"Fake news," wild conspiracy theories, misleading claims, doctored photos, lies peddled as facts, facts dismissed as lies—citizens of democracies increasingly inhabit a public sphere teeming with competing claims and counterclaims, with no institution or person possessing the authority to settle basic disputes in a definitive way. The problem may be novel in some of its details—including the role of today\'s political leaders, along with broadcast and digital media, in intensifying the epistemic anarchy—but the challenge of determining truth in a democratic world has a backstory. In this lively and illuminating book, historian Sophia Rosenfeld explores a longstanding and largely unspoken tension at the heart of democracy between the supposed wisdom of the crowd and the need for information to be vetted and evaluated by a learned elite made up of trusted experts. What we are witnessing now is the unraveling of the détente between these competing aspects of democratic culture. In four bracing chapters, Rosenfeld substantiates her claim by tracing the history of the vexed relationship between democracy and truth. She begins with an examination of the period prior to the eighteenth-century Age of Revolutions, where she uncovers the political and epistemological foundations of our democratic world. Subsequent chapters move from the Enlightenment to the rise of both populist and technocratic notions of democracy between the nineteenth and twentieth centuries to the troubling trends—including the collapse of social trust—that have led to the rise of our "post-truth" public life. Rosenfeld concludes by offering suggestions for how to defend the idea of truth against the forces that would undermine it.',
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=QdR5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=QdR5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "4108372a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Anarchism: A Very Short Introduction",
    author: "Colin Ward",
    genre: "history",
    description:
      "What do anarchists want? Can anarchy ever function effectively as a political force? Is anarchism more 'organized' and 'reasonable' than is currently perceived? Colin Ward explains what anarchism means and who anarchists are in this illuminating and accessible introduction to the subject.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=nkgSDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=nkgSDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "4108372b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Best Short Stories of Mark Twain",
    author: "Mark Twain",
    genre: "art&photog",
    description:
      "This unique collection of Twain’s essential short stories and semiautobiographical narratives is a testament to the author’s vast imagination. Featuring popular tales such as “Jim Smiley and His Jumping Frog” and “The Man That Corrupted Hadleyburg,” as well as some delightful excerpts from The Diaries of Adam and Eve, this compilation also includes darker works written in the author’s twilight years. These selections illuminate the depth of Twain’s artistry, humor, irony, and narrative genius.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=VQBwDwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=VQBwDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "4108372c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Discovering Fiction Level 1 Student's Book",
    author: "Judith Kay",
    genre: "mystery",
    description:
      "North American short stories enhance students' reading skills, language learning, and enjoyment of literature. Discovering Fiction, Second Edition, Student's Book 1 presents stories with universal appeal to engage students and make them think critically. Among the authors included are O. Henry, William Saroyan, Gwendolyn Brooks, Isaac Asimov, and Sandra Cisneros. Extensive pre-reading activities capture students' interest. Post-reading activities check their comprehension, increase their knowledge of grammar and vocabulary, and provide thought-provoking discussion and writing assignments. Literary term explanations and tasks enhance students' appreciation of literature.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=rFHHAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=rFHHAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "4108372d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Biochemistry: A Short Course",
    author: "John L. Tymoczko",
    genre: "action&adventure",
    description:
      "Derived from the classic text originated by Lubert Stryer and continued by John Tymoczko and Jeremy Berg, Biochemistry: A Short Course offers that bestseller's signature writing style and physiological emphasis, while focusing on the major topics taught in a one-semester biochemistry course. This second edition takes into account recent discoveries and advances that have changed how we think about the fundamental concepts in biochemistry and human health.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=90bz5vAkF0UC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=90bz5vAkF0UC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "4108372e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "How Not to Make a Short Film",
    author: "Roberta Marie Munroe",
    genre: "history",
    description:
      "A veteran short film programmer instructs aspiring filmmakers on how to make a film worth watching, sharing industry insights about the qualities of a successful short, the ways to capture the attention of Sundance and other top festivals, and the opportunities offered by the Internet and iPod. Original. 20,000 first printing.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sXsLAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sXsLAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "4108372f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Earth System Science",
    author: "Tim Lenton",
    genre: "horror",
    description:
      "When humanity first glimpsed planet Earth from space, the unity of the system that supports humankind entered the popular consciousness. The concept of the Earth's atmosphere, biosphere, oceans, soil, and rocks operating as a closely interacting system has rapidly gained ground in science. This new field, involving geographers, geologists, biologists, oceanographers, and atmospheric physicists, is known as Earth System Science. In this Very Short Introduction, Tim Lenton considers how a world in which humans could evolve was created; how, as a species, we are now reshaping that world; and what a sustainable future for humanity within the Earth System might look like. Drawing on elements of geology, biology, chemistry, physics, and mathematics, Lenton asks whether Earth System Science can help guide us onto a sustainable course before we alter the Earth system to the point where we destroy ourselves and our current civilisation. ABOUT THE SERIES: The Very Short Introductions series from Oxford University Press contains hundreds of titles in almost every subject area. These pocket-sized books are the perfect way to get ahead in a new subject quickly. Our expert authors combine facts, analysis, perspective, new ideas, and enthusiasm to make interesting and challenging topics highly readable.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ijs6CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ijs6CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083730-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "American Business History: a Very Short Introduction",
    author: "Walter A. Friedman",
    genre: "children",
    description:
      'By the early twentieth century, it became common to describe the United States as a "business civilization." President Coolidge in 1925 said, "The chief business of the American people is business." More recently, historian Sven Beckert characterized Henry Ford\'s massive manufactory as the embodiment of America: "While Athens had its Parthenon and Rome its Colosseum, the United States had its River Rouge Factory in Detroit..." How did business come to assume such power and cultural centrality in America? This volume explores the variety of business enterprise in the United States and analyzes its presence in the country\'s economy, its evolution over time, and its meaning in society. It introduces readers to formative business leaders (including Elbert Gary, Harlow Curtice, and Mary Kay Ash), leading firms (Mellon Bank, National Cash Register, Xerox), and fiction about business people (The Octopus, Babbitt, The Man in the Grey Flannel Suit). It also discusses Alfred Chandler, Joseph Schumpeter, Mira Wilkins, and others who made significant contributions to understanding of America\'s business history. This VSI pursues its three central themes - the evolution, scale, and culture of American business - in a chronological framework stretching from the American Revolution to today. The first theme is evolution: How has U.S. business evolved over time? How have American companies competed with one another and with foreign firms? Why have ideas about strategy and management changed? Why did business people in the mid-twentieth century celebrate an "organizational" culture promising long-term employment in the same company, while a few decades later entrepreneurship was prized? Second is scale: Why did business assume such enormous scale in the United States? Was the rise of gigantic corporations due to the industriousness of its population, or natural resources, or government policies? And third, culture: What are the characteristics of a "business civilization"? How have opinions on the meaning of business changed? In the late nineteenth century, Andrew Carnegie believed that America\'s numerous enterprises represented an exuberant "triumph of democracy." After World War II, however, sociologist William H. Whyte saw business culture as stultifying, and historian Richard Hofstadter wrote, "Once great men created fortunes; today a great system creates fortunate men." How did changes in the nature of business affect popular views? Walter A. Friedman provides the long view of these important developments.',
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=9MrhDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=9MrhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083731-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A Short Course in Teaching Reading",
    author: "Beatrice S. Mikulecky",
    genre: [],
    description:
      "This revision of the classical practical handbook A Short Course in Teaching Reading Skills combines reading theory with practical classroom application. An invaluable resource to the reading teacher, teacher-in-training, or administrator who wants to stress quality reading comprehension instruction, the principles apply to teenage through adult learnerers who already have basic decoding skills. Features Part I defines the reading process, reviews recent research, and models an ESL/EFL reading course. Part II outlines why and how to set up an extensive reading program. Part III describes and models how to teach effective reading skills. Part III also includes intensive reading lessons that enable students to strategically apply reading skills. Appendices include high frequency word lists and common collocations in academic texts.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=zA4qPwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=zA4qPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41083732-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A Short History of the World",
    author: "John Morris Roberts",
    genre: "history",
    description:
      "Chronologically discusses the events of history beginning with the evolution of man and ending with the restructuring of Western Europe in 1993.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=3QZXvUhGwhAC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=3QZXvUhGwhAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41083733-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Brain: A Very Short Introduction",
    author: "Michael O'Shea",
    genre: "art&photog",
    description:
      '"How does the brain work? Michael O\'Shea provides an accessible introduction to the key questions and current state of brain research, and shows that, though we know a surprising amount, we are still far from having a complete understanding. The topics he discusses range from how we sense things and how memories are stored, to the evolution of brains and nervous systems from primitive organisms, as well as altered mental states, brain-computer hybrids, and the future of brain research."--BOOK JACKET.',
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ZQcTDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ZQcTDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083734-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "UX for Beginners",
    author: "Joel Marsh",
    genre: "art&photog",
    description:
      "In today’s digital world, any product, app, or website requires a professional User Experience (UX) designer to ensure success. With this book, new UX designers will learn the practical skills they need to get started in the field, skills that can be immediately applied to real-world UX projects. UX for Beginners is broken into one hundred short, illustrated lessons, a user-friendly approach that makes learning fun and gives you the foundation you need to succeed as a UX designer. This book is based on the popular UX Crash Course blog at The Hipper Element, which has more than 400,000 readers.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ic7YrQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ic7YrQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41083735-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "History: A Very Short Introduction",
    author: "John H. Arnold",
    genre: "selfhelp",
    description:
      "There are many stories we can tell about the past, and we are not, perhaps, as free as we might imagine in our choice of which stories to tell, or where those stories end. John Arnold's Very Short Introduction is a stimulating essay about how we study and understand history. The book begins by inviting us to think about various questions provoked by our investigation of history, and explores the ways these questions have been answered in the past. Concepts such as causation, interpretation, and periodization, are introduced by means of concrete examples of how historians work, giving the reader a sense of the excitement of discovering not only the past, but also ourselves. ABOUT THE SERIES: The Very Short Introductions series from Oxford University Press contains hundreds of titles in almost every subject area. These pocket-sized books are the perfect way to get ahead in a new subject quickly. Our expert authors combine facts, analysis, perspective, new ideas, and enthusiasm to make interesting and challenging topics highly readable.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=pVQ9FYXB4bcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=pVQ9FYXB4bcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41083736-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Extra Life",
    author: "Steven Johnson",
    genre: "graphicnovel",
    description:
      "“Offers a useful reminder of the role of modern science in fundamentally transforming all of our lives.” —President Barack Obama (on Twitter) “An important book.” —Steven Pinker, The New York Times Book Review The surprising and important story of how humans gained what amounts to an extra life, from the bestselling author of How We Got to Now and Where Good Ideas Come From In 1920, at the end of the last major pandemic, global life expectancy was just over forty years. Today, in many parts of the world, human beings can expect to live more than eighty years. As a species we have doubled our life expectancy in just one century. There are few measures of human progress more astonishing than this increased longevity. Extra Life is Steven Johnson’s attempt to understand where that progress came from, telling the epic story of one of humanity’s greatest achievements. How many of those extra years came from vaccines, or the decrease in famines, or seatbelts? What are the forces that now keep us alive longer? Behind each breakthrough lies an inspiring story of cooperative innovation, of brilliant thinkers bolstered by strong systems of public support and collaborative networks, and of dedicated activists fighting for meaningful reform. But for all its focus on positive change, this book is also a reminder that meaningful gaps in life expectancy still exist, and that new threats loom on the horizon, as the COVID-19 pandemic has made clear. How do we avoid decreases in life expectancy as our public health systems face unprecedented challenges? What current technologies or interventions that could reduce the impact of future crises are we somehow ignoring? A study in how meaningful change happens in society, Extra Life celebrates the enduring power of common goals and public resources, and the heroes of public health and medicine too often ignored in popular accounts of our history. This is the sweeping story of a revolution with immense public and personal consequences: the doubling of the human life span.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=luiNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=luiNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41083737-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Stalin's Library",
    author: "Geoffrey Roberts",
    genre: "scifi",
    description:
      "A biography as well as an intellectual portrait, this book explores all aspects of Stalin's tumultuous life and politics, told through his personal library. Stalin, an avid reader from an early age, amassed a surprisingly diverse personal collection of thousands of books, many of which he marked and annotated revealing his intimate thoughts, feelings, and beliefs",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=yjNZEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=yjNZEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf200-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Dawn of the Roman Empire",
    author: "Livy",
    genre: "romance",
    description:
      "\"With a single announcement from a herald, all the cities of Greece and Asia had been set free; only an intrepid soul could formulate such an ambitious project, only phenomenal valour and fortune bring it to fruition.\" Thus Livy describes the reaction to the Roman commander T.Q. Flamininus' proclamation of the freedom of Greece at the Isthmian games near Corinth in 196 BC. Half a century later Greece was annexed as a province of the Romans who burned the ancient city of Corinth to the ground. Books 31 to 40 of Livy's history chart Rome's emergence as an imperial nation and the Romans tempestuous involvement with Greece, Macedonia and the near East in the opening decades of the second century BC; they are our most important source for Graeco-Roman relations in that century. Livy's dramatic narrative includes the Roman campaigns in Spain and against the Gallic tribes of Northern Italy; the flight of Hannibal from Carthage and his death in the East; the debate on the Oppian law; and the Bacchanalian Episode. This is the only unabridged English translation of Books 31 to 40.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=8ZFfAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=8ZFfAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf201-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Mercenary Mandarin",
    author: "David Leffman",
    genre: "graphicnovel",
    description:
      "William Mesny jumped ship at Shanghai in 1860 when he was just 18. Amid the chaos of foreign intrigue and civil war in 19th-century China, he became a smuggler, a prisoner of the Taiping rebels, a gun-runner and an instructor in the Chinese military. After five years of fierce fighting in remote Guizhou, Mesny rose to the rank of general and used this privileged position to travel around China, writing articles, collecting plants and advising officials.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=qLKOjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=qLKOjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf202-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Egyptian Texts of the Bronzebook",
    author: "Marshall Masters",
    genre: "graphicnovel",
    description:
      'The Egyptian Texts of The Bronzebook: The First Six Books of The Kolbrin Bible is all that remains of a 3600-year old anthology penned by Egyptian academicians and scribes after the Hebrew Exodus. The result of a regional search for the one true G-d of Abraham, it offers alternate accounts of Exodus and Noah\'s Flood. Written in Egyptian Hieratic, first translated to Phoenician and then into English, it describes a planet the Egyptians called the "Destroyer." According to recently translated Sumerian texts, this object (also known as Nibiru or Planet X) is in a 3600-year orbit around our sun. The Egyptians say it caused Noah\'s Flood and the Plagues of Exodus. Like the Druids, Sumerians and Mayans, they also warn us of its imminent return and of yet another Biblical tribulation. The "Other" Exodus Story While there are parallels to the Exodus story of the Torah (Old Testament), the Egyptian accounts tell us that: The Ten Plagues of Exodus were caused by the flyby of a planet through our solar system. Pharaoh and his army perished at the Red Sea after slaughtering over half the Jews. The Ten Plagues of Exodus were all parts of the same natural global disaster. Following the Red Sea debacle, Egypt paid dearly to repel an bloody invasion from the South. Shaken to their national core, the Egyptians conducted the first regional anthropological and historical study of the Middle East. Their aim was to find clues that would lead them to the one true G-d of Abraham, and they published their initial findings in a 21-volume work titled The Great Book. During the last millennium BCE, Phoenician papyrus traders translated The Great Book from Egyptian Hieratic into their own 22-letter alphabet and entrusted a copy to the Celtic priests in Britain. After the death of Jesus, Joseph of Arimathea (his great uncle on the side of Joseph) founded the Glastonbury Abbey. It became the repository for these texts as well as those authored by Celtic priests, and in 1184 CE, English King Henry II ordered an attack on the Abbey. The surviving priests secreted the remaining texts to Scotland where they were translated into English and eventually merged to create The Kolbrin Bible. Related Title - The Celtic Texts of the Coelbook: The Last Five books of The Kolbrin Bible A historical treasure trove of ancient Celtic and Druid folklore, philosophy and mysticism. Penned by Celtic priests in the first millennium CE, it includes a never-before published biographical sketch of Jesus Christ with several first-person quotes by Jesus, himself. Related Title - The Kolbrin Bible: 21st Century Master Edition The Kolbrin Bible dates back 3600 years and offers unique and enlightened insights from the past to both challenge and affirm our present day beliefs. This 11-book secular anthology is nearly as large as the King James Bible.',
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=-bnUoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=-bnUoQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf203-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "What We Talk About When We Talk About Books",
    author: "Leah Price",
    genre: "horror",
    description:
      "Reports of the death of reading are greatly exaggerated Do books have a future? Does reading? And what's the difference? Digital-age Jeremiahs lament that readers have lost patience for anything longer than a tweet. As our appetite for books dwindles, so too do the virtues in which printed, bound objects once trained us: the willpower to focus on a sustained argument, the curiosity to look beyond the day's news, even the willingness to be alone. However, by examining objects on the shelves of the world's great libraries, book historian Leah Price has discovered that no golden age of reading ever existed. From the dawn of mass literacy to the invention of the paperback, most readers skimmed and multitasked. Print-era doctors warned against the very same silent absorption now recommended as a cure for electronic addictions. A revealing examination of how readers have interacted with books over the centuries, What We Talk About When We Talk About Books holds lessons for bibliophiles and literature lovers alike.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=CYPevgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=CYPevgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf204-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Mexico For Kids: People, Places and Cultures - Children Explore The World Books",
    author: "Baby Professor",
    genre: [],
    description:
      "Welcome to Mexico! Are you ready to tour around the place and meet new people? Then go ahead and open this book! Here, you will get your first truly Mexican experience through pictures and texts. You will have an idea of what life is like in this part of the planet. You can use this book as an introduction prior to an actual visit. Grab a copy now!",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=NGk7DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=NGk7DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410cf205-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Selections from the First Five Books",
    author: "Livy",
    genre: [],
    description:
      "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible. Therefore, you will see the original copyright references, library stamps (as most of these works have been housed in our most important libraries around the world), and other notations in the work.This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work.As a reproduction of a historical artifact, this work may contain missing or blurred pages, poor pictures, errant marks, etc. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=mcD9jwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=mcD9jwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf206-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Complete Soldier",
    author: "David R. Lawrence",
    genre: "history",
    description:
      "Military art and science -- Great Britain -- History -- 17th century, Military education -- Great Britain -- History -- 17th century, Books and reading -- England -- History -- 17th century, Early printed books -- England -- 17th century.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=6SHcAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=6SHcAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf207-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Preferred List of Books for District School Libraries in the State of Michigan",
    author: "Michigan State Library",
    genre: "history",
    description:
      "Trieste Publishing has a massive catalogue of classic book titles. Our aim is to provide readers with the highest quality reproductions of fiction and non-fiction literature that has stood the test of time. The many thousands of books in our collection have been sourced from libraries and private collections around the world.The titles that Trieste Publishing has chosen to be part of the collection have been scanned to simulate the original. Our readers see the books the same way that their first readers did decades or a hundred or more years ago. Books from that period are often spoiled by imperfections that did not exist in the original. Imperfections could be in the form of blurred text, photographs, or missing pages. It is highly unlikely that this would occur with one of our books. Our extensive quality control ensures that the readers of Trieste Publishing's books will be delighted with their purchase. Our staff has thoroughly reviewed every page of all the books in the collection, repairing, or if necessary, rejecting titles that are not of the highest quality. This process ensures that the reader of one of Trieste Publishing's titles receives a volume that faithfully reproduces the original, and to the maximum degree possible, gives them the experience of owning the original work.We pride ourselves on not only creating a pathway to an extensive reservoir of books of the finest quality, but also providing value to every one of our readers. Generally, Trieste books are purchased singly - on demand, however they may also be purchased in bulk. Readers interested in bulk purchases are invited to contact us directly to enquire about our tailored bulk rates.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=AlcYtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=AlcYtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf208-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "History of Venice: Books I-IV",
    author: "Pietro Bembo",
    genre: "essays",
    description:
      "Bembo (1470-1547), a Venetian nobleman, later a Roman Catholic cardinal, was the most celebrated Latin stylist of his day and was widely admired for his writings in Italian. The History of Venice was published posthumously, in Latin and in his own Italian version. This edition makes it available for the first time in English translation.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=CgTXoFWBqFMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=CgTXoFWBqFMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410cf209-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "A Catalogue of Law Books, Published and for Sale by Charles C. Little and James Brown",
    author: "Charles C. Little and James Brown (Firm)",
    genre: "horror",
    description:
      'This fascinating catalogue lists every law title published or distributed by Little, Brown. Several entries have endorsements and annotations. (Some of these, by Joseph Story and other distinguished jurists, are unique to this catalogue.) Another interesting feature is a section by Simon Greenleaf entitled "Catalogue of a Select Law Library" that lists "the Books which are useful to every American Lawyer, in whatever State he may reside" (xxx-xl). Based on the Harvard Law School reading list, the titles are arranged by subject in parallel columns. Essential titles are in listed in one column, useful, but supplemental, titles in the other. It also includes an advertisement for Harvard Law School that describes its philosophy, curriculum and fees.',
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=xUxVRsTVUecC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=xUxVRsTVUecC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410cf20a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Samuel Pepys and his Books",
    author: "Kate Loveman",
    genre: "children",
    description:
      "Samuel Pepys was a great collector of books, news, and gossip. This study uses his surviving papers to examine reading practices, collecting, and the exchange of information in the late seventeenth century. Offering the first extensive history of reading during the Restoration, it traces developments in the book trade and news transmission at a time when England was the scene of dramatic political and religious upheavals. The investigation goes beyond Pepys's famous diary of the 1660s, employing a variety of sources to explore the role that reading played in Pepys's life and in the lives of his contemporaries. It begins by examining what it meant to be a reader in Restoration London: the skills, the people, and the places involved. Pepys's wide-ranging interests serve as starting points for considering news exchange and the reception of major literary genres in the Restoration. Particular attention is given to conduct books, histories, religious works, and recreational reading (romances, drama, and novels). The appeal that these works held for readers was not always what we might expect -or, indeed, what the authors and publishers had expected. Additional chapters explore the social interactions surrounding information gathering: the ways people acquired oral and written news in London; the experience of book-buying; and the acquisition of manuscript and print through social networks. Analysed alongside other records, Pepys's papers provide unrivalled insights into literary and cultural developments in the second half of the seventeenth century.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=X0T9CQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=X0T9CQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410cf20b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Commentaries on the Laws of England",
    author: "William Blackstone",
    genre: "mystery",
    description:
      "Excerpt from Commentaries on the Laws of England: In Four Books In tbic jitnation be was led, botb by duty and inclination, to inveﬂtgate tbe element: of tbc law. About the Publisher Forgotten Books publishes hundreds of thousands of rare and classic books. Find more at www.forgottenbooks.com This book is a reproduction of an important historical work. Forgotten Books uses state-of-the-art technology to digitally reconstruct the work, preserving the original format whilst repairing imperfections present in the aged copy. In rare cases, an imperfection in the original, such as a blemish or missing page, may be replicated in our edition. We do, however, repair the vast majority of imperfections successfully; any imperfections that remain are intentionally left to preserve the state of such historical works.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Xxb6swEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Xxb6swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf20c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Holocaust",
    author: "Laurence Rees",
    genre: "science&tech",
    description:
      "THE SUNDAY TIMES TOP 10 BESTSELLER AND THE FIRST AUTHORITATIVE ACCOUNT FOR 30 YEARS. 'By far the clearest book ever written about the Holocaust, and also the best at explaining its origins and grotesque mentality, as well as its chaotic development' Antony Beevor 'Groundbreaking. You might have thought that we know everything there is to know about the Holocaust but this book proves there is much more' Andrew Roberts, Mail on Sunday Two fundamental questions about the Holocaust must be answered: How did it happen? And why? More completely than any other single work of history yet published, Laurence Rees's Holocaust definitively answers them. 'With The Holocaust Rees has set himself the task of writing an accessible chronological account of the murder of six million Jews in conditions of scarcely imaginable horror. He's done it excellently. There is no shortage of books on the Holocaust but Rees's stands out as a readable and authoritative exposition of how and why it happened, and the barbarous methods by which it was pursued. The amount of ground it covers in 500 pages is remarkable - from the anti-Semitism of popular German literature of the 19th century to Hitler's suicide and the surrender of his regime. It's excellently written and skilfully interweaves narrative history, sound interpretation and the recollections (through interviews, listed in the notes as \"previously unpublished testimony\") of survivors. Rees provides an exemplary account of how the greatest crime in modern history came about' The Times 'Rees has distilled 25 years of research into this compelling study, the finest single-volume account of the Holocaust. It is not a book for the faint-hearted. Some of the first-hand testimony is both shocking and heart-rending. Yet it has important things to say about human nature - what our species is capable of doing if not prevented by civilized laws - and demands to be read' Saul David, Telegraph 'Anyone wanting a compelling, highly readable explanation of how and why the Holocaust happened, drawing on recent scholarship and impressively incorporating moving and harrowing interviews need look no further than Laurence Rees's brilliant book' Professor Ian Kershaw, bestselling author of Hitler",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=iHMNDQAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=iHMNDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf20d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Worker Cooperatives and Revolution",
    author: "Chris Wright",
    genre: "fantasy",
    description:
      "Since the financial crisis of 2008 and the global popular protests of 2011, more people have begun to wonder and speculate: what’s next for civilization? The economic, social, and political status quo seems unsustainable, but what can emerge to take its place? In this book, a historian examines the past and present to argue that the seeds of a more humane society are already being planted, on local and international scales. Whether they will bear fruit depends, ultimately, on grassroots initiative. Focusing on the new worker cooperative movement in the West, this study not only contains the first systematic discussion of the solidarity economy in the light of Marxist theory; it also introduces a major revision of Marxism that both updates it for the twenty-first century and illuminates our historical moment. It includes an analysis of the history of cooperatives in the U.S., showing where they went wrong and how we can correct their past mistakes. It has a case-study of the successful new worker-owned business New Era Windows in Chicago, which has been celebrated internationally for its defiance of conventional paradigms. And it shows a way out of the age-old conflict between Marxism and anarchism, arguing that both are more relevant now than they have ever been. Which is to say: a gradualist “revolution” is, for the first time, within the realm of possibility.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Qq5sBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Qq5sBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410cf20e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Empire: A Very Short Introduction",
    author: "Stephen Howe",
    genre: "children",
    description:
      "A great deal of the world's history is the history of empires. Indeed it could be said that all history is colonial history, if one takes a broad enough definition and goes far enough back. And although the great historic imperial systems, the land-based Russian one as well as the seaborne empires of western European powers, have collapsed during the past half century, their legacies shape almost every aspect of life on a global scale. Meanwhile there is fierce argument, and much speculation, about what has replaced the old territorial empires in world politics. Do the United States and its allies, transnational companies, financial and media institutions, or more broadly the forces of 'globalization', constitute a new imperial system? Stephen Howe interprets the meaning of the idea of 'empire' through the ages, disentangling the multiple uses and abuses of the labels 'empire', 'colonialism', etc., and examines the aftermath of imperialism on the contemporary world. ABOUT THE SERIES: The Very Short Introductions series from Oxford University Press contains hundreds of titles in almost every subject area. These pocket-sized books are the perfect way to get ahead in a new subject quickly. Our expert authors combine facts, analysis, perspective, new ideas, and enthusiasm to make interesting and challenging topics highly readable.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=04lJ4TshmxcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=04lJ4TshmxcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410cf20f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Long Affair",
    author: "Conor Cruise O'Brien",
    genre: "art&photog",
    description:
      "As controversial and explosive as it is elegant and learned, this examination of Thomas Jefferson, as man and icon, through the critical lens of the French Revolution, offers a provocative analysis of the supreme symbol of American history and political culture and challenges the traditional perceptions of both Jeffersonian history and the Jeffersonian legacy. 15 illustrations.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ABKA2MDozAQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ABKA2MDozAQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410cf210-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The English Catalogue of Books",
    author: "Anonymous",
    genre: "selfhelp",
    description:
      "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible. Therefore, you will see the original copyright references, library stamps (as most of these works have been housed in our most important libraries around the world), and other notations in the work.This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work.As a reproduction of a historical artifact, this work may contain missing or blurred pages, poor pictures, errant marks, etc. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=MFlgjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=MFlgjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf211-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Darker Nations",
    author: "Vijay Prashad",
    genre: "romance",
    description:
      "An alternative history of the Cold War from the perspective of impoverished Third-World people includes coverage of such topics as the 1927 Brussels conclave of the League Against Imperialism and the launch of the Third World project during the 1955 conference in Indonesia. Reprint.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=iPxsQGDri8MC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=iPxsQGDri8MC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf212-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "The Colonial Entry-Books - A Brief Guide to the Colonial Records in the Public Record Office Before 1696",
    author: "C. S. S. Higham",
    genre: "selfhelp",
    description:
      "This early works is a fascinating look at the Colonial Records before 1696. It will appeal greatly to any student of history. The main difficulty for students who begin research work upon early colonial history is the confusion into which the records have fallen through various rearrangements. Though the final arrangement of the documents at the Public Record Office has made it a simple matter to obtain the particular document whose precis has been consulted in the calendar, yet the present logical arrangement takes no notice of the previous history of the various documents, for it is geographical. Many of the earliest books, particularly those dating back to 1900's and before, are now extremely scarce and increasingly expensive. We are republishing these classic works in affordable, high quality, modern editions, using the original text and artwork.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=xgkPdauKtosC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=xgkPdauKtosC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf213-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Josephus, Vol. 7 of 9",
    author: "Flavius Josephus",
    genre: "selfhelp",
    description:
      "Excerpt from Josephus, Vol. 7 of 9: With an English Translation; Jewish Antiquities, Books XII-XIV IT is a matter of great regret to me that illness, pressure of other duties and the excessive size of this volume have caused me to abandon the plan of dis cussing in Appendices E to M some of the historical problems connected with Ant. XII-XIV, as has been done in Appendices B, C and D. In place of detailed discussions I have given selected bibliographies. I hope to deal With these problems in a work on the history of the J ews during the period of the Second Commonwealth, which should appear some time after the completion of the last volume of this translation of J osephus. About the Publisher Forgotten Books publishes hundreds of thousands of rare and classic books. Find more at www.forgottenbooks.com This book is a reproduction of an important historical work. Forgotten Books uses state-of-the-art technology to digitally reconstruct the work, preserving the original format whilst repairing imperfections present in the aged copy. In rare cases, an imperfection in the original, such as a blemish or missing page, may be replicated in our edition. We do, however, repair the vast majority of imperfections successfully; any imperfections that remain are intentionally left to preserve the state of such historical works.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=KPhKswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=KPhKswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf214-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Confucian Way",
    author: "Li Fu Chen",
    genre: "selfhelp",
    description:
      "First published in 1987. Routledge is an imprint of Taylor & Francis, an informa company.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=FrpNtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=FrpNtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf215-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Discarded Image",
    author: "C. S. Lewis",
    genre: "essays",
    description:
      'Hailed as "the final memorial to the work of a great scholar and teacher and a wise and noble mind," this work paints a lucid picture of the medieval world view, as historical and cultural background to the literature of the Middle Ages and Renaissance.',
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=WADDM36d3TAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=WADDM36d3TAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410cf216-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Biblical Criticism on the First Fourteen Historical Books of the Old Testament",
    author: "Samuel Horsley",
    genre: "horror",
    description:
      "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible. Therefore, you will see the original copyright references, library stamps (as most of these works have been housed in our most important libraries around the world), and other notations in the work.This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work.As a reproduction of a historical artifact, this work may contain missing or blurred pages, poor pictures, errant marks, etc. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=cc7MjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=cc7MjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf217-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "China's Hidden Children",
    author: "Kay Ann Johnson",
    genre: "horror",
    description:
      "In the thirty-five years since China instituted its One-Child Policy, 120,000 children—mostly girls—have left China through international adoption, including 85,000 to the United States. It’s generally assumed that this diaspora is the result of China’s approach to population control, but there is also the underlying belief that the majority of adoptees are daughters because the One-Child Policy often collides with the traditional preference for a son. While there is some truth to this, it does not tell the full story—a story with deep personal resonance to Kay Ann Johnson, a China scholar and mother to an adopted Chinese daughter. Johnson spent years talking with the Chinese parents driven to relinquish their daughters during the brutal birth-planning campaigns of the 1990s and early 2000s, and, with China’s Hidden Children, she paints a startlingly different picture. The decision to give up a daughter, she shows, is not a facile one, but one almost always fraught with grief and dictated by fear. Were it not for the constant threat of punishment for breaching the country’s stringent birth-planning policies, most Chinese parents would have raised their daughters despite the cultural preference for sons. With clear understanding and compassion for the families, Johnson describes their desperate efforts to conceal the birth of second or third daughters from the authorities. As the Chinese government cracked down on those caught concealing an out-of-plan child, strategies for surrendering children changed—from arranging adoptions or sending them to live with rural family to secret placement at carefully chosen doorsteps and, finally, abandonment in public places. In the twenty-first century, China’s so-called abandoned children have increasingly become “stolen” children, as declining fertility rates have left the dwindling number of children available for adoption more vulnerable to child trafficking. In addition, government seizures of locally—but illegally—adopted children and children hidden within their birth families mean that even legal adopters have unknowingly adopted children taken from parents and sent to orphanages. The image of the “unwanted daughter” remains commonplace in Western conceptions of China. With China’s Hidden Children, Johnson reveals the complex web of love, secrecy, and pain woven in the coerced decision to give one’s child up for adoption and the profound negative impact China’s birth-planning campaigns have on Chinese families.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=FLLAAQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=FLLAAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf218-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Protestantism Crossing the Seas",
    author: "Vrije Universiteit Amsterdam. Bibliotheek",
    genre: "shortstory",
    description:
      "The collection of English books printed before 1801 in the University Library of the Vrije Universiteit at Amsterdam is one of the largest collections of such books outside the English-speaking world, and by far the largest in the Netherlands. The collection numbers 5,600 titles and covers all subjects, but is especially concentrated on (reformed) Protestantism in Great Britain, the Netherlands and America, and the exchange of ideas between these countries. The collection of which the existence is practically unknown, contains many rare items from the 16th to the 18th century. It covers the periods of the well-known and widely used bibliographies of English printed books (STC, Wing, and ESTC); in a large number of cases the catalogue entries correct or supplement these bibliographies. The catalogue is aimed both at a general public of bibliographers, literary and book historians working with books from the STC, Wing and ESTC periods, and at researchers in the Netherlands, Great Britain and elsewhere specialized in church history and the manifold historical and cultural relations between the British Isles and the Low Countries. (Bibliotheca Humanistica & Reformatorica, Vol. LIX).",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=i1UWAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=i1UWAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf219-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "History of the Wars, Books I and Ii",
    author: "Procopius",
    genre: "action&adventure",
    description: "No description",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=I2ZYPQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=I2ZYPQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf21a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Genuine Works of Flavius Josephus, the Jewish Historian",
    author: "Flavius Josephus",
    genre: "scifi",
    description:
      "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible. Therefore, you will see the original copyright references, library stamps (as most of these works have been housed in our most important libraries around the world), and other notations in the work.This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work.As a reproduction of a historical artifact, this work may contain missing or blurred pages, poor pictures, errant marks, etc. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=z2D8jwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=z2D8jwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf21b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Homo Deus",
    author: "Yuval Noah Harari",
    genre: "action&adventure",
    description:
      "**THE MILLION COPY BESTSELLER** Sapiens showed us where we came from. In uncertain times, Homo Deus shows us where we're going. 'Homo Deus will shock you. It will entertain you. It will make you think in ways you had not thought before' Daniel Kahneman, bestselling author of Thinking, Fast and Slow Yuval Noah Harari envisions a near future in which we face a new set of challenges. Homo Deus explores the projects, dreams and nightmares that will shape the twenty-first century and beyond - from overcoming death to creating artificial life. It asks the fundamental questions: how can we protect this fragile world from our own destructive power? And what does our future hold?",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=dWYyCwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=dWYyCwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf21c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Buffalo Hunters",
    author: "Mari Sandoz",
    genre: "romance",
    description:
      "In 1867 conservative estimates put the number of buffaloes in the trans-Missouri region at fifteen million. By the end of the 1880s, that figure had dwindled to a few hundred. The destruction of the great herds is the theme of The Buffalo Hunters. Mari Sandoz’s vast canvas is charged with color and excitement—accounts of Indian ambushes, hairbreadth escapes, gambling and gunfights, military expeditions, and famous frontier characters such as Wild Bill Hickok, Lonesome Charlie Reynolds, Buffalo Bill, Sheridan, Custer, and Indian chiefs Whistler, Yellow Wolf, Spotted Tail, and Sitting Bull.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=GzOGzAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=GzOGzAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf21d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "A Selected List of Books on Engineering, Industrial Arts and Trades",
    author: "New York Public Library",
    genre: "fantasy",
    description:
      "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible. Therefore, you will see the original copyright references, library stamps (as most of these works have been housed in our most important libraries around the world), and other notations in the work.This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work.As a reproduction of a historical artifact, this work may contain missing or blurred pages, poor pictures, errant marks, etc. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=bDKTDAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=bDKTDAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf21e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Gates of Europe",
    author: "Serhii Plokhy",
    genre: "scifi",
    description:
      "From award-winning historian Serhii Plokhy, The Gates of Europe is the definitive history of Ukraine that helps us understand the country's past and the current crisis Located at the western edge of the Eurasian steppe, Ukraine has long been the meeting place of empires - Roman to Ottoman, Habsburg to Russian - and they all left their imprint on the landscape, the language and the people living within these shifting borders. In this authoritative book, Serhii Plokhy traces the history of Ukraine from the arrival of the Vikings in the tenth century to the current Russian invasion of eastern Ukraine and annexation of Crimea. Fascinating and multi-layered, The Gates of Europe is the essential guide to understanding not just Ukraine's past but also its future.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=4E3ZCQAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=4E3ZCQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf21f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Homer's Iliad, Books XX., XXI. and XXII., with Engl. Notes and a Literal Translation",
    author: "Homerus",
    genre: "art&photog",
    description:
      "This work has been selected by scholars as being culturally important and is part of the knowledge base of civilization as we know it. This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. To ensure a quality reading experience, this work has been proofread and republished using a format that seamlessly blends the original graphical elements with text in an easy-to-read typeface. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=WoeivQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=WoeivQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf220-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A Commentary on Thucydides: Volume III: Books 5.25-8.109",
    author: "Simon Hornblower",
    genre: "graphicnovel",
    description:
      "The third and final volume of Simon Hornblower's magisterial commentary on the history of the first 20 years of the Peloponnesian War written by the great fifth-century BC Greek historian Thucydides. Volume III covers the years 421-411 BC (Books 5.25 to 8.109). All Greek is translated, and there is a thematic Introduction.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=IaoEuQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=IaoEuQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf221-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Comfort Found in Good Old Books",
    author: "George Hamlin Fitch",
    genre: "history",
    description:
      'The book "" Comfort Found in Good Old Books "", has been considered important throughout the human history, and so that this work is never forgotten we have made efforts in its preservation by republishing this book in a modern format for present and future generations. This whole book has been reformatted, retyped and designed. These books are not made of scanned copies and hence the text is clear and readable.',
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=9LzWzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=9LzWzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf222-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Cengage Advantage Books: Making America, Volume 2 Since 1865: A History of the United States",
    author: "Carol Berkin",
    genre: "science&tech",
    description:
      "Developed to meet the demand for a low-cost, high-quality history book, this economically priced version of MAKING AMERICA, Seventh Edition offers readers the complete narrative while limiting the number of features, photos, and maps. All volumes feature a two-color paperback format that appeals to those seeking a comprehensive, trade-sized history text. Shaped with a clear political chronology, MAKING AMERICA reflects the variety of individual experiences and cultures that comprise American society. For instructors whose classrooms mirror the diversity of today's college students, the clear narrative, together with an integrated program of learning and teaching aids, makes the historical content vivid and comprehensible to students at all levels of preparedness. MAKING AMERICA is available in the following options: CENGAGE ADVANTAGE BOOKS: MAKING AMERICA, Seventh Edition (Chapters 1¬-29); Volume 1: To 1877 (Chapters 1-15); Volume 2: Since 1865 (Chapters 15-29). Important Notice: Media content referenced within the product description or the product text may not be available in the ebook version.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Iqq5BwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Iqq5BwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410cf223-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Pageant of Life; An Epic Poem in Five Books",
    author: "George Barlow",
    genre: [],
    description:
      "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible. Therefore, you will see the original copyright references, library stamps (as most of these works have been housed in our most important libraries around the world), and other notations in the work. This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work. As a reproduction of a historical artifact, this work may contain missing or blurred pages, poor pictures, errant marks, etc. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Ay68wwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Ay68wwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf224-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "J.M. Barrie and His Books; Biographical and Critical Studies",
    author: "John Alexander Hammerton",
    genre: "shortstory",
    description:
      "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible. Therefore, you will see the original copyright references, library stamps (as most of these works have been housed in our most important libraries around the world), and other notations in the work.This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work.As a reproduction of a historical artifact, this work may contain missing or blurred pages, poor pictures, errant marks, etc. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=H_XKjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=H_XKjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf225-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Sepoy Mutiny, 1857",
    author: "Richard Sorsky",
    genre: "art&photog",
    description:
      "The Most Comprehensive Bibliography of the 1857 Revolt in Print--1191 Entries on the Sepoy Rebellion. Published in 2007, The Sepoy Mutiny: 1857 is the most current and authoritative collection of English language mutiny literature published since 1966. It is an essential guide for writers, collectors, dealers--any student of the 1857 revolt and its importance to the modern state of India. - 1161 entries; all books. There are no listings for newspapers or manuscript collections. - Approximately 90% of the entries were physically checked and read by the author. - Every entry lists the location of the title and many entries provide the accession number and well as a short printing history where available. - A complete index lists authors, book titles, and event or place names. The Sepoy Mutiny: 1857 is the most authoritative reference available in print.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=5ckWAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=5ckWAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf226-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Emperor",
    author: "Ryszard Kapuscinski",
    genre: "selfhelp",
    description:
      "A \"sensitive, powerful ... history\" (The New York Review of Books) of a man living amidst nearly unimaginable pomp and luxury while his people teetered netween hunger and starvation. Haile Selassie, King of Kings, Elect of God, Lion of Judah, His Most Puissant Majesty and Distinguished Highness the Emperor of Ethiopia, reigned from 1930 until he was overthrown by the army in 1974. While the fighting still raged, Ryszard Kapuscinski, Poland's leading foreign correspondent, traveled to Ethiopia to seek out and interview Selassie's servants and closest associates on how the Emperor had ruled and why he fell. This is Kapuscinski's rendition of their accounts—humorous, frightening, sad, groteque.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ZKqOEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ZKqOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410cf227-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Ovid's Metamorphoses",
    author: "Ovid",
    genre: "shortstory",
    description:
      "Ovid's Metamorphosesis a weaving-together of classical myths, extending in time from the creation of the world to the death of Julius Caesar. This volume provides the Latin text of the first five books of the poem and the most detailed commentary available in English of these books.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=t12AuG0q144C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=t12AuG0q144C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd830-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Grove Companion to Samuel Beckett",
    author: "Chris Ackerley",
    genre: "science&tech",
    description:
      "From A to Z, this is an indispensable guide to the works, life, and thought of one of the most important writers of our time. The Nobel Prize-winning author Samuel Beckett was a literary treasure, and this work represents the only comprehensive reference to the concepts, characters, and biographical details mentioned by, or related to, Beckett. Painstakingly and lovingly compiled by acclaimed Beckett scholars C. J. Ackerley and S. E. Gontarski, it is alphabetical, cross-referenced, and laid out in a very user-friendly format. The Grove Companion to Samuel Beckett provides an organized trove of information for students and scholars alike, and is a must for any serious reader of Beckett.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=9fCipszqj68C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=9fCipszqj68C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd831-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Complete Book of Speech Communication",
    author: "Carol Marrs",
    genre: "horror",
    description:
      "Complete Book Of Speech Communication is a Meriwether Publishing publication.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=3LQDAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=3LQDAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd832-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Theatre and Allied Arts",
    author: "Blanch Merritt Baker",
    genre: "science&tech",
    description: "No description",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=OogaAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=OogaAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd833-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Bestsellers",
    author: "Ivan King",
    genre: "romance",
    description:
      "yet to be written. Currently, he is working on a couple dozen writing projects and turning some of his novels into screenplays. Ivan’s first published work, Valley of Steel, is a Fiction Novel loosely based on his life growing up in the favelas, or slums, of Brazil. Favorite quote: “In life, incredible things happen and unforgettable moments do exist; but nothing compares to having been loved by you, and though you rest in peace, I will miss and love you always.”",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=lN_QDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=lN_QDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd834-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Write to Riches",
    author: "Renee Rose",
    genre: "action&adventure",
    description:
      "Are you tired of the grind? Sick of the agony, constant striving, and disappointment of your author career? Are you ready to transform it into something that matches your dreams? Do you want to: *Attract raving fans *Have your books go viral *Hit bestseller lists *Feel inspired, and love both your books and your process *Create wealth beyond what you’ve imagined from your books? Write to Riches will teach you the power of abundance mindset, manifesting your desires, and attracting wealth. You will learn the 7 practical steps to harnessing the power of abundance mindset to manifest exponential success, wealth, fandemonium, joy, and ease in your author career. Self-made millionaire and USA Today best selling romance author Renee Rose walks you through the generative process to create miraculous results with ease and flow. Intimately acquainted with all the problems, pitfalls, and desperation that go with writing and publishing, Renee candidly shares her secrets of how she overcame: *Comparisonitis *Money blocks *Lack mentality *Frustration *Doubts of self-worth *A career that felt stuck to reap the seven-figure author lifestyle she’d always dreamed of. Renee teaches you step-by-step, the exact process she used, and how you can do the same. Write to Riches is a practical handbook for every author–chock full of lessons, tips and tricks to get your mindset aligned with your dreams, and attract the wealth, raving fans, and accolades you want. 11-time USA Today bestselling romance author Renee Rose is passionate about helping other authors find and maintain an abundance mindset to catapult their careers and create their best future. She employs energetic tools and techniques to help her clients clear resistance and money blocks, access their inner guidance, and tap into their love and appreciation for their books so they can achieve their dreams. “Within six weeks of reading Write to Riches, I quadrupled my income! Buy this book and change your life.” –USA Today Bestselling Author Lisa Daily “My entire life changed when I changed my mindset. Now, I don't just let myself stay open to possibilities, I make it one of my goals to be open to all the possibilities that could come my way.” –USA Today Bestselling Author Golden Angel “Wow, I made the Amazon Top 10 with a romance featuring two main characters of color! But, yeah, totally knew that would happen. Envisioned and attracted it like an abundance boss thanks to Renee’s coaching.” –Amazon Bestselling Author Theodora Taylor “With Renee’s help, I recognized and removed blocks I had with success and personal judgment that I didn’t know were holding me back. Once they were gone, I ended up hitting the USA Today Bestseller list.” –USA Today Bestselling Author Molly O’hare \"I just had my best money month for THREE years and it's thanks in no small part to the abundance mindset practices I learned with Renee.” ~ USA Today Bestselling Author Felicity Brandon Change the trajectory of your life and author career right now and click Pre-order!",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=SctcEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=SctcEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd835-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Learn French Now! For Every Kid | A Children's Learn French Books",
    author: "Baby Professor",
    genre: "action&adventure",
    description:
      "Why should your child take the time to learn French? It’s because learning a foreign language is actually linked to high academic achievement. Studies show that bilingual children have better cognitive skills such as mental flexibility, critical thinking skills and problem solving skills. Combined, these guarantee better academic output. So what are you waiting for? Go ahead and use a copy today!",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Fwk7DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Fwk7DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd836-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "The Books of Job, Psalms, Proverbs, Ecclesiastes, and the Song of Solomon (Classic Reprint)",
    author: "Unknown",
    genre: "mystery",
    description:
      "Excerpt from The Books of Job, Psalms, Proverbs, Ecclesiastes, and the Song of Solomon For the use of readers who may not possess a copy of that volume, some points most worthy of observation are here brieﬂy recapitulated. About the Publisher Forgotten Books publishes hundreds of thousands of rare and classic books. Find more at www.forgottenbooks.com This book is a reproduction of an important historical work. Forgotten Books uses state-of-the-art technology to digitally reconstruct the work, preserving the original format whilst repairing imperfections present in the aged copy. In rare cases, an imperfection in the original, such as a blemish or missing page, may be replicated in our edition. We do, however, repair the vast majority of imperfections successfully; any imperfections that remain are intentionally left to preserve the state of such historical works.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Svm1tAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Svm1tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd837-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Duchess of Malfi",
    author: "John Webster",
    genre: "action&adventure",
    description:
      "The Duchess of Malfi is one of the major tragedies of theearly modern period and remains popular in the theatre as well as inthe classroom. The story of the Duchess's secret marriage and the cruelrevenge of her brothers has fascinated and appalled audiences forcenturies. This new Arden edition offers readers a comprehensive, illustratedintroduction to the play's historical, critical and performancehistory. The text is modernised and edited to the highest scholarlystandards, with textual notes and commentary notes on the same page forease of reference. This is the lead title in the launch of The Arden Early ModernDrama Series, a series which offers all the depth and quality ofthinking long associated with the Arden. The edition will be valued bystudents, teachers and theatre professionals.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=-dCApIOKqa8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=-dCApIOKqa8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd838-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A First Guide to Learning French | A Children's Learn French Books",
    author: "Baby Professor",
    genre: "children",
    description:
      "French language is one of the most beautiful languages in the world that is why a whole lot of people are on their quests to mastering speaking French. This book should make your child one of these French-inspired folks all over the world. Designed for young beginners, the book aims to spark and maintain your child’s interest in the language. You can have your copy today.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Pwo7DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Pwo7DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd839-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "French Is Fun! A Guide for Kids | a Children's Learn French Books",
    author: "Baby Professor",
    genre: "fantasy",
    description:
      "This book is perfect for those kids who are already thinking of giving up their French. Avoid it and boost their confidence with this French is Fun! A Guide for Kids French Book. This book’s goal is to make kids enjoy learning French language and eventually love doing it by themselves. Go ahead and try this one now!",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Iw07DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Iw07DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd83a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Books & Plays",
    author: "Hints Publishing Co., New York",
    genre: "essays",
    description: "No description",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Gk4yAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Gk4yAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd83b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Banned Plays",
    author: "Dawn B. Sova",
    genre: [],
    description:
      "An alphabetical listing of plays that have been banned throughout history with a short synopsis and reason for banning as well as profiles of the playwrights and other resource material.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ikvxgoS_VTAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ikvxgoS_VTAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd83c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Select Epigrams of Martial",
    author: "R. T. Bridge",
    genre: "action&adventure",
    description:
      "Excerpt from Select Epigrams of Martial: Spectaculorum Liber and Books I-Vi This edition of selected epigrams from the first six books Of Martial is intended for the use of upper forms in schools. There are two reasons why Martial should be read in these forms. In the first place, his epigrams belong to a distinct species of literature, characteristically Roman both in form and matter. Secondly, Martial throws a valuable and instructive light on the social life of Rome in the first century of our era. If these are the two reasons why boys still at school should read Martial, yet it is probably true that they should read him rapidly and without the rigid attention to detail which is necessary in studying the best classical writers. It has been our aim, there fore, to keep our notes concise, and not to fill the place of the dictionary and the atlas, but, as far as possible, to make clear the thought and point of each epigram. With this end in view a short abstract of the meaning is prefixed to the notes on each poem, but few attempts have been made to supply ready-made translation. In the Introduction has been added a connected account of certain features of Roman life which are constantly referred to in the epigrams; this seemed better than writing short and scattered notes on the passages concerned. We have also given a biographical index of some of the proper names occurring in the text, and we hope that our general index may be of use in finding references in the poet to the many features of Roman life on which he touches. About the Publisher Forgotten Books publishes hundreds of thousands of rare and classic books. Find more at www.forgottenbooks.com This book is a reproduction of an important historical work. Forgotten Books uses state-of-the-art technology to digitally reconstruct the work, preserving the original format whilst repairing imperfections present in the aged copy. In rare cases, an imperfection in the original, such as a blemish or missing page, may be replicated in our edition. We do, however, repair the vast majority of imperfections successfully; any imperfections that remain are intentionally left to preserve the state of such historical works.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=VIxIswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=VIxIswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd83d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "A Selective List of Essays and Books about the Drama and the Theatre, Exclusive of Biography ...",
    author: "Drama League of America",
    genre: "shortstory",
    description: "No description",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=URIqAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=URIqAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd83e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "The Dramatic Books and Plays (in English) Published During 1912-1916, 1921",
    author: "Unknown",
    genre: "essays",
    description: "No description",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=8q4CAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=8q4CAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd83f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "So You Want to be an Actor?",
    author: "Prunella Scales",
    genre: "children",
    description: "Essential reading for any aspiring actor.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=56IT0tPWE98C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=56IT0tPWE98C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd840-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Women´s Secrets",
    author: "Misha Quinn",
    genre: "graphicnovel",
    description:
      "This novella introduces you to the heroines of the first series of the Sunset Lake Club novels, three mature women, Ellen, Betty, and Lori. The novella is NOT yet a love story. It is a preface to a series of stories about love and the lives of women near and over fifty years of age. Will everything go so smoothly in their lives or is it still possible for them to age around fifty - love, adventure, and life surprises? Praise for the Women's Secrets: 5⭐⭐⭐⭐⭐review: \"Inspiring - I loved this story of women breaking out of their bonds of monotony and discontent. They made themselves vulnerable to each other and were accepted and wrapped in encouragement. Ellen, Betty and Lori have found their tribe and, in it, each has changed her future! Bravo!!\" - Amazon reviewer, US 2022 5⭐⭐⭐⭐⭐review: \"Nice storyline - Bought this for my lady and she was very contented with the book. It is about damel power, love and adventure. She cant wait to read the other books\" - Amazon reviewer, Germany, 2022 The Sunset Lake Club series of novels will show us that so much is possible in the second half of our lives. We will discover some secrets of these women. We will see how women create and maintain friendships. We will follow love stories with such tropes as enemies-to-lovers, second chances at love, opposites attract, friends-to-lovers and more. And of course, we hope to see a happy ending to these stories. FROM THE AUTHOR In creating the Sunset Lake Club stories, I wanted to show that just as in their youth, older women can be happy. You just have to want to be happy. It takes some effort, and the support and advice of your best friends can help with that. Complete happiness is possible only together with people who love and understand you - family, friends and, of course, a life partner. Sunset Lake Club series: Stories of women who, at a mature age, are searching for their happiness. Women's Secrets, Anything Can Happen, Our Time to Love - release in 2022, Love is Everything - release in 2022-2023 The Salamander - sweet billionaire romance series: A series of novels about a woman who goes through life's trials and learns to stand up for herself in love and business. One Day in Montreux (FREE short story), The Lonely CEO, The Independent Woman, The Return Game, The Christmas Gift, The Salamander series box set, books 1-4 Fans of the following books and series may enjoy this contemporary later in life & women's fiction & friendship romance series: A Cypress Hollow Yarn A Mulberry Lane Novel A Sweet Island Inn Applewell Village Birch Harbor Bulbs, Blossoms and Bouquets Charming Inn Dolphin Bay Novel Ever After Island Romance Nantucket Romance Series Return to Sapphire Bay River Valley Tanglewood Village series The Finding Home Series Thistle Island Novel Truth In Lies Whispering Pines Sweet Small Town Romance Willa Bay A Family Affair: The Return: A Small Town Family Saga A Stitch in Time in Applewell Abigail's Shop Christmas at Dolphin Bay Cody Bay Inn: A Chilling October Romance In Nantucket Cody Bay Inn: A Magical Winter Wedding In Nantucket Cody Bay Inn: August Dreams In Nantucket: A Nantucket Romance Novel. Book 2 Cody Bay Inn: Autumn Shades Of Nantucket Cody Bay Inn: Nantucket Calling: A Nantucket Romance Series. PREQUEL Cody Bay Inn: Say Goodbye To Summer In Nantucket Cody Bay Inn: Starting Over In Nantucket Finding Balance Finding Cupid Finding Faith Finding Holly Finding Liberty Finding Peace Finding Spring Her Christmas Secret Her Unexpected Roommate: a sweet, small town romance House on the Harbor: A Birch Harbor Novel If You Love Me: A small town romance Love in Whispering Pines Make Do and Mend in Applewell No Forever Like Nantucket One Simple Wish: Return to Lighthouse Point Riversong Summer of Second Chances: A Moonwater Lake Novel Sunrise on the Coast: The perfect feel-good holiday romance Tea for Three The Gilded Days The Inn at Dolphin Bay The Inn at Willa Bay The Lakeside Inn: A Sweet Small Town Romance The Last Goodbye The Magic Hour The Promise The Tanglewood Tea Shop The Tanglewood Wedding Shop: A gorgeously heart-warming and fun romance The Vow Wanting Happily Ever After Fans of the following authors may enjoy this contemporary later in life & women's fiction & friendship romance series: Allie Boniface Amy Rafferty Andrea Hurst B. E. Baker Ciara Knight Elena Aitken Elizabeth Bromke Grace Palmer Kay Correll Laura Ann Leeanna Morgan Lilac Mills Mary Campisi Melissa Crosby Melissa McClone Mia Kent Nicole Ellis Rachael Herron Tess Thompson Keywords related to this contemporary later in life & women's fiction & friendship romance series: a short fiction story, a short novel, a short short story, short story, a short story by, a short story of, a short story to read, all short story, an short story, book, female fiction, fiction, fiction short story books, fiction short story publishers, fictional stories, fictional stories to read, find a short story, find me short story, give me short stories, in short story, in the short story, it short story, list of short stories, little stories to read, new short fiction, new short stories, novel in short stories, novel of short stories, novel short novel, novel, short novels, novel short story, novels and short stories, of a short story, of my short story, quick short story, quick stories to read, quinn romance author, read me a short story, romantic fiction short stories, romantic short stories to read, romantic short story books, short fiction, short fiction authors, short fiction books, short fiction books to read, short fiction novels, short fiction novels to read, short fiction stories, short romantic books, short romantic books to read, short romantic novels, short romantic story books, short short fiction, short short stories, short stories authors list, short stories by, short stories free, short stories to read, short story, short story and, short story and author, short story authors, short story fiction books, short story fiction story, short story me, short story novel story, short story of the, short story on, short story publishers, short story reading list, short story reading story, short story romance books, short story romance novels, short story short, short story short novel, short story short stories, short story short stories to read, short story short story with author, short story stories to read, short story story for reading, short story story to read, short story the, short story with, short story with a and an, short story with fiction, small fiction stories, small stories to read, stories to read short, the book free, the book story, the short short story, the short story, the short story of, the short story of the novel, this short story, woman fiction, your short story silver fox romance, book, fictional stories to read, novel, novels and short stories, quinn author, quinn book, quinn romance author, romance, story romance, the book story, short romantic novels, short romantic books, a short romantic story, short story romance books, small romantic story, romantic short story books, short romantic story books, short romantic books to read, short romantic story to read, short story romance novels, the book story, quinn author, quinn book, short romantic books, novels and short stories, quick stories to read, fictional stories to read, short story short novels, the book, little stories to read, short romantic story books, short romantic books to read, romantic fiction short stories, have you read short stories Books to Read and Download, Top Rated Books, Popular Series, Adults Romance Books, Series Starters, Romantic Stories, Romance Books, romance novels, romance stories, romance series, romantic love, romance fiction, feel good, uplifting romance books, romance novels, romance fiction, romance amazing, older romance books, older romance, mature romance, mature romance books, mature romance novels, mature romance over 40, mature romance over 50 silver fox romance, contemporary romance, series, modern romance, urban romance, wealthy, USA today, city romance, smart romance, dogs in romance, lighthearted romance, proposal, proposal romance, engagement, engagement romance, heartwarming, heart-warming, family, love, love books, kissing books, emotional journey, contemporary, romance series, strong heroine, captivating romance, sparks, loyalty, swoon, forgiveness, romantic, HEA, seasoned romance, silver fox, older characters, insta-love",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=XHBIEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=XHBIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd841-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Promise made - Beach Read",
    author: "Molly Maco",
    genre: "shortstory",
    description:
      "★★★★★ From #1 Best-Selling Author \"Time becomes an enemy when she receives a life-altering diagnosis...\" Beverly and her sister Barbara own resorts on both coasts of Florida. They spend time going back and forth, supporting each other through thick and thin. Unfortunately, one of them has just been given a life-altering diagnosis that is about to send both of them down a path neither could have imagined. As two resorts would be much work for only a single person to manage, they must find the perfect buyer to carry the sister’s vision forward. That means, in short order, finding someone that will care for the resort with the same passion and responsibility as they would, instead of tearing it down for a quick buck or a larger modern facility. As they navigate the harsh reality of a future without each other, and not knowing how much time they have left to share, they will have to tell each other all they have held back over the years... while they find new owners. A feel-good beach romance for lovers of women's fiction with heart, feel-good fiction, women's fiction suspense. This is a prequel in Barefoot Bay Resort Series... Perfect For readers who love Debbie Macomber, Diana Palmer, Debra Clopton, Samantha Chase, Melody Grace, Annie Rains, Carolyn Brown, Maisy Yates, Cora Seton, Kate Pearce, Vivian Arend, Kelly Elliott, Jennifer Ryan, Linda Leal Miller, Kristine Raymond, Nicholas sparks, Nora Roberts, Julia Quinn, Lexi Ryan, L.G. Castillo, B.J. Daniels, SJ McCoy, Lisa Mondello, Jennifer Ryan, and Larry McMurtry Topics: beach romance, beach read, summer beach romance, summer romance, free books, free romance books, beachside romance, romance, beachside, beach music, cowboy romance, wholesome romance, western romance, sweet romance, contemporary romance, series, romantic suspense series,Texas, Texas cowboys, Texas romance, billionaire cowboy romance, horses in romance, small-town romance, western romance Christian, rodeo, romance series, contemporary Christian romance, heartwarming, heart-warming, Christian western historical romance, new york times bestseller romance, NYT romance, sexy, new york times romance, Christian billionaire romance, short stories, books under 4 dollars, hot romance, romance with a cowboy, free western romance books, cowboys, rodeo romance, ranch romance, old and young romance, medical romance, romantic thriller, police romance, detective romance, western romance free, westerns free books, Western Dreams, wild west romance, historical western romance, historical western, secrets, historical western suspense, second chance romance, mail order brides, books for free, Christian books free, urban books, urban books free, urban, urban fiction, urban street fiction, Cowboys & Kisses, Rodeo Man, Rodeo Rebel, Rodeo Queen,history books free,historical fiction free, free book, freebie, free book, free ebook, free, ebooks free, free books, free, free ebooks, mystery books free, free books to read and download,free romance books for young adults, free alpha male billionaire romance books,modern romance, urban romance, free bad boy romance books, free romance short stories, free second chance romance, free steamy romance books, free contemporary romance books, free hot romance books, women freebies, free fiction books for young adults, free love story and romance books, free office romance books, boss romance books free, beach reads, new adult, free romantic fiction, romance fiction books free, romance stories, fiction books, romance novels steamy, romance novel, books romance, romance, adult romance novels, alpha male romance books, romance novels to read, love story books,",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=kPZWEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=kPZWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd842-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "The Drama: American drama. Indexes. Books for reference and extra reading. (p. 327-344)",
    author: "Alfred Bates",
    genre: "selfhelp",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=CeUyAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=CeUyAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd843-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Shakespeare's Sonnets",
    author: "William Shakespeare",
    genre: "science&tech",
    description:
      "A bestselling, beautifully designed edition of William Shakespeare’s sonnets, complete with valuable tools for educators. The authoritative edition of Shakespeare’s Sonnets from The Folger Shakespeare Library, the trusted and widely used Shakespeare series for students and general readers, includes: -Full explanatory notes conveniently placed on the facing page of each sonnet -A brief introduction to each sonnet, providing insight into its possible meaning -An index of first lines -Illustrations from the Folger Shakespeare Library’s vast holdings of rare books -An essay by a leading Shakespeare scholar providing a modern perspective on the sonnets The Folger Shakespeare Library in Washington, DC, is home to the world’s largest collection of Shakespeare’s printed works, and a magnet for Shakespeare scholars from around the globe. In addition to exhibitions open to the public throughout the year, the Folger offers a full calendar of performances and programs. For more information, visit Folger.edu.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=T_HlKWP8AKMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=T_HlKWP8AKMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd844-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Individual and Society",
    author: "Richard P. Dennis",
    genre: "graphicnovel",
    description: "No description",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "410fd845-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Perfect Regency Set",
    author: "Annabelle Anders",
    genre: "selfhelp",
    description:
      "READ THE ENTIRE SERIES! Book one: The Perfect Debutante Sweet-natured Miss Louella Rose looks to be a model debutante — but when she's arranged to marry Cameron, Marquess of Stanton, she can no longer hide the secret she's been keeping. Can their new love help her heal? An emotional historical romance. Book two: The Perfect Spinster Flirtatious attractions threaten to erupt in passion, but duty and honor forbid anything more. OLIVIA labors under no misapprehension that anything other than spinsterhood lies in her future because of one tiny flaw.... one might even call it... a curse. Until, that is, she falls for the charming but unattainable, Lord Kingsley. KINGSLEY is irresistibly intrigued by the Miss Olivia Redfield, and delights himself in their mutual provocation. In no position to promise more than a dalliance, Gabriel takes the unprecedented step of befriending a woman. Book three: The Perfect Christmas Miss Eliza Cline, a vicar's sister, has accepted her life as a quiet industrious spinster. Lord Crestwood, the dashing widowed baron, is the rogue from her past. A chance meeting at a Christmas House party presents a second chance for both of them. But Eliza must decide: has the Baron's unforgivable sin already doomed their love forever? This is a story about forgiveness. Over the course of a lifetime, a person is faced with millions of choices, some more difficult than others. And sometimes, we make the wrong ones. Book four: The Perfect Arrangement His father died before turning forty. His older brother, the original heir, turned up his toes at the age of two and thirty. And this year, his last remaining brother--and the spare--was suddenly killed in a duel. Circumstances aren't looking good for this second spare turned heir. The new duke of Warwick needs a son... And quickly! Lady Lillian has learned that men are not to be trusted--particularly dukes. So when the very handsome but dying \"Mister\" Masterson offers her an opportunity for lifelong independence, it seems to be the perfect arrangement. And it would have been perfect... If only she hadn't gone and fallen in love with him.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=f6wWEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=f6wWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd846-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Complete Works of William Shakespeare",
    author: "William Shakespeare",
    genre: "shortstory",
    description: "Gathers all of Shakespeare's plays, sonnets, and poems.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=D02LWkkBxn4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=D02LWkkBxn4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd847-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Dyce Collection: Printed books, L to Z",
    author: "Unknown",
    genre: "fantasy",
    description: "No description",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=jmdWAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=jmdWAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd848-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "The First Six Books of Homer's Iliad: With Introduction, Commentary and Vocabulary for the Use of Schools",
    author: "Homer",
    genre: "selfhelp",
    description: "No description",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=PLlwswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=PLlwswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd849-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Twelfth Night",
    author: "William Shakespeare",
    genre: [],
    description:
      "Sir Toby Belch and his companion outwit the pretentious Malvolio, who despite suffering their most outrageous and insulting practical jokes, emerges as an almost noble figure.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=br2rKgbQb_gC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=br2rKgbQb_gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd84a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Dramatic Bibliography",
    author: "Unknown",
    genre: "history",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=BE43AAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=BE43AAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd84b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Plays and Poems of Nicholas Rowe, Volume V",
    author: "Stephen Bernard",
    genre: "action&adventure",
    description:
      "Nicholas Rowe was the first Poet Laureate of the Georgian era. A fascinating and important yet largely overlooked figure in eighteenth-century literature, he is the ‘lost Augustan’. His plays are important both for the way they address the political and social concerns of the day and for reflecting a period in which the theatre was in crisis. This edition sets out to demonstrate Rowe’s mastery of the early eighteenth century theatre, especially his providing significant roles for women, and examines the political and historical stances of his plays. It also highlights his work as a translator, which was both innovative and deeply in tune with current practices as exemplified by John Dryden and Alexander Pope. This is the first scholarly edition of all Rowe’s plays and poems and is accompanied by 15 musical scores and 31 black and white illustrations. In this final volume the second part of his translation of Lucan’s Pharsalia, described by Samuel Johnson as one of the greatest productions in English poetry, is presented along with some his own original poetry. A newly written explanatory introduction to the Pharsalia by Stephen Bernard precedes the full edited text in volume IV. Appendices covering the related music and textual apparatus are also included. The edition comes with a consolidated bibliography for ease of reference.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=hC9uDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=hC9uDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd84c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Grief Lessons",
    author: "Euripides",
    genre: "essays",
    description:
      'For much of Euripides life, the world was at war. The anguish and rage that resulted from a world given over to violence provoked the poet and playwright to create stunning tragedies, whose grief reverberates as accurately today as it did when democratic Athens succumbed to the Peloponnesian Wars. Following an acclaimed translation of Sappho\'s poems and fragments, If Not, Winter, the acclaimed poet and classicist Anne Carson now turns to the plays of Euripides, chronologically the latest and certainly the most troubled of the major Greek tragedians. One of the most versatile, accomplished, fertile, and plain astonishing writers of our day, Carson is a poet with the acumen of an essayist; and essayist with the lyric gift of a poet; a scholar who is as daring as she is erudite. Euripides, Carson says, is the most unpleasant of the tragedians, which is to say the most tragic, and her bold new translation of his chronicles of superstition and despair offers a new view of his discordant and unsparing art. The four plays included here are Alkestis, Hekuba, Herakles Mad, and Hippolitos. The book includes a general introduction by Carson, along with introductions to each of the plays, and a final "Address to Euripides."',
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=rW5iAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=rW5iAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd84d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Heart of Stone Boxset 1-4",
    author: "Chiquita Dennie",
    genre: "action&adventure",
    description:
      "Enjoy this steamy curvy girl, billionaire romance..... ***The Heart of Stone Boxset**** The entire series now on sale for your reading enjoyment. Catch all of the latest with Three Standalone novels featuring three best friends finding love and happiness. Order of series Heart of Stone Book 1 (Emery and Jackson) Heart of Stone Book 1.5 (Emery and Jackson) Heart of Stone Book 2 (Jordan and Damon) Heart of Stone Book 3 (Angela and Brent) Bottoms Up Book 3.5(A Heart of Stone Short) Heart of Stone Book 4 (Jessica and Joseph) Keywords: africanamericanromance, friendstolovers, instaloveromance. africanamericandrama, africanamericanwomen'sfiction, contemporaryromance,secondchanceromance,black, single mom, single dad, romance, secretbabyromance,surprisepregnancy,steamyromance.steamyromancesassy, strong heroine, captivating romance, hot, hot romance, forbidden love, sparks, loyalty, swoon rescue, claiming,kissing books, emotional journey,Black Romance, Black Authors,romance love, new adult romance, billionaire romance, contemporary romance, friendship. racy, sexy, heartwarming, family, love, love books, kissing books, emotional journey,long series, long romance series.Black Romance, Black Authors, Urban books black authors, urban books, african american books, urban,friends to lovers, fling, love story, romance love, new adult romance, romance billionaire series, friendship, racy, sexy, heartwarming, heart-warming romance, family, love, love books, Black Romance, Black Authors, african american books, contemporary romance books, romance stories, fiction books, romance novels steamy, romance novel, books romance, romance, adult romance novels, romance books hot, alpha male, marriage, widow romance, romantic fiction, romance books, steamy romance books, books romance hot, romance novels to read, love story books, BBW, family, curvy girl romance, own voices romance, drama romance.r Readers of Kennedy Ryan: DelaneyDiamond,LolaLace,NanaMalone,Penelope Ward,Lauren Blakely,Kendall Ryan,Leigh James,Talia Hibbert,Farrah Rochon,Vi Keeland,Mia Sosa,Jasmine Guillory,Zuri Day, Tessa Bailey,EmberCasey,K.A. Linde,Corinne Michaels,KA Tucker, Melissa Foster, Bella Andre, Piper Lawson, Jean Oram, Sabrina Bowen, and Jay Crownover,LenaSkye,MalloryMonroe, Love Belvin, Christina, C. Jones, DL White, Mia Sosa, Colleen Hoover, Brenda Jenkins, M. Malone.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=RZrFDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=RZrFDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd84e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "List of Books Chiefly on the Drama and Literary Criticism",
    author: "Columbia University Libraries",
    genre: "children",
    description:
      "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible. Therefore, you will see the original copyright references, library stamps (as most of these works have been housed in our most important libraries around the world), and other notations in the work. This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work. As a reproduction of a historical artifact, this work may contain missing or blurred pages, poor pictures, errant marks, etc. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=e85fvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=e85fvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd84f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Books for Scholars and Collectors",
    author: "E.P. Goldschmidt & Co",
    genre: "action&adventure",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "410fd850-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Catalog of the Theatre and Drama Collections: Theatre Collection: books on the theatre. 9 v",
    author: "New York Public Library. Research Libraries",
    genre: [],
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=H_UPAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=H_UPAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd851-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Death and the Maiden",
    author: "Ariel Dorfman",
    genre: "horror",
    description: "Originally published: London: Nick Hearn Books, 1991.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=RAzwOe0raX0C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=RAzwOe0raX0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd852-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "English Prompt Books",
    author: "Unknown",
    genre: "horror",
    description:
      "This collection contains eleven plays printed in pamphlet form during the turn of the twentieth century.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "410fd853-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "I Deserve His Love",
    author: "Chiquita Dennie",
    genre: "romance",
    description:
      "Enjoy this steamy curvy girl, second chance romance.... Makayla Ramsey never imagined the life she has now, loving family and friends, a career in fashion and three years in a marriage with a man she couldn’t’ believe loved every inch of her. When all through her dating life men only wanted to use her for what she could do for them. A chance meeting with her college sweetheart, at her school reunion, reignites old feelings and plummets her into a battle for the love of her life. Amir Slater fell hard when Makayla walked out of his life and never looked back. Careers took them both in different directions. Now, he’s face-to-face with her and desperate to keep her close, but his ex-wife isn't ready to let go, not until she gets what she wants from him – his money, his undying love, and what he can do for her. Will their second chance be destroyed by complicated relationships and fear of having their hearts broken once again? Keywords: African American romance, african american drama, african american women's fiction, contemporary romance, second chance romance, black romance, black women books, african american books, plus size romance, curvy girl romance, steamy romance, second chance love story, second chances, contemporary, romance novel, contemporary romance novel, sassy, strong heroine, captivating romance, hot, hot romance, forbidden love, sparks, claiming, defending, protect ,kissing books, emotional journey,Black Romance, Black Authors, african american books, contemporary romance books, romance stories, fiction books, romance novels steamy, romance novel, books romance, romance, adult romance novels, romance books hot, alpha male, marriage, divorce, romantic fiction, romance books, steamy romance books, books romance hot, romance novels to read, love story books, BBW, new adult romance, college reunion. Other readers of Brenda Jackson:Mia Black,DelaneyDiamond,LolaLace,NanaMalone,Penelope Ward,Lauren Blakely,Kendall Ryan,Leigh James,Talia Hibbert,Farrah Rochon,Vi Keeland,Mia Sosa,Jasmine Guillory,Zuri Day, Tessa Bailey,Ember Casey, LexiRyan, Love Belvin, Christina, C. Jones, DL White, Kennedy Ryan, Collen Hoover, Breanda Jenkins, M. Malone.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_M_GDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_M_GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd854-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Holy Bible, Containing the Old and New Testaments with the Apocryphal Books;",
    author: "John Wycliffe",
    genre: "science&tech",
    description:
      "This work has been selected by scholars as being culturally important and is part of the knowledge base of civilization as we know it. This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. To ensure a quality reading experience, this work has been proofread and republished using a format that seamlessly blends the original graphical elements with text in an easy-to-read typeface. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=OG61vgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=OG61vgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd855-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Poetics of Difference and Displacement",
    author: "Min Tian",
    genre: "mystery",
    description:
      "This book views intercultural theatre as a process of displacement and re-placement of various cultural and theatrical forces.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=5wbZFMfhpWkC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=5wbZFMfhpWkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "410fd856-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Forensic Shakespeare",
    author: "Quentin Skinner",
    genre: "fantasy",
    description:
      "Forensic Shakespeare illustrates Shakespeare's creative processes by revealing the intellectual materials out of which some of his most famous works were composed. Focusing on the narrative poem Lucrece, on four of his late Elizabethan plays (Romeo and Juliet, The Merchant of Venice, Julius Caesar and Hamlet) and on three early Jacobean dramas, (Othello, Measure for Measure and All's Well That Ends Well), Quentin Skinner argues that major speeches, and sometimes sequences of scenes, are crafted according to a set of rhetorical precepts about how to develop a persuasive judicial case, either in accusation or defence. Some of these works have traditionally been grouped together as 'problem plays', but here Skinner offers a different explanation for their frequent similarities of tone. There have been many studies of Shakespeare's rhetoric, but they have generally concentrated on his wordplay and use of figures and tropes. By contrast, this study concentrates on Shakespeare's use of judicial rhetoric as a method of argument. By approaching the plays from this perspective, Skinner is able to account for some distinctive features of Shakespeare's vocabulary, and also help to explain why certain scenes follow a recurrent pattern and arrangement. More broadly, he is able to illustrate the extent of Shakespeare's engagement with an entire tradition of classical and Renaissance humanist thought.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=365GBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=365GBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "410fd857-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    genre: "shortstory",
    description:
      "Golding’s iconic 1954 novel, now with a new foreword by Lois Lowry, remains one of the greatest books ever written for young adults and an unforgettable classic for readers of any age. This edition includes a new Suggestions for Further Reading by Jennifer Buehler. At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. At first, with no adult supervision, their freedom is something to celebrate. This far from civilization they can do anything they want. Anything. But as order collapses, as strange howls echo in the night, as terror begins its reign, the hope of adventure seems as far removed from reality as the hope of being rescued.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=H3KNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=H3KNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "411137c0-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Fantasy Books",
    author: "I.G. Harding",
    genre: "fantasy",
    description:
      'Hear What the Critics are Saying "Wow, what an amazing and Entertaining Book; great cast of characters, very good story with a lot of eerie twists and turns. Population Zero is by far one of the best zombie books to have come out in a long time." -Mary Jones – Valley Daily News “A must read in the horror genre. Population Zero is a book that will leave you begging for more; Five Stars All The Way.” -Judy B. Cohen – Elite Media Group “Deliciously entertaining and very fun read. I bought it for a friend as a gift and she loved it as well. It’s by far one of the finest zombie apocalypse books to have come out in the last decade. Highly Recommend This Book.” -Dave Baker – Book Bloggers of America “Very interesting story. I highly recommend this book to any zombie lover out there. Can’t Go Wrong.” -Carl Mosner – Readers Cove Unlimited “Population Zero is an extremely well developed post-apocalyptic zombie tale. I really had a lot of fun reading this story. If you’re looking for a phenomenal zombie book, then look no further than this one. Ten Thumbs Up.” -Debra Eisner – Literary Times Inc. “My favorite zombie book this year; so far I have read more than eight. Once I started reading, I simply couldn’t put it down. Great Read.” -Emma Righter – Writers United Group “This story reminded me why I fell in love with reading zombie books in the first place; thank you Mr. Harding for making such an amazing and fun book. Keep up with the great story telling. Awesome Book!” -Lee Ratner – Daily Media Trends, Inc. Editorial Review Population Zero is an amazing book and a really interesting read. By the end of the book, you will feel like you have gone on an emotional rollercoaster which is not only fun, but also frightening. This zombie book is definitely one of a kind in the horror genre. If you are looking for a book that will leave you biting your nails at the edge of your seat, then look no further than Population Zero. This book is chock-full of amazing characters and terrifying zombies. Five Stars! Jim S. Stein About the Book When a scientist unleashes the deadliest virus the world has ever seen, a small group must band together to survive the zombie apocalypse; their tale is one of redemption, joy and tears. Come and join us in the town of Steel Valley. A world filled with chaos, where even the dead don’t know their rightful place. (fantasy books, fantasy books free, fantasy books for free, dark fantasy, free fantasy books, urban fantasy, free fantasy books for adults) [fantasy books]',
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=cBzdDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=cBzdDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137c1-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "How We Disappeared",
    author: "Jing-Jing Lee",
    genre: [],
    description:
      'LONGLISTED FOR THE WALTER SCOTT PRIZE LONGLISTED FOR THE 2020 WOMEN\'S PRIZE A LIBRARY JOURNAL EMERGING STARS PICK A mesmerizing novel of World War II Singapore, "a story about memory, trauma, and ultimately love" (New York Times)--for fans of Pachinko and We Were the Lucky Ones Singapore, 1942. As Japanese troops sweep down Malaysia and into Singapore, a village is ransacked, leaving only two survivors and one tiny child. In a neighboring village, seventeen-year-old Wang Di is strapped into the back of a troop carrier and shipped off to a Japanese military brothel where she is forced into sexual slavery as a "comfort woman." After sixty years of silence, what she saw and experienced still haunts her. In the year 2000, twelve-year-old Kevin is sitting beside his ailing grandmother when he overhears a mumbled confession. He sets out to discover the truth, wherever it might lead, setting in motion a chain of events he never could have foreseen. Weaving together two timelines and two very big secrets, this stunning debut opens a window on a little-known period of history, revealing the strength and bravery shown by numerous women in the face of terrible cruelty. Drawing in part on her family\'s experiences, Jing-Jing Lee has crafted a profoundly moving, unforgettable novel about human resilience, the bonds of family and the courage it takes to confront the past.',
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=9mJyxQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=9mJyxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "411137c2-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Summit Books: MPress Booklet 1",
    author: "Unknown",
    genre: "graphicnovel",
    description: "No description",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=xweMEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=xweMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137c3-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Venom",
    author: "Jennifer Estep",
    genre: [],
    description:
      "What kind of assassin works pro bono? It’s hard to be a badass assassin when a giant is beating the crap out of you. Luckily, I never let pride get in the way of my work. My current mission is personal: annihilate Mab Monroe, the Fire elemental who murdered my family. Which means protecting my identity, even if I have to conceal my powerful Stone and Ice magic when I need it most. To the public, I’m Gin Blanco, owner of Ashland’s best barbecue joint. To my friends, I’m the Spider, retired assassin. I still do favors on the side. Like ridding a vampire friend of her oversized stalker—Mab’s right-hand goon who almost got me dead with his massive fists. At least irresistible Owen Grayson is on my side. The man knows too much about me, but I’ll take my chances. Then there’s Detective Bria Coolidge, one of Ashland’s finest. Until recently, I thought my baby sister was dead. She probably thinks the same about me. Little does she know, I’m a cold-blooded killer . . . who is about to save her life.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=eXM0lAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=eXM0lAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "411137c4-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Explicit Rough Short Stories (2 Books in 1)",
    author: "Jessica Dominate",
    genre: "science&tech",
    description:
      "Are you on the search for new and fresh sex stories that literally expand the realms of possibility as far as what's kink is concerned? If you've answered YES, keep reading... You've Just Discovered The Richest And Kinkiest Collection Of Raunchy Sex Stories Revolving Around Gangbangs, Lesbian, Taboo, MILFs, Rough Forbidden Adult, Threesomes And BDSM Which Will Literally Get You Turned On In Ways Very Few Things Can! Literotica is hands off on a class of its own as far as building up sexual tension slowly until you cannot hold it any more. With literotica, you get to envision everything as you read the story, something which makes it even kinkier because you can put whatever faces you want, whatever body sizes and other cool features that resonate with your kink until it is just perfect. What's more, you can slow down the story, reread it to replay the images and do all manner of other forms of manipulation to make the story to drive you even crazier! And by virtue that you are reading this, it is clear that you've probably found porn boring and mundane because everything seems so scripted. And if you are into the unusual, nonconventional erotic stuff that, reading them is probably the best way to consume the content! Lucky for you, this book offers just that and more! I know you are probably wondering... Are the stories in this book fresh? Are the stories detailed enough to push you over the edge, slowly by slowly as you build anticipation? Do the stories revolve around different settings and different sexual exploits and fetishes to give you a glimpse or taste of the various kinks out there and possibly get you hooked? Does the book go all out and in detail, without hiding or sugarcoating anything to ensure you are not left hanging? The answer to all these is a straight YES! Follow Jessica Dominate Stories as stretch the limits of sexual imagination with BDSM, gangbang, threesomes, lesbian, anal and all manner of out of this world sexual kinks that will literally leave your pants wet as you move across different scenes and settings! Even if you've never been the type for this kind of kink, this book will prove interesting and worth your while, as it will be an instant wetness and boner inducer! Buy it NOW and let your customers Become Addicted to the Incredible Series of Novels written by Jessica Dominate!",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=w71ZEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=w71ZEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137c5-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Hymns from the Greek Office Books",
    author: "John Brownlie",
    genre: "graphicnovel",
    description:
      '"Hymns from the Greek Office Books" by John Brownlie. Published by Good Press. Good Press publishes a wide range of titles that encompasses every genre. From well-known classics & literary fiction and non-fiction to forgotten−or yet undiscovered gems−of world literature, we issue the books that need to be read. Each Good Press edition has been meticulously edited and formatted to boost readability for all e-readers and devices. Our goal is to produce eBooks that are user-friendly and accessible to everyone in a high-quality digital format.',
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2_nFDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=2_nFDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137c6-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Seduction of a Highland Lass",
    author: "Maya Banks",
    genre: "history",
    description:
      "Maya Banks, the New York Times bestselling author of romance and romantic suspense has captivated readers with her steamy Scottish historical novels, perfect for fans of Julie Garwood. In Seduction of a Highland Lass, an indomitable Highland warrior is caught between loyalty and forbidden love. Fiercely loyal to his elder brother, Alaric McCabe leads his clan in the fight for their birthright. Now he is prepared to wed for duty, as well. But on his way to claim the hand of Rionna McDonald, daughter of a neighboring chieftain, he is ambushed and left for dead. Miraculously, his life is saved by the soft touch of a Highland angel, a courageous beauty who will put to the test his fealty to his clan, his honor, and his deepest desires. An outcast from her own clan, Keeley McDonald was betrayed by those she loved and trusted. When the wounded warrior falls from his horse, she is drawn to his strong, lean body. The wicked glint in his green eyes ignites a passion that will follow them back to Alaric’s keep, where their forbidden love draws them deeper into the pleasures of the flesh. But as conspiracy and danger circle closer, Alaric must make an impossible choice: Will he betray his blood ties for the woman he loves?",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=hhONEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=hhONEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "411137c7-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "THE TALE OF BENJAMIN BUNNY",
    author: "BEATRIX POTTER",
    genre: [],
    description:
      "Peter Rabbit's cousin, Benjamin Bunny, has been a very popular character since this book's first publication in 1904. In this tale we hear all about his and Peter's adventures in Mr McGregor's vegetable garden, and what happens to them when they meet a cat! Even more frightening, is what happens to the two pesky bunnies when Old Mr Benjamin Bunny finds out what they have been up to! Beatrix Potter is regarded as one of the world's best-loved children's authors of all time. From her first book, The Tale of Peter Rabbit, published by Frederick Warne in 1902, she went on to create a series of stories based around animal characters including Mrs. Tiggy-winkle, Benjamin Bunny, Jemima Puddle-duck, Mr. Jeremy Fisher and Tom Kitten.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=LFduEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=LFduEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137c8-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Do-Over Boxed Set",
    author: "Julia Kent",
    genre: "children",
    description:
      "Mallory (Fluffy), Persephone (Perky), Fiona (Feisty), and Hastings (Hasty) come from the small town of Anderhill, Massachusetts, with lives that take sudden turns as they get surprise “do-overs” when it comes to love. This boxed set features New York Times bestselling author Julia Kent’s first three books in the series, starting with the prequel, Little Miss Perfect, which takes place ten years before Book 1, when Mallory Monahan and Will Lotham competed for valedictorian in high school. The nerd and the quarterback have a tantalizing encounter, but what happens when they meet ten years later is unbelievable… Which brings us to Fluffy — how Will and Mallory reconnect is a tale of mishaps, misunderstandings, and Mallory’s innocent mistake in thinking a job on Craigslist for a “fluffer” meant a house designer. Oops. This boxed set continues with Perky, another second-chance “do-over” for Persephone and Parker. Five years ago, he released very, very private photos that turned Perky into a social media sensation in the worst way possible. Hurt and betrayed, she’s blocked him from her life and her heart. But what if he didn’t do it? And surprise! He’s a member of Mallory and Will’s wedding party, too. Second chances and do-overs never felt so good… The Do-Over Boxed Set is a romantic comedy binge read. Get ready for a massive laughfest escape! **Get the boxed set audiobook, narrated by Audie award winner Erin Mallon**",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=FwJgEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=FwJgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137c9-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Obsession: By Nora Roberts (Trivia-On-Books)",
    author: "Trivion Books",
    genre: "action&adventure",
    description:
      "Trivia-on-Book: The Obsession by Nora Roberts Take the challenge yourself and share it with friends and family for a time of fun! Nora Roberts is back with her latest novel, The Obsession. From an author whose works have spent over a thousand weeks on the bestseller list, it is almost criminal to expect anything but absolute brilliance. Roberts does not disappoint in this fast-paced tale of a young girl who witnesses her father’s barbarism and how one fateful night changes her life forever. Roberts has come up with another masterpiece in the romantic thriller genre. The Obsession became yet another Nora Roberts novel that reached The New York Times number one spot. You may have read the book, but not have liked it. You may have liked the book, but not be a fan. You may call yourself a fan, but few truly are. Are you a fan? Trivia-on-Books is an independently curated trivia quiz on the book for readers, students, and fans alike. Whether you're looking for new materials to the book or would like to take the challenge yourself and share it with your friends and family for a time of fun, Trivia-on-Books provides a unique approach to The Obsession by Nora Roberts that is both insightful and educational! Features You'll Find Inside: • 30 Multiple choice questions on the book, plots, characters and author • Insightful commentary to answer every question • Complementary quiz material for yourself or your reading group • Results provided with scores to determine \"status\" Promising quality and value, come play your trivia of a favorite book!",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=4qcADQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=4qcADQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137ca-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Political History of the Devil",
    author: "Daniel Defoe",
    genre: "history",
    description:
      "The Political History of the Devil is a book by English author Daniel Defoe, first published in 1726. Banned by the Roman Catholic Church, the book gives an account of Defoe's beliefs of how the Devil has participated in world history, and is to blame for the Crusades. Defoe was a Presbyterian and in the book, he also discusses how the devil is close to the powers in the Catholic Church, which is probably the main reason it was banned by them. Over 22 chapters, the author writes about everything from the origin of the Devil, his expulsion from Heaven (along with explaining the 'inaccuracies' of Milton's Paradise Lost), the power of the Devil, his victory over Noah, his agents, his appearance, and, the tools he works with including magicians and fortune-tellers and the black arts in general. The Political History of the Devil is mentioned in George Eliot's The Mill on the Floss, as being a book belonging to Mr Tulliver. Full chapter list. № 77 in Anne Haight's List of Banned Books.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Z5NCEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Z5NCEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137cb-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Dangerous Web",
    author: "Aleatha Romig",
    genre: "scifi",
    description:
      '"Blown away and completely speechless!!! This was a fantastic and amazing trilogy and a phenomenal ending to a sensational 12 book series. I need more adjectives!! Words can\'t explain how much I have loved all these books."~ Tammi ***** Goodreads Review “Night never had the last word. The dawn is always invincible.” ~Hugh B. Brown Darkness comes to the Sparrow world, yet the dawn is near. Reid and Lorna have always been the beloved couple in the Sparrow world. However, after years of safety, the veil protecting Lorna Murray’s life has been ripped away. Can Reid and all the inhabitants of the glass castle convince her that despite the lingering darkness, the sun will rise again? Have you been Aleatha’d? From New York Times bestselling author comes DANGEROUS WEB Books 10- 12, the romantic suspense trilogy, including: DUSK, DARK, and DAWN. Set in the dangerous world of the Chicago underground you won’t want to miss any of Reid and Lorna’s story.',
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=I3KAEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=I3KAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137cc-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Ready Player Two",
    author: "Ernest Cline",
    genre: "history",
    description:
      "#1 NEW YORK TIMES BESTSELLER • The thrilling sequel to the beloved worldwide bestseller Ready Player One, the near-future adventure that inspired the blockbuster Steven Spielberg film. NAMED ONE OF THE BEST BOOKS OF THE YEAR BY THE WASHINGTON POST • “The game is on again. . . . A great mix of exciting fantasy and threatening fact.”—The Wall Street Journal AN UNEXPECTED QUEST. TWO WORLDS AT STAKE. ARE YOU READY? Days after winning OASIS founder James Halliday’s contest, Wade Watts makes a discovery that changes everything. Hidden within Halliday’s vaults, waiting for his heir to find, lies a technological advancement that will once again change the world and make the OASIS a thousand times more wondrous—and addictive—than even Wade dreamed possible. With it comes a new riddle, and a new quest—a last Easter egg from Halliday, hinting at a mysterious prize. And an unexpected, impossibly powerful, and dangerous new rival awaits, one who’ll kill millions to get what he wants. Wade’s life and the future of the OASIS are again at stake, but this time the fate of humanity also hangs in the balance. Lovingly nostalgic and wildly original as only Ernest Cline could conceive it, Ready Player Two takes us on another imaginative, fun, action-packed adventure through his beloved virtual universe, and jolts us thrillingly into the future once again.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=FOHtDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=FOHtDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137cd-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Girl, Alone (An Ella Dark FBI Suspense Thriller—Book 1)",
    author: "Blake Pierce",
    genre: [],
    description:
      "FBI Agent Ella Dark has studied serial killers from the time she could read, devastated by the murder of her own sister. With her photographic memory, she has obtained an encyclopedic knowledge of every serial killer, every victim and every case. But when a serial killer strikes in the swamps of Louisiana, Ella soon comes to learn that the real thing is like nothing she ever expected. “A MASTERPIECE OF THRILLER AND MYSTERY. Blake Pierce did a magnificent job developing characters with a psychological side so well described that we feel inside their minds, follow their fears and cheer for their success. Full of twists, this book will keep you awake until the turn of the last page.” --Books and Movie Reviews, Roberto Mattos (re Once Gone) GIRL, ALONE (An Ella Dark FBI Suspense Thriller—Book 1) is the debut novel in a long-anticipated new series by #1 bestseller and USA Today bestselling author Blake Pierce, whose bestseller Once Gone (a free download) has received over 1,000 five star reviews. FBI Agent Ella Dark, 29, is given her big chance to achieve her life’s dream: to join the Behavioral Crimes Unit. Ella’s hidden obsession of gaining an encyclopedic knowledge of serial killers has led to her being singled out for her brilliant mind, and invited to join the big leagues. But face to face with a real murder, a real killer, and a real ticking clock, Ella realizes she can’t rely on her knowledge. She must learn to trust her instinct, and allow herself to enter the dark canals of a real killer’s mind. If she gets it wrong, her career is at stake. And so is the next victim’s life. Will Ella’s talent be an asset? Or the source of her downfall? A page-turning and harrowing crime thriller featuring a brilliant and tortured FBI agent, the ELLA DARK series is a riveting mystery, packed with suspense, twists and turns, revelations, and driven by a breakneck pace that will keep you flipping pages late into the night. Books #2 -#11 are also available!",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Gh0JEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Gh0JEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137ce-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Mackenzies (Books 4–6)",
    author: "Sophie Haydon",
    genre: "selfhelp",
    description: "No description",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=KyvUDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=KyvUDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137cf-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Deadliest Sin Series Collection Books 7-9",
    author: "Gwyn McNamee",
    genre: "shortstory",
    description:
      "Can you survive lust? Lust opened the door for me. Now, I’ll build my empire on its back. Because one thing I can always rely on is the weaknesses of my enemies. Weakness of the flesh. Of the soul. Of the mind. All I have to do is be the strongest…and I’ll come out on top. This three-book collection includes Lust, Embracing Lust, and Seizing Lust, books 7-9 in the Deadliest Sin Series. Dive into the world of the Albanian mob in this dark mafia romantic suspense collection. ***This series does need to be read in order, so please make sure to start with the Wrath Trilogy.***",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=onBAEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=onBAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137d0-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "How to Stop Time",
    author: "Matt Haig",
    genre: "scifi",
    description:
      "From the New York Times bestselling author of The Midnight Library. “A quirky romcom dusted with philosophical observations….A delightfully witty…poignant novel.” —The Washington Post “She smiled a soft, troubled smile and I felt the whole world slipping away, and I wanted to slip with it, to go wherever she was going… I had existed whole years without her, but that was all it had been. An existence. A book with no words.” Tom Hazard has just moved back to London, his old home, to settle down and become a high school history teacher. And on his first day at school, he meets a captivating French teacher at his school who seems fascinated by him. But Tom has a dangerous secret. He may look like an ordinary 41-year-old, but owing to a rare condition, he's been alive for centuries. Tom has lived history--performing with Shakespeare, exploring the high seas with Captain Cook, and sharing cocktails with Fitzgerald. Now, he just wants an ordinary life. Unfortunately for Tom, the Albatross Society, the secretive group which protects people like Tom, has one rule: Never fall in love. As painful memories of his past and the erratic behavior of the Society's watchful leader threaten to derail his new life and romance, the one thing he can't have just happens to be the one thing that might save him. Tom will have to decide once and for all whether to remain stuck in the past, or finally begin living in the present. How to Stop Time tells a love story across the ages—and for the ages—about a man lost in time, the woman who could save him, and the lifetimes it can take to learn how to live. It is a bighearted, wildly original novel about losing and finding yourself, the inevitability of change, and how with enough time to learn, we just might find happiness. Soon to be a major motion picture starring Benedict Cumberbatch.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=In8mDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=In8mDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137d1-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "University of Sorcery, Books 4-6",
    author: "Megan Linski",
    genre: "science&tech",
    description:
      "USA TODAY BESTSELLING AUTHOR Megan Linski pens an epic three-book royal fae fantasy romance where monsters roam free and shifters fight for the crown. Emma has been given a quest by the gods to save her country from destruction. If she’s to preserve the future of the fae, she’ll have to become the strongest sorceress that’s ever lived, bring down the cult that seeks her power, and defeat the dark lord that threatens to rule over the kingdom. Ethan has joined the revolution to save Malovia, but the evil monarchs that control the nation have cast a shadow over all shifters and their fated mates. As a movement burns throughout the city, Ethan is tried for treason, and deception is unleashed as they seek the most powerful faerie objects of all time. Chaos is paramount as citizens battle against oppression. Emma and Ethan will either rise to reign over the fae… or bring about their final end. *** University of Sorcery: Books 4-6 includes the last three books in a spellbinding royalty love story of superheroes, vigilantes, and soulmates. Explore incredible realms and fall for bad boy kings in this supernatural academy series featuring a diverse and disabled cast. This title is one omnibus in a set of Hidden Legend collections. The Hidden Legends Universe features college-aged protagonists attending magical academies, dual points-of-view, disabled and diverse main characters, and steamy, empowering romances. Omnibus sets connected to this series include Academy of Magical Creatures, College of Witchcraft, and Prison for Supernatural Offenders.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=8sVwEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=8sVwEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137d2-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Seven Wardens Omnibus: Books 5-7",
    author: "Skye MacKinnon",
    genre: "essays",
    description:
      "Magic, destiny and love combine in books 5-7 of this bestselling action-packed romantic fantasy series! Enter the world of the Seven Wardens and watch as Macey and the other Wardens attempt to vanquish their enemies and forge final alliances. While Macey may have finally defeated Mahoun, she soon discovers that there's more threatening the world than she ever imagined. And it's going to take all of her strength and magic to save it. Discover the conclusion of this epic contemporary fantasy series today! Seven Wardens Books 5-7 is the second half of the complete contemporary fantasy Seven Wardens series. The collection includes unusual Celtic and European mythology, plenty of adventure, and a romantic whychoose subplot. This boxed set includes: #5: Above The Waves #5.5: Below The Baubles (Christmas Story) #6: Under The Ice #7: Rule The Dark #0.5 Beyond the Loch (Nessie’s Story) Search Terms: steamy romance, paranormal romance, magic, sorcery, reverse harem romance, RH romance, RH paranormal romance, reverse harem paranormal romance, myth, myths, action, adventure, female protagonist, novel, hero, romance, romance ebook, creature, monster, supernatural, fantasy, mythology, Scotland, Britain, UK, Celtic, Iceland, Paris, France, kelpie, kelpies, incubus, wraith, ghost, prophecy, evil, mystery, abduction, kidnapping, Nessie, selkie, selkies, gnomes, Belgium, kabouter, complete series.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=llqiDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=llqiDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137d3-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "THE CHAMPDOCE MYSTERY",
    author: "EMILE GABORIAU",
    genre: "mystery",
    description:
      "A classic gem of the detective-fiction genre originally published in 1891. This thrilling novel introduces us to Monsieur Lecoq, sleuth extraordinaire. Armed with his amazing skill and knack for solving crime, the famous private detective unravels a mind-boggling case. A sure treat for all mystery lovers.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=G8J8EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=G8J8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137d4-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Blake Pierce: Suspense Bundle (Her Last Wish and The Perfect Wife)",
    author: "Blake Pierce",
    genre: [],
    description:
      "A two-book mystery bundle by #1 bestselling author Blake Pierce, author of ONCE GONE, a #1 bestseller on Amazon with over 350 five star reviews! Here is a bundle of the first books in two Blake Pierce series—the Rachel Gift series and Jessie Hunt Psychological Suspense Thriller series—all here in one convenient place. This bundle offers a great introduction to Blake Pierce’s series with over 140,000 words of reading. In HER LAST WISH (A Rachel Gift FBI Suspense Thriller—Book 1), FBI Agent Rachel Gift, 33, unparalleled for her ability to enter the minds of serial killers, is a rising star in the Behavioral Crimes Unit—until a routine doctor visit reveals she has but a few months left to live. Not wishing to burden others with her pain, Rachel decides, agonizing as it is, not to tell anyone—not even her boss, her partner, her husband, or her seven-year-old daughter. She wants to go down fighting, and to take as many serial killers with her as she can. A serial killer strikes in the Virginia area, targeting women who seek fertility treatments. As Rachel enters his sick and twisted mind, she struggles to understand his motive, or the connection between the victims. Worse, the case strikes too close to home, bringing up memories of her own fertility treatments, and her failed mission to have a second child. As she seeks insight from a diabolical, jailed serial killer, she immediately realizes it’s a mistake. Can he see right through her? Can Rachel keep her secret and keep her deteriorating health at bay long enough to finish the job? Can she fulfill her own bucket list before she dies? And can she keep herself from descending down the dark hole of her own traumatic past? In THE PERFECT WIFE (A Jessie Hunt Psychological Suspense Thriller—Book 1), criminal profiler-in-training Jessie Hunt is sure she's finally put the darkness of her childhood behind her. She and her husband, Kyle, just moved from a cramped downtown Los Angeles apartment into a Westport Beach mansion. Kyle's promotion has them swimming in money. And Jessie is on the verge of getting her Master's degree in forensic psychology, the last step in her dream of becoming a criminal profiler. But soon after their arrival, Jessie begins to notice a series of strange developments. The neighbors—and their au pairs—all seem to be hiding secrets. The mysterious yacht club Kyle is desperate to join is rife with cheating spouses, and with troubling rules of its own. And the notorious serial killer being held at the psychiatric hospital where Jessie is completing her degree seems to know more about her life than is normal—or safe. As her world starts to unravel, Jessie begins to question everything around her—including her own sanity. Has she truly uncovered a disturbing conspiracy buried within a sunny, wealthy Southern California beach town? Does the mass murderer she's studying really somehow know the origin of her private nightmares? Or has her tortured past finally come back to claim her? Dark psychological thrillers with heart-pounding suspense, HER LAST WISH and THE PERFECT WIFE mark the debut of two riveting series—and beloved characters—that will leave you turning pages late into the night! Books #2 in each series series—HER LAST CHANCE and THE PERFECT BLOCK—are also available.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=LYJGEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=LYJGEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137d5-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Amish Snow White",
    author: "Rachel Stoltzfus",
    genre: "art&photog",
    description:
      "MUST READ FOR LOVERS OF AMISH FICTION, FAIRY TALES, AND CHRISTIAN FANTASY NOVELS! When Amish teen Gerta is reunited with her beloved sisters, will she have the strength to step out from her uncle's shadow and forge her own path before it's too late? Set in a whimsical Lancaster County of fantastic possibility grounded in strong Christian values, orphaned teen Gerta has always been her uncle Horace's lucky charm, bringing good crops, good health, and a talent for quilting that is nothing short of remarkable. But things are difficult for the entire family as her uncle suffers from the sin of pride, which is causing turmoil between him and his oldest son Paul. And things really go downhill when Gerta is reunited with her sisters, and Gerta makes plans to leave Horace's house. How far will Horace go to keep Gerta under his thumb, and will Gerta have the strength to forge her own path with her beloved sisters before it's too late? Find out in Book 4 of the Amish Fairy Tales series by Rachel Stoltzfus. If You Love Amish Fiction, Scroll up and Grab a Copy Today. Great for lovers of Amish romance novels, Amish romance authors, Amish romances, Amish romance writers, Amish romance book, Amish romance fiction, Amish romance novel excerpt, best Amish romance authors, Amish christian romance authors, list of Amish romance authors, Amish romance books, Amish romance books online, free Amish romance books, Amish christian romance books, Amish contemporary romance, Amish romance collection, Amish english romance, Amish romance fisher, Amish romance movies, what is Amish romance, good Amish romance, list of Amish romance, Amish romance novel authors, top Amish romance novels, Amish romance novels read online, Amish romance series, Amish romance stories, Lancaster PA, Amish country, Lancaster county saga, Amish books series, Amish New Books, Amish books fiction, Amish books, Amish books authors, Amish christmas books, Amish life books, Amish books, Amish girl book, Amish living books, living Amish, Amish book series authors, Amish bookends, Amish reading books, Amish next book, Amish bookstore, Amish and Mennonite books, Amish grace, Amish fiction series, Amish fiction 2019, Amish fiction book club, inspirational Amish fiction, inspirational Amish, Christian books, Fairy Tales, Fairy Tale Romance, Fairy Tale Books, Amish ebook, Amish girl book, Amish culture, Amish books to read, Amish 2019, Amish upcoming books about the Amish lifestyle.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=l0uyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=l0uyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137d6-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Mirror Realm (Book One)",
    author: "Tim O'Rourke",
    genre: "science&tech",
    description:
      "When Lacey Swift stumbles across a strange mirror, she enters a world similar yet very different from her own. Lacey discovers that this new world is inhabited with vampires, werewolves and supernatural creatures, like no other. With the help of a vampire named Marco, and werewolf called Abe, Lacey finds herself on a dangerous and terrifying journey to save her identical twin sister, Thea, who is being held hostage and near to death. But the mirrors have the power to change Lacey, altering her appearance and abilities as she passes between them. But something else deep inside of Lacey is changing too – she is beginning to develop an attraction for Marco, who travels with her but has a thirst for human blood when he passes through the mirrors into her world… Note: ‘The Mirror Realm’ is a four part series. Books 2, 3 & 4 are also available! Search Terms: vampire, romance, werewolf, fantasy, horror, mystery, new adult & college romance, occult, urban, young adult fantasy, paranormal, paranormal romance, fantasy witches, shapeshifter wolf romance, dystopian, superhero fantasy ebooks, demon, werewolf romance, angels, vampire romance, young adult paranormal, paranormal new adult romance, shade of, werewolf romance, vampires, diaries, demons and devils, shapeshifter wolf romance, academy, twilight, horror, angels, saga, new adult fantasy romance, journals, coming of age, new adult, young adult, gothic, shifter, lycan, vampire books, vampire romance books, vampire and werewolf books, werewolf books, fantasy books, coming of age fantasy, genetic engineering, science fiction, mash ups, bad girlfriend, vampire girl, vampire vengeance, anti-heroes, vengeance, science fiction, free science fiction booksvampire, supernatural, strong female lead fantasy, strong female characters, strong female vampire vampire romance, young adult paranormal, paranormal new, free books, free, free vampire books, free vampire romance books, free vampire and werewolf books, books free, free werewolf books, free fantasy books, vampire books free, vampire romance books free, paranormal romance free, paranormal free",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ZMJbEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ZMJbEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137d7-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "A Sicilian Romance",
    author: "Ann Radcliffe",
    genre: "mystery",
    description:
      "A Sicilian Romance is a gothic novel by Ann Radcliffe. It was her second published work, and was first published anonymously in 1790.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=gawxEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=gawxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137d8-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Mammoth Books presents Demonic Dreams",
    author: "Christopher Fowler",
    genre: [],
    description:
      "Oh I Do Like to Be Beside the Seaside - Christopher Fowler Christopher Fowler explains \"'. . . Seaside' came about firstly because I was commissioned to write a story for the World Horror Convention souvenir book and, as the event was to take place in Brighton, it seemed logical to set a tale on the South coast of England. \"I had written a fantasy novel, Calabash, some years earlier, hinting at the dark madness of such seaside towns, which are the antithesis of their Mediterranean counterparts. I thought of the depressing Morrissey song \"Every Day is Like Sunday\", which captures the awfulness of English resorts. \"Coincidentally, Kim Newman and I were discussing the inherent creepiness of pantomime dames, and I decided it was time to give vent to my horror of these coastal pleasure domes. I wish I'd thought to include screaming gangs of hen-nighters as well. And I thought it was a nice touch to have everyone in the story telling the hero to 'fuck off' until he finally does.\" Featherweight - Robert Shearman \"I don't like writing at home much,\" admits the author. \"Home is a place for sleeping and eating and watching afternoon game shows on TV. There are too many distractions. So, years ago, I decided I'd only write first drafts in art galleries. \"And the best of them all is the National Gallery, in London, a pigeon's throw from Nelson's Column. I can walk around there with my notebook, thinking up stories - and if I get bored, there are lots of expensive pictures to look at. Perfect. \"A lot of those paintings, however, have angels in them. They're all over the place, wings raised, halos gleaming - perching on clouds, blowing trumpets, hovering around the Virgin Mary as if they're her strange naked childlike bodyguards. And I began to notice. That, whenever the writing is going well, the angels seemed happy, and would smile at me. And whenever the words weren't coming out right, when I felt sluggish, when I thought I'd rather take off and get myself a beer, they'd start to glare. \"I wrote this story in the National Gallery. Accompanied by a lot of glaring angels. Enjoy.\" Lesser Demons - Norman Partridge \"I was surprised to receive an invitation for S.T. Joshi's Black Wings,\" reveals Partridge, \"an anthology of Lovecraftian fiction. Although I knew S.T. admired my work, I've never quite seen myself as a Mythos writer. \"While I respect H.P. Lovecraft and his contribution to horror, I've never felt that his worldview (or maybe I should say universeview) meshed with mine. \"In the end, that's what made the story work . . . at least for me. I concentrated on my differences with Lovecraft, and approached the material from a place where Jim Thompson would be more comfortable than HPL. And I'm delighted that so many people have enjoyed the tale - it was a lot of fun to write.\"",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=AfqdBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=AfqdBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137d9-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "WUTHERING HEIGHTS",
    author: "EMILY BRONTË",
    genre: "horror",
    description:
      "WUTHERING HEIGHTS In this epic story of love, envy, betrayal and revenge, Heathcliff and Catherine come together in a romance that destroys them and those around them. Set in the lonely and bleak Yorkshire moors, this classic tale of thwarted passion begins when the new tenant of Thrushcross Grange, a Mr Lockwood, is forced to seek shelter for a night at Wuthering Heights. As the night passes, Lockwood learns of the tumultuous past of Wuthering Heights and of those connected with it. WUTHERING HEIGHTS The timeless story of Cathy and Heathcliff's tumultuous love affair, is brought to you by Simon & Schuster Classics, with a stunning, cinematic new look. WUTHERING HEIGHTS Heathcliff, a young orphan, is adopted by Catherine Earnshaw's father. Treated unkindly by her brother, Hindley, Heathcliff is at first protected by the elderly Mr Earnshaw. When the elder Earnshaw passes away, Heathcliff is hurt and betrayed by both brother and sister, and leaves… until the day he returns to exact his revenge. WUTHERING HEIGHTS Emily Brontë's demonic and brooding creation, Heathcliff, and the love-affair between him and Catherine, has fascinated and entranced readers for generations. It is a classic of gothic literature. WUTHERING HEIGHTS Published in 1845, Emily Bronte’s gothic novel set on the windy moors of Yorkshire is the story of the doomed love between Catherine Earnshaw and her father’s adopted son, Heathcliff. The book was initially poorly received by many critics who found its dark, tragic story needlessly harsh and disturbing. That opinion has not endured, and the only novel Emily Bronte published is now considered to be one of the great classics of English literature. WUTHERING HEIGHTS",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=bv4yEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=bv4yEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137da-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "It's Reigning Men Bundle",
    author: "Jenny Gardiner",
    genre: "essays",
    description: "No description",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=V3N0DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=V3N0DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137db-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Princesses of Myth: A Young Adult / New Adult Fantasy Collection (Books 3, 4, & 5)",
    author: "Joanne Wadsworth",
    genre: "science&tech",
    description:
      'New York Times Bestselling Author Joanne Wadsworth brings you this Limited Edition boxed set which includes ENCHANTER, HEALER, and CHASER, three spellbinding books in the PRINCESSES OF MYTH series. *Readers say these books are a "must read" for teens and young adults.* This is ADVENTUROUS, MAGICAL, and ADDICTIVE ROMANCE that spans worlds. ENCHANTER, Book #3: On planet Magio war rages between Peacio’s protectors and Dralion’s warriors. Friendships and soul-bonds are forbidden, yet deadly secrets lurk within a high-ranking inner circle. Peacio’s Silvie Carver is attempting to complete her finals when her best friend receives forewarning that she’s the key to keeping her enemy king from making a decision that will escalate the war. Silvie must save her loved ones’ soul-bonds from being torn apart, and all without revealing her emerging and rare fire skill during the mission. Dralion warrior and enchanter, Guy Moyer, has been fighting his soul’s demand to find his mated one...who also happens to be his enemy. Except Silvie shows up on Dralion’s off-world Australian Outback station and though they renounce their bond, his soul demands he aid and protect her. When Silvie finds herself impersonating a warrior, she’s pulled to the fiery edge of her control as she seeks to influence the king’s decision. Can the mated pair turn the tide of the war and find their place with each other? HEALER, Book #4: Twenty-year-old Peacian empath Belle Benner has been waiting two years for her soul-bound mate to claim her and when she finally meets him, she discovers he’s the last person she ever expected him to be. Her mate is a warrior healer from within the enemy’s ranks, a man she must release if she wishes to accept the greatest challenge she’ll ever undertake, that of bringing their world’s warring to an end. CHASER, Book #5: Goldie Wincrest is a princess of Dralion, cursed with a skill she’s never disclosed to another, an ability outlawed from their world centuries ago. She is a Chaser, one who must fight the deadly pull of her assassin ability, only she can no longer trust either herself or her fragmented thoughts any longer. There is only one pathway open to her, to choose her Destroyer and to give him the power he needs to see to her death should she go completely Dark. Don’t miss grabbing this Limited Time collection today. Scroll up and hit “buy” to discover the Young Adult Fantasy series readers are enthralled with. Each book in this series is standalone, and can be enjoyed out of sequence. PRINCESSES OF MYTH SERIES Protector, #1 Warrior, #2 Enchanter, #3 Healer, #4 Chaser, #5 Hunter, #6 (Novella 12,000 words) slots in at #2.5 in series',
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=bCl-EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=bCl-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137dc-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Baby's Opera By Walter Crane",
    author: "Walter Crane",
    genre: "mystery",
    description:
      "The Baby's Opera. A Book of Old Rhymes With New Dresses by Walter Crane. The Music by the Earliest Masters.[Walter Crane, illustrator]. London and New York: Warne, [n.d., ca. 1900]. Early American edition. Oblong octavo. 56 pages. Every page illustrated in color. Publisher's binding, in the rare dust jacket.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=L-dIEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=L-dIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137dd-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Steele Ridge: The Kingstons Box Set 1 (Books 1-3)",
    author: "Kelsey Browning",
    genre: "horror",
    description:
      "Looking for your newest binge read? Grab these 3 full-length romantic suspense books and ignite your love for Steele Ridge's favorite foodies--The Kingstons. Take this family adventure and discover intrigue, heroism, and--most of all—epic love. Craving HEAT by Adrienne Giordano - Maggie Kingston is a woman working in a man’s world…and doing a damn good job. Being Steele Ridge’s first female sheriff isn’t easy. Especially when your cousins are magnets for trouble. The Steeles do everything the hard way, but Maggie’s tougher than she looks. Nothing shakes this sheriff until her cousin brings one of his superstar players—and the accompanying media circus—to town. The press can’t get enough of the sexy quarterback. And neither can Maggie… Jayson Tucker devoted his whole career to the New York Knights. So when the team takes a rookie’s side over his after a locker room brawl, he takes refuge from the spotlight. Except reporters aren’t the only ones after him. Someone wants Jayson benched. Permanently. When the threat becomes deadly, hiding won’t be enough. And in Steele Ridge, security comes in the luscious form of its gorgeous, no-nonsense sheriff. Jayson’s always fought his own battles. The closer he gets to Maggie, the less he’s willing to risk her being caught in the crossfire. Yet Maggie is no damsel in distress. She’s more than capable of keeping her town—and her man—safe. But can she say the same about her heart? Tasting FIRE by Kelsey Browning - Fire in one hand, ashes in the other Studious tutor Emmy McKay fell in love with Cash Kingston over a biology textbook, never expecting the high school football hero to give her a second thought. But his feelings for her burned just as hot. All too soon, Emmy’s choices destroyed their youthful relationship, reducing it to a pile of ash. Years later, she has landed her dream job as an ER doctor in her hometown. Now it’s time to win back her dream man. As a firefighter and tactical medic, Cash Kingston is no stranger to white-knuckle situations. But when he learns his beautiful—and brilliant—ex-girlfriend has returned to Steele Ridge, he feels as if he’s standing on the roof of a blazing building. With no escape route in sight. Emmy is the only woman who’s ever had the power to build him up one minute and burn him down the next. But when someone targets Emmy and they begin to suspect the danger stems from their past relationship, it’s impossible for Cash to stay detached. Will the struggle to untangle a web of half-truths bring them closer together, or will it tear them apart for good? Searing NEED by Tracey Devlyn - To escape a brutal killer, a brilliant researcher teams up with a tortured soldier who poses an even greater threat... to her heart. Her sister might be the law and her brothers the brawn, but Riley Kingston is definitely the brains of the family. She’s a talented botanist well on her way to a PhD—so why does she feel like a failure? Fired from a dream project in Costa Rica, Riley’s stuck back in her hometown. Cataloguing plants on Steele land keeps her busy, but it’s far from compelling work. Until she discovers a fascinating new specimen. One with a body made for pleasure . . . and eyes filled with a pain she longs to understand. Delta Force operator Coen Monroe doesn’t want to be studied. Not even by the sexy scientist whose inquisitive glances stir up desires he isn’t ready to handle. He came to Steele Ridge to be alone, to battle his nightmares and the memories triggering them. But Riley’s gentle seduction is as relentless as her curiosity. She soothes his wounded soul . . . and fires up his defensive instincts. But when her research sparks a deadly conspiracy, Coen is exactly what she needs. When Riley is targeted by a sociopath bent on silencing her forever, Coen will do anything to protect her. But can he save the woman he loves without losing himself in the process? Although all books are stand alones, if you would like to read the entire Steele Ridge series chronologically, the following is the correct order: The Beginning - The Steeles Going Hard - The Steeles Living Fast - The Steeles Loving Deep - The Steeles Breaking Free - The Steeles Roaming Wild - The Steeles Stripping Bare - The Steeles Enduring Love - The Steeles Craving Heat - The Kingstons Tasting Fire - The Kingstons Searing Need - The Kingstons Vowing Love - The Steeles Striking Edge - The Kingstons Burning Ache - The Kingstons",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=-zTrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=-zTrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137de-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Razor's Edge Chronicles: Books 1-3",
    author: "Celine Jeanjean",
    genre: "horror",
    description:
      "If I tell you that I have magic, you’re probably going to expect all kinds of fancy things, like fire balls or maybe some kind of badass demon slaying assassin. Yeah, that’s not me. I’m a barber to the supernatural because my magic is too weak and weird to do anything else. So why have the fae asked me to look after one of their eggs—the most precious thing in the world to a fae—when I’m so vastly under qualified? Either they’ve taken leave of their senses, or they’re seriously desperate. And if the fae are desperate, that means that with my weak magic, I’m utterly out of my depth. Oh, and my backup is a sarcastic cat, which doesn’t come in handy when I find myself facing off against a very old, very powerful magical creature who’s after the egg. The damn cat scampers off and I’m left with nothing more than my piddly magic and my wits to get myself out of this mess. That’s the thing about the magical underworld of Panong—it might be dangerous and complicated, but at least it’s never dull. The Razor’s Edge Chronicles is an Asian Urban Fantasy series drawing inspiration from various Asian myths and featuring all kind of amazing new magical creatures, totally different from anything you’ve encountered so far. Dive into the Razor’s Edge Chronicles’ magical world today!",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ILdeEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ILdeEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137df-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "AS THE HART PANTETH",
    author: "HALLIE ERMINIE RIVES",
    genre: "horror",
    description:
      "He sat just outside the lofty doorway, that opened between the bare hall and front verandah. The great white columns held a wild clematis vine, the leaves of which almost concealed the bricks where the plaster had fallen off. Presently a child came out with a violin in her hand. She went up to him, and laying her full cheek against his shrunken one, caressed him. Her blue eyes that went black in an instant, from the pupils’ swift dilation, had the direct gaze of one knowing nothing of the world and never fearing to be misunderstood. She was slim yet strong; her waving hair that fell softly about her face was the color of sunburnt cornsilk, her skin ovalling from it, smooth and white, like a bursting magnolia bud....",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Wyx6EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Wyx6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137e0-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "What Alice Forgot: A Novel by Liane Moriarty (Trivia-On-Books)",
    author: "Trivion Books",
    genre: "action&adventure",
    description:
      "Trivia-on-Book: What Alice Forgot: A Novel by Liane Moriarty Take the challenge yourself and share it with friends and family for a time of fun! What if you woke up one day and realized that you had lost all memories of the last ten years of your life? That is what happened to Alice in What Alice Forgot. A freak accident changed her life. In a touching tale of how one incident can change your life, Liane Moriarty gives readers a peak into the lives of three ladies and how they cope with the ups and downs of life. You may have read the book, but not have liked it. You may have liked the book, but not be a fan. You may call yourself a fan, but few truly are. Are you a fan? Trivia-on-Books is an independently curated trivia quiz on the book for readers, students, and fans alike. Whether you're looking for new materials to the book or would like to take the challenge yourself and share it with your friends and family for a time of fun, Trivia-on-Books provides a unique approach to What Alice Forgot by Liane Moriarty that is both insightful and educational! Features You'll Find Inside: • 30 Multiple choice questions on the book, plots, characters and author • Insightful commentary to answer every question • Complementary quiz material for yourself or your reading group • Results provided with scores to determine \"status\" Promising quality and value, come play your trivia of a favorite book!",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=gB4CDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=gB4CDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137e1-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Collected Stories : Guy de Maupassant(Set of 3 Bestseller Books)",
    author: "Guy de Maupassant",
    genre: "shortstory",
    description:
      "Guy de Maupassant : Collected Stories This Combo Collection (Set of 3 Books) includes All-time Bestseller Books. This anthology contains: Bel-Ami The Sisters Rondoli, and Other Stories Afloat",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=7khmEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=7khmEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137e2-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Sorcery & Warlocks",
    author: "Patty Jansen",
    genre: "horror",
    description:
      "Six complete dark fantasy novels. Fire & Ice - Patty Jansen Darkness Rising - James E. Wisher Requiem For The Wolf - Tara Saunders The Prince’s Man - Deborah Jay The Ring And The Flag - William L. Hahn Relentless Souls - Ryan Kirk A free collection.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=XQ6oDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=XQ6oDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137e3-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Happy Holidays Box Set: Books 1-3",
    author: "Michele Brouder",
    genre: "graphicnovel",
    description:
      "Contains the first 3 books of The Happy Holidays series: A Whyte Christmas, This Christmas, and A Wish for Christmas. Over 800 pages of reading! Because every holiday deserves a happy ending. A Whyte Christmas Kate O’Connor has had a rough year and Christmas looks to be no better but a dashing Irishman is about to change all of that. This Christmas This year Holly is dreading Christmas but the next store neighbor is about to change her mind. A Wish for Christmas With his weapons-grade dangerous good looks, India Ramone soon learns there's more to billionaire John Laurencelli than bad press and rumors.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=xjgqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=xjgqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137e4-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Dragon Blood Collection, Books 1-3",
    author: "Lindsay Buroker",
    genre: "history",
    description:
      "A thousand years have passed since a dragon has been seen in the world. Science and technology have replaced magic, which has dwindled until it has become little more than an element of myth and legend. There are those who still have dragon blood flowing through their veins, distant descendants of the mighty creatures of old. These rare humans have the power to cast magic, the power to heal, and the power to craft alchemical weapons capable of starting wars… or ending them. But they are feared for those powers, and in recent centuries, they have been hunted nearly to extinction. The few remaining survivors must find a way to change how humanity perceives them or be lost to the world forever. The Dragon Blood Collection includes three full-length novels of action, magic, and romance: Balanced on the Blade’s Edge Deathmaker Blood Charged",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=d4rwBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=d4rwBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137e5-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Young Mistress - Western Romance",
    author: "Molly Maco",
    genre: "art&photog",
    description:
      "Hardy, an adventurous cowboy leaves behind the herd and the trail, and the dangers. He wants to settle down. In his search for a place to call home, He finds a castle by the river, complete with a ranch and many farmhands going for a ridiculously cheap price. Hardy wants to settle down to a boring countryside life, but love won’t let him be when he ends up falling in love with the young mistress of the house. He must fight her demons if love is to have a chance, she is in danger of a curse from her past that has killed everyone in her family, leaving her the only survivor. When Alicia welcomes a potential buyer to her father’s house, expecting him to leave the next morning after hearing rumors of the curse. He does not, and that unexpected event becomes a catalyst of a thrilling love adventure - before he wakes up to find her gone, missing… ♥♥♥This is the countryside love… ♥♥♥ Perfect For readers who love Debbie Macomber, Diana Palmer, Debra Clopton, Samantha Chase, Melody Grace, Annie Rains, Carolyn Brown, Maisy Yates, Cora Seton, Kate Pearce, Vivian Arend, Kelly Elliott, Jennifer Ryan, Linda Leal Miller, Kristine Raymond, Nicholas sparks, Nora Roberts, Julia Quinn, Lexi Ryan, L.G. Castillo, B.J. Daniels, SJ McCoy, Lisa Mondello, Jennifer Ryan, and Larry McMurtry Topics: cowboy romance, wholesome romance, western romance, sweet romance, contemporary romance, series, romantic suspense series,Texas, Texas cowboys, Texas romance, billionaire cowboy romance, horses in romance, small-town romance, western romance Christian, rodeo, romance series, contemporary Christian romance, heartwarming, heart-warming, Christian western historical romance, new york times bestseller romance, NYT romance, sexy, new york times romance, Christian billionaire romance, short stories, books under 4 dollars, hot romance, romance with a cowboy, free western romance books, cowboys, rodeo romance, ranch romance, old and young romance, medical romance, romantic thriller, police romance, detective romance, western romance free, westerns free books, Western Dreams, wild west romance, historical western romance, historical western, secrets, historical western suspense, second chance romance, mail order brides, books for free, Christian books free, urban books, urban books free, urban, urban fiction, urban street fiction, Cowboys & Kisses, Rodeo Man, Rodeo Rebel, Rodeo Queen,history books free,historical fiction free, free book, freebie, free book, free ebook, free, ebooks free, free books, free, free ebooks, mystery books free, free books to read and download,free romance books for young adults, free alpha male billionaire romance books,modern romance, urban romance, free bad boy romance books, free romance short stories, free second chance romance, free steamy romance books, free contemporary romance books, free hot romance books, women freebies, free fiction books for young adults, free love story and romance books, free office romance books, boss romance books free, beach reads, new adult, free romantic fiction, romance fiction books free, romance stories, fiction books, romance novels steamy, romance novel, books romance, romance, adult romance novels, alpha male romance books, romance novels to read, love story books, cowboy rodeo, Mystery, Thriller, Romantic Suspense, romantic free books, romantic, romance thriller.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_lszEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_lszEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137e6-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Boleyn Inheritance",
    author: "Philippa Gregory",
    genre: "children",
    description:
      "Lady-in-waiting Jane Boleyn, the only survivor of the ambitious Boleyn family, testifies against Henry VIII's latest queen, Anne of Cleves, and conspires to place her young cousin, Katherine Howard, on the throne.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=xZNVDAaxrGIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=xZNVDAaxrGIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "411137e7-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Young Mistress - Western Romance",
    author: "Molly Maco",
    genre: "action&adventure",
    description:
      "Hardy, an adventurous cowboy leaves behind the herd and the trail, and the dangers. He wants to settle down. In his search for a place to call home, He finds a castle by the river, complete with a ranch and many farmhands going for a ridiculously cheap price. Hardy wants to settle down to a boring countryside life, but love won’t let him be when he ends up falling in love with the young mistress of the house. He must fight her demons if love is to have a chance, she is in danger of a curse from her past that has killed everyone in her family, leaving her the only survivor. When Alicia welcomes a potential buyer to her father’s house, expecting him to leave the next morning after hearing rumors of the curse. He does not, and that unexpected event becomes a catalyst of a thrilling love adventure - before he wakes up to find her gone, missing… ♥♥♥This is the countryside love… ♥♥♥ Perfect For readers who love Debbie Macomber, Diana Palmer, Debra Clopton, Samantha Chase, Melody Grace, Annie Rains, Carolyn Brown, Maisy Yates, Cora Seton, Kate Pearce, Vivian Arend, Kelly Elliott, Jennifer Ryan, Linda Leal Miller, Kristine Raymond, Nicholas sparks, Nora Roberts, Julia Quinn, Lexi Ryan, L.G. Castillo, B.J. Daniels, SJ McCoy, Lisa Mondello, Jennifer Ryan, and Larry McMurtry Topics: cowboy romance, wholesome romance, western romance, sweet romance, contemporary romance, series, romantic suspense series,Texas, Texas cowboys, Texas romance, billionaire cowboy romance, horses in romance, small-town romance, western romance Christian, rodeo, romance series, contemporary Christian romance, heartwarming, heart-warming, Christian western historical romance, new york times bestseller romance, NYT romance, sexy, new york times romance, Christian billionaire romance, short stories, books under 4 dollars, hot romance, romance with a cowboy, free western romance books, cowboys, rodeo romance, ranch romance, old and young romance, medical romance, romantic thriller, police romance, detective romance, western romance free, westerns free books, Western Dreams, wild west romance, historical western romance, historical western, secrets, historical western suspense, second chance romance, mail order brides, books for free, Christian books free, urban books, urban books free, urban, urban fiction, urban street fiction, Cowboys & Kisses, Rodeo Man, Rodeo Rebel, Rodeo Queen,history books free,historical fiction free, free book, freebie, free book, free ebook, free, ebooks free, free books, free, free ebooks, mystery books free, free books to read and download,free romance books for young adults, free alpha male billionaire romance books,modern romance, urban romance, free bad boy romance books, free romance short stories, free second chance romance, free steamy romance books, free contemporary romance books, free hot romance books, women freebies, free fiction books for young adults, free love story and romance books, free office romance books, boss romance books free, beach reads, new adult, free romantic fiction, romance fiction books free, romance stories, fiction books, romance novels steamy, romance novel, books romance, romance, adult romance novels, alpha male romance books, romance novels to read, love story books, cowboy rodeo, Mystery, Thriller, Romantic Suspense, romantic free books, romantic, romance thriller.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_lszEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_lszEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250de0-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Seasons of the Moon Series, Books 1-4: Six Moon Summer, All Hallows' Moon, Long Night Moon, and Gray Moon Rising",
    author: "SM Reine",
    genre: "action&adventure",
    description:
      "When Rylie went to summer camp, she didn’t expect to get bitten by a werewolf and turn into a monster. She also didn’t expect to fall in love—especially not with a werewolf hunter. Between ravenous werewolf packs, a bloodthirsty family of hunters, and Rylie’s battle with her inner wolf, all the odds are stacked against Rylie’s love for Seth. But Seth will do anything to be with her…even if it means turning against his family and sacrificing everything. This is a collection of the first four books in the Seasons of the Moon series. It contains: Six Moon SummerAll Hallows' MoonLong Night MoonGray Moon RisingSIX MOON SUMMERRylie's been bitten. She's changing. And now she has three months to find a cure before becoming a werewolf... forever. Rylie Gresham hates everything about summer camp: the food, the fresh air, the dumb activities, and the other girls in her cabin. But the worst part is probably being bitten by a werewolf. Being a teenager is hard enough, but now she's craving raw flesh and struggles with uncontrollable anger. If she doesn't figure out a way to stop the transformation, then at the end of summer, her life is worse than over. She'll be a monster. ALL HALLOWS' MOONThe good girl has become the big bad wolf... Rylie survived a werewolf bite. She's moved to her aunt's ranch to enroll in a new school and continue her life--except now she transforms into a monster every moon and struggles to control her murderous urges. Without many werewolves left, it's hard to stay in hiding. A family of hunters--Eleanor, Abel, and Seth--recognize the signs and follow Rylie to her new home. They want to stop her before she murders someone, and the only way to do it is with a silver bullet. Seth soon realizes the werewolf is Rylie, the one monster he failed to kill. Worse yet, he's still in love with her. Torn between family and love, Rylie struggles to reconcile her feelings and control the wolf within while Seth fights to do what's right. But what is right--obeying desire or duty? LONG NIGHT MOONSomething is killing innocent people around Rylie Gresham's town. The police think it's a wild animal, but she has other suspicions. There are new kids at school, and they have a lot in common with her: gold eyes, super strength, and a habit of turning furry. It seems Rylie's not the only werewolf around anymore. It's up to Rylie and her werewolf-hunting boyfriend, Seth, to stop the killings. But saving lives doesn't come naturally to a monster, and territory battles could risk the life of her sickly aunt--not to mention her own. Rylie has no choice but to stand her ground, protect her home, and stop the murders before anyone else gets hurt. GRAY MOON RISINGIt's been almost a year since Rylie Gresham was bitten by a werewolf on Gray Mountain. Now something is beckoning her back to the place she was attacked, along with every other werewolf in the world. But they aren't the only ones heeding the call. A group of hunters notices them gathering and sees it as their chance to wipe out the entire species. Seth is about to graduate high school when he learns of the final hunt. He secretly plans to save Rylie and his werewolf brother even though he has to play along with the hunters to do it. But Rylie doesn't want to be saved. She's already decided to solve her problems with a silver bullet if answers aren't waiting on Gray Mountain. One way or another, everything is about to end--whether it means Rylie's liberation or the end of her life... dark urban fantasy, occult supernatural, free fantasy book, bargain fantasy book, urban dark fantasy, paranormal romance, werewolves, werewolf pack, free, freebie, young adult paranormal keywords: urban fantasy, paranormal romance, urban fantasy romance, werewolf romance, shapeshifter romance, angels, demons, science fiction romance, free urban fantasy novel, free books, free paranormal, exorcist, urban fantasy series",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=mMX0AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=mMX0AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250de1-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Modern Romance January 2021 A Books 5-8: The Commanding Italian's Challenge / The Secrets She Must Tell / The King's Bride by Arrangement / How to Undo the Proud Billionaire",
    author: "Maya Blake",
    genre: "romance",
    description: "Red Hot Romances from Mills & Boon!",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=pc34DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=pc34DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250de2-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Romancing The Heist: Box Set (Books 1 - 3)",
    author: "Belle Knight",
    genre: "mystery",
    description:
      "GRAB THE BOX SET AND SAVE 50% Sparks fly in these steamy romantic suspense stories, but can these sexy duos survive the truth…and the hitmen hired to make sure no witnesses survive the heist? THE MUSEUM HEIST To save his younger brother’s life, Heald must break into a high security museum and steal millions of dollars worth of illegally poached rhino horns. It’s supposed to be a straightforward job, until he meets a museum volunteer who worked past closing time—Laura Mannings. To follow her secret dreams of being something more than a classroom teacher, Laura spends her free time helping the museum identify important artifacts—and accidentally uncovers an international wildlife smuggling ring. THE RANCH HEIST To protect his father’s ranch, Darius must come out of family exile to destroy a farm’s prized ram. It’s an easy job, until he meets the ram’s owner—Ashley. To follow her artisan cheese-making dreams, Ashley will do whatever it takes to succeed, even if that means taking on an aggressive, one-of-a-kind ram whose secrets origin just might kill her. THE CAVE HEIST To save his life, Adam must finish the job his cousin failed to complete—to smuggle rare, endangered tortoises out of a Northern California forest hideout. Though Adam has never smuggled anything before, it’s supposed to be an easy transport job—until he meets Anna and her dog. Anna is a hairstylist by day, but by night, she searches for missing people with help from her dog, Sanchez. When a kid goes missing, Anna and Sanchez go searching in the forest—only to uncover the location of the smuggled tortoises. ~~~ These standalone romance suspense short novels will keep you up late to find out what happens next. No cheating and no cliffhangers, but with plenty of steam and HFN. SAVE 50% BUYING THE BOX SET COMPARED TO THE INDIVIDUAL EBOOKS.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=LMwOEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=LMwOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250de3-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Boleyn Inheritance",
    author: "Philippa Gregory",
    genre: "essays",
    description:
      "Lady-in-waiting Jane Boleyn, the only survivor of the ambitious Boleyn family, testifies against Henry VIII's latest queen, Anne of Cleves, and conspires to place her young cousin, Katherine Howard, on the throne.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=xZNVDAaxrGIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=xZNVDAaxrGIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250de4-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Breeding the Babysitter: Books #1-5 (Impregnation Erotica, Age Gap Erotica, Breeding Erotica 5 Pack)",
    author: "Cherry Poppins",
    genre: "selfhelp",
    description:
      "Innocent babysitters and the dominant older men they work for. They might try to resist the fertile young women flouncing around in front of them with their perfect, supple bodies. But they won't be able to hold out forever. There's only so much a man can take. One thing is for sure: these babysitters aren't going to stay innocent for long. Because they've been aching for a baby of their own… and their bosses are going to give it to them.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=F9hDEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=F9hDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250de5-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Saga of Recluce: Books 6-9",
    author: "L. E. Modesitt, Jr.",
    genre: "art&photog",
    description:
      "A world of warring magical forces: black order, white chaos, and shades of gray. L.E. Modesitt, Jr.'s bestselling fantasy novels set in the magical world of Recluce are among the most popular in contemporary fantasy. Each novel tells an independent story that nevertheless reverberates though all the other books in the series, to deepen and enhance the reading experience. Rich in detail, the Saga of Recluce is epic storytelling at its finest. This discounted ebundle includes: Fall of Angels, The Chaos Balance, The White Order, Colors of Chaos \"An intriguing fantasy in a fascinating world.\" —Robert Jordan, New York Times bestselling author of The Wheel of Time® series Saga of Recluce #1 The Magic of Recluce #2 The Towers of Sunset #3 The Magic Engineer #4 The Order War #5 The Death of Chaos #6 Fall of Angels #7 The Chaos Balance #8 The White Order #9 Colors of Chaos #10 Magi’i of Cyador #11 Scion of Cyador #12 Wellspring of Chaos #13 Ordermaster #14 Natural Order Mage #15 Mage-Guard of Hamor #16 Arms-Commander #17 Cyador’s Heirs #18 Heritage of Cyador #19 The Mongrel Mage #20 Outcasts of Order Story Collection: Recluce Tales Other Series by L.E. Modesitt, Jr. The Imager Portfolio The Corean Chronicles The Spellsong Cycle The Ghost Books The Ecolitan Matter At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=F6FuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=F6FuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250de6-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Father Tom Mysteries: Books 4-6",
    author: "J. R. Mathis",
    genre: "essays",
    description:
      "A Small-Town Amateur Sleuth Mystery Romance Series Boxset This is a boxset of books 4-6 in The Father Tom Mysteries. Meet Father Tom Greer and Detective Helen Parr, former lovers reunited after twenty years, as they solve crimes old and new--and explore the profound mysteries of the human heart. The Buried Bride (Book 4)--With the Archbishop’s blessing, Helen and I are spending Lent building a relationship built on love--but without physical intimacy. And yes, it’s as hard as it sounds. But this penitential season, I have other work to do. I need to rebuild my relationship with the families of St. Clare’s after neglecting my duties as their shepherd. I must confess my sins to them, and ask their forgiveness. With these two tasks, I expected this Lent to be the longest of my life. But I didn’t expect to be fighting to stay out of prison. The Defining Decision (Book 5)--After the astonishing news from the Archbishop, Helen and I are looking forward to possibly having a life together as husband and wife. That is, if the Holy Father grants me permission. While awaiting word from the Vatican, we’re getting to know each other more deeply. Going out on dates, spending time together, talking about what our life together will be like if we’re allowed to marry. All of this under Anna’s watchful eye, and being very careful to keep things secret. But then Gladys runs over the President of Myer College’s chief of staff. What looks like a tragic accident takes a bizarre turn when drugs are found in his system. Is the young genius I consider a daughter guilty of murder, or is she being set up by someone from her past? The Silent Shooter (Book 6)--The Pope’s decision to allow us to marry captures the imagination of the entire world. Finally, after having to hide our relationship from all but a few close friends, we can openly proclaim our love for each other, and celebrate with our parish family our future lives together. But not everyone, it seems, is happy with our plans. First come the letters, threatening Helen with divine justice if she persists in her plans. Then, on live television, someone takes a shot at us. It soon becomes apparent that someone’s decided to stop us at any cost. But Helen already knows who wants her dead. It’s someone from her past as a Detective in Washington, D.C. A serial killer who sees himself acting as God’s instrument to kill impure women. With little to go on besides the letters of a lunatic and a possible connection between the killer and a fanatic priest with his own agenda, we’re in a race against time to find a killer--before the killer finds us first. Keywords: Murder, Mystery, Contemporary, Small Town, Forbidden Romance, Taboo, Priest, Amateur Sleuth, Woman Detective, Catholic Church, Celibacy, Father Brown, Platonic Friendships, Second-Chance, Family Secrets, Later-in-life, serial killer, cold case, Authors: G.K. Chesterton, Louise Penny, Melissa Storm, Solomon Carter, Veronica Black, Levi Fuller, Christy Barritt, Dominika Best, Willow Rose, Clare Chase, Sage Parker, James Runcie",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=621REAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=621REAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250de7-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Refugee Tales: Volume III",
    author: "Monica Ali",
    genre: "selfhelp",
    description:
      "With nationalism and the far right on the rise across Europe and North America, there has never been a more important moment to face up to what we, in Britain, are doing to those who seek sanctuary. Still the UK detains people indefinitely under immigration rules. Bail hearings go unrecorded, people are picked up without notice, individuals feel abandoned in detention centres with no way of knowing when they will be released. In Refugee Tales III we read the stories of people who have been through this process, many of whom have yet to see their cases resolved and who live in fear that at any moment they might be detained again. Poets, novelists and writers have once again collaborated with people who have experienced detention, their tales appearing alongside first-hand accounts by people who themselves have been detained. What we hear in these stories are the realities of the hostile environment, the human costs of a system that disregards rights, that denies freedoms and suspends lives. ‘We hear so many of the wrong words about refugees – ugly, limiting, unimaginative words – that it feels like a gift to find here so many of the right words which allow us to better understand the lives around us, and our own lives too.’ – Kamila Shamsie All profits go to the Gatwick Detainee Welfare Group and Kent Help for Refugees.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=kmWbDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=kmWbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250de8-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Bobbsey Twins on the Deep Blue Sea",
    author: "Laura Lee Hope",
    genre: "mystery",
    description:
      "In this Bobbsey Twins adventure, Nan, Bert, Flossie, and Freddie spend some time in sunny Florida. In between ocean outings, fun at the beach, and exploring the old Spanish settlement of St. Augustine, the twins help their cousin search for a missing friend.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=x2DFDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=x2DFDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250de9-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Bill Murdoch Mysteries: Books 1-3",
    author: "Ged Gillmore",
    genre: "art&photog",
    description:
      "Meet Bill Murdoch, the world's most reluctant private investigator… This box set contains all three books in the Bill Murdoch Mysteries series, each a perfect piece of modern crime fiction which will grab you and keep you guessing until the very last line. Tense and taut, smart and sharply-observed, this series is a 'cracking new addition to the Aussie crime genre'. HEADLAND (Book #1) What happens when a drug dealer is forced to turn detective? Meet Bill Murdoch, the world's most-reluctant private investigator... Murdoch’s doing just ﬁne, thanks for not asking. He’s dealing drugs for a crime syndicate in Sydney and saving for a house by the sea. But what does he think life is, a fairy tale? As the syndicate puts pressure on him to fill the shoes of his murdered boss, Murdoch is cornered by an equally formidable foe: the Australian Tax Ofﬁce demanding an explanation for his sizeable cash income. Murdoch spins a beautiful lie, telling tax inspector, Hannah Simms, he’s a private detective. When Simms asks him to investigate the mystery of her niece's disappearance, Murdoch grabs what he thinks is a golden opportunity to outrun the syndicate. But his arrival in the missing girl's small coastal home town causes an unexpected stir and the reluctant PI soon realises his troubles are only just beginning... CLASS ACT (Book #2) ** Nominated for Best Australian Crime Fiction [Ned Kelly Awards, 2018] ** Can a man who’s lived a life of crime ever escape his past? The world’s most reluctant private investigator is about to find out... Former bad boy turned local hero, Bill Murdoch, should be happy with his little piece of paradise. After all, he’s got the fancy car and the big house by the beach. The only trouble is he’s slowly suffocating in small town life. So when Murdoch is hired to investigate who framed wealthy businessman, James Harte, with the murder of a glamorous young woman, he jumps at the chance. Going undercover among the jet set, Murdoch is quickly drawn into an exciting world of yachts, horse racing and glitzy parties. But soon Murdoch’s shady past looks set to catch up with him and when he falls for Harte’s beautiful wife, Amanda, things take a deadly turn... BASE NATURE (Book #3) How far can you push a man before he reveals his base nature? Bill Murdoch is about to find out… Murdoch takes on two cases in as many days. First he is hired to find local man, Scott Patterson, the victim of a mysterious abduction. Then an impressive stranger arrives in town with a tempting offer. But has Patterson really been abducted? And is the stranger all he appears to be? As Murdoch gives in to temptation and risks everything by returning to his old criminal ways, the hunt for Scott Patterson takes an unexpected turn. Soon Murdoch and his partner, Davie Simms, are dragged into a depraved underworld of human trafficking, prostitution and torture, where they will find evil on their doorstep, and face a desperate fight for their lives... _____________________________________ PRAISE FOR THE MURDOCH BOOKS: \"Gillmore is a great author and knows how to make the characters and setting really interesting\" -- Book Addict's Reviews \"A lot of the success of HEADLAND is down to the character of Bill Murdoch. Dry as a chip, determined, understandably daft at times, he's a survivor first and foremost, but a decent bloke all the same. There's nuance and substance to everyone in this book...this is an extremely promising Australian thriller, PI noir debut\" -- Aust Crime \"[Murdoch] is a guy that is more than capable of handling himself in tough situations and is now on my list of favourite PI's!\" -- BookieWookie _____________________________________ Set in Sydney and small-town Australia, the books in this series are enjoyed by fans of Mick Herron, Peter Temple, Barry Maitland, Ragnar Jonasson, Erik Hamre, Jane Harper, Garry Disher, Mari Hannah, Dave Warner, Pete Brassett, and Iain Rankin's Rebus novels. Ready to meet your new favorite private investigator? Get the series now. Search terms: amateur sleuth, Australia, Australian, Australian crime fiction, British detective, crime, crime fiction, crime mystery, crime thriller, detective, female cop, hard-boiled, human trafficking, international, lad lit, men’s adventure, missing girl, mysteries, mystery, mystery & detective, mystery and detective, Mystery & Thrillers, Mystery and Thrillers, Mystery and thrillers hard- boiled, Mystery and thrillers noir, people smuggling, police procedural, private investigator, series, small town, suspense, thriller",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=T_32DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=T_32DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250dea-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Goodbye Barbary Lane",
    author: "Armistead Maupin",
    genre: "romance",
    description:
      "By turns hilarious and heartbreaking, Armistead Maupin's bestselling Tales of the City novels—the final three of which are collected in this third omnibus volume—stand as an incomparable blend of great storytelling and incisive social commentary on American culture from the seventies through the first two decades of the new millennium. “These final days of his San Francisco friends and lovers, gay and straight, are seriously moving…. Maupin deftly illustrates how far America and the pioneering Anna have come, and nearly forty years into the series, his writing remains wildly addictive but is deeper and richer.”—People The last three novels of Armistead Maupin’s bestselling, critically-acclaimed Tales of the City are now available for the first time as an omnibus edition. The epic series, published between 1978 and 2014, spans the decade before the AIDS crisis through the era of marriage equality following an unforgettable set of characters, whose diverse sexual identities helped set the social stage for the ongoing sexual revolution. Goodbye Barbary Lane—comprised of Michael Tolliver Lives (2007), Mary Ann in Autumn (2010), and The Days of Anna Madrigal (2014)—brings closure to the lives and legacies of the characters through which generations have found connection to America’s larger cultural struggles over the past four decades. Joining two companion omnibus volumes, 28 Barbary Lane and Back to Barbary Lane, Goodbye Barbary Lane presents all of “Mr. Maupin’s adeptness at fluid dialogue, his flair for shaping characters who thread the needle between pop archetypes and singular human beings, and his great gift for intricate if occasionally preposterous plotting”(New York Times).",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=6S1ijwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=6S1ijwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41250deb-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Omega Factor",
    author: "Steve Berry",
    genre: "selfhelp",
    description:
      "The Ghent Altarpiece is the most violated work of art in the world. Thirteen times it has been vandalized, dismantled, or stolen. Why? What secrets does it hold? Enter UNESCO investigator, Nicholas Lee, who works for the United Nations’ Cultural Liaison and Investigative Office (CLIO). Nick’s job is to protect the world’s cultural artifacts—anything and everything from countless lesser-known objects to national treasures. When Nick travels to Belgium for a visit with a woman from his past, he unwittingly stumbles on the trail of a legendary panel from the Ghent Altarpiece, stolen in 1934 under cover of night and never seen since. Soon Nick is plunged into a bitter conflict, one that has been simmering for nearly two thousand years. On one side is the Maidens of Saint-Michael, les Vautours—the Vultures—a secret order of nuns and the guardians of a great truth. Pitted against them is the Vatican, which has wanted for centuries to both find and possess what the nuns guard. Because of Nick the maidens have finally been exposed, their secret placed in dire jeopardy—a vulnerability that the Vatican swiftly moves to exploit utilizing an ambitious cardinal and a corrupt archbishop, both with agendas of their own. From the tranquil canals of Ghent, to the towering bastions of Carcassonne, and finally into an ancient abbey high in the French Pyrenees, Nick Lee must confront a modern-day religious crusade intent on eliminating a shocking truth from humanity’s past. Success or failure—life and death—all turn on the Omega Factor.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=TdtGEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=TdtGEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250dec-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Wild North Land",
    author: "WILLIAM FRANCIS BUTLER,",
    genre: "selfhelp",
    description:
      "People are supposed to have an object in every journey they undertake in this world. A man goes to Africa to look for the Nile, to Rome to see the Coliseum or St. Peter’s; and once, I believe, a certain traveller tramped all the way to Jerusalem for the sole purpose of playing ball against the walls of that city. As this matter of object, then, seems to be a rule with travellers, it may be asked by those who read this book, what object had the writer in undertaking a journey across the snowy wilderness of North America, in winter and alone? I fear there is no answer to be given to the question, save such as may be found in the motto on the title-page, or in the pages of the book itself.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=OsFEEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=OsFEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250ded-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Perfect Regency Set",
    author: "Annabelle Anders",
    genre: "science&tech",
    description:
      "READ THE ENTIRE SERIES! Book one: The Perfect Debutante Sweet-natured Miss Louella Rose looks to be a model debutante — but when she's arranged to marry Cameron, Marquess of Stanton, she can no longer hide the secret she's been keeping. Can their new love help her heal? An emotional historical romance. Book two: The Perfect Spinster Flirtatious attractions threaten to erupt in passion, but duty and honor forbid anything more. OLIVIA labors under no misapprehension that anything other than spinsterhood lies in her future because of one tiny flaw.... one might even call it... a curse. Until, that is, she falls for the charming but unattainable, Lord Kingsley. KINGSLEY is irresistibly intrigued by the Miss Olivia Redfield, and delights himself in their mutual provocation. In no position to promise more than a dalliance, Gabriel takes the unprecedented step of befriending a woman. Book three: The Perfect Christmas Miss Eliza Cline, a vicar's sister, has accepted her life as a quiet industrious spinster. Lord Crestwood, the dashing widowed baron, is the rogue from her past. A chance meeting at a Christmas House party presents a second chance for both of them. But Eliza must decide: has the Baron's unforgivable sin already doomed their love forever? This is a story about forgiveness. Over the course of a lifetime, a person is faced with millions of choices, some more difficult than others. And sometimes, we make the wrong ones. Book four: The Perfect Arrangement His father died before turning forty. His older brother, the original heir, turned up his toes at the age of two and thirty. And this year, his last remaining brother--and the spare--was suddenly killed in a duel. Circumstances aren't looking good for this second spare turned heir. The new duke of Warwick needs a son... And quickly! Lady Lillian has learned that men are not to be trusted--particularly dukes. So when the very handsome but dying \"Mister\" Masterson offers her an opportunity for lifelong independence, it seems to be the perfect arrangement. And it would have been perfect... If only she hadn't gone and fallen in love with him.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=f6wWEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=f6wWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250dee-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Machinery of the Mind",
    author: "Violet M. Firth (Dion Fortune)",
    genre: "shortstory",
    description:
      "Chapters include: The Physical Vehicle Of Consciousness; The Evolution Of The Nervous System; How An Idea Enters The Mind; The Organisation Of The Upper Levels Of The Mind; The Organization Of The Lower Levels Of The Mind; Complexes; The Instincts; The Self-Preservation Instinct; Diseases Of The Self-Preservation Instinct; The Reproductive Instinct; Development Of The Reproductive Instinct; Diseases Of The Reproductive Instinct; Sublimation; Maladaptation To Environment And Psychopathology, and more.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=LcM2EAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=LcM2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41250def-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Wind from the East",
    author: "Almudena Grandes",
    genre: "history",
    description:
      "The bestselling epic story from Spain's most provocative novelist makes its U.S. debut.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=6ynomAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=6ynomAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41250df0-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Immortal Truth",
    author: "Amy Sparling",
    genre: "shortstory",
    description:
      "The action-packed sequel to The Immortal Mark. Cara and Riley know the truth about their new job, but they can’t say a word about it to anyone or they’ll be killed. While their fates hang in the balance, Theo has promised to find a way to help them. Help can’t be found in Austin, so he spends a lot of time traveling and leaving Cara behind to pretend like everything is normal. Tired of sitting around and waiting to die, Cara and Riley want to take matters into their own hands. They discover the secrets of the Rosewater clan, and find out their leader isn’t the leader at all. As mysteries are uncovered, they learn they’ve fallen into a hidden war of immortal clans that’s been raging for centuries. Theo has been shielding Cara from the horrible truth, but Cara has just discovered some truths that even he didn’t know. Also available in audiobook!",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=6mukDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=6mukDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250df1-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Hal Spacejock Omnibus Two",
    author: "Simon Haynes",
    genre: "graphicnovel",
    description:
      "This special release contains books 4, 5 and 6 in the Hal Spacejock series, plus a special bonus story (Hal Spacejock Framed).",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=3YtcDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=3YtcDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250df2-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Modern Romance June 2022 Books 5-8: A Baby to Tame the Wolfe (Passionately Ever After...) / Cinderella in the Billionaire's Castle / The Princess He Must Marry / Undone by Her Ultra-Rich Boss",
    author: "Heidi Rice",
    genre: "art&photog",
    description: "Red Hot Romances from Mills & Boon!",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=iVJlEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=iVJlEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250df3-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title:
      "Short Lesbian Books Brought Together by Catherine Douglass Known Lesbian Author",
    author: "Catherine Douglass",
    genre: [],
    description:
      "i have taken books i self published with a few not published with poetry meant for this book. mix of human, shifter and even God's in the last story. Ebony. Mexican, Spanish. Amazon beauties many with one white shifter or human who love their several ebony beauties.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Jje3ugEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Jje3ugEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41250df4-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Falcon's Bend Case Files, Vol 1 (The Early Cases)",
    author: "Karen Wiesner",
    genre: "horror",
    description:
      "\"Bugs\" A partially digested body is found in the oxidation ditch at the Falcon's Bend Wastewater Treatment Plant. Was it an accident...or is new Falcon's Bend Investigator Pete Shasta facing his first murder? \"Broken Wings\" Just 2 months ago, a runaway daughter Keith Pierce never knew he had landed on his doorstep. Seventeen years earlier, Keith Pierce had a brief, intense affair with a woman on the lam. When Keith returns to Kat's hometown of Falcon's Bend to find his daughter's mother, he discovers that Kat disappeared shortly after giving birth to Quinn. Investigator Pete Shasta solves a decade and a half old missing-person case that's about to turn into murder. \"Obsessions\" A newborn baby is stolen from Falcon's Bend Community Hospital's maternity ward...and Lt. Pete Shasta's only lead is to the Liace Adoption Agency, which set up the open adoption of the unmarried mother's baby. Case Representative Lisa Mercer is as suspicious and defensive as she is beautiful. Pete finds himself breaking the cardinal rule of investigation-never get emotionally involved with anyone even remotely associated with a case. With a kidnapper who seems to believe there's nothing left to lose and potentially everything to gain, and his own uncontrollable feelings for Lisa, Pete's about to learn just how dangerous obsessions can be. \"Blind Revenge\" For the first 3 years of her life, Lindsay Bronwyn had nightmares about a witch who wanted her eyes. Nineteen years later, those nightmares have come true when she's found murdered on her kitchen floor, her eye sockets empty. Falcon's Bend Investigator Danny Vincent faces the supernatural to get at a chilling flesh and blood truth. \"Fixated\" Someone has been following new Falcon's Bend citizen Risa Nitzberg for the past few weeks. Victor Brooks, her neighbor from across the street who's become fixated with Risa from afar, steps in when Risa's creepy stalker decides to get up close and personal.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Aq-BJx3erNwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Aq-BJx3erNwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250df5-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Lake Howling Series, Books 4-6",
    author: "Lani Blake",
    genre: "art&photog",
    description:
      "In a small Oregon town, three different couples are in for the ride of their life… LOL funny, sizzling sexy, this set of contemporary romances will deliver you all the feels, from USA Today bestselling author Lani Blake. IT ONLY TOOK YOU (Cubby and Katie) His best friend’s sister should be off-limits. Sheriff Cubby Hawker loves his job, his mother, and his friends… but the woman side of things is not going so well. He’s had his chances, take his best bud’s sister, sexy Katie McBride. She’d thrown her heart at him and he’d been to slow to catch it. She left him the next day, and now years later, she’s a detective. A sexy, hard assed one who turns him inside out. Finding her halfway down a bourbon bottle, broken and scared, makes him want to protect her, he’s just not sure she’ll let him. DON'T LOOK BACK (Brad and Macy) Second chance seduction. Brad Gelderman rode his Harley into the small town of Lake Howling with one intention. Find Ethan, apologize, then leave. No messy emotion required. What he hadn’t factored on was arriving the day of his brother’s wedding, or meeting Macy Reynolds. A LONG WAY HOME (Newman and Hope) Opposites attract. Watch out Newman. Corporate raider Paul Theodore Newman likes his life to run smoothly. His sheets have a thread count between 1400-1500, and his spreadsheets are always on point. Maybe when he’s back in Lake Howling he lets down his guard and his personal hygiene slips, but there is absolutely no need for Hope Lawrence to take shots at him because she dresses che dumpster. Her fashion sense makes him shudder, as do her kale smoothies! If you enjoy your small town romance sizzling with a side of crazy then Lake Howling is for you. Meet the real authority in town, the local book club, and maybe ask Willow to draw you a memento! Swim in the ice cold lake, then warm up with a coffee and mystery muffin at The Hoot Café. Plenty of feels and LOL’s, all wrapped up in a town that will have you packing your bags to head there from the opening page. THE LAKE HOWLING SERIES A Promise Of Home The Texan Meets His Match How Sweet It Is It Only Took You Don’t Look Back A Long Way Home Then Came You Faith and the Rock Star",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=xFc-EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=xFc-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250df6-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Mr. Brave",
    author: "Roger Hargreaves",
    genre: "horror",
    description:
      "They're back! Rediscover the zaniest characters you've ever met in this best-selling series which has sold millions worldwide. Bright and charming, with easily recognizable characters and a small take-along format, Mr. Men and Little Miss books are easy enough for young readers, witty enough for humor-prone adults, and highly collectible for one and all. Also check your local listings to view the Mr. Men & Little Miss TV show. Back to the Mr. Men & Little Miss microsite.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=6GKpE0lPL0YC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=6GKpE0lPL0YC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41250df7-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Vampire in Crisis",
    author: "Dale Mayer",
    genre: "art&photog",
    description:
      "Tessa's world exploded. She survived Deanna's inheritance. She sees more, hears more … understands more. But more is not always better. Cody doesn’t like what's happening around him. Tessa has walked through hell and she has a lot more to go before she's clear. He plans on standing by her side – her guardian – whether she wants him to be there for her or not. Jared can't believe all trails lead him into trouble. He'd escaped once. Tried to stay out of the mess since. But a friend is missing, and when he tries to get help, the person he confides in goes missing too. The vampire world was never ready for Tessa before. The new Tessa? No one is ready for her.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=-ji_BQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=-ji_BQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250df8-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "4 Books by E. M. Forster",
    author: "E. M. Forster",
    genre: "scifi",
    description:
      "Compiled in one book, the essential collection of books by E. M. Forster:Howards EndThe Longest JourneyA Room With A ViewWhere Angels Fear to Tread",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=XLWXRC0vlaEC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=XLWXRC0vlaEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41250df9-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    genre: "selfhelp",
    description:
      "An unhappily married woman, Emma Bovary's unfulfilled dreams of romantic love and desperation to escape the ordinary boredom of her life lead her to a series of desperate acts, including adultery, in a classic novel set against the backdrop of nineteenth-",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2XIoODQ-JSsC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=2XIoODQ-JSsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41250dfa-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Be Sure",
    author: "Seanan McGuire",
    genre: "shortstory",
    description:
      "Collecting the first three volumes in the multi award-winning Wayward Children series. Book 1: Every Heart a Doorway Book 2: Down Among the Sticks and Bones Book 3: Beneath the Sugar Sky Children have always disappeared under the right conditions; slipping through the shadows under a bed or at the back of a wardrobe, tumbling down rabbit holes and into old wells, and emerging somewhere... else. But magical lands have little need for used-up miracle children. When the heroes of the other lands find themselves thrust back into a world without magic, spent and directionless, and with parents who no longer understand their charges (if ever they did), the miracle children need somewhere to turn. Eleanor West's Home for Wayward Children No Solicitations / No Visitors / No Quests But quests are what these children do best...",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=LWqBEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=LWqBEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41250dfb-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Daisy Dalrymple Mysteries",
    author: "Carola Dunn",
    genre: "graphicnovel",
    description:
      'More than twenty years ago, Carola Dunn introduced to the world the charming, vivacious and perspicacious Daisy Dalrymple and the tumultuous decade of the 1920s, in an England barely starting to recover from World War I and now undergoing rapid social changes. Death at Wentwater Court: In early 1923, the young Honourable Daisy Dalrymple has made a decision that shocks her social class—she\'s decided to make her own living as a writer. Landing an assignment to write a series of articles on country manor houses, Daisy travels to Wentwater Court to research her first piece. There she finds a household in turmoil, filled with holiday guests and recriminations. But that\'s nothing compared to the uproar when one of those guests turns up dead in an "accident." The Winter Garden Mystery: Continuing her assignment on country manor houses, Daisy travels to gloomy Occles Hall, which is under the charge of the autocratic Lady Valeria. While touring the gardens, Daisy discovers the body of a parlor maid that had gone missing two months prior. Distressed by the ineptitude of the local police force, Daisy plunges in to help find the killer before he strikes again. Requiem for a Mezzo: Back in London, Daisy attends a performance of Verdi\'s "Requiem." During the show, the lead soprano keels over dead of an apparent poisoning. Joining Daisy in figuring out what happened is Scotland Yard Detective Inspector Alec Fletcher. The two embark on finding who wanted the singer dead, and why.',
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=vhpfBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=vhpfBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250dfc-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Arsenic and Adobo",
    author: "Mia P. Manansala",
    genre: "scifi",
    description:
      "A RUSA Award-winning novel! The first book in a new culinary cozy series full of sharp humor and delectable dishes—one that might just be killer.... When Lila Macapagal moves back home to recover from a horrible breakup, her life seems to be following all the typical rom-com tropes. She's tasked with saving her Tita Rosie's failing restaurant, and she has to deal with a group of matchmaking aunties who shower her with love and judgment. But when a notoriously nasty food critic (who happens to be her ex-boyfriend) drops dead moments after a confrontation with Lila, her life quickly swerves from a Nora Ephron romp to an Agatha Christie case. With the cops treating her like she's the one and only suspect, and the shady landlord looking to finally kick the Macapagal family out and resell the storefront, Lila's left with no choice but to conduct her own investigation. Armed with the nosy auntie network, her barista best bud, and her trusted Dachshund, Longanisa, Lila takes on this tasty, twisted case and soon finds her own neck on the chopping block…",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=TyeOEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=TyeOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41250dfd-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Billionaire Romance Complete Series",
    author: "Michelle Love",
    genre: "graphicnovel",
    description:
      "Sloan Whitlock is a busy woman. Entering her final semester of grad school, she's completely focused on her work, but when a misunderstanding threatens her life, everything changes. Lucas Montgomery was one of the wealthiest and most successful men in the city, and he's not used to hearing the word no. When he catches sight of Sloan at Club 9, he knows he has to have her. She was a vision of innocence, and he was desperate to have a taste. Someone is out to ruin Lucas and Sloan becomes a target merely because the person behind it all can see that Lucas is looking at Sloan with more than a little interest. Kidnappings, attempted murders, and more come between to two as they grasp at having some sort of a relationship. The odds are against them. Then the unimaginable occurs and love is found beyond the lust they share. Can this couple find the happiness that is evading them? Can their stubborn personalities work together to work to save not only their lives but their relationship as well? Or will the person behind the plot to ruin the handsome billionaire get what they want and ruin them all?",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=oVd0zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=oVd0zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "41250dfe-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Love is Rage",
    author: "Shanna Bell",
    genre: "action&adventure",
    description:
      "Sixteen years ago, Elena had to betray Viking in order to save him. Now, he’s hungry for revenge against the woman who was once his obsession. As he takes her captive and seeks to break her, a dark desire reignites… Could you give love a second chance after a betrayal? Elena. Viking is the love of my life. I both saved and betrayed him. Now, I'm at his mercy. One look in his eyes and I know he wants to break me. Fight or flight? Viking. Elena was the love of my life, my obsession, and my ruin. Sixteen years ago, she betrayed me by marrying my enemy. Now, I discover her betrayal didn't end there; she stole my kid. I’m gonna take away her future, just like she took mine. Note: - This book contains some traumas. If this offends you, please skip this one in the series. - It can be read as a stand-alone. No cliffhanger. For fans of Monica James, Natasha Knight, Julia Sykes, CD Reiss, Aleatha Romig, Skye Warren, Anna Zaires, Renee Rose, Carrie Ann Ryan, Penelope Ward, Lauren Blakely, Meghan March, Vanessa Vale, Katee Robert. Topics: adult romance, alpha male, romantic suspense, romance series, bad boy romance, emotional read, contemporary romance, inspirational romance, mafia romance, romance audiobook, second chance at love, sexually romantic books, contemporary romance books, revenge romance, steamy romance books, hidden pregnancy romance.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=dIsiEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=dIsiEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "41250dff-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Pirate Gold",
    author: "F. J. Stimson",
    genre: "essays",
    description:
      "Trieste Publishing has a massive catalogue of classic book titles. Our aim is to provide readers with the highest quality reproductions of fiction and non-fiction literature that has stood the test of time. The many thousands of books in our collection have been sourced from libraries and private collections around the world.The titles that Trieste Publishing has chosen to be part of the collection have been scanned to simulate the original. Our readers see the books the same way that their first readers did decades or a hundred or more years ago. Books from that period are often spoiled by imperfections that did not exist in the original. Imperfections could be in the form of blurred text, photographs, or missing pages. It is highly unlikely that this would occur with one of our books. Our extensive quality control ensures that the readers of Trieste Publishing's books will be delighted with their purchase. Our staff has thoroughly reviewed every page of all the books in the collection, repairing, or if necessary, rejecting titles that are not of the highest quality. This process ensures that the reader of one of Trieste Publishing's titles receives a volume that faithfully reproduces the original, and to the maximum degree possible, gives them the experience of owning the original work.We pride ourselves on not only creating a pathway to an extensive reservoir of books of the finest quality, but also providing value to every one of our readers. Generally, Trieste books are purchased singly - on demand, however they may also be purchased in bulk. Readers interested in bulk purchases are invited to contact us directly to enquire about our tailored bulk rates.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=CENSswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=CENSswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412534f0-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Suspendered Sentence",
    author: "Laura Bradford",
    genre: [],
    description:
      "Visit the Amish community of Heavenly, Pennsylvania, where shop owner Claire Weatherly has come to appreciate a simpler, more peaceful way of life. But dark secrets are about to complicate things in this novel in the Amish Mystery series. After the Stoltzfus barn catches fire, Claire is awed by the response of the community. Hundreds of Amish men gather together to raise a new barn for the family in a matter of days. But in the midst of the work, a human skeleton is unearthed. Found with the remains is half of a friendship bracelet last seen on Sadie Lehman, an Amish teen long believed to have left her strict upbringing for the allure of English ways. Now Detective Jakob Fisher—once a member of the Amish community himself—is determined to solve the young woman’s murder. With Claire’s help, he must dig into the past and bring to light long-buried secrets—secrets that someone is willing to kill to protect...",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=0ZONEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=0ZONEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412534f1-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Of Much Love and Some Knowledge of Books",
    author: "Henry Eduard Legler",
    genre: "essays",
    description:
      "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible. Therefore, you will see the original copyright references, library stamps (as most of these works have been housed in our most important libraries around the world), and other notations in the work. This work is in the public domain in the United States of America, and possibly other nations. Within the United States, you may freely copy and distribute this work, as no entity (individual or corporate) has a copyright on the body of the work. As a reproduction of a historical artifact, this work may contain missing or blurred pages, poor pictures, errant marks, etc. Scholars believe, and we concur, that this work is important enough to be preserved, reproduced, and made generally available to the public. We appreciate your support of the preservation process, and thank you for being an important part of keeping this knowledge alive and relevant.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=76j3wwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=76j3wwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412534f2-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "No Limits",
    author: "Peter David",
    genre: "history",
    description:
      "For readers new to the New Frontier series and for fans of Peter David's original creation, the charismatic, complex and volatile Captain Mackenzie Calhoun, the first eight books in the New Frontier series are here collected into one magnificent omnibus volume. From rescuing refugees from the Thallonian Empire to battling the unstoppable Black Mass, the adventures of Captain Calhoun and his crew will have both collectors and first-time fans on the edge of their seats.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=VE7TQ_0h7-sC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=VE7TQ_0h7-sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "412534f3-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Devil's Rebellion and the Reason Why",
    author: "Charles F May",
    genre: "horror",
    description:
      "Trieste Publishing has a massive catalogue of classic book titles. Our aim is to provide readers with the highest quality reproductions of fiction and non-fiction literature that has stood the test of time. The many thousands of books in our collection have been sourced from libraries and private collections around the world.The titles that Trieste Publishing has chosen to be part of the collection have been scanned to simulate the original. Our readers see the books the same way that their first readers did decades or a hundred or more years ago. Books from that period are often spoiled by imperfections that did not exist in the original. Imperfections could be in the form of blurred text, photographs, or missing pages. It is highly unlikely that this would occur with one of our books. Our extensive quality control ensures that the readers of Trieste Publishing's books will be delighted with their purchase. Our staff has thoroughly reviewed every page of all the books in the collection, repairing, or if necessary, rejecting titles that are not of the highest quality. This process ensures that the reader of one of Trieste Publishing's titles receives a volume that faithfully reproduces the original, and to the maximum degree possible, gives them the experience of owning the original work.We pride ourselves on not only creating a pathway to an extensive reservoir of books of the finest quality, but also providing value to every one of our readers. Generally, Trieste books are purchased singly - on demand, however they may also be purchased in bulk. Readers interested in bulk purchases are invited to contact us directly to enquire about our tailored bulk rates.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=slzuswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=slzuswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412534f4-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "These Three Remain",
    author: "Pamela Aidan",
    genre: [],
    description:
      "This thrilling conclusion to the Fitzwilliam Darcy, Gentleman trilogy recounts the climactic events of Jane Austen’s Pride and Prejudice from its enigmatic hero’s point of view. One of the most beloved romantic heroes in all of literature, Fitzwilliam Darcy remains an enigma even to Jane Austen’s most devoted fans. But with this concluding volume in the Fitzwilliam Darcy, Gentleman trilogy, novelist and Austen aficionada Pamela Aidan at last gives readers the man in full. These Three Remain follows a humbled Darcy on the journey of self-discovery after Elizabeth Bennet’s rejection of his marriage proposal, in which he endeavors to grow into the kind of gentleman he’s always dreamed of being. Happily, a chance meeting with Elizabeth during a tour of his estate in Derbyshire offers Darcy a new opportunity to press his suit, but his newfound strengths are put to the test by an old nemesis, George Wickham. Vividly capturing the colorful historical and political milieu of the Regency era, Aidan writes in a style evocative of her literary progenitor, but with a wit and humor very much her own. While staying faithful to the people and events in Austen’s original, she adds her own fascinating cast of characters, weaving a rich tapestry out of Darcy’s past and present that will beguile his admirers anew.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=QgKglAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=QgKglAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412534f5-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Show No Mercy",
    author: "Cindy Gerard",
    genre: [],
    description:
      "The sexy heroes of Black Ops, Inc., a covert private security team, sizzle in New York Times bestselling author Cindy Gerard's electrifying new romantic suspense series. THE SULTRY HEAT... Only two things can compel journalist Jenna McMillan back to Buenos Aires after terrorists held her captive there just months before: a rare interview with a shadowy billionaire and the memory of the dark and dangerous man who saved her.... HIDES THE DEADLIEST THREATS... Bad guys, bombs, and bullets are Gabriel Jones's way of life. But he'll never forget the brash redhead he rescued not so long ago...or the passionate kiss they shared before he sent her packing.... AND EXPOSES THE DEEPEST DESIRES. Now, forced together by a bombing at the National Congress, Jenna and Gabe confront the urgent longings that simmer between them. But this surprise meeting is no coincidence. A ruthless enemy stalks them with deadly precision. The question is...if they make it out alive, will Gabe turn his back on Jenna...again?",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Sq8xszEr6UIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Sq8xszEr6UIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "412534f6-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Written on the Body",
    author: "Jeanette Winterson",
    genre: "essays",
    description:
      "The most beguilingly seductive novel to date from the author of The Passion and Sexing the Cherry. Winterson chronicles the consuming affair between the narrator, who is given neither name nor gender, and the beloved, a complex and confused married woman. “At once a love story and a philosophical meditation.” —New York Times Book Review.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=aq6OEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=aq6OEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412534f7-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Books of the South: Tales of the Black Company",
    author: "Glen Cook",
    genre: "science&tech",
    description:
      "In a second omnibus of tales featuring the Black Company, the survivors of the devastating battle at the Tower of Charm are hounded by the predatory Shadowmasters throughout a risky march to the south. Original.15,000 first printing.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=jdAMU0nsnJAC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=jdAMU0nsnJAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9960-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Epic Zero Series",
    author: "R. L. Ullman",
    genre: "shortstory",
    description:
      "Extraordinary family. Ordinary kid. Elliott Harkness is the youngest in a family of superheroes, but he has no powers of his own - or so he thinks. Follow Elliott's hilarious journey to fit in with his family, save the world, and make it home for dinner.Get all three novels in the award-winning superhero adventure series in one epic volume for 15% off! Perfect for fans of Diary of a Wimpy Kid and The Incredibles! The Epic Zero Collection includes 48 illustrated character profiles and a full glossary of superpowers.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sYAXMQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sYAXMQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9961-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Fantastic Mr. Fox",
    author: "Roald Dahl",
    genre: "graphicnovel",
    description:
      "Three farmers, each one meaner than the other, try all-out warfare to get rid of the fox and his family.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=inZhHuo89T8C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=inZhHuo89T8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9962-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Dark is Rising",
    author: "Susan Cooper",
    genre: "scifi",
    description:
      "On his eleventh birthday Will Stanton discovers that he is the last of the Old Ones, destined to seek the six magical Signs that will enable the Old Ones to triumph over the evil forces of the Dark.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=gaeHmgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=gaeHmgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9963-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Isabella, Set 5 Chapter Books",
    author: "Christopher Stitt",
    genre: "graphicnovel",
    description: "No description",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "412d9964-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Contest",
    author: "Gordon Korman",
    genre: "shortstory",
    description:
      "Dominic, Chris, Perry, Tilt, Sammi, Bryn, and Cameron compete with each other to be selected as part of a team of teenage climbers with the goal of ascending Mount Everest.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=6GE2YAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=6GE2YAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9965-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Chomp'd",
    author: "Susan Berran",
    genre: [],
    description:
      "Book number 5 in the hilariously disgusting freaky series. Kids are hanging out for each title in this very clever, hilariously funny series. It's grosser, weirder, funnier, and even smellier than the books that came before it. Take another brilliantly twisted adventure with Sam, Jared, and little miss dung daks smelly melly poop pants as they head off on holiday to the most dangerous place on the planet. But, is it really a holiday or a final resting place to get rid of annoying kids? With the poisonous puke plants, ferocious farting animals, tree swinging hippies, and Smelly Melly's deadliest fungus growing, chunky chuck-up nappies yet. This time, adventure is snapping at their heels, and they just might not be able to keep their stomachs' contents down.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=Z70ZngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=Z70ZngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9966-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "House of Danger",
    author: "R. A. Montgomery",
    genre: "fantasy",
    description:
      "'Choose Your Own Adventure' has captured our imagination and our spirit for adventure, as children read and collect the many treasured volumes in this series. These unique books empower and challenge 8-12 year olds with decision-making throughout each story. The interactive adventures feature multiple choices, multiple endings, and countless story variations with \"you\" - the reader - as the protagonist of the story. Featuring spectacular covers by award winning illustrator Marc McBride.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_zyoAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_zyoAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9967-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Jake Atlas and the Tomb of the Emerald Snake",
    author: "Rob Lloyd Jones",
    genre: "mystery",
    description: "Synopsis coming soon.......",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sd1AvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sd1AvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9968-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The King's Demon",
    author: "Graham Staplehurst",
    genre: "shortstory",
    description: "No description",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "412d9969-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Nude",
    author: "Morris Gleitzman",
    genre: "history",
    description:
      "Amy's mum is missing, her dad's left and she's stuck with a baby she's never seen before. Meanwhile Sprocket has no idea how he ended up all alone in the bush, naked and with no food. But one thing's for sure - being chased around by fiendish little brats isn't going to help him remember anything ...",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=ykqiQgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=ykqiQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d996a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Ark Angel",
    author: "Anthony Horowitz",
    genre: "shortstory",
    description:
      "After recovering from a near fatal gunshot wound, teenage spy Alex Rider embarks on a new mission to stop a group of eco-terrorists from sabotaging the launch of the first outer space hotel.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=IevnAQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=IevnAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d996b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Snakehead",
    author: "Anthony Horowitz",
    genre: "science&tech",
    description:
      "The Australian Secret Service recruits Alex Rider to infiltrate a ruthless gang known as Snakeheads. Alex accepts the assignment, and it becomes his most dangerous mission yet.",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=9GpAPgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=9GpAPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d996c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Stormsearch",
    author: "Robert Westall",
    genre: [],
    description:
      "A boy and his uncle discover a model ship buried in the sand after a coastal storm. The model ship yields up a secret that sets them on a journey into the past to solve a mystery.",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=I06pQAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=I06pQAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d996d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Sea of Trolls",
    author: "Nancy Farmer",
    genre: "fantasy",
    description:
      "The three-time Newbery Honor-winning author and National Book Award recipient pens a new adventure set in A.D. 793 in the land of the Vikings, where two children are soon swept up in a quest on which they encounter a dragon, a giant spider, and trolls.",
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=gh7hAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=gh7hAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d996e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Amber Spyglass",
    author: "Philip Pullman",
    genre: "action&adventure",
    description:
      'There are worlds beyond our own - the Compass will show the way... The third novel in Philip Pullman\'s epic HIS DARK MATERIALS trilogy. The first, NORTHERN LIGHTS, is now the stunning motion picture THE GOLDEN COMPASS, made by New Line Cinema and Scholastic Media. The terrible war foretold by the witches is coming. Will is the bearer of the subtle knife, the most powerful weapon in all the worlds, and must deliver it to Lord Asriel. But he faces his dangerous journey alone, for Lyra has disappeared... "An extraordinary masterpiece" DAILY MAIL',
    inventoryCount: 3,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=tXkUNgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=tXkUNgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d996f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Rainbow Magic: Carmen the Cheerleading Fairy",
    author: "Daisy Meadows",
    genre: "essays",
    description:
      "Join Rachel and Kirsty as they meet Carmen the Cheerleading fairy and help her to save the Cove City cheerleading competition! When Kirsty takes part in the Cove City cheerleading competition, everything goes wrong! Cheerleaders forget how to work together, lose their confidence and don't practise their routines safely. Jack Frost has stolen Carmen the Cheerleading Fairy's magical objects and caused all this mayhem! Can Rachel and Kirsty help Carmen to get her magical objects back before the competition is ruined? Rainbow Magic is the perfect stepping stone for children to become independent readers. With black and white illustrations, short chapters and lots of books to collect, these books are really accessible for children aged 5+. 'These stories are magic; they turn children into readers!' ReadingZone.com Do YOU have a Rainbow Magic fairy? Find a fairy with your name at https://orchardseriesbooks.co.uk/rainbow-magic/ and collect all the books in the range.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=OmdozgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=OmdozgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9970-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Guardians of Ga'Hoole #6: The Burning",
    author: "Kathryn Lasky",
    genre: "shortstory",
    description:
      "A Great Battle is on the horizon and drawing near. In preparation, Soren and his band must fly to the mysterious Northern Kingdom to find allies and study the grim art of war.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "412d9971-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Beyond the Grave",
    author: "Jude Watson",
    genre: "selfhelp",
    description:
      "A clue takes Amy and Dan Cahill to Egypt, where they investigate the origins of the rivalry between the Tomas and Ekaterina branches of their family and try to figure out if they can trust a message from their dead grandmother Grace.",
    inventoryCount: 3,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sCHungEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sCHungEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9972-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Kevon's Echidna",
    author: "Ross G. Pearce",
    genre: "shortstory",
    description: "No description",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "412d9973-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J. K. Rowling",
    genre: "art&photog",
    description:
      "When Harry and his best friends go back for their third year at Hogwarts, the atmosphere is tense. There's an escaped mass-murderer on the loose and the sinister prison guards of Azkaban have been called in to guard the school. Lessons, however, must go on and there are lots of new subjects in third year - Care of Magical Creatures and Divination among others - to take Harry's mind off things!",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=nfRhQgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=nfRhQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9974-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Long Patrol",
    author: "Brian Jacques",
    genre: "children",
    description:
      "Tenth Thrilling Redwall Adventure - New In Paperback! Damug Warfang, Head Of A Thousand Rapscallions - The Deadliest Horde Of Foebeasts Ever To Jump From Ship To Shore - Is Looking For Slaughter And Plunder. Can Any Beast Stand Against The Conqueror And His Savage Troops? Tammo'S Dream Comes True When He Is Given The Chance To Run With The Long Patrol, The Legendary Fighting Hares Of Salamandastron. . .",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=dpKnkf5pILAC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=dpKnkf5pILAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9975-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Lisa, Set 5, Chapter Books",
    author: "Elizabeth Best",
    genre: [],
    description: "No description",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "412d9976-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Feral and Spam, Set 5, Chapter Books",
    author: "Bev McGregor",
    genre: "scifi",
    description: "No description",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "412d9977-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Scorpia",
    author: "Anthony Horowitz",
    genre: "history",
    description:
      "After being told that his father was an assassin for a criminal organization, fourteen-year-old Alex goes to Italy to find out more and becomes involved in a plan to kill thousands of English schoolchildren.",
    inventoryCount: 0,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=SvJlPgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=SvJlPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9978-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Amber Spyglass",
    author: "Philip Pullman",
    genre: "fantasy",
    description:
      "For all those who are dying to learn the fate of Will and Lyra, hoping for the return of Iorek Byrnison, longing to know the truth about Dust, and waiting to face the ultimate clash of opposing powers, this book has the answers.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=q2ONDAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=q2ONDAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9979-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Your Very Own Robot",
    author: "R. A. Montgomery",
    genre: "action&adventure",
    description:
      "Your parents are scientists. One day, they throw some pieces of a robot into the rubbish. If you can figure out how to put the pieces together, you'll have a robot of your very own! But do you know enough to control it? Or will it take over your school?",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=z1eQKAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=z1eQKAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d997a-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Woodsong",
    author: "Gary Paulsen",
    genre: "shortstory",
    description:
      "The author describes his love for the natural world, his involvement in dogsledding, and his experiences taking part in the Iditarod, the 1,180-mile dogsled race across Alaska.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=CQ0QuhLX7pIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=CQ0QuhLX7pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "412d997b-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The Wizard of Oz",
    author: "Lyman Frank Baum",
    genre: "art&photog",
    description:
      "The Pearson Education Library Collection offers you over 1200 fiction, nonfiction, classic, adapted classic, illustrated classic, short stories, biographies, special anthologies, atlases, visual dictionaries, history trade, animal, sports titles and more",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=kSTql-520p8C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=kSTql-520p8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d997c-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Blue Fin",
    author: "Colin Thiele",
    genre: "art&photog",
    description:
      "Reprint of a popular 'classic' children's adventure story. A clumsy young boy shows great heroism when disaster strikes his father's fishing boat.The book was made into a feature film and was highly recommended by the Children's Book Council in 1970, placed on the Honour List of the International Board of Books for Young People and made an American Library Association Notable Book in 1974.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=HGCbnN2EnQEC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=HGCbnN2EnQEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d997d-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Loamhedge",
    author: "Brian Jacques",
    genre: "mystery",
    description:
      "While a group of adventurers from Redwall seeks out the ancient abbey of Loamhedge in hopes of curing a young haremaid's paralysis, Redwall is besieged by vermin.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=jcRSPgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=jcRSPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d997e-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Can You Survive a Virus Outbreak?",
    author: "Matt Doeden",
    genre: "horror",
    description: '"A You Choose adventure about surviving a virus outbreak"--',
    inventoryCount: 0,
    isTrending: false,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=4yoXCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=4yoXCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "412d997f-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    genre: "selfhelp",
    description:
      "Sequel to Harry Potter and the sorcerer's stone. When the chamber of secrets is opened again at the Hogswart School for witchcraft and wizardry, second-year student Harry Potter finds himself in danger from a dark power that has once more been released on the school.",
    inventoryCount: 0,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=bUMUvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=bUMUvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9980-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Pirate Island Adventure",
    author: "Peggy Parish",
    genre: "selfhelp",
    description:
      'Three children vacationing on Pirate Island discover a long-lost family "treasure."',
    inventoryCount: 3,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=FGMuBr8cB_QC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=FGMuBr8cB_QC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9981-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Tintin in America",
    author: "Hergé",
    genre: "shortstory",
    description:
      "The world’s most famous travelling reporter heads for America. Gangsters, Cowboys, Indians and the Big Apple await Tintin when he travels across the Atlantic to America. He soon finds himself in terrible danger - but with Snowy to help him, he faces it head on . . . Join the most iconic character in comics as he embarks on an extraordinary adventure spanning historical and political events, and thrilling mysteries. Still selling over 100,000 copies every year in the UK and having been adapted for the silver screen by Steven Spielberg and Peter Jackson in 2011. The Adventures of Tintin continue to charm more than 80 years after they first found their way into publication. Since then an estimated 230 million copies have been sold, proving that comic books have the same power to entertain children and adults in the 21st century as they did in the early 20th.",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=NKMSAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=NKMSAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9982-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Nowhere to Run",
    author: "Jude Watson",
    genre: "selfhelp",
    description:
      "Guardians of the 39 Clues, Dan Cahill and his sister Amy discover that the serum is missing and must race against time to get it back before catastrophe strikes",
    inventoryCount: 1,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=2EOqjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=2EOqjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9983-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "River Boy",
    author: "Tim Bowler",
    genre: "shortstory",
    description:
      'A new mass-market edition of this Carnegie Medal-winner.One of the classic teenage novels of the nineties, "River Boy" is an emotional, moving book which has had a profound influence on its readers. Following the story of Jess\'s dying grandfather, and the marathon river swim Jess becomes caught up in, it uses poetic and surreal images of water andswimming to deal with the difficult subjects of death and loss in an accessible and affecting way.* Winner of the Carnegie Medal and the Angus Book Prize* A moving poetic exploration of grief and loss.* Internationally successful - foreign rights have so far been sold to America, Denmark, Sweden, Germany, Belgium, Italy, Poland and Portugal. A film option has been agreed.* New cover treatment to match Tim Bowler\'s wonderful new novel, "Storm Catchers".* Author was born and brought up in Leigh-on-Sea, Essex, and now lives in Totnes, Devon.',
    inventoryCount: 3,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=w6lrc-9EapgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=w6lrc-9EapgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    id: "412d9984-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Rainbow Magic: Paula the Pumpkin Fairy",
    author: "Daisy Meadows",
    genre: [],
    description:
      "Join Paula the Pumpkin Fairy on a super spooky magical adventure this halloween! Paula the Pumpkin Fairy helps make sure that Halloween parties everywhere have pumpkins to carve and games to play. But when Jack Frost plots to ruin Halloween, Rachel and Kirsty must help Paula to save the celebration before it's too late! 'These stories are magic; they turn children into readers!' ReadingZone.com If you like Rainbow Magic, check out Daisy Meadows' other series: Magic Animal Friends and Unicorn Magic!",
    inventoryCount: 1,
    isTrending: true,
    isRecommended: false,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=_PUFzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=_PUFzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9985-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "Harriet Clare",
    author: "Louise Park",
    genre: [],
    description: "No description",
    inventoryCount: 2,
    isTrending: true,
    isRecommended: true,
    imgUrl: {
      smallThumbnail:
        "http://books.google.com/books/content?id=57gXjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=57gXjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    id: "412d9986-4fd1-11ed-974c-e5401eef768f",
  },
  {
    title: "The World of Pooh Collection",
    author: "Alan Alexander Milne",
    genre: "scifi",
    description:
      "The story of Winnie-the-Pooh and his friends Piglet, Christopher Robin, Piglet, Rabbit and Owl, Kanga and Roo - not forgetting Eeyore - and their adventures in the Hundred Acre Wood.",
    inventoryCount: 2,
    isTrending: false,
    isRecommended: false,
    imgUrl: {
      thumbnail: "./assets/img/default-book-cover.webp",
    },
    id: "412d9987-4fd1-11ed-974c-e5401eef768f",
  },
];

// create default credentials
const defaultCredentials = [
  new User("admin", "admin", "admin@silentlibrary.com", "admin", true, [], []),
  new User(
    "user",
    "user",
    "user@silentlibrary.com",
    "user",
    false,
    [
      "40f10599-4fd1-11ed-974c-e5401eef768f",
      "40f10598-4fd1-11ed-974c-e5401eef768f",
      "40f10597-4fd1-11ed-974c-e5401eef768f",
      "40f10596-4fd1-11ed-974c-e5401eef768f",
      "40f10595-4fd1-11ed-974c-e5401eef768f",
      "40f10595-4fd1-11ed-974c-e5401eef768f",
    ],
    [
      "40f10594-4fd1-11ed-974c-e5401eef768f",
      "40f10593-4fd1-11ed-974c-e5401eef768f",
      "40f10592-4fd1-11ed-974c-e5401eef768f",
      "40f10591-4fd1-11ed-974c-e5401eef768f",
    ]
  ),
];

function getActiveLink() {
  const currentPage = location.pathname;

  // change link color of current page link
  $(".link > a:not(:has(img))").each(function () {
    const $this = $(this);

    if ($this.attr("href").includes(currentPage)) {
      $this.addClass("active-link");
    }
  });
}

// nav sort logic
function navSort(sort) {
  localStorage.setItem("currSort", `#${sort}`);
  location.replace(`/browse.html#${sort}`);
}

function initialize() {
  const loginButton = $(".login");
  const signupButton = $(".signup");
  const accountButton = $(".account");
  const accountButtonText = $(".account > a.button");
  const viewAccountLink = $(".account .view-account > a");
  const signoutButton = $("#signout");

  // check if logged-in
  if (localStorage.getItem("login")) {
    loginButton.hide();
    signupButton.hide();
    accountButton.show();

    // check if admin
    if (JSON.parse(localStorage.getItem("login")).isAdmin) {
      accountButtonText.text("Admin");
      viewAccountLink.text("Admin Dashboard");
    }
  }

  // signout button logic
  signoutButton.on("click", (e) => {
    localStorage.removeItem("login");
    location.pathname = "/log-in.html";
  });

  // store default login credentials on local storage
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultCredentials));
  }

  // store books array on local storage
  if (!localStorage.getItem("books")) {
    localStorage.setItem("books", JSON.stringify(booksArray));
  }

  // nav sort buttons event listeners
  $("a[id*='nav-sort']").each((_, sortButton) => {
    sortButton.addEventListener("click", (e) => {
      e.preventDefault();
      navSort(e.path[0].id.split("-")[2]);
    });
  });
}

// jquery load nav and footer
$(document).ready(function () {
  $("#nav-bar-container").load("./partials/navigation.html", function () {
    getActiveLink();
    initialize();
  });
  $("#footer-container").load("./partials/footer.html", function () {
    getActiveLink();
  });
});

export default booksArray;
