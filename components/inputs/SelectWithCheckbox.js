import {useState, useEffect} from 'react';
import styles from 'styles/components/inputs/SelectWithCheckbox.module.scss';
import classNames from "classnames";
import { ReactSVG } from "react-svg";
import {  CheckBox, Input  } from 'components';

export default function SelectWithCheckbox({
    options, 
    label, 
    labelStyle, 
    className, 
    values, 
    changeValue}) {
    const [isOpen, setIsOpen] = useState(false);
    const [optionData, setOptionData] = useState([]);
    const [search, setSearch] = useState('');

    const handleChange = (id, checked, name) => {
        const checkedItem = optionData.map((item)=>{
            if(item.id === id) {
                return {...item, checked: !item.checked}
            }

            return item
        })

        setOptionData(checkedItem)

        if(checked){
            changeValue((prevState)=> [...prevState, name])
        }else {
            const removeItem = values.filter((item)=> item != name)
            
            changeValue(removeItem)
        }
    }

    useEffect(() => {
        const addCheckbox = options.map((item)=>{
            return {...item, checked: false}
        })
        setOptionData(addCheckbox)
    }, [])

    return (
        <div className={classNames(styles.container, className)}>
            {labelStyle === "outside" && <div className={styles.label}>{label}</div>}
            <div className={classNames(styles.select)}>
                <div 
                    className={styles.body}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <div className={classNames(styles.label)}>
                        {
                            values?.map((item)=>{
                                return <span className={styles.checkedValue}>{item}, </span>
                            })
                        }
                        <ReactSVG
                            src={"/images/icons/inputs/select.svg"}
                            className={classNames(styles.arrow, { [styles.up]: isOpen })}
                        />
                    </div>
                </div>
                <div 
                    className={classNames(styles.wrapper, styles.searchBox, { [styles.active]: isOpen })}
                >
                    <div className={styles.checkBoxForm}>
                        <Input 
                            className={styles.search_box}
                            label="search"
                            type="search" 
                            value={search} 
                            onChange={(value)=> setSearch(value)}
                            placeholder='Search'
                        />
                        <div className={styles.checkBoxes}>
                            {
                                optionData?.filter((item)=> item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                                            .map((opt)=>{
                                                return <>
                                                    <div className={styles.checkbox}>
                                                        <CheckBox 
                                                            type='checkbox'
                                                            id={opt.id}
                                                            value={opt.name}
                                                            checked={opt.checked}
                                                            defaultValue={opt.checked}
                                                            onChange={()=> handleChange(opt.id, !opt.checked, opt.name)}
                                                        />
                                                        <label htmlFor={opt.id}>{opt.name}</label>
                                                    </div>
                                                </>
                                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}