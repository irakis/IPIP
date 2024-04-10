import { useLocation } from 'react-router-dom';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import FooterAdress from '../common/FooterClinic';
import FooterClinic from '../common/FooterMail';
import FooterMail from '../common/FooterMail';
import FooterRegistration from '../common/FooterRegistration';
import FooterOffice from '../common/FooterOffice';


const Footer = () => {

    const location = useLocation();
    let actualLocation = location.pathname;
    let actualForm = actualLocation.split('/')[1] ;

    return(
        <footer>
            <div className={clsx(styles.footer, `${ location.pathname === '/ourteam' ? 'd-none' : ''} row row-cols-2 row-cols-sm-12 row-cols-md-6 m-0`)}>
                <div className='col'>
                    {(() => {
                        switch(actualForm){
                            case 'clinic':
                                return <FooterAdress/>
                            default:
                                return <FooterOffice/>
                        }
                    })()}
                </div>
                <div className='col'>

                {(() => {
                    switch(actualForm){
                        case 'clinic':
                            return <FooterRegistration/>
                        default:
                            return <FooterClinic/>
                    }
                })()}

                </div>
                <div className='col'>
                    <FooterMail/>
                </div>
            </div>
            <div className={clsx(styles.footer__footerRow, 'row d-flex p-4')}>
                <div className={clsx('col-12 d-flex', styles.copySign)}>
                    &copy; 2023 NATANAELUM. Wszelkie prawa zastrzeżone. <br></br>Design: auxiliumpro44@gmail.com
                </div>
            </div>
        </footer>
    )
};

export default Footer;