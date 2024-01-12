import Banner_mlbb from '../../sections/Banner';
import Extensions from '../../sections/Extensions';
import Statistics from '../../sections/Statistics';
import db from '../../db.json';
import AboutUs from '../../sections/AboutUs';

export default function Mlbb() {
    return (
        <>
            <Banner_mlbb />
            <AboutUs db={db}/>
            <Statistics db={db}/>
            <Extensions />
        </>
    )
}