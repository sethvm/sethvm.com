import Badge from 'react-bootstrap/Badge';
import Card from '../components/Card/Card';
import { HashLink } from 'react-router-hash-link';
import '../styles/Home.css';

// component imports
import DownArrow from '../components/Navigation/down-arrow.svg';

// card img imports
import OngoingCard from '../assets/wip/wip-card.svg';
import SoulfxCard from '../assets/soulfx/soulfx-card.svg';
import FASSBCard from '../assets/fassb/fassb-card.svg';

export default function Home() {
    return (
        <main>
            <div id='intro' className='intro'>
                <div className='intro_text animate__animated animate__fadeIn'>
                    <h1>
                        G'day! I'm Seth.
                        <br />
                    </h1>
                    <p> 
                        <br />
                        I'm a <strong>designer</strong> pursuing a BASc.
                        in <strong>Systems Design Engineering</strong> with a
                        passion for creating products that
                        help <strong>move the world forward</strong>.
                    </p>
                </div>
                <div className='intro_experience animate__animated animate__fadeIn'>
                    <p>
                        Currently focusing on 
                        <strong>&nbsp;online fulfillment</strong> initiatives at Loblaw Digital
                        <br />
                        <br />
                    </p>
                    <div className='jump_container animate__animated animate__fadeInDown animate__delay-1s'>
                        <HashLink smooth to='#projects'>
                            <div className='jump'>
                                <img  
                                src={DownArrow} 
                                alt='Scroll down to check out my work!' />
                            </div>
                        </HashLink>
                    </div>
                </div>
            </div>
            <div id='projects'>
                <Card
                title='OPS Transaction Logs'
                desc="Streamlining an order validation experience for a
                portal module used by Loblaw's grocery banners"
                img={OngoingCard}
                alt='OPS Transaction Logs (TRX)'
                path='/trx'
                linkLabel='VIEW CASE STUDY  →'>
                    <Badge pill variant='dark'>Product Design</Badge>
                </Card>
                <Card
                title='Patient Support App'
                desc="Facilitating the remote delivery of a client's
                financial aid platform for patients in need"
                img={SoulfxCard}
                alt='Patient Support App'
                path='/soulfx'
                linkLabel='VIEW CASE STUDY  →'>
                    <Badge pill variant='dark'>UX Design</Badge>&nbsp;
                    <Badge pill variant='dark'>Information Architecture</Badge>
                </Card>
                <Card
                title='Employment Services Transformation'
                desc='Reworking interfaces and experiences for services delivered
                by Employment Ontario to help jobseekers secure employment'
                img={FASSBCard}
                alt='FASSB Design'
                path='/est'
                linkLabel='VIEW TERM RECAP →'>
                    <Badge pill variant='dark'>Web Design</Badge>&nbsp;
                    <Badge pill variant='dark'>Service Design</Badge>
                </Card>
            </div>
        </main>
    );
}
