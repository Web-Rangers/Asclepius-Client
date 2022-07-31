import {
    Button,
    Card,
    Select,
    Switch,
    Table,
    DatePicker,
    Modal,
    Input,
} from 'components';
import SideBarLayout from 'layouts/SideBarLayout';
import Breadcrumbs from 'nextjs-breadcrumbs';
import { ReactSVG } from 'react-svg';
import styles from 'styles/pages/user_detailed.module.scss';
import { useState } from 'react';
import tableStyles from 'styles/components/Table.module.scss';
import classNames from 'classnames';

interface ActionProps {
    icon?: string;
    onClick?: () => void;
}

const EditAction = ({ onClick, icon }: ActionProps) => (
    <ReactSVG src={icon} onClick={onClick} className={styles.edit}></ReactSVG>
);

const orderColumns = [
    {
        key: 'date',
        title: 'Date',
        dataIndex: 'date',
    },
    {
        key: 'clinic',
        title: 'Clinic',
        dataIndex: 'clinic',
    },
    {
        key: 'service',
        title: 'Service',
        dataIndex: 'service',
    },
    {
        key: 'doctor',
        title: 'Doctor',
        dataIndex: 'doctor',
    },
    {
        key: 'status',
        title: 'Status',
        dataIndex: 'status',

        render: (record, key) => {
            return (
                <div
                    className={classNames(
                        tableStyles.tableCellTemplate,
                        styles.tableCell
                    )}
                    key={key}
                    style={{
                        color: record.color,
                    }}
                >
                    {record.title}
                </div>
            );
        },
    },
    {
        key: 'type',
        title: 'Type',
        dataIndex: 'type',
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        headerStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    {
        key: 'price',
        title: 'Price',
        dataIndex: 'price',
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        headerStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
    },
    {
        key: 'grade',
        title: 'Grade',
        dataIndex: 'grade',
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        headerStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
    },
    {
        key: 'actions',
        title: '',
        dataIndex: 'actions',
        render: (record, key) => {
            return (
                <div
                    className={classNames(
                        tableStyles.tableCellTemplate,
                        styles.tableCell,
                        styles.infoAction
                    )}
                    key={key}
                >
                    <ReactSVG
                        src="/images/icons/table/info.svg"
                        className={styles.iconContainer}
                    />
                </div>
            );
        },
    },
];

const data = [
    {
        date: '10.04.2022',
        clinic: 'Medical House 4140 Parker Rd. Allentown',
        service: 'Dentist',
        doctor: 'Jenny Wilson',
        status: {
            title: 'Done',
            color: '#00A875',
        },
        type: 'Online',
        price: '22',
        grade: '5',
    },
    {
        date: '08.01.2022',
        clinic: 'Medicine 4517 Washington Ave ',
        service: 'Blood Test',
        doctor: 'Brooklyn Simmons',
        status: {
            title: 'Canceled',
            color: '#E32323',
        },
        type: 'Clinic',
        price: '10',
        grade: '4.8',
    },
    {
        date: '10.04.2022',
        clinic: 'Natus Medical 2715 Ash Dr. San Jose',
        service: 'General ckeckup',
        doctor: 'Darrell Steward',
        status: {
            title: 'In progress',
            color: '#FFC14E',
        },
        type: 'Home',
        price: '2000',
        grade: '4.2',
    },
    {
        date: '29.11.2022',
        clinic: 'FONAR 8502 Preston Rd. Inglewood',
        service: 'Сonsultation',
        doctor: 'Esther Howard',
        status: {
            title: 'Done',
            color: '#00A875',
        },
        type: 'Online',
        price: '150',
        grade: '3.2',
    },
    {
        date: '04.04.2022',
        clinic: 'Stryker Corp 3517 W. Gray St. Utica',
        service: 'Сonsultation',
        doctor: 'Courtney Henry',
        status: {
            title: 'In progress',
            color: '#FFC14E',
        },
        type: 'Clinic',
        price: '10',
        grade: '4.6',
    },
    {
        date: '10.04.2022',
        clinic: 'Natus Medical 2715 Ash Dr. San Jose',
        service: 'General ckeckup',
        doctor: 'Darrell Steward',
        status: {
            title: 'In progress',
            color: '#FFC14E',
        },
        type: 'Home',
        price: '2000',
        grade: '4.2',
    },
    {
        date: '29.11.2022',
        clinic: 'FONAR 8502 Preston Rd. Inglewood',
        service: 'Сonsultation',
        doctor: 'Esther Howard',
        status: {
            title: 'Done',
            color: '#00A875',
        },
        type: 'Online',
        price: '150',
        grade: '3.2',
    },
    {
        date: '04.04.2022',
        clinic: 'Stryker Corp 3517 W. Gray St. Utica',
        service: 'Сonsultation',
        doctor: 'Courtney Henry',
        status: {
            title: 'In progress',
            color: '#FFC14E',
        },
        type: 'Clinic',
        price: '10',
        grade: '4.6',
    },
];

export default function UserDetailed() {
    const [isActive, setIsActive] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [dateRange, setDateRange] = useState('');
    const [isEdit, setEdit] = useState(false);
    return (
        <>
            {isEdit && (
                <Modal
                    onBackClick={() => setEdit(false)}
                    className={styles.modal}
                >
                    <div className={styles.modalHeader}>Info</div>
                    <div className={styles.modalRow}>
                        <div className={styles.modalInput}>
                            <div className={styles.modalTitle}>
                                Date of birth
                            </div>
                            <DatePicker mode="single" />
                        </div>
                        <div className={styles.modalInput}>
                            <div className={styles.modalTitle}>Gender</div>
                            <Select
                                label=""
                                onChange={() => {}}
                                options={[]}
                                labelStyle="inside"
                            />
                        </div>
                    </div>
                    <div className={styles.modalRow}>
                        <div className={styles.modalInput}>
                            <div className={styles.modalTitle}>
                                Registration address
                            </div>
                            <Input type="text" />
                        </div>

                        <div className={styles.modalInput}>
                            <div className={styles.modalTitle}>City</div>
                            <Select
                                label=""
                                onChange={() => {}}
                                options={[]}
                                labelStyle="inside"
                            />
                        </div>
                    </div>
                    <div className={styles.modalRow}>
                        <div className={styles.modalInput}>
                            <div className={styles.modalTitle}>Card type</div>
                            <Select
                                label=""
                                onChange={() => {}}
                                options={[]}
                                labelStyle="inside"
                            />
                        </div>
                        <div className={styles.modalInput}>
                            <div className={styles.modalTitle}>Card valid until</div>
                            <DatePicker mode="single" />
                        </div>
                    </div>
                    <div className={styles.modalActions}>
                        <Button label='Cancel' size='large' variant='outline'/>
                        <Button label='Save' size='large' variant='fill'/>
                    </div>
                </Modal>
            )}
            <div className={styles.container}>
                <div className={styles.pageHeader}>
                    <div className={styles.pageHeaderLeft}>
                        <h3>User</h3>
                        <Button
                            label="Block user"
                            size="large"
                            variant="fill"
                        />
                    </div>
                    <Breadcrumbs
                        omitRootLabel={true}
                        listClassName={styles.breadcrumbs}
                        replaceCharacterList={[{ from: '_', to: ' ' }]}
                    />
                </div>
                <div className={styles.pageBody}>
                    <Card className={styles.doctorRow}>
                        <div className={styles.imageContainer}>
                            <img
                                src="/images/users/user.png"
                                alt="doctor"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.name}>Leslie Alexander</div>
                            <div className={styles.mail}>
                                <ReactSVG
                                    src={'/images/icons/inputs/mail.svg'}
                                />
                                <span>LeslieAlex@gmail.com</span>
                            </div>
                            <div className={styles.phone}>
                                <ReactSVG
                                    src={'/images/icons/inputs/phone.svg'}
                                />
                                <span>(239) 555-0108 </span>
                            </div>
                        </div>
                        <EditAction
                            icon="/images/icons/inputs/edit.svg"
                            onClick={() => {}}
                        />
                    </Card>
                    <Card
                        cardTitle="Info"
                        cardActions={
                            <EditAction
                                icon="/images/icons/inputs/edit.svg"
                                onClick={() => {
                                    setEdit(true);
                                }}
                            />
                        }
                    >
                        <div className={styles.userInfo}>
                            <div className={styles.infoColumn}>
                                <div className={styles.dataRow}>
                                    <div className={styles.dataTitle}>
                                        Date of birth
                                    </div>
                                    <div className={styles.dataValue}>
                                        23.03.1980
                                    </div>
                                </div>
                                <div className={styles.dataRow}>
                                    <div className={styles.dataTitle}>
                                        Registration address
                                    </div>
                                    <div className={styles.dataValue}>
                                        4140 Parker Rd. Allentown
                                    </div>
                                </div>
                                <div className={styles.dataRow}>
                                    <div className={styles.dataTitle}>
                                        Amount of orders
                                    </div>
                                    <div className={styles.dataValue}>89</div>
                                </div>
                                <div className={styles.dataRow}>
                                    <div className={styles.dataTitle}>
                                        Card type
                                    </div>
                                    <div className={styles.dataValue}>Gold</div>
                                </div>
                                <div className={styles.dataRow}>
                                    <div className={styles.dataTitle}>
                                        Сard status
                                    </div>
                                    <div className={styles.dataValue}>
                                        <Switch
                                            checked={isActive}
                                            onChange={(value) =>
                                                setIsActive(value)
                                            }
                                        />
                                        {isActive ? 'Active' : 'Deactive'}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.infoShortColumn}>
                                <div className={styles.dataRow}>
                                    <div className={styles.dataTitle}>
                                        Gender
                                    </div>
                                    <div className={styles.dataValue}>
                                        Female
                                    </div>
                                </div>
                                <div className={styles.dataRow}>
                                    <div className={styles.dataTitle}>City</div>
                                    <div className={styles.dataValue}>
                                        Tbilisi
                                    </div>
                                </div>
                                <div className={styles.dataRow}>
                                    <div className={styles.dataTitle}>ID</div>
                                    <div className={styles.dataValue}>
                                        17807709
                                    </div>
                                </div>
                                <div className={styles.dataRow}>
                                    <div className={styles.dataTitle}>
                                        Card valid until
                                    </div>
                                    <div className={styles.dataValue}>
                                        14.06.2022
                                    </div>
                                </div>
                                <div className={styles.dataRow}>
                                    <div className={styles.dataTitle}>
                                        Family
                                    </div>
                                    <div className={styles.dataValue}>
                                        <Button
                                            className={styles.addFamily}
                                            variant="text"
                                            label="+ Add member"
                                            size="large"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card
                        cardTitle="orders"
                        cardActions={
                            <div className={styles.orderActions}>
                                <div className={styles.dateContainer}>
                                    <span>Date range</span>
                                    <DatePicker
                                        mode="range"
                                        value={dateRange}
                                        onChange={setDateRange}
                                    />
                                </div>
                                <div className={styles.selectContainer}>
                                    <span>Status</span>
                                    <Select
                                        className={styles.statusSelect}
                                        label="Status"
                                        options={[
                                            {
                                                label: 'Active',
                                                value: 'true',
                                            },
                                            {
                                                label: 'Closed',
                                                value: 'false',
                                            },
                                        ]}
                                        onChange={(value) => {
                                            setSelectedStatus(value);
                                        }}
                                        value={selectedStatus}
                                    />
                                </div>
                            </div>
                        }
                    >
                        <Table
                            columns={orderColumns}
                            rowClassName={styles.tableRow}
                            cellClassName={styles.tableCell}
                            data={data}
                            pagination={{ pageSize: 5, initialPage: 1 }}
                        />
                    </Card>
                </div>
            </div>
        </>
    );
}

UserDetailed.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>;
};
