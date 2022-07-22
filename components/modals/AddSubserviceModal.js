import styles from '/styles/components/modals/AddSubservice.module.scss';
import { Input, Button, Modal, Select, DatePicker } from 'components';
import React, { useState } from 'react';
import classNames from 'classnames';
import { ReactSVG } from "react-svg";

export default function AddSubserviceModal({
    onClose,
    onSave,
    onCancel,
}) {
    const [type, setType] = useState('');

    return (
        <Modal onBackClick={onClose} className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalTitle}>
                    <h2>New subservice</h2>
                </div>
                <div className={styles.modalInputs}>
                    <div className={styles.inputWithFlags}>
                        <ReactSVG
                            className={styles.flag}
                            src="../images/icons/flags/GB.svg"
                        />
                        <Input 
                            className={styles.flagInput}
                            label='Subservices name in English'
                            placeholder='Enter name...'
                        />
                    </div>
                    <div className={styles.inputWithFlags}>
                        <ReactSVG
                            className={styles.flag}
                            src="../images/icons/flags/RU.svg"
                        />
                        <Input 
                            className={styles.flagInput}
                            label='Subservices name in Russian'
                            placeholder="Введите название..."
                        />
                    </div>
                    <div className={styles.inputWithFlags}>
                        <ReactSVG
                            className={styles.flag}
                            src="../images/icons/flags/GE.svg"
                        />
                        <Input 
                            className={styles.flagInput}
                            label='Subservices name in Georgian'
                            placeholder='შეიყვანეთ სათაური...'
                        />
                    </div>                    
                    <div>
                        <Select 
                            label="Type"
                            labelStyle="outside"
                            className={styles.halfInput}
                            options={[
                                {
                                    label: "Status 1",
                                    value: "1",
                                },
                                { label: "Status 2", value: "2" },
                                ]}
                            onChange={(value) => {
                                setType(value);
                            }}
                            value={type}
                        />
                        <Input 
                            className={styles.halfInput}
                            label='Price'
                        />
                    </div>
                </div>
                <div className={styles.editBtns}>
                    <Button 
                        label="Add subservice" 
                        size="large" 
                        variant="fill" 
                        className={styles.modalInput} 
                    />
                </div>
            </div>
        </Modal>
    );
}
