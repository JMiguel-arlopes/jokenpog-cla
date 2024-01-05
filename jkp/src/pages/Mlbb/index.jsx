import Banner_mlbb from '../../layout/Banner_mlbb';
import Extensions from '../../layout/Extensions';
import Ranks from '../../layout/Ranks';
import SwipperHall from '../../layout/SwipperHall';
import db from '../../db.json';
import styles from './mlbb.module.css';

export default function Mlbb() {
    return (
        <>
            <Banner_mlbb />
            <Extensions />
            <SwipperHall db={db}/>
            <Ranks db={db}/>
        </>
    )
}