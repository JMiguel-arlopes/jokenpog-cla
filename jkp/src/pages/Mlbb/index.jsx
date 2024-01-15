import Banner_mlbb from '../../sections/Banner';
import Extensions from '../../sections/Extensions';
import Statistics from '../../sections/Statistics';
import db from '../../db.json';
import AboutUs from '../../sections/AboutUs';

export default function Mlbb() {
    const members = db.members;

    const sumValues = (key) => {
        const result = members.reduce((acc, item) => acc + item[key], 0)
        return result
    }

    return (
        <>
            <Banner_mlbb />
            <AboutUs 
                db={db}
                amountMembers={db.members.length}
                amountMCL={sumValues('mcl')}
                amountMatches={sumValues('matches')}
            />
            <Statistics db={db}/>
            <Extensions />
        </>
    )
}