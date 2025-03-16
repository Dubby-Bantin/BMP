import { Montserrat, Playwrite_IT_Trad } from "next/font/google";

const playwriteIT = Playwrite_IT_Trad({
  variable: "--font-playwrite-it",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});
export { playwriteIT, montserrat };
