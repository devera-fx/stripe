import StripeCheckoutButton from '@/components/Checkout'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className='mb-3'>
        <h1 className='text-3xl font-bold text-blue-600'>Stripe Checkout</h1>
      </div>
      <StripeCheckoutButton />
    </main>
  )
}
