import { clerkClient } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat";

const api_key = "qcv4vtkd8rj5";
const api_secret =
  "d7gbdhdd7yzgwberjg2fkf7enen7r3fwp9eyqg7c7zgzmwp5ywj2zaav6xke4unn";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);

  function capitalize(str) {
    if (!str || typeof str !== "string") {
      return ""; // Handle empty or non-string input
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const user = await request.json();
  console.log(user);
  console.log(user?.data?.id);

  
  
  const token = serverClient.createToken(user?.data?.id);
  console.log("Token generated successfully for user:", token);
  
  
  const client = await clerkClient();
  
  await serverClient.upsertUser({id : user?.data?.id});
  
  await client.users.updateUserMetadata(user?.data?.id, {
      publicMetadata: {
        token: token,
      },
    });

    const slugs = [
      "pythonClub",
      "jsClub",
      "devopsClub",
      "cloudClub",
      "cyberClub",
      "aiClub",
    ];

    slugs.forEach(async (item) => {
      const channel = serverClient.channel("messaging", item, {
        image: "https://getstream.io/random_png/?name=react",
        name: capitalize(item) + " Discussion-2",
        created_by_id: user?.data?.id,
      });
      await channel.create();

       channel.addMembers([user?.data?.id]);
    });

    return Response.json({ message: "hello world" });
  
}
