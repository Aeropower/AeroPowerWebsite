import MembersPageLayout from "./MembersPageLayout";
import { members } from "./data/members";

const ElectricalMembers = () => (
  <MembersPageLayout title="Electrical" members={members.electrical} />
);

export default ElectricalMembers;
