
export const GET = async (request, { params }) => {
    try {

        return new Response({ status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 