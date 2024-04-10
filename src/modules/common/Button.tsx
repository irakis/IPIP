import styles from './Button.module.scss';
import clsx from "clsx";

interface Props {
    action?: any,
    imageName: string,
    color: string,
    altText?: string,
    text: string,
}

const Button = (data: Props) => {
    return(
            <div className={clsx((data.color === 'green' ? styles.green : styles.gray), 'container')} 
                role="button" onClick={data.action}>
                    <div className="row">
                        <div className={clsx("col p-0 m-0 justify-end" ,`${data.imageName !== '' ? null : 'd-none'}`)}>
                            <img src={`/images/${data.imageName}`} alt={data.altText}/>
                        </div>
                        <div className={clsx(styles.green__buttonText, "col-9 m-auto pl-0")}>{data.text}</div>
                    </div>
                    
            </div>
    )
}

export default Button;