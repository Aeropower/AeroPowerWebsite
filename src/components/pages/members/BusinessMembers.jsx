import MembersPageLayout from "./MembersPageLayout";
import { members } from "./data/members";

const BusinessMembers = () => (
  <MembersPageLayout title="Business" members={members.business} />
);

export default BusinessMembers;
