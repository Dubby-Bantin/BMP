import { BiAward, BiBookOpen, BiHeart } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
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
    '"The Art of Timeless Stories" takes readers on a journey through the life of protagonist Alex Rivera, a struggling writer who discovers an ancient manuscript with the power to bring stories to life. Set against the backdrop of modern New York and ancient Alexandria, the novel explores themes of creativity, legacy, and the enduring power of storytelling.',
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
      '"The stories we tell define not just who we are, but who we might become. Each word written is a possibility, each sentence a new world waiting to be born."',
    text: "Alex stared at the ancient parchment, its edges crumbling with age. The text seemed to shimmer as he read, the ink catching the light in impossible ways. He could feel the weight of centuries in every carefully inscribed letter, as if the very history of storytelling itself was being channeled through his fingertips.",
    page: "Page 42",
  },
  readerReviews: {
    review:
      '"A masterpiece that redefines the boundaries between reality and fiction. Doe\'s prose is elegant, her characters unforgettable."',
    source: "— The Literary Review",
  },
};

const authorData = {
  tagline: "Meet the Author",
  name: "Jane Doe",
  description:
    "Jane Doe is an award-winning author known for her lyrical prose and complex, emotionally resonant characters.",
  bio: [
    "Born in Chicago and educated at Columbia University, Jane spent her early career as a journalist before publishing her first novel, 'Whispers in Winter,' which won the National Book Award.",
    "Her work explores the intersection of history, mythology, and modern life, focusing on how ancient narratives continue to shape our understanding of ourselves and our place in the world.",
  ],
  achievements: [
    {
      Icon: BiAward,
      text: "Pulitzer Prize Winner",
    },
    {
      Icon: BiBookOpen,
      text: "Published in 24 Languages",
    },
  ],
  contactButtonText: "Contact for Events",
  contactLink: "#contact",
};

const reviewsData = {
  tagline: "Reviews",
  title: "Critical Acclaim",
  description:
    'See what critics and readers are saying about "The Art of Timeless Stories"',
  reviews: [
    {
      id: 1,
      quote:
        "A remarkable achievement in storytelling that will stay with readers long after they've turned the final page.",
      author: "The New York Times",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Doe crafts a narrative so intricate and believable that one forgets they're reading fiction. Truly a masterpiece.",
      author: "Literary Review",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Beautifully written and emotionally resonant. A powerful exploration of creativity and human connection.",
      author: "The Guardian",
      rating: 4,
    },
    {
      id: 4,
      quote:
        "Immersive, thought-provoking, and impossible to put down. An instant classic that transcends genre.",
      author: "Entertainment Weekly",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "Jane Doe's prose shimmers with clarity and beauty. This novel confirms her status as one of our most important contemporary writers.",
      author: "The Atlantic",
      rating: 5,
    },
  ],
  statistics: [
    { number: "1M+", label: "Copies Sold" },
    { number: "42", label: "Weeks on Bestseller List" },
    { number: "24", label: "Languages Translated" },
  ],
};

export { books, aboutData, authorData, reviewsData };
