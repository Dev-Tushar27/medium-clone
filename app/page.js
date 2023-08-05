"use client"
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PostsList from "./components/PostsList";
export default function Home() {
    return (
      <div>
        <Navbar />
        <Banner />
        <PostsList />
      </div>
    )
  
}
