import './CardPost.scss'

type Props = {
    urlImage: string;
    date: string;
    title: string;
    description: string;
}

export const CardPost = ({ urlImage, date, title, description}: Props) => {
    return (
        <div className="Card">
            <div className="Card-content">
                <div className="Card-image">
                        <img src={urlImage} alt="" />
                </div>
                <div className="Card-title">
                    <span>{title}</span>
                </div>
                <div className="Card-description">
                    <p>{description}</p>
                </div>
                <div className="Card-date">
                    <h3>{date}</h3>
                </div>
            </div>
        </div>
    )
}


