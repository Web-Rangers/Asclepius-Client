import { Button, Modal } from 'components';
import styles from 'styles/components/Modals/MessageModal.module.scss'

export default function MessageModal({
    children,
    username, 
    buttonName = null,
    handleClick = null,
    onClose,
    onSave,
    onCancel,
}) {
    return <>
        <Modal onBackClick={onClose} className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalTitle}>
                    <h2>Aclepius</h2>
                </div>
                <div className={styles.messageContent}>
                    <div className={styles.message}>
                        <h2>Hi, {username}</h2>

                        {children}
                        {
                            buttonName !== null && 
                            <Button 
                                label={buttonName}
                                size="large"
                                variant="fill"
                                className={styles.messageBtn}
                                onClick={()=> {
                                    handleClick?.call(null, 'user clicked btn')
                                    onClose(false)
                                }}
                            />
                        }
                    </div>
                    <div className={styles.team}>
                        <span>Best regards,</span>
                        <span>Team Aclepius</span>
                    </div>
                    <div className={styles.btnError}>
                        If the button above does not work, try copying and pasting the URL into your browser. 
                    </div>
                </div>
            </div>
            <div className={styles.modalFooter}>
                Need help? You can contact Asclepius Support at (+995) 220 25 55 or support@Asclepius.ge
            </div>
        </Modal>
    </>
}