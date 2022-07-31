import styles from 'styles/components/inputs/Range.module.scss';
import classNames from 'classnames';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { LargeNumberLike } from 'crypto';

export interface RangeProps {
    className?: string;
    minValue?: number;
    maxValue?: number;
    step?: number;
    onChange?: (min: number, max: number) => void;
    min?: number;
    max?: number;
}
let shift = 0;
let prevPos = 0;

const Range = ({
    className,
    minValue = 0,
    maxValue = 100,
    step = 1,
    min = minValue,
    max = maxValue / 2,
    onChange,
}: RangeProps) => {
    const ref = useRef(null);
    const [handle1, setHandle1] = useState<number>(min);
    const [handle2, setHandle2] = useState<number>(max);
    const [handle1Active, setHandle1Active] = useState<boolean>(false);
    const [handle2Active, setHandle2Active] = useState<boolean>(false);
    const [style1, setStyle1] = useState<React.CSSProperties>({});
    const [style2, setStyle2] = useState<React.CSSProperties>({});
    const [trackStyle, setTrackStyle] = useState<React.CSSProperties>({});

    function configurePositions() {
        let h1pos = (handle1 - minValue) / (maxValue - minValue);
        h1pos = h1pos === NaN ? 0 : h1pos;
        let h2pos = (handle2 - minValue) / (maxValue - minValue);
        h2pos = h2pos === NaN ? 0 : h2pos;
        const left = h1pos < h2pos ? h1pos : h2pos;
        const right = h1pos > h2pos ? h1pos : h2pos;
        let h1Style: CSSProperties = {
            left: `${h1pos * 100}%`,
        };
        let h2Style: CSSProperties = {
            left: `${h2pos * 100}%`,
        };
        let tStyle = {
            left: `${left * 100}%`,
            width: `${(right - left) * 100}%`,
        };
        setStyle1(h1Style);
        setStyle2(h2Style);
        setTrackStyle(tStyle);
    }

    useEffect(() => {
        document.addEventListener('mouseup', () => {
            setHandle1Active(false);
            setHandle2Active(false);
            document.body.classList.remove('slide');
        });
    }, []);

    useEffect(() => {
        configurePositions();
    }, [handle1, handle2, minValue, maxValue]);

    useEffect(() => {
        let min = handle1;
        let max = handle2;
        onChange?.call(null, min, max);
    }, [handle1, handle2]);

    useEffect(() => {
        if (handle1Active || handle2Active) return;
        if (min === handle1 && max === handle2) return;
        // if (min >= max) return onChange?.call(null, max, min);
        if (min < minValue) return onChange?.call(null, minValue, max);
        if (max < minValue) return onChange?.call(null, max, minValue);
        if (max > maxValue) return onChange?.call(null, min, maxValue);
        if (min > maxValue) return onChange?.call(null, maxValue, max);
        if (min !== undefined) setHandle1(min);
        if (max !== undefined) setHandle2(max);
    }, [min, max]);

    function getHandleMove(setter) {
        return (event) => {
            shift += event.clientX - prevPos;
            prevPos = event.clientX;
            let steps = (maxValue - minValue) / step;
            if (Math.abs(shift) >= ref.current.offsetWidth / steps) {
                let translateX = shift / (ref.current.offsetWidth / steps);
                shift = 0;
                setter((origin) => {
                    let temp = origin + translateX;
                    temp =
                        temp < minValue
                            ? minValue
                            : temp > maxValue
                            ? maxValue
                            : temp;
                    return Math.round(temp);
                });
            }
        };
    }

    useEffect(() => {
        if (handle1Active) {
            let event = getHandleMove(setHandle1);
            document.addEventListener('mousemove', event);
            document.addEventListener(
                'mouseup',
                () => {
                    document.removeEventListener('mousemove', event);
                },
                { once: true }
            );
        }
        if (handle2Active) {
            let event = getHandleMove(setHandle2);
            document.addEventListener('mousemove', event);
            document.addEventListener(
                'mouseup',
                () => {
                    document.removeEventListener('mousemove', event);
                },
                { once: true }
            );
        }
    }, [handle1Active, handle2Active]);

    return (
        <div className={classNames(styles.container, className)} ref={ref}>
            <div className={styles.rail} />
            <div className={styles.track} style={trackStyle} />
            <div
                className={styles.handle1}
                style={style1}
                onMouseDown={(event) => {
                    prevPos = event.clientX;
                    shift = 0;
                    setHandle1Active(true);
                    document.body.classList.add('slide');
                }}
            />
            <div
                className={styles.handle2}
                style={style2}
                onMouseDown={(event) => {
                    prevPos = event.clientX;
                    shift = 0;
                    setHandle2Active(true);
                    document.body.classList.add('slide');
                }}
            />
        </div>
    );
};

export default Range;
