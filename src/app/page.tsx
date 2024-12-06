// import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./page.module.css"
import Posts from "./posts/page";

export default function Home() {
  return (
   
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          
        <Posts />
      </main>
      
          
  );
}
