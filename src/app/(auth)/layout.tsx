import Navbar from "@/components/ui/navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className='min-h-screen flex flex-col bg-base-200'>
      <Navbar />

      <div className='flex-1 flex justify-center items-center'>
        <div className='card bg-base-100 min-w-96'>
          <div className='card-body'>
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}