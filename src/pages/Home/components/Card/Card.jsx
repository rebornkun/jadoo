const Card = ({img, alt, header, text, shadow }) => {
    return (
        <div className={ shadow ? 'card shadow' : 'card'}>
            <img src={img} alt={alt} />
            <h5>{header}</h5>
            <p>{text}</p>
        </div>
    );
}

export default Card;