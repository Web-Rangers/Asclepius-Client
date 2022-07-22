import styles from '/styles/components/modals/EditOrderModal.module.scss';
import { Input, Button, Modal, Select, DatePicker } from 'components';
import { useState } from 'react';
import classNames from 'classnames';
import { ReactSVG } from "react-svg";

export default function EditOrderModal({
    onClose,
    onSave,
    onCancel,
}) {
    const [tags, setTags] = useState([
        {
            id: 1,
            title: 'Medicine',
        },
        {
            id: 2,
            title: 'Dentist',
        }
    ]);
    const [labelForm, setLabelForm] = useState(false);
    const [newLabel, setNewLabel] = useState('');
    const [promotion, setPromotion] = useState('');
    const [cardType, setCardType] = useState('');
    const [day, setDay] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    const addNewTagFunc = () => {
        const newId = Date.now();

        if(newLabel !== ''){
            setTags((prevState) => ([
                ...prevState,
                {
                    id: newId,
                    title: newLabel
                }
            ]))
            setNewLabel('')
            setLabelForm(false)
        }
    }

    const removeTag = (id) => {
        const removeItem = tags.filter((e)=> e.id !== id);
        setTags(()=>(removeItem))
    }

    return (
        <Modal onBackClick={onClose} className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalTitle}>
                    <h2>Edit card</h2>
                </div>
                <div className={styles.modalInputs}>
                    <Select 
                        label="Status"
                        labelStyle="outside"
                        className={styles.modalInput}
                        options={[
                            {
                                label: "Status 1",
                                value: "1",
                            },
                            { label: "Status 2", value: "2" },
                            ]}
                        onChange={(value) => {
                            setPromotion(value);
                        }}
                        value={promotion}
                    />
                    <Select 
                        label="Service"
                        labelStyle="outside"
                        className={styles.modalInput}
                        options={[
                            {
                                label: "Status 1",
                                value: "1",
                            },
                            { label: "Status 2", value: "2" },
                            ]}
                        onChange={(value) => {
                            setPromotion(value);
                        }}
                        value={promotion}
                    />
                    <Select 
                        label="Clinic"
                        labelStyle="outside"
                        className={styles.modalInput}
                        options={[
                            {
                                label: "Status 1",
                                value: "1",
                            },
                            { label: "Status 2", value: "2" },
                            ]}
                        onChange={(value) => {
                            setPromotion(value);
                        }}
                        value={promotion}
                    />
                    <Select 
                        label="Doctor"
                        labelStyle="outside"
                        className={styles.modalInput}
                        options={[
                            {
                                label: "Status 1",
                                value: "1",
                            },
                            { label: "Status 2", value: "2" },
                            ]}
                        onChange={(value) => {
                            setCardType(value);
                        }}
                        value={cardType}
                    />
                    <Select 
                        label="Patient"
                        labelStyle="outside"
                        className={styles.modalInput}
                        options={[
                            {
                                label: "Status 1",
                                value: "1",
                            },
                            { label: "Status 2", value: "2" },
                            ]}
                        onChange={(value) => {
                            setCardType(value);
                        }}
                        value={cardType}
                    />
                    <Select 
                        label="Patient phone number"
                        labelStyle="outside"
                        className={styles.modalInput}
                        options={[
                            {
                                label: "Status 1",
                                value: "1",
                            },
                            { label: "Status 2", value: "2" },
                            ]}
                        onChange={(value) => {
                            setCardType(value);
                        }}
                        value={cardType}
                    />
                    <DatePicker
                        label="Schedule date"
                        mode='single'
                        className={styles.modalInput}
                    />
                    <DatePicker
                        label="Create date"
                        mode='single'
                        className={styles.modalInput}
                    />
                    <div className={styles.commissions}>
                        <div className={styles.modalSelects}>
                            <Select 
                                label="Doctor's Commission"
                                labelStyle="outside"
                                className={styles.modalSelect}
                                options={[
                                    {
                                        label: "1",
                                        value: "1",
                                    },
                                    { label: "2", value: "2" },
                                    ]}
                                onChange={(value) => {
                                    setDay(value);
                                }}
                                value={day}
                            />
                            <Select 
                                label="Platform Commission"
                                labelStyle="outside"
                                className={styles.modalSelect}
                                options={[
                                    {
                                        label: "1",
                                        value: "1",
                                    },
                                    { label: "2", value: "2" },
                                    ]}
                                onChange={(value) => {
                                    setHours(value);
                                }}
                                value={hours}
                            />
                            <Select 
                                label="Card type"
                                labelStyle="outside"
                                className={styles.modalSelect}
                                options={[
                                    {
                                        label: "1",
                                        value: "1",
                                    },
                                    { label: "2", value: "2" },
                                    ]}
                                onChange={(value) => {
                                    setMinutes(value);
                                }}
                                value={minutes}
                            />
                        </div>
                    </div>
                    <div className={styles.labels}>
                        <h2>Labels</h2>
                        <div className={styles.tags}>
                            {
                                tags?.map((tag)=>{
                                    return <>
                                        <span className={styles.tag}>
                                            <span>
                                                {tag.title}
                                            </span>
                                            <ReactSVG
                                                className={styles.x}
                                                src="../images/icons/inputs/x.svg"
                                                onClick={()=> removeTag(tag.id)}
                                            />
                                        </span>
                                    </>
                                })
                            }
                            <button 
                                className={styles.addLabel}
                                onClick={()=> setLabelForm(!labelForm)}
                            >
                                <ReactSVG
                                    className={styles.addBtn}
                                    src="../images/icons/inputs/plus.svg"
                                />
                                <span>add label</span>
                            </button>
                        </div>
                        {
                            labelForm && 
                            <div className={styles.labelForm}>
                                <Input 
                                    label="Add label"
                                    className={classNames(styles.modalInput, styles.addLabelInput)}
                                    value={newLabel}
                                    onChange={(e)=>setNewLabel(e)}
                                />
                                <Button 
                                    label="Add new label" 
                                    size="large" 
                                    variant="fill" 
                                    className={styles.newLabelBtn} 
                                    onClick={()=>{addNewTagFunc()}}
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className={styles.editBtns}>
                    <Button 
                        label="Cancel" 
                        size="large" 
                        variant="outline" 
                        className={styles.modalInput} 
                        onClick={()=>onCancel()}
                    />
                    <Button 
                        label="Save" 
                        size="large" 
                        variant="fill" 
                        className={styles.modalInput} 
                    />
                </div>
            </div>
        </Modal>
    );
}
