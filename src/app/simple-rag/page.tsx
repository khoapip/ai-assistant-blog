import RagChat from "../_components/rag-chat";
import { AI } from "@/lib/chat/actions";
import { nanoid } from "@/lib/utils";

export default function HomePage() {
  const id = nanoid()


  return (
    <main className="flex h-screen w-full">
      <AI initialAIState={{ chatId: id, messages: [] }}>
        <RagChat/>
      </AI>
     </main>
  );
}
