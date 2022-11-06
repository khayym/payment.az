import UserIcon from '../../assets/icons/profile/user.svg';
import LockIcon from '../../assets/icons/profile/lock.svg';
import QuestionIcon from '../../assets/icons/profile/question.svg';
import PolicyIcon from '../../assets/icons/profile/policy.svg';

export const OPTIONS = [
    {
        name: 'profile:userInfo',
        href: 'UserInfoScreen',
        icon: <UserIcon />
    },
    {
        name: 'profile:security',
        href: 'UserSecurityScreen',
        icon: <LockIcon />
    },
    {
        name: 'profile:infoApp',
        href: 'AppInfoScreen',
        icon: <QuestionIcon />
    },
    {
        name: 'profile:policy',
        href: 'PolicyScreen',
        icon: <PolicyIcon />
    }
]