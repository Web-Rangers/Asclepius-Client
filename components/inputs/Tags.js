import {useState, useRef} from 'react';
import styles from 'styles/components/Inputs/Tags.module.scss';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';

export default function Tags({tags, setTags, labelLayout, label, className}){
    const [tagValue, setTagValue] = useState('');
    const [inputSize, setInputSize] = useState('1');
    const inputRef = useRef(0)
 
    const addTag = (e, state = null) => {
        const randomId = Date.now().toString();
        if(state === 'enter') {
            if(e.key === 'Enter' && tagValue !== '') {
                setTags((prevWord)=> [...prevWord, {value: e.target.value, id: randomId}])
                setTagValue('')
                setInputSize(1)
            }
        } else if(state === 'click'){
            if(tagValue !== ''){
                setTags((prevWord)=> [...prevWord, {value: e.current.value, id: randomId}])
                setTagValue('')
                setInputSize(1)
            }
        }
    }

    const handleChange = (event) => {
        setTagValue(event.target.value); 
        setInputSize(event.target.value.length+1)
    }

    return (
        <>
        <div className={classNames(className)}>
            <div className={styles.tagTool} onClick={()=> addTag(inputRef, 'click')}>
                {labelLayout === 'outside' && <span className={styles.tagLabel}>{label}</span>}
                <span className={styles.addTag}>
                    <ReactSVG
                        src={'/images/icons/inputs/plus.svg'}
                        className={styles.plusBtn}
                    />
                    <span className={styles.addtext}>
                        Add tag
                    </span>
                </span>
            </div>
            <div className={styles.tagInputBlock} onClick={() => {inputRef.current.select()}}>
                {tags.length < 1 && tagValue.length < 1 ? 
                    <div className={styles.tagPlaceholder}>
                        Separate with button or the Enter key
                    </div>
                    : ''
                }
                <div className={styles.tagsList}>
                    {
                        tags?.map((tag)=>{
                            return (
                                    <div className={styles.currTag} key={tag.id}>
                                        <span className={styles.tagName}>{tag.value}</span>
                                        <span 
                                            className={styles.removeTag}
                                            onClick={()=> setTags(tags.filter((curr)=> curr.id !== tag.id))}
                                        >
                                            <ReactSVG
                                                src={'/images/icons/inputs/x.svg'}
                                                className={styles.closeBtn}
                                            />
                                        </span>
                                    </div>
                            )
                        })
                    }
                </div>
                <input 
                    className={styles.tagInput}
                    onKeyUp={(e)=> {addTag(e, 'enter')}}
                    onChange={(e)=> handleChange(e)}
                    value={tagValue} 
                    ref={inputRef}
                    size={inputSize}
                />
            </div>
        </div>
        </>
    )
}