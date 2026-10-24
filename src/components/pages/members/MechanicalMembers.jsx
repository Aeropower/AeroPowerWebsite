import MembersPageLayout from "./MembersPageLayout";
import { members } from "./data/members";

const MechanicalMembers = () => (
  <MembersPageLayout title="Mechanical" members={members.mechanical} />
);

export default MechanicalMembers;
