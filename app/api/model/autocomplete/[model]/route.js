import {getItemByModelLike} from "@/data/model"

export const GET = async (request,{params}) => {
    try {
        const  model  = params?.model;
        const items = await getItemByModelLike(model);
        return new Response(JSON.stringify(items), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({errors:[{message:"Failed to fetch item by model , " + error}]}), { status: 500 })
    }
}

