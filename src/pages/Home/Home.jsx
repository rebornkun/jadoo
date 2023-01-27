import './Home.css'
import traveller from '../../assets/img/Traveller.png'
import line from '../../assets/img/decore.png'
import plane from '../../assets/svg/plane.svg'
import satelite from '../../assets/svg/satelite.svg'
import mic from '../../assets/svg/mic.svg'
import gear from '../../assets/svg/gear.svg'
import planetwo from '../../assets/svg/planetwo.svg'
import Card from './components/Card/Card'
import desOne from '../../assets/img/desOne.jpg'
import desTwo from '../../assets/img/uk.png'
import desThree from '../../assets/img/eu.png'
import waterSvg from '../../assets/svg/OrangeFrame.svg'
import boxSvg from '../../assets/svg/YellowIcon.svg'
import carSvg from '../../assets/svg/BlueFrame.svg'
import MiniText from './components/MiniText'
import PictureCard from './components/PictureCard'


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

            <div className='mini_section'>
                <div className='container'>
                    <div className='title_and_cards'>
                    <h5 style={{fontWeight: '500', textAlign: 'center', color: '#5E6282'}}>
                        Top Selling</h5>
                    <h2>Top Destinations</h2>
                    <div className='cards_containers'>
                        <PictureCard img={desOne} alt='rome' location={'Rome, Italy'} amount={'$5,42k'} duration={'10 Days Trip'} />
                        <PictureCard img={desTwo} alt='rome' location={'London, UK'} amount={'$4.2k'} duration={'12 Days Trip'} />
                        <PictureCard img={desThree} alt='rome' location={'Full Europe'} amount={'$15k'} duration={'28 Days Trip'} />
                        
                        <svg className='picture_decor' width="98" height="254" viewBox="0 0 98 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.95816 14.2344C15.985 5.71795 33.7527 -7.37604 48.6094 8.37933C63.4661 24.1347 43.423 53.6228 31.5443 66.3974C25.6886 69.9459 13.4754 75.9784 11.4677 71.7202C8.95816 66.3974 7.45241 55.2196 28.0309 45.6387C41.248 39.961 69.7902 33.9286 78.2224 55.2196C82.0704 64.4457 82.7396 85.8787 54.6324 97.8017L19.4984 113.238M19.4984 113.238C6.11398 113.774 -13.1261 107.392 16.9888 77.5752C26.5252 72.9621 49.6133 63.6296 65.6746 63.2038C74.8763 65.1554 92.5772 74.8074 89.7665 97.8017C90.1011 102.415 83.8439 113.876 56.1382 122.819C49.7806 124.238 35.5597 127.183 29.5367 127.609L7.95439 130.803L19.4984 113.238ZM19.4984 113.238C28.2808 110.754 49.0085 106.531 61.6592 109.512C77.4727 113.238 83.7435 110.044 96.2913 130.803C98.4663 141.448 96.8936 163.272 73.2033 165.401C49.5129 167.53 34.2212 163.449 29.5367 161.143V141.448M29.5367 141.448C46.7691 143.045 83.7435 141.874 93.7818 124.415C98.6336 111.996 99.0017 86.6239 61.6592 84.4948C52.6248 84.8496 33.3513 85.9852 28.5329 87.6884L29.5367 125.48C47.1037 127.077 84.0446 134.635 91.2722 152.094C95.1202 162.207 96.3917 183.498 70.6937 187.756C61.1573 188.111 39.575 186.798 29.5367 178.708M29.5367 141.448V178.708M29.5367 141.448C40.4115 144.11 64.3696 151.455 73.2033 159.546C83.9108 168.417 99.604 190.418 76.7167 207.45C69.5225 210.112 50.4163 212.241 31.5443 199.466M29.5367 178.708L31.5443 199.466M29.5367 178.708C41.5827 187.224 66.1765 207.876 68.1841 222.354C69.0207 231.225 66.7788 249.713 51.119 252.694C47.1037 253.404 37.1658 253.333 29.5367 247.371L31.5443 199.466" stroke="#84829A"/>
                        </svg>
                    </div>
                    </div>
                </div>
            </div>

            <div className='section' style={{paddingTop: '4rem'}}>
                <div className='container row'>
                    <div className='first_part'>
                        <h5 style={{fontWeight: '500', color: '#5E6282', margin: '40px 0px 10px '}}>
                        Easy and Fast</h5>
                        <h2>Book your next trip in 3 easy steps</h2>
                        <div className='mini_text_container'>
                            <MiniText color={'#F0BB1F'} svg={boxSvg} title={'Choose Destination'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'} />
                            <MiniText color={'#F15A2B'} svg={waterSvg} title={'Make Payment'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'} />
                            <MiniText color={'#006380'} svg={carSvg} title={'Reach Airport on Selected Date'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'} />
                        </div>
                    </div>

                    <div className='social_card_part'>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;