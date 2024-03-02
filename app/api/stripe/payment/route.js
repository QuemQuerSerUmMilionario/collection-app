import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth"
import {getUserById} from "@/data/user"
const stripe = require('stripe')('sk_test_51OYrGnEvKoUwFT20Pw6FVft44lrEi30MC5jEz4Zz0MGsvgBcNLN6hm7HAIlPAGjdAL1qd6HciHFctU3PWNyLTOQ10012YjVE6X');

export const POST = async (request, response) => {
    try {
        const session = await getServerSession(authOptions);
        const user = await getUserById(session?.user?.id);
        if(user.customerId){
            const subscriptions = await stripe.subscriptions.list({
                customer: user.customerId,
                status:"active"
            });
            subscriptions?.data?.forEach(async (element)  => {
                const subscription = await stripe.subscriptions.update(
                    element.id,
                    {
                        cancel_at_period_end: true,
                    }
                    );
                    console.log(subscription);
            });
        }else{
            return new Response(JSON.stringify({ errors: [{ message: "You are not subscribed yet"}] }), { status: 400 });
        }
        return new Response(JSON.stringify({message:"Success"}), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ errors: [{ message: "Failed to create a new item ," + error }] }), { status: 500 });
    }
}
