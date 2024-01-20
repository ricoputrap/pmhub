import Input from "@/app/ui/input";
import InputPassword from "@/app/ui/input-password";
import { register } from "@/server/auth";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Register</h1>

      <div className='mt-4'>
        <form action={register} className='flex flex-col gap-4'>
          <Input
            label="Name"
            name='name'
            placeholder="Your name"
            required
          />

          <Input
            label="Email"
            name='email'
            placeholder="Your email"
            required
          />
          <InputPassword
            label="Password"
            name='password'
            placeholder="Your password"
            required
          />

          <div className='mt-6 flex gap-4'>
            <Link href='/' className='flex-1 btn h-fit py-2 px-4 rounded-2xl'>
              Cancel
            </Link>

            <button className='flex-1 btn btn-neutral h-fit py-2 px-4 rounded-2xl' type='submit'>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  )
}