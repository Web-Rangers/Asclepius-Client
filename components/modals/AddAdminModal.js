import styles from '/styles/components/modals/AdminModal.module.scss';
import { Input, Button, Modal, Select } from 'components';
import { useState } from 'react';
import classNames from 'classnames';

export default function AddAdminModal({
    onClose,
    onSave,
    onCancel,
}) {
    const [statusOption, setStatusOption] = useState('');
    const [clinic, setClinic] = useState('');
    const [branch, setBranch] = useState('');

    return (
        <Modal onBackClick={onClose} className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalTitle}>
                    <h2>New admin</h2>
                </div>
                <div className={styles.modalInputs}>
                    <Input 
                        label="Name" 
                        className={styles.modalInput} 
                        placeholder='Enter name...' 
                    />
                    <Input 
                        label="Surname" 
                        className={styles.modalInput} 
                        placeholder='Enter surname...' 
                    />
                    <Input 
                        label="Username" 
                        className={styles.modalInput} 
                        placeholder='Enter username...' 
                    />
                    <Input 
                        label="Email" 
                        className={styles.modalInput} 
                        placeholder='Enter email...' 
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
                            setStatusOption(value);
                        }}
                        value={statusOption}
                    />
                    {
                        statusOption !== '' && 
                        <>
                            <Select 
                                label="Clinic"
                                labelStyle="outside"
                                className={styles.modalInput}
                                options={[
                                    {
                                        label: "clinic 1",
                                        value: "1",
                                    },
                                    { label: "clinic 2", value: "2" },
                                    ]}
                                onChange={(value) => {
                                    setClinic(value);
                                }}
                                value={clinic}
                            />
                        </>
                    }
                    {
                        clinic !== '' && 
                        <>
                            <Select 
                                label="Branch"
                                labelStyle="outside"
                                className={styles.modalInput}
                                options={[
                                    {
                                        label: "branch 1",
                                        value: "1",
                                    },
                                    { label: "branch 2", value: "2" },
                                    ]}
                                onChange={(value) => {
                                    setBranch(value);
                                }}
                                value={branch}
                            />
                        </>
                    }
                    <Button 
                        label="Add admin" 
                        size="large" 
                        variant="fill" 
                        className={styles.modalInput} 
                    />
                </div>
            </div>
        </Modal>
    );
}
