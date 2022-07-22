import styles from '/styles/components/modals/EditCard.module.scss';
import { Input, Button, Modal, Select } from 'components';
import { useState } from 'react';
import classNames from 'classnames';

export default function EditCard({
    onClose,
    onSave,
    onCancel,
}) {
    const [price, setPrice] = useState('123');
    const [cost, setCost] = useState('123');
    const [promotion, setPromotion] = useState('');
    const [cardType, setCardType] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [day, setDay] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    return (
        <Modal onBackClick={onClose} className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalTitle}>
                    <h2>Edit card</h2>
                </div>
                <div className={styles.modalInputs}>
                    <Input 
                        label="Price" 
                        className={styles.modalInput} 
                        placeholder='Enter price...' 
                        value={price}
                        defaultValue={price}
                        onChange={(e)=>setPrice(e.value)}
                    />
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
                    <Input 
                        label="Cost for family members" 
                        className={styles.modalInput} 
                        placeholder='Enter cost for family members...' 
                        value={cost}
                        defaultValue={cost}
                        onChange={(e)=>setCost(e.value)}
                    />
                    <Select 
                        label="Card type"
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
                    <div className={styles.modalInput}>
                        <h2>Buffer</h2>
                        <div className={styles.modalSelects}>
                            <Select 
                                label="Day"
                                labelStyle="inside"
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
                                label="Hours"
                                labelStyle="inside"
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
                                label="Minutes"
                                labelStyle="inside"
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
                    <Select 
                        label="Expiration date"
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
                            setExpirationDate(value);
                        }}
                        value={expirationDate}
                    />
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
