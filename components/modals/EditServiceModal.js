import styles from '/styles/components/modals/EditServiceModal.module.scss';
import { Input, Button, Modal, Select, DatePicker } from 'components';
import { useState } from 'react';
import classNames from 'classnames';
import { ReactSVG } from "react-svg";

export default function EditServiceModal({
    onClose,
    onSave,
    onCancel,
}) {
    const [type, setType] = useState('');

    return (
        <Modal onBackClick={onClose} className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalTitle}>
                    <h2>Edit a service</h2>
                </div>
                <div className={styles.modalInputs}>
                    <Input 
                        className={styles.title}
                        label='Name'
                    />
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
                            placeholder='Enter price...'
                        />
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
