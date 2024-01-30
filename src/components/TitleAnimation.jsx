import { useEffect, useState } from 'react';
import Scramble from 'react-scramble';
import { useInView } from 'react-intersection-observer'
const TitleAnimation = ({title}) => {
    const [animate, setAnimate] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: '0px 0px',
    });

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        } else {
            setAnimate(false);
        }
    }, [inView]);
    return (
        <div ref={ref} className='text-3xl text-center font-bold text-white' style={{ fontFamily: 'Space Mono, monospace' }}>
            <Scramble
                key={animate}
                autoStart={animate}
                text={title}
                steps={[
                    {
                        roll: 10,
                        action: '+',
                        type: 'all',
                    },
                    {
                        action: '-',
                        type: 'forward',
                    },
                ]}
            />
        </div>
    );
};

export default TitleAnimation;