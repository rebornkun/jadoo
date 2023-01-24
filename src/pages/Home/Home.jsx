import './Home.css'
import traveller from '../../assets/img/Traveller.png'
import line from '../../assets/img/decore.png'
import plane from '../../assets/svg/plane.svg'
import satelite from '../../assets/svg/satelite.svg'
import mic from '../../assets/svg/mic.svg'
import gear from '../../assets/svg/gear.svg'
import planetwo from '../../assets/svg/planetwo.svg'

const Card = ({img, alt, header, text, shadow }) => {
    return(
        <div className={ shadow ? 'card shadow' : 'card'}>
            <img src={img} alt={alt} />
            <h5>{header}</h5>
            <p>{text}</p>
        </div>
    );
}
const Home = () => {
    return (
        <div className='home'>
            <div className='section'>
                <div className='container'>
                    {/* background floating arc */}
                    <div className='background_arc'>
                        <svg width="704" height="724" viewBox="0 0 704 724" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z" fill="#FFF1DA"/>
                        </svg>
                    </div>

                    <div className='contents'>

                        <div className='texts_and_buttons'>
                            <h4>Best Destinations around the world</h4>
                            <h1>
                                Travel, enjoy
                                and live a new
                                and full life
                                <img className='line' src={line} alt='line' />
                            </h1>
                            <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                            <div className='home_buttons'>
                                <div className='find_out_more_btn'>
                                    <p>Find out more</p>
                                </div>
                                <div className='play_btn'>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z" fill="white"/>
                                    </svg>
                                </div>
                                <p className='play_demo'>Play Demo</p>
                            </div>
                        </div>

                        <div className='hero_image'>
                            <img className='hero' src={traveller} alt='hero' />
                            <img className='round_plane move' src={plane} alt='plane' />
                            <img className='round_plane move sec' src={plane} alt='plane' />
                            <img className='round_plane front' src={plane} alt='plane' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mini_section'>
                <div className='container'>
                    <div className='title_and_cards'>
                    <h5 style={{fontWeight: '500', textAlign: 'center', color: '#5E6282'}}>
                        CATEGORY</h5>
                    <h2>We Offer Best Services</h2>
                    <div className='cards_containers'>
                        <Card img={satelite} alt='satelite' header='Calculated Weather' text='Built Wicket longer admire do barton vanity itself do in it.' />
                        <Card img={planetwo} alt='plane' header='Best Flights' text='Engrossed listening. Park gate sell they west hard for the.' shadow={true} />
                        <Card img={mic} alt='mic' header='Local Events' text='Barton vanity itself do in it. Preferd to men it engrossed listening.' />
                        <Card img={gear} alt='gear' header='Customization' text='We deliver outsourced aviation services for military customers.' />
                        
                        <svg className='cards_containers_decor' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 30C0 13.4315 13.4315 0 30 0H100V90C100 95.5228 95.5229 100 90 100H0V30Z" fill="#DF6951"/>
                        </svg>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;