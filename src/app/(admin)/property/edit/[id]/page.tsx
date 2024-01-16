import { getProperty } from "@/app/lib/property";
import { editProperty } from "@/app/lib/property/actions";
import Input from "@/app/ui/input";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getProperty(params.id);

  return (
    <>
      <h1 className="text-2xl font-semibold">Edit Property</h1>

      <div className='mt-4'>
        <form action={editProperty} className='flex flex-col gap-4'>
          <input type="hidden" name="id" value={params.id} />

          <Input
            label="Name"
            name='name'
            value={data[0].name}
            placeholder="Your name"
            required
          />

          <div className='flex gap-4'>
            <Input
              label="Email"
              name='email'
              value={data[0].email}
              placeholder="Your email"
              required
            />
            <Input
              label="Password"
              name='password'
              type='password'
              placeholder="Your password"
            />
          </div>

          <Input
            label="Timezone"
            name='timezone'
            value={data[0].timezone}
            placeholder="Your timezone"
            required
          />

          <Input
            label="Contact Number"
            name='contact_number'
            value={data[0].contact_number || ''}
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