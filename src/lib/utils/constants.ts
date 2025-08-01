import { BiBookOpen, BiHeart } from "react-icons/bi";
import { CgLock } from "react-icons/cg";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Author", href: "/author#author" },
  { name: "Books", href: "/books#books" },
  { name: "Book club", href: "/#bookclub" },
  { name: "Contact", href: "/contact" },
];

const books = [
  {
    id: 1,
    title: "A Short History of Europe",
    author: "Simon Jenkins",
    subtitle: "From Pericles to Putin",
    image: "/images/book1.jpg", // Replace with your image path
  },
  {
    id: 2,
    title: "Shakespeare's Sonnets, Retold",
    author: "William Shakespeare",
    subtitle: "Foreword by Stephen Fry",
    image: "/images/logo2.png", // Replace with your image path
  },
  {
    id: 3,
    title: "Becoming",
    author: "Michelle Obama",
    subtitle: "",
    image: "/images/book2.jpg", // Replace with your image path
  },
];

const aboutData = {
  tagline: "The Story",
  title: "About the Book",
  description:
    "Discover the journey, themes, and inspiration behind this captivating story.",
  bookDescription:
    '"Giving unmanaged aid and assistance, unwittingly creating dependencies, do not alleviate poverty. This book is a story of how one hungry young man in a hurry  triumphed over poverty and child labor in Nigeria to walk the halls of corporate giants in the United States and the United Kingdom. The story, initially requested by his children, is dedicated to his late mother, Mary.',
  bookDetails: [
    {
      Icon: BiBookOpen,
      title: "Genre",
      desc: "Literary Fiction",
    },
    {
      Icon: CgLock,
      title: "Published",
      desc: "June 2023",
    },
    {
      Icon: BiHeart,
      title: "Rating",
      desc: "4.8/5 (942 reviews)",
    },
  ],
  bookExcerpt: {
    quote:
      '"Simultaneously, the book seeks to inspire all hungry young men and women all over the world to strive, undeterred, to live their own lives on their own terms, no matter their background and starting point to benefit themselves and the world at large. Despte missteps along the way, this young man in a hurry had a reasonably successful and content life with sufficient resources to invest in giving to others in need. This book, son of Mary, is a recipe with enough details on how the journey was completed, using learning and education as the primary tools of choice."',
    text: "Imagine a world where aid between countries targets hungry young men and women in a hurry everywhere, guiding and helping them on their way to shoot for the stars. It's a win-win. What a better world it would be! ”",
  },
  readerReviews: {
    review:
      '"Giving unmanaged aid and assistance, unwittingly creating dependencies, do not alleviate poverty. This book is a story of how one hungry young man in a hurry triumphed over poverty and child labor in Nigeria to walk the halls of corporate giants in the United States and the United Kingdom. The story, initially requested by his children, is dedicated to his late mother, Mary."',
  },
};

const authorData = {
  tagline: "Meet the Author",
  name: " CHARLIE O UKWU",
  description:
    "Charlie O Ukwu was born the son of a coal miner at Iva Valley, near Enugu, Nigeria.",
  bio: [
    "Despite an exciting six-year job at the Nigerian Broadcasting Corporation, Charlie left, casting his faith to the wind, to pursue learning and education. He acquired multiple academic credentials: Diploma in Mass Communication (University of Lagos, Nigeria) BA in Journalism/Economics (Indiana University, Bloomington, USA) MA in Economics (Indiana University, Bloomington, USA) MBA in Business Computing Science (Texas A&M University, College Station, USA)",
    "Charlie’s strategy of prioritizing education over immediate financial gain worked so well that he recommends it to young people. He believes that life’s mission should be bigger than just chasing money. Readers can explore this philosophy further in his upcoming book, Money Disorder.",
  ],

  contactButtonText: "Contact for Events",
  contactLink: "/contact",
};

const reviewsData = {
  tagline: "Reviews",
  title: "Critical Acclaim",
  description:
    'See what critics and readers are saying about "The Young man in a hurry"',
  reviews: [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde fugit deserunt voluptatum temporibus quasi.",
      author: "The New York Times",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde fugit deserunt voluptatum temporibus quasi",
      author: "Lorem Ipsum",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde fugit deserunt voluptatum temporibus quasi",
      author: "Lorem Ipsum",
      rating: 4,
    },
    {
      id: 4,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde fugit deserunt voluptatum temporibus quasi",
      author: "Lorem Ipsum",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde fugit deserunt voluptatum temporibus quasi",
      author: "Lorem Ipsum",
      rating: 5,
    },
  ],
  statistics: [
    { number: "__", label: "Copies Sold" },
    { number: "__", label: "Weeks on Bestseller List" },
    { number: "__", label: "Languages Translated" },
  ],
};

const paragraphs = [
  "Young Man In A Hurry: Son of Mary by Charlie O. Ukwu is a memoir detailing the author's journey from poverty and child labor in Nigeria to achieving success in the corporate sectors of the United States and the United Kingdom.",
  "The narrative emphasizes the limitations of unmanaged aid, suggesting that such assistance can inadvertently foster dependency rather than alleviate poverty. Ukwu's story, initially penned at the request of his children and dedicated to his late mother, Mary, serves as an inspiration for individuals worldwide to pursue their aspirations, regardless of their starting point. The memoir underscores the importance of education and personal determination in overcoming adversity and achieving self-reliance.",
];

export { books, aboutData, authorData, reviewsData, navLinks, paragraphs };
