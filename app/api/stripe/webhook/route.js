const stripe = require('stripe')('sk_test_51OYrGnEvKoUwFT20Pw6FVft44lrEi30MC5jEz4Zz0MGsvgBcNLN6hm7HAIlPAGjdAL1qd6HciHFctU3PWNyLTOQ10012YjVE6X');
import {getUserByEmail} from "@data/user"
import {getPlanByPriceId} from "@data/plan"
import {db} from "@/lib/db"
export const POST = async (request, response) => {
    let data;
    let eventType;
    let event;
    const webhookSecret = 'whsec_9b18cabd54399c1c1ea872446c5a23b522a4449e759b0747a0823333ece5365a';
    try {
        const rawBody = await request.text();
        // Check if webhook signing is configured.
        if (webhookSecret) {
          // Retrieve the event by verifying the signature using the raw body and secret.
          let signature = request.headers.get('stripe-signature');;
          try {
            event = stripe.webhooks.constructEvent(
              rawBody,
              signature,
              webhookSecret
            );
          } catch (err) {
            console.log(`⚠️  Webhook signature verification failed.`);
            return new Response({},{ status: 400 });
          }
          // Extract the object from the event.
          data = event.data;
          eventType = event.type;
        } else {
          // Webhook signing is recommended, but if the secret is not configured in `config.js`,
          // retrieve the event data directly from the request body.
          data = body.data;
          eventType = body.type;
        }
        console.log(eventType);
        switch (eventType) {
          case 'checkout.session.completed':
            // Payment is successful and the subscription is created.
            // You should provision the subscription and save the customer ID to your database.
          break;
          case 'invoice.paid':
              // Continue to provision the subscription as payments continue to be made.
              // Store the status in your database and check when a user accesses your service.
              // This approach helps you avoid hitting rate limits.
          break;
          case 'invoice.payment_failed':
            // The payment failed or the customer does not have a valid payment method.
            // The subscription becomes past_due. Notify your customer and send them to the
            // customer portal to update their payment information.
          break;
          case 'customer.subscription.updated':
            // The payment failed or the customer does not have a valid payment method.
            // The subscription becomes past_due. Notify your customer and send them to the
            // customer portal to update their payment information.
            const plan = await getPlanByPriceId(data.object?.plan?.id);
            console.log(plan);
            console.log(data.object?.customer);
            await db.user.update({
              where: {
                custumerId:data.object?.customer,
              },
              data: {
                planId:plan.id,
              },
            });
            break;
            case 'customer.created':
              await db.user.update({
                  where: {
                      email:data.object?.email,
                  },
                  data: {
                      custumerId:data.object?.id,
                  },
              });
          break;
          default:
            // Unhandled event type
        }
        return new Response({},{ status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ errors: [{ message: "Failed to create a new item ," + error }] }), { status: 500 });
    }
}
