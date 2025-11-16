import ProfileTabSaved from '@/components/profile/ProfileTabSaved';
import ProfileTabTagged from '@/components/profile/ProfileTabTagged';
interface ProfileTabContentProps {
  tabIndex: number;
}
function ProfileTabContent({ tabIndex }: ProfileTabContentProps) {
  return (
    <div className="flex overflow-hidden">
      <ProfileTabSaved tabIndex={tabIndex} />

      <ProfileTabTagged tabIndex={tabIndex} />
    </div>
  );
}

export default ProfileTabContent;
