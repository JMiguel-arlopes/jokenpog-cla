import Banner_mlbb from '../../layout/Banner_mlbb';
import Extensions from '../../layout/Extensions';
import Ranks from '../../layout/Ranks';
import db from '../../db.json';
import AboutUs from '../../layout/AboutUs';

export default function Mlbb() {
    return (
        <>
            <Banner_mlbb />
            <AboutUs db={db}/>
            <Ranks db={db}/>
            <Extensions />
        </>
    )
}