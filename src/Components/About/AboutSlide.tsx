interface ASProps {
    header: string 
    paragraph: string
}

const AboutSlide: React.FC<ASProps> = (props) => {
    return (
        <div className="slide">
            <h1>{props.header}</h1>
            <p>{props.paragraph}</p>
        </div>
    )
};

export default AboutSlide;
