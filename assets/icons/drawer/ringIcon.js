import { memo } from 'react';
import Passive from './ring.svg';
import Active from './ringActive.svg';

const RingIcon = ({ active }) => {
    return active ? <Active /> : <Passive />
}
export default memo(RingIcon)
