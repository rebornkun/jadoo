const MiniText = ({color, svg, title, text}) => {
    return(
        <div className='mini_text row'>
            <div className='svg_container' style={{backgroundColor: `${color}`}}>
                <img src={svg} />
            </div>
            <div className='text_container'>
                <h5 style={{fontWeight: '600', color: '#5E6282', lineHeight: '0.9rem'}}>
                {title}</h5>
                <p style={{fontSize: '1rem'}}>{text}</p>
            </div>
        </div>
    );
}

export default MiniText;