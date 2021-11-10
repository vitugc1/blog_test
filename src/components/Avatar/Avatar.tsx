import './Avatar.scss'

type Props = {
    urlImage: string;
}

export const Avatar = ({urlImage}: Props) => {
    return (
        <div className="avatar">
            <img src={urlImage} alt="avatar" />
        </div>
    )
}


