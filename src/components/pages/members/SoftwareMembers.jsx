import MembersPageLayout from "./MembersPageLayout";
import { members } from "./data/members";

const SoftwareMembers = () => (
  <MembersPageLayout title="Software" members={members.software} />
);

export default SoftwareMembers;
