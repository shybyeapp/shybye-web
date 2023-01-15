import Challenges from "@/components/Challenges";
import Protected from "@/components/Protected";

export default function Dashboard() {
  return (
    <Protected>
      <Challenges />
    </Protected>
  );
}
