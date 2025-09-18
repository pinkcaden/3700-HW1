const MOVIES_URL = "https://localhost:3000/movies"
const MOCK_MOVIES_URL = "./data/movies.json";

const movieObjs =
    [
        {
            "id": 1,
            "title": "Gladiator",
            "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
            "year": 2000,
            "boxOffice": "460.5M",
            "director": "Ridley Scott",
            "budget": "103M",
            "actors": [
                {
                    "name": "Russell Crowe",
                    "role": "Maximus Decimus Meridius"
                },
                {
                    "name": "Joaquin Phoenix",
                    "role": "Commodus"
                },
                {
                    "name": "Connie Nielsen",
                    "role": "Lucilla"
                },
                {
                    "name": "Oliver Reed",
                    "role": "Proximo"
                }
            ]
        },
        {
            "id": 2,
            "title": "The Lord of the Rings: The Return of the King",
            "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam.",
            "year": 2003,
            "boxOffice": "1.146B",
            "director": "Peter Jackson",
            "budget": "94M",
            "actors": [
                {
                    "name": "Elijah Wood",
                    "role": "Frodo Baggins"
                },
                {
                    "name": "Viggo Mortensen",
                    "role": "Aragorn"
                },
                {
                    "name": "Ian McKellen",
                    "role": "Gandalf"
                },
                {
                    "name": "Orlando Bloom",
                    "role": "Legolas"
                },
                {
                    "name": "Sean Bean",
                    "role": "Boromir"
                }
            ]
        },
        {
            "id": 3,
            "title": "Avengers: Endgame",
            "description": "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions.",
            "year": 2019,
            "boxOffice": "2.798B",
            "director": "Anthony and Joe Russo",
            "budget": "356M",
            "actors": [
                {
                    "name": "Robert Downey Jr.",
                    "role": "Tony Stark / Iron Man"
                },
                {
                    "name": "Chris Evans",
                    "role": "Steve Rogers / Captain America"
                },
                {
                    "name": "Mark Ruffalo",
                    "role": "Bruce Banner / Hulk"
                },
                {
                    "name": "Chris Hemsworth",
                    "role": "Thor"
                },
                {
                    "name": "Scarlett Johansson",
                    "role": "Natasha Romanoff / Black Widow"
                }
            ]
        },
        {
            "id": 4,
            "title": "The Godfather",
            "description": "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
            "year": 1972,
            "boxOffice": "246.1M",
            "director": "Francis Ford Coppola",
            "budget": "6M",
            "actors": [
                {
                    "name": "Marlon Brando",
                    "role": "Vito Corleone"
                },
                {
                    "name": "Al Pacino",
                    "role": "Michael Corleone"
                },
                {
                    "name": "James Caan",
                    "role": "Santino 'Sonny' Corleone"
                },
                {
                    "name": "Robert Duvall",
                    "role": "Tom Hagen"
                }
            ]
        },
        {
            "id": 5,
            "title": "Pulp Fiction",
            "description": "The lives of two mob hitmen, a boxer, and others intertwine in four tales of violence and redemption.",
            "year": 1994,
            "boxOffice": "214.2M",
            "director": "Quentin Tarantino",
            "budget": "8M",
            "actors": [
                {
                    "name": "John Travolta",
                    "role": "Vincent Vega"
                },
                {
                    "name": "Samuel L. Jackson",
                    "role": "Jules Winnfield"
                },
                {
                    "name": "Uma Thurman",
                    "role": "Mia Wallace"
                },
                {
                    "name": "Bruce Willis",
                    "role": "Butch Coolidge"
                }
            ]
        },
        {
            "id": 6,
            "title": "The Dark Knight",
            "description": "Batman faces his greatest psychological and physical tests when the Joker wreaks havoc on Gotham City.",
            "year": 2008,
            "boxOffice": "1.006B",
            "director": "Christopher Nolan",
            "budget": "185M",
            "actors": [
                {
                    "name": "Christian Bale",
                    "role": "Bruce Wayne / Batman"
                },
                {
                    "name": "Heath Ledger",
                    "role": "The Joker"
                },
                {
                    "name": "Aaron Eckhart",
                    "role": "Harvey Dent / Two-Face"
                },
                {
                    "name": "Michael Caine",
                    "role": "Alfred Pennyworth"
                }
            ]
        },
        {
            "id": 7,
            "title": "Forrest Gump",
            "description": "A man with low IQ accomplishes great things and influences several defining historical events.",
            "year": 1994,
            "boxOffice": "678.2M",
            "director": "Robert Zemeckis",
            "budget": "55M",
            "actors": [
                {
                    "name": "Tom Hanks",
                    "role": "Forrest Gump"
                },
                {
                    "name": "Robin Wright",
                    "role": "Jenny Curran"
                },
                {
                    "name": "Gary Sinise",
                    "role": "Lieutenant Dan Taylor"
                },
                {
                    "name": "Mykelti Williamson",
                    "role": "Bubba Blue"
                }
            ]
        },
        {
            "id": 8,
            "title": "Shadowfall",
            "description": "In a dystopian future, a rogue hacker uncovers a government conspiracy that could destroy what's left of free society.",
            "year": 2023,
            "boxOffice": "312.7M",
            "director": "Ava Thornton",
            "budget": "85M",
            "actors": [
                {
                    "name": "Liam Ryder",
                    "role": "Kade Voss"
                },
                {
                    "name": "Naomi Blair",
                    "role": "Agent Mira"
                },
                {
                    "name": "Julian West",
                    "role": "Director Halden"
                },
                {
                    "name": "Zara Kim",
                    "role": "Echo"
                }
            ]
        },
        {
            "id": 9,
            "title": "The Silent Summit",
            "description": "A team of mountaineers is stranded on the world’s highest peak, where silence hides a deadly secret.",
            "year": 2021,
            "boxOffice": "146.9M",
            "director": "Marco Villanueva",
            "budget": "48M",
            "actors": [
                {
                    "name": "Elena Brooks",
                    "role": "Dr. Lena Carter"
                },
                {
                    "name": "Thomas Yue",
                    "role": "Rajiv Batra"
                },
                {
                    "name": "Cameron Dean",
                    "role": "Mason Holt"
                },
                {
                    "name": "Farah Ali",
                    "role": "Zara Khan"
                }
            ]
        },
        {
            "id": 10,
            "title": "Neon Drift",
            "description": "In the neon-lit underworld of Tokyo’s illegal street racing scene, a young driver must win one last race to save his family.",
            "year": 2022,
            "boxOffice": "204.3M",
            "director": "Kenji Sakamoto",
            "budget": "65M",
            "actors": [
                {
                    "name": "Jace Carter",
                    "role": "Ryker Takeda"
                },
                {
                    "name": "Aya Mori",
                    "role": "Emi Kuroda"
                },
                {
                    "name": "Leon Grant",
                    "role": "Cole Strickland"
                },
                {
                    "name": "Mina Park",
                    "role": "Yuki"
                }
            ]
        },
        {
            "id": 11,
            "title": "Eclipse Protocol",
            "description": "A disgraced astronaut returns to Earth only to discover a covert mission is already underway to prevent a solar catastrophe.",
            "year": 2024,
            "boxOffice": "379.8M",
            "director": "Natalie Greer",
            "budget": "110M",
            "actors": [
                {
                    "name": "Marcus Lane",
                    "role": "Commander Elias Drake"
                },
                {
                    "name": "Sophia Wren",
                    "role": "Dr. Aria Holt"
                },
                {
                    "name": "Dev Patel",
                    "role": "Ravi Mehta"
                },
                {
                    "name": "Gina Torres",
                    "role": "General Monroe"
                }
            ]
        },
        {
            "id": 12,
            "title": "Whispers in the Fog",
            "description": "In a sleepy coastal town, a journalist uncovers a series of murders tied to a centuries-old legend.",
            "year": 2019,
            "boxOffice": "94.2M",
            "director": "Declan Marsh",
            "budget": "25M",
            "actors": [
                {
                    "name": "Clara Dunn",
                    "role": "Elena Voss"
                },
                {
                    "name": "Jack Morrissey",
                    "role": "Sheriff Tom Rourke"
                },
                {
                    "name": "Emily Zhao",
                    "role": "Leah Chen"
                },
                {
                    "name": "Richard Boone",
                    "role": "Silas Granger"
                }
            ]
        },
        {
            "id": 13,
            "title": "The Last Ember",
            "description": "A young mage must harness a forbidden power to stop an ancient evil from consuming the world.",
            "year": 2025,
            "boxOffice": "420.1M",
            "director": "Rami Korin",
            "budget": "120M",
            "actors": [
                {
                    "name": "Theo Maddox",
                    "role": "Kael Emberborn"
                },
                {
                    "name": "Isla Monroe",
                    "role": "Selene Virel"
                },
                {
                    "name": "Dante Cruz",
                    "role": "Thorne"
                },
                {
                    "name": "Maya Lin",
                    "role": "High Priestess Anara"
                }
            ]
        },
        {
            "id": 14,
            "title": "Frame by Frame",
            "description": "A reclusive film editor realizes the footage he's restoring contains evidence of a decades-old crime.",
            "year": 2020,
            "boxOffice": "67.5M",
            "director": "Jeanette Holloway",
            "budget": "15M",
            "actors": [
                {
                    "name": "Noah Chambers",
                    "role": "Eli Grant"
                },
                {
                    "name": "Rose Delaney",
                    "role": "Mara Quinn"
                },
                {
                    "name": "Omar Kingsley",
                    "role": "Detective Jules"
                },
                {
                    "name": "Annika Graves",
                    "role": "Sylvia Hart"
                }
            ]
        },
        {
            "id": 15,
            "title": "Iron Saints",
            "description": "In a post-apocalyptic wasteland, a group of armored monks protect the last remnants of civilization from raiders and machines.",
            "year": 2023,
            "boxOffice": "298.4M",
            "director": "Luis Tanaka",
            "budget": "90M",
            "actors": [
                {
                    "name": "Tobias Kane",
                    "role": "Brother Malric"
                },
                {
                    "name": "Jun Park",
                    "role": "Warden Vex"
                },
                {
                    "name": "Amara Diaz",
                    "role": "Sister Kyra"
                },
                {
                    "name": "Henry Giles",
                    "role": "The Iron King"
                }
            ]
        }
    ]




function getMoviesObject() {
    const moviesFetch = movieObjs;
    // loading movies from api^
    const moviesSet = {}

    moviesFetch.forEach(movieObject =>{
        const identifier = Date.now().toString()+ Math.random().toString();
        moviesSet[identifier] = movieObject;
    });


    return moviesSet;

}