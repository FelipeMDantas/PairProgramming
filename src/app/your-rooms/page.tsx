import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUserRooms } from "@/data-access/rooms";
import { UserRoomCard } from "./user-room-card";
import { unstable_noStore } from "next/cache";
import Image from "next/image";

export default async function YourRoomsPage() {
  unstable_noStore();
  const rooms = await getUserRooms();

  return (
    <main className="min-h-screen p-16 container">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl">Your Rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <UserRoomCard key={room.id} room={room} />
        ))}
      </div>

      {rooms.length === 0 && (
        <div className="flex justify-center items-center flex-col gap-4 mt-24">
          <Image
            src="/no-data.svg"
            width="200"
            height="200"
            alt="no data image"
          />

          <h2 className="text-2xl">You Have No Rooms</h2>
        </div>
      )}
    </main>
  );
}
