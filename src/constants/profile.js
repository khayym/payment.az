import UserIcon from '../../assets/icons/profile/user.svg';
import LockIcon from '../../assets/icons/profile/lock.svg';
import QuestionIcon from '../../assets/icons/profile/question.svg';
import PolicyIcon from '../../assets/icons/profile/policy.svg';

export const OPTIONS = [
    {
        name: 'Şəxsi məlumatlar',
        href: 'UserInfoScreen',
        icon: <UserIcon />
    },
    {
        name: 'Təhlükəsizlik',
        href: 'UserSecurityScreen',
        icon: <LockIcon />
    },
    {
        name: 'Tətbiq haqqında',
        href: 'AppInfoScreen',
        icon: <QuestionIcon />
    },
    {
        name: 'Privacy Policy',
        href: 'PolicyScreen',
        icon: <PolicyIcon />
    }
]