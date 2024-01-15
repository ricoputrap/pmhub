import { addProperty } from "@/app/lib/property/actions";
import Input from "@/app/ui/input";
import Link from "next/link";

export default async function Page() {
  
  return (
    <>
      <h1 className="text-2xl font-semibold">Add Property</h1>

      <div className='mt-4'>
        <form action={addProperty} className='flex flex-col gap-4'>
          <Input
            label="Name"
            name='name'
            placeholder="Your name"
            required
          />

          <div className='flex gap-4'>
            <Input
              label="Email"
              name='email'
              placeholder="Your email"
              required
            />
            <Input
              label="Password"
              name='password'
              type='password'
              placeholder="Your password"
              required
            />
          </div>

          <Input
            label="Timezone"
            name='timezone'
            placeholder="Your timezone"
            required
          />

          <Input
            label="Contact Number"
            name='contact_number'
            placeholder="Your contact number"
          />

          <div className='mt-6 flex justify-end gap-4'>
            <Link href='/property' className='btn h-fit py-2 px-4 rounded-2xl'>
              Cancel
            </Link>

            <button className='btn btn-neutral h-fit py-2 px-4 rounded-2xl' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}