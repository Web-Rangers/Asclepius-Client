import styles from '/styles/components/modals/ClinicModal.module.scss';
import { Input, Button, Modal } from 'components';
import { useState } from 'react';

interface ClinicData {
    email?: string;
    phone?: string;
    address?: string;
    time?: string;
    registrationDate?: string;
    about?: string;
}

interface ClinicModalProps {
    onClose?: () => void;
    onSave?: (newData: ClinicData) => void;
    onCancel?: () => void;
    data: ClinicData;
}

export default function ClinicModal({
    onClose,
    onSave,
    onCancel,
    data,
}: ClinicModalProps) {
    const [email, setEmail] = useState(data.email);
    const [phone, setPhone] = useState(data.phone);
    const [address, setAddress] = useState(data.address);
    const [time, setTime] = useState(data.time);
    const [registrationDate, setRegistrationDate] = useState(
        data.registrationDate
    );
    const [about, setAbout] = useState(data.about);

    return (
        <Modal onBackClick={onClose} className={styles.modal}>
            <span className={styles.modalTitle}>Edit this clinic</span>
            <div className={styles.modalContent}>
                <div className={styles.modalContentRow}>
                    <Input
                        type="email"
                        label="E-mail"
                        value={email}
                        onChange={(value: string) => setEmail(value)}
                    />
                </div>
                <div className={styles.modalContentRow}>
                    <Input
                        type="time"
                        label="Working hours"
                        value={time}
                        onChange={(value: string) => setTime(value)}
                    />
                    <Input
                        type="text"
                        label="Phone number"
                        value={phone}
                        onChange={(value: string) => setPhone(value)}
                    />
                </div>
                <div className={styles.modalContentRow}>
                    <Input
                        type="text"
                        label="Address"
                        value={address}
                        onChange={(value: string) => setAddress(value)}
                    />
                </div>
                <div className={styles.modalContentRow}>
                    <Input
                        type="text"
                        label="About clinic"
                        multiline
                        value={about}
                        onChange={(value: string) => setAbout(value)}
                    />
                </div>
            </div>
            <div className={styles.whiteSpace}></div>
            <div className={styles.modalActions}>
                <Button
                    label="Calcel"
                    variant="outline"
                    onClick={onCancel}
                    size="large"
                />
                <Button
                    label="Save"
                    variant="fill"
                    onClick={() =>
                        onSave?.call(null, {
                            email,
                            phone,
                            address,
                            time,
                            registrationDate,
                            about,
                        })
                    }
                    size="large"
                />
            </div>
        </Modal>
    );
}
