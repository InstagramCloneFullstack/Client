import { useState } from 'react';

import ProfileTabContent from '@/components/profile/ProfileTabContent';
import ProfileTabHeader from '@/components/profile/ProfileTabHeader';

function ProfileTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      {/* tabs */}
      <ProfileTabHeader tabIndex={tabIndex} setTabIndex={setTabIndex} />

      {/* contents */}
      <ProfileTabContent tabIndex={tabIndex} />
    </div>
  );
}

export default ProfileTabs;
