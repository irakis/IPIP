import styles from './Home.module.scss';
import clsx from 'clsx';

const Home = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className={clsx('row mb-4 pb-4', styles.home, styles.home__hero)} id='hero'>
                    <div className={clsx('col-6 p-0 m-0 col-sm-12 col-md-6')}>
                        <div className='row d-block '>
                            <div className='col-8 col-sm-12 mt-4 mb-4'>
                                IPIP
                            </div>
                            <div className='col mb-3 mt-3'>
                                <h2>Instytut</h2>
                                <h2>Psychoprofilaktyki</h2>
                                <h2>i Psychoterapii</h2>
                            </div>
                            <div className='col mt-4 p-9'>
                                <p>Twoje centrum wsparcia psychologicznego - skuteczne poradnictwo, 
                                    innowacyjne projekty rozwojowe i szkolenia dla specjalistów.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*------SECTION ACTIVITIES--START-----*/}

            <div className={clsx(styles.home__mission__activities, styles.home__mission, styles.home, 'row')}>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <h3 className='text-center mb-4 pb-4'>Instytut Psychoprofilaktyki i Psychoterapii został powołany jako wewnętrzna jednostka Stowarzyszenia Natanelum w 2011 roku.</h3> 
                    <h3>Od tego czasu realizuje cele towarzystwa naukowego takie jak:</h3>
                     <ul className='text-center pt-5'>
                        <li>prowdzenie badań naukowych i upowszechnianie ich wyników</li>
                        <li>realizacja projektów badawczych i wdrażanie ich wyników</li>
                        <li>wymiana myśli naukowej wśród naukowców i specjalistów poprzez organizację
                                semianariów naukowych i konferencji
                        </li>
                        <li>wydawanie czasopisma naukowego "Psychoprevention study"</li>
                        <li>prowadzenie wydawnictwa naukowego</li>
                        <li>organizowanie szkoleń podnoszących kompetencje specjalistów
                                psychoterapii uzależnień, psychoterapeutów i psychologów
                        </li>
                     </ul>
                </div>
                <div className={clsx(styles.home__smallButterflies, 'col-lg-6 col-sm-12')}>
                </div>
            </div>

            {/*------SECTION ACTIVITIES--END-----*/}

            {/*------SECTION MISSION--START-----*/}

            <div className={clsx(styles.home__mission, 'row')}>
                <h2 className='text-center'>NASZA MISJA</h2>
                <div className='col-lg-4 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={'/images/home/mission/zdr-psych 1.png'} alt='brain1'></img>
                    </div>
                    <div>
                        <p className='text-uppercase text-center pt-1'>Ochrona zdrowia psychicznego</p>
                    </div>
                </div>    
                <div className='col-lg-4 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={'/images/home/mission/wsparcie-wykl-spol 1.png'} alt='brain2'></img>
                    </div>
                    <div>
                        <p className='text-uppercase text-center pt-1'>Wsparcie dla osób zagrożonych wykluczeniem</p>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={'/images/home/mission/pomoc-spo-zaw 1.png'} alt='brain3'></img>
                    </div>
                    <div>
                        <p className='text-uppercase text-center pt-1'>Pomoc społeczna i zawodowa</p>
                    </div>
                </div>
            </div>

            {/*------SECTION MISSION--END-----*/}

        </>
    )
};

export default Home;