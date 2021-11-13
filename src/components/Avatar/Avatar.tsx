import './Avatar.scss'

type Props = {
    urlImage: string | undefined;
}

export const Avatar = ({urlImage}: Props) => {
    return (
        <div className="avatar">
            <img src={urlImage} alt="" />
        </div>
    )
}


