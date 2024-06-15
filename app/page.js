"use client"
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";
import { useAuth } from "./context/auth";
export default function Home() {
  const {currUser} = useAuth();
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="w-[55%] my-5">
          <PostsList />
        </div>
      </div>
    </>
  )
  
}
