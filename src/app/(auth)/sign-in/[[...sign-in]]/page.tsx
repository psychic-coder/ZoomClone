//the bracket structure [[...sign-in]] makes sure we catch hold of all the redirects to the sign-in page

import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
        <SignIn />
    </main>
  )
}

export default SignInPage