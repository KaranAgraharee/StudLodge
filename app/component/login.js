"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button className='border-2 border-r-blue-500 border-t-blue-200 border-l-blue-300 border-b-blue-600 bg-slate-300 active:border-black hover:bg-slate-400 pl-2 pr-2 rounded-2xl' onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button className='border-2 border-r-blue-500 border-t-blue-200 border-l-blue-300 border-b-blue-600 bg-slate-300 active:border-black hover:bg-slate-400 pl-2 pr-2 rounded-2xl' onClick={() => signIn()}>Sign in</button>
  </>
}
