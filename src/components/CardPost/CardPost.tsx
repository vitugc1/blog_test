import './CardPost.scss';

type Props = {
    image: string;
    date: string;
    title: string;
    description: string;
}


export const CardPost = ({ image, date, title, description}: Props) => {


    if(description.length > 400) {
        description = description.substring(0, 400) + '...';
    }

    if(title.length > 35) {
        title = title.substring(0, 35) + '...';
    }
    
    return (
        <div className="Card">
            <div className="Card-content">
                <div className="content-left">
                    <img src={image} alt="" />
                    <h3>{date}</h3>
                </div>
                <div className="content-right">
                    <div>
                        <span>{title}</span>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}


