"use client"
import { FaGoogle, FaGithub, } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useAuth } from 'app/context/auth/index';
import toast from "react-hot-toast";
import { googleProvider, githubProvider } from "../../firebaseConfig";

const page = () => {
    const router = useRouter();
    const { loginUser,currUser} = useAuth();
    const handleGoogleSignIn = async()=>{
        try{      
            await loginUser(googleProvider);
            toast.success("Logged In Successfully");
            router.push('/');
        }catch(err){
            toast.error("Something went wrong");
        }        
    }
    const handleGitHubSignIn = async ()=>{
        try{
            await loginUser(githubProvider);
            console.log(currUser);
            toast.success("Logged In Successfully");
            router.push('/');
        }catch(err){
            toast.err("Somethig went wrong")
        }
    }
  return (
    <div className='bg-gray-200 h-[100vh] flex justify-center items-center'>
        <div className='bg-white w-[40%] h-1/2 py-6 rounded-[20px]'>
            <div className='flex flex-col items-center gap-20 lg:col-span-1'>
                <div className='my-6'>
                    <h1 className='text-6xl font-extrabold'>
                        SignUp
                    </h1>
                </div>
                
                <div className='flex flex-col gap-2'>
                    <button onClick={handleGoogleSignIn} className="bg-white rounded-full px-4 py-2 flex text-black border-2 border-black items-center gap-4 hover:bg-black hover:text-white">
                        <FaGoogle size={20} />Continue with google
                    </button>
                    <button onClick={handleGitHubSignIn} className="bg-white rounded-full px-4 py-2 flex text-black border-2 border-black items-center gap-4 hover:bg-black hover:text-white">
                        <FaGithub size={20} />Continue with github
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
