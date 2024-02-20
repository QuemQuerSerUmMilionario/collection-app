import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
const stripe = require('stripe')('sk_test_51OYrGnEvKoUwFT20Pw6FVft44lrEi30MC5jEz4Zz0MGsvgBcNLN6hm7HAIlPAGjdAL1qd6HciHFctU3PWNyLTOQ10012YjVE6X');

export const POST = async (request, response) => {
    try {
        // The price ID passed from the client
        //   const {priceId} = req.body;
        const session = await getServerSession(authOptions)
        const plan = await request.json();
        const stripeSession = await stripe.checkout.sessions.create({
          mode: 'subscription',
          line_items: [
            {
              price: plan.id,
              // For metered billing, do not pass quantity
              quantity: 1,
            },
          ],
          client_reference_id:session?.user?.id,
          // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
          // the actual Session ID is returned in the query parameter when your customer
          // is redirected to the success page.
          success_url: process.env.NEXTAUTH_URL + '?session_id={CHECKOUT_SESSION_ID}',
          cancel_url: process.env.NEXTAUTH_URL + '/canceled.html',
        });
       
        return new Response(JSON.stringify({urlRedirect:stripeSession.url}), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ errors: [{ message: "Failed to create a new item ," + error }] }), { status: 500 });
    }
}
