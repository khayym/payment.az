// import CardIcon from '../../../assets/icons/input/cart.svg'
// import CvvIcon from '../../../assets/icons/input/cvv.svg'
// import CalendarIcon from '../../../assets/icons/input/calendar.svg'
import { lazy } from 'react'
const Card = lazy(() => import('../../../assets/icons/input/cart.svg'))
const Cvv = lazy(() => import('../../../assets/icons/input/cvv.svg'))
const Calendar = lazy(() => import('../../../assets/icons/input/calendar.svg'))

export const icons = {
    'card': <Card />,
    'cvv': <Cvv />,
    'calendar': <Calendar />
}

export const pleaceholders = {
    'card': 'Enter Number',
    'cvv': 'MM/YY',
    'calendar': 'CVV'
}