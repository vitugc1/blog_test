import ArrowRightSvg from '../../assets/ArrowRight.svg'

import './CardPost.scss';

type Props = {
    urlImage: string;
    date: string;
    title: string;
    description: string;
}



export const CardPost = ({ urlImage, date, title, description}: Props) => {
    if(description.length > 400) {
        description = description.substring(0, 400) + '...';
    }

    return (
        <div className="Card">
            <div className="Card-content">
                <div className="content-left">
                    <img src={urlImage} alt="" />
                    <h3>{date}</h3>
                </div>
                <div className="content-right">
                    <div>
                        <span>{title}</span>
                        <div>
                            <a href="/home">Saiba mais</a>
                            <img src={ArrowRightSvg} alt="" />
                        </div>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}


