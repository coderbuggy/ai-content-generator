import { UserProfile } from "@clerk/nextjs";

function Settings() {
  return (
    <div className="flex items-center justify-center h-full m-5">
      <UserProfile />
    </div>
  );
}
export default Settings;
