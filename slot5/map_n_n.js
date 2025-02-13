const movies = [
    {
        id: 2,
        Title: "Halloween Ends",
        ReleaseDate: "2022-10-14",
        Description: "The saga of Michael Myers and Laurie Strode comes to a spine-chilling climax in this final installment of this trilogy.",
        Language: "English",
        ProducerId: 3,
        DirectorId: 1
    },
    {
        id: 3,
        Title: "The Super Mario Bros. Movie",
        ReleaseDate: "2023-04-07",
        Description: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess. Feature film adaptation of the popular video game.",
        Language: "English",
        ProducerId: 6,
        DirectorId: 2
    },
    {
        id: 5,
        Title: "Hellraiser",
        ReleaseDate: "2022-10-07",
        Description: "A take on Clive Barker's 1987 horror classic where a young woman struggling with addiction comes into possession of an ancient puzzle box, unaware that its purpose is to summon the Cenobites.",
        Language: "English",
        ProducerId: 7,
        DirectorId: 4
    },
    {
        id: 6,
        Title: "\r\nLuckiest Girl Alive",
        ReleaseDate: "2022-10-07",
        Description: "A woman in New York, who seems to have things under control, is faced with a trauma that makes her life unravel.",
        Language: "English",
        ProducerId: 8,
        DirectorId: 5
    },
    {
        id: 8,
        Title: "Broadchurch",
        ReleaseDate: "2013-03-04",
        Description: "The murder of a young boy in a small coastal town brings a media frenzy, which threatens to tear the community apart.",
        Language: "English",
        ProducerId: 7,
        DirectorId: 5
    },
    {
        id: 9,
        Title: "Top Gun: Maverick",
        ReleaseDate: "2022-05-27",
        Description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
        Language: "English",
        ProducerId: 1,
        DirectorId: 6
    },
    {
        id: 10,
        Title: "The Wolf of Wall Street",
        ReleaseDate: "2014-01-11",
        Description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        Language: "English",
        ProducerId: 1,
        DirectorId: 5
    }
];
const movie_star = [
    { MovieId: 2, StarId: 1 },
    { MovieId: 2, StarId: 2 },
    { MovieId: 2, StarId: 3 },
    { MovieId: 3, StarId: 4 },
    { MovieId: 3, StarId: 5 },
    { MovieId: 3, StarId: 6 },
    { MovieId: 5, StarId: 7 },
    { MovieId: 5, StarId: 8 },
    { MovieId: 10, StarId: 9 },
    { MovieId: 10, StarId: 10 }
];
const stars = [
    {
        id: 1,
        FullName: "Jamie Lee Curtis",
        Male: false,
        Dob: "1958-11-22",
        Description: "Jamie Lee Curtis was born on November 22, 1958 in Los Angeles, California, the daughter of legendary actors Janet Leigh and Tony Curtis. She got her big break at acting in 1978 when she won the role of Laurie Strode in Halloween (1978). After that, she became famous for roles in movies like Trading Places (1983), Perfect (1985)",
        Nationality: "USA"
    },
    {
        id: 2,
        FullName: "Andi Matichak",
        Male: false,
        Dob: "1970-09-11",
        Description: "Andi Matichak is an American actress. She has appeared in such television series as 666 Park Avenue, Orange Is the New Black and Blue Bloods. She stars as Allyson Nelson in the horror film Halloween (2018), a direct sequel to the 1978 original film of the same name. Matichak was born in Framingham, Massachusetts, but raised in the suburbs of Chicago, Illinois. She attended St. Francis High School in Wheaton, Illinois. During a summer while still in high school, Matichak worked as a model in Greece, where she met a talent agent who encouraged her to act.",
        Nationality: "USA"
    },
    {
        id: 3,
        FullName: "James Jude Courtney",
        Male: true,
        Dob: "1957-01-31",
        Description: "James Jude Courtney was born on January 31, 1957 in Portland, Ohio, USA. He is an actor, known for Far and Away (1992), Halloween Kills (2021) ",
        Nationality: "USA"
    },
    {
        id: 4,
        FullName: "Chris Pratt",
        Male: true,
        Dob: "1979-06-21",
        Description: "Christopher Michael \"Chris\" Pratt was born on June 21, 1979 in Virginia, Minnesota and raised in Lake Stevens, Washington, to Kathleen Louise (Indahl), who worked at a supermarket, and Daniel Clifton Pratt, who remodeled houses. He is of mostly Norwegian descent. He graduated from Lake Stevens High School in 1997, and has two older siblings.",
        Nationality: "USA"
    },
    {
        id: 5,
        FullName: "\r\nAnya Taylor-Joy",
        Male: false,
        Dob: "1996-04-16",
        Description: "Anya-Josephine Marie Taylor-Joy (born 16 April 1996) is a British-American actress. She is best known for her roles as Beth Harmon in Gambit H?u (2020), Thomasin in the period horror film Phu Thuy (2015), as Casey Cooke in the horror-thriller Tach Biet (2016)",
        Nationality: "USA"
    },
    {
        id: 6,
        FullName: "Charlie Day",
        Male: true,
        Dob: "1976-02-09",
        Description: "Charles Peckham Day was born in New York City, NY, and raised in Middletown, Rhode Island. His parents are both music teachers - his mother, Mary (Peckham), is a piano teacher, and his father, Dr. Thomas Charles Day, was a professor of music at Salve Regina University in Newport, Rhode Island. Charlie plays both piano and guitar.",
        Nationality: "USA"
    },
    {
        id: 7,
        FullName: "Odessa A’zion",
        Male: false,
        Dob: "1984-10-01",
        Description: "Odessa A’zion is known for Hellraiser (2022), Conception (2011) and The Inhabitant (2022).",
        Nationality: "USA"
    },
    {
        id: 8,
        FullName: "Jamie Clayton",
        Male: false,
        Dob: "1978-01-15",
        Description: "Jamie Clayton's big break was playing Kyla on season three of the hit HBO series Hung alongside Thomas Jane. After her multi-episode arc on Hung, Jamie joined actors Mary Lynn Rajskub and Hank Harris as a lead in the Emmy winning digital series, Dirty Work, playing crime scene cleanup maven Michelle.",
        Nationality: "USA"
    },
    {
        id: 9,
        FullName: "Leonardo DiCaprio",
        Male: true,
        Dob: "1974-11-11",
        Description: "Leonardo Wilhelm DiCaprio was born November 11, 1974 in Los Angeles, California, the only child of Irmelin DiCaprio (née Indenbirken) and former comic book artist George DiCaprio. His father is of Italian and German descent, and his mother, who is German-born, is of German and Russian ancestry. His middle name, \"Wilhelm\", was his maternal grandfather's first name.",
        Nationality: "USA"
    },
    {
        id: 10,
        FullName: "Jonah Hill",
        Male: true,
        Dob: "1983-12-20",
        Description: "Jonah Hill was born and raised in Los Angeles, the son of Sharon Feldstein (née Chalkin), a fashion designer and costume stylist, and Richard Feldstein, a tour accountant for Guns N' Roses. He is the brother of music manager Jordan Feldstein and actress Beanie Feldstein.",
        Nationality: "USA"
    },
    {
        id: 11,
        FullName: "Jamie Lee Curtis",
        Male: false,
        Dob: "1958-11-22",
        Description: "Jamie Lee Curtis was born on November 22, 1958 in Los Angeles, California, the daughter of legendary actors Janet Leigh and Tony Curtis. She got her big break at acting in 1978 when she won the role of Laurie Strode in Halloween (1978). After that, she became famous for roles in movies like Trading Places (1983), Perfect (1985)",
        Nationality: "USA"
    },
    {
        id: 12,
        FullName: "Andi Matichak",
        Male: false,
        Dob: "1970-09-11",
        Description: "Andi Matichak is an American actress. She has appeared in such television series as 666 Park Avenue, Orange Is the New Black and Blue Bloods. She stars as Allyson Nelson in the horror film Halloween (2018), a direct sequel to the 1978 original film of the same name. Matichak was born in Framingham, Massachusetts, but raised in the suburbs of Chicago, Illinois. She attended St. Francis High School in Wheaton, Illinois. During a summer while still in high school, Matichak worked as a model in Greece, where she met a talent agent who encouraged her to act.",
        Nationality: "USA"
    },
    {
        id: 13,
        FullName: "James Jude Courtney",
        Male: true,
        Dob: "1957-01-31",
        Description: "James Jude Courtney was born on January 31, 1957 in Portland, Ohio, USA. He is an actor, known for Far and Away (1992), Halloween Kills (2021) ",
        Nationality: "USA"
    },
    {
        id: 14,
        FullName: "Chris Pratt",
        Male: true,
        Dob: "1979-06-21",
        Description: "Christopher Michael \"Chris\" Pratt was born on June 21, 1979 in Virginia, Minnesota and raised in Lake Stevens, Washington, to Kathleen Louise (Indahl), who worked at a supermarket, and Daniel Clifton Pratt, who remodeled houses. He is of mostly Norwegian descent. He graduated from Lake Stevens High School in 1997, and has two older siblings.",
        Nationality: "USA"
    },
    {
        id: 15,
        FullName: "\r\nAnya Taylor-Joy",
        Male: false,
        Dob: "1996-04-16",
        Description: "Anya-Josephine Marie Taylor-Joy (born 16 April 1996) is a British-American actress. She is best known for her roles as Beth Harmon in Gambit H?u (2020), Thomasin in the period horror film Phu Thuy (2015), as Casey Cooke in the horror-thriller Tach Biet (2016)",
        Nationality: "USA"
    },
    {
        id: 16,
        FullName: "Charlie Day",
        Male: true,
        Dob: "1976-02-09",
        Description: "Charles Peckham Day was born in New York City, NY, and raised in Middletown, Rhode Island. His parents are both music teachers - his mother, Mary (Peckham), is a piano teacher, and his father, Dr. Thomas Charles Day, was a professor of music at Salve Regina University in Newport, Rhode Island. Charlie plays both piano and guitar.",
        Nationality: "USA"
    },
    {
        id: 17,
        FullName: "Odessa A’zion",
        Male: false,
        Dob: "1984-10-01",
        Description: "Odessa A’zion is known for Hellraiser (2022), Conception (2011) and The Inhabitant (2022).",
        Nationality: "USA"
    },
    {
        id: 18,
        FullName: "Jamie Clayton",
        Male: false,
        Dob: "1978-01-15",
        Description: "Jamie Clayton's big break was playing Kyla on season three of the hit HBO series Hung alongside Thomas Jane. After her multi-episode arc on Hung, Jamie joined actors Mary Lynn Rajskub and Hank Harris as a lead in the Emmy winning digital series, Dirty Work, playing crime scene cleanup maven Michelle.",
        Nationality: "USA"
    },
    {
        id: 19,
        FullName: "Leonardo DiCaprio",
        Male: true,
        Dob: "1974-11-11",
        Description: "Leonardo Wilhelm DiCaprio was born November 11, 1974 in Los Angeles, California, the only child of Irmelin DiCaprio (née Indenbirken) and former comic book artist George DiCaprio. His father is of Italian and German descent, and his mother, who is German-born, is of German and Russian ancestry. His middle name, \"Wilhelm\", was his maternal grandfather's first name.",
        Nationality: "USA"
    },
    {
        id: 20,
        FullName: "abc",
        Male: true,
        Dob: "2023-09-14",
        Description: "test\r\n",
        Nationality: "UK"
    }
];

// yeu cau: trả về danh sách movies và danh sách tên start tham gia tương ứng

let rs = movies.map(m => {
    console.log(m.id)
    const listStartIds = movie_star.filter(mv => mv.MovieId == m.id).map(mv => mv.StarId)
    const listStartNames = stars.filter(s => listStartIds.includes(s.id)).map(s => s.FullName)
    return {
        ...m,
        starNames: listStartNames
    }

    //console.log(listStartNames)
    // console.log(listStartIds)
    // console.log("------------------------")
})
console.log(rs)