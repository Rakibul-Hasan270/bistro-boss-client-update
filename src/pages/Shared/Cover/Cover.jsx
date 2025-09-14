import { Parallax } from 'react-parallax';


const Cover = ({ img, title, subTitle }) => {
    return (


        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div
                className="hero h-[580px]"

            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
                        <p className="mb-5 uppercase">{subTitle}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;