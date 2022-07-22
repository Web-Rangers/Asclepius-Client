import {useState} from 'react';
import SideBarLayout from 'layouts/SideBarLayout';
import Breadcrumbs from 'nextjs-breadcrumbs';
import {  Card, Tags, Input, Select, Button, TableWithDropdowns  } from 'components';
import styles from 'styles/pages/ServicesDetailed.module.scss';
import { ReactSVG } from "react-svg";
import classNames from 'classnames';
import TableStyles from 'styles/components/TableWithDropdown.module.scss';

export default function ServicesDetailed() {
    const [editTab, setEditTab] = useState(false);
    const [tags, setTags] = useState([
        {
            id: 1,
            value: 'Dentist'
        },
        {
            id: 2,
            value: 'Medicine'
        },
    ]);

    const [type, setType] = useState();

    const offerColumns = [
        {
            key: "name",
            title: "Name",
            dataIndex: "name",
            render: (record, key) => {
              return (
                    <div className={styles.tableActions}>
                        <ReactSVG src={"/images/icons/table/arrow.svg"} className={classNames(styles.arrowIcon, TableStyles.arrow)}/>
                        <img
                            src="/images/doctors/doctor.png"
                            alt="doctor"
                            className={styles.doctorImage}
                            />
                        <span>{record}</span>
                    </div>
                );
            },
        },
        {
            key: 'branch',
            title: 'Branch',
            dataIndex: 'branch',
        },
        {
            key: 'service',
            title: 'Service',
            dataIndex: 'service',
        },
        {
            key: "reviews",
            title: "Reviews",
            dataIndex: "reviews",
            render: (record, key) => {
              return (
                    <div className={styles.reviews}>
                        <ReactSVG src={"/images/icons/table/star.svg"} className={styles.starIcon}/>
                        <span>{record}</span>
                    </div>
                );
            },
        },
        {
            key: "actions",
            title: "",
            dataIndex: "actions",
            render: (record, key) => {
              return (
                    <div className={styles.tableActions}>
                        <ReactSVG src={"/images/icons/table/edit.svg"} className={styles.iconContainer}/>
                        <ReactSVG src={"/images/icons/table/eye.svg"} className={styles.iconContainer}/>
                    </div>
                );
            },
        },
        {
            key: 'registration_date',
            title: 'Registration date',
            dataIndex: 'hidden'
        },
        {
            key: 'city',
            title: 'City',
            dataIndex: 'hidden'
        },
        {
            key: 'email',
            title: 'Email',
            dataIndex: 'hidden'
        },
        {
            key: 'amount_of_orders',
            title: 'Amount of orders',
            dataIndex: 'hidden'
        },
    ];

    const analysisData = [
        {
            branch: '758597122',
            name:'Anti-smooth muscle antibodies (ASMA)',
            service: 'In clinic',
            reviews:'4.5',
            city: 'Tbilisi',
            email: 'Natus_Medical@gmail.com',
            registration_date: '12.09.2000',
            amount_of_orders: '23',
        },
        {
            branch: '758597122',
            name:'Anti-Factor X | Activity',
            service: 'In clinic',
            reviews:'4.1',
            city: 'Tbilisi',
            email: 'Natus_Medical@gmail.com',
            registration_date: '12.09.2000',
            amount_of_orders: '33',
        },
        {
            branch:'758597122',
            name:'Group B streptococcal screening',
            service: 'In clinic',
            reviews:'5',
            city: 'Tbilisi',
            email: 'Natus_Medical@gmail.com',
            registration_date: '12.09.2000',
            amount_of_orders: '143',
        },
        {
            branch: '758597122',
            name:'Adenovirus | Antibodies',
            service: 'In clinic',
            reviews:'3.8',
            city: 'Tbilisi',
            email: 'Natus_Medical@gmail.com',
            registration_date: '12.09.2000',
            amount_of_orders: '343',
        }
    ];

    const serviceInfo = {
        service_name: 'Service Name 1',
        service_id: '567580232',
        service_type: 'Service type 1',
        duration: '100'
    }

    const editServiceInfo = () => {
        setEditTab(false)
    }

    return <>
        <div className={styles.servicesDetailed}>
            <div className={styles.pageHeader}>
                <div className={styles.headerLeft}>
                    <h3>Services</h3>
                </div>
                <div className={styles.headerRight}>
                    <Breadcrumbs
                        omitRootLabel={true}
                        listClassName={styles.breadcrumbs}
                        replaceCharacterList={[{ from: '_', to: ' ' }]}
                    />
                </div>
            </div>

            <Card className={styles.servDetailCard}>
                <div className={styles.servDetailedInfo}>
                    {!editTab ? 
                        (
                            <>
                                <div className={styles.block}>
                                    <div className={styles.tags}>
                                        <h2>{serviceInfo.service_name}</h2>
                                        <div className={styles.tagList}>
                                            {
                                                tags?.map((tag)=>{
                                                    return <div className={styles.tagBlock}>{tag.value}</div>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={styles.edit}>
                                        <span onClick={()=> setEditTab(true)}>
                                            <ReactSVG src={"/images/icons/table/edit.svg"} className={styles.iconContainer}/>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.servInfo}>
                                    <div>
                                        <h4>Service Id</h4>
                                        <h2>{serviceInfo.service_id}</h2>
                                    </div>
                                    <div>
                                        <h4>Service type</h4>
                                        <h2>{serviceInfo.service_type}</h2>
                                    </div>
                                    <div>
                                        <h4>Duration</h4>
                                        <h2>{serviceInfo.duration}</h2>
                                    </div>
                                </div>
                            </>
                        )
                    :
                        (
                            <>
                                <div className={styles.block}>
                                    <div className={styles.tags}>
                                        <h2>Edit a service</h2>
                                    </div>
                                </div>
                                <div className={styles.editServices}>
                                    <div className={styles.editBlock}>
                                        <Input 
                                            className={styles.defaultInput}
                                            label="Name"
                                            labelStyle="outer"
                                            value={serviceInfo.service_name}
                                        />
                                        <Tags 
                                            tags={tags}
                                            setTags={setTags}
                                            className={styles.defaultInput}
                                            labelLayout='outside'
                                            label='Tags'
                                        />
                                    </div>
                                    <div className={styles.editBlock_2}>
                                        <Select 
                                            label="type"
                                            labelStyle="outside"
                                            className={styles.defaultInput}
                                            options={[
                                                {
                                                    label: "New Mexico",
                                                    value: "1",
                                                },
                                                { label: "Another Branch", value: "2" },
                                                ]}
                                            onChange={(value) => {
                                                setType(value);
                                            }}
                                            value={type}
                                        />
                                        <Input 
                                            className={styles.defaultInput}
                                            label="Duration"
                                            labelStyle="outer"
                                            value={serviceInfo.duration}
                                        />
                                        <Button 
                                            label="Save"
                                            size="large" 
                                            variant="fill"
                                            className={styles.saveBtn}
                                            onClick={() => editServiceInfo()}
                                        />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </Card>

            <Card className={styles.servDetailCard}>
                <TableWithDropdowns
                    className={styles.table}
                    columns={offerColumns}
                    data={analysisData}
                    rowClassName={styles.tableRow}
                    cellClassName={styles.tableCell}
                    headerClassName={styles.tableHeader}
                    bodyClassName={styles.tableBody}
                    pagination={{ pageSize: 8, initialPage: 1 }}
                />
            </Card>
        </div>
    </>
}

ServicesDetailed.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>;
};