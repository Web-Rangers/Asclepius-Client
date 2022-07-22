import {useState} from 'react';
import SideBarLayout from 'layouts/SideBarLayout';
import Breadcrumbs from 'nextjs-breadcrumbs'; 
import {Card, TableWithDropdowns, Input, Button} from 'components';
import { ReactSVG } from "react-svg";
import TableStyles from 'styles/components/TableWithDropdown.module.scss';
import styles from 'styles/pages/analysisDetailed.module.scss';
import classNames from "classnames";

export default function AnalysisDetailed() {
    const [isEditOpen, setEditOpen] = useState(false);
    const [name, setName] = useState('Anti-smooth muscle antibodies (ASMA)');

    const analysisColumn = [
        {
            key: "name",
            title: "Name",
            dataIndex: "name",
            render: (record, key) => {
              return (
                    <div className={classNames(styles.tableGroup, styles.nameAndImage)}>
                        <ReactSVG src={"/images/icons/table/arrow.svg"} className={classNames(styles.arrowIcon, TableStyles.arrow)}/>
                        <div>
                            <span 
                                className={styles.colImage}
                            >
                                <img src={record.image} alt="" />
                            </span>
                            <h2>{record.name}</h2>
                        </div>
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
            key: 'reviews',
            title: 'Reviews',
            dataIndex: 'reviews',
            render: (record, key) =>{
                return (
                    <div className={styles.review}>
                        <ReactSVG 
                            src="../images/icons/table/star.svg"
                        />
                        <span>{record}</span>
                    </div>
                )
            }
        },
        {
            key: 'tool',
            title: '',
            dataIndex: 'tool',
            render: (record, key) => {
                return (
                        <div className={styles.tableActons}>
                            <ReactSVG src={"/images/icons/table/edit.svg"} className={styles.iconContainer}/>
                            <ReactSVG src={"/images/icons/table/eye.svg"} className={styles.iconContainer}/>
                        </div>
                  );
              },
        },
        {
            key: 'city',
            title: 'City',
            dataIndex: 'hidden',
        },
        {
            key: 'email',
            title: 'Email',
            dataIndex: 'hidden',
        },
        {
            key: 'registration_date',
            title: 'Registration date',
            dataIndex: 'hidden',
        },
        {
            key: 'amount_of_orders',
            title: 'Amount of orders',
            dataIndex: 'hidden',
        }
    ];

    const analysisData = [
        {
            name: {name:'Medical House', image:'../images/users/user1.png'},
            branch:'4140 Parker Rd. Allentown',
            service:'ServiceName1',
            reviews: '4,5',
            city: 'Tbilisi', 
            email: 'Natus_Medical@gmail.com',
            registration_date: '12.09.2000',
            amount_of_orders: 43
        },
        {
            name: {name:'Medical House', image:'../images/users/user1.png'},
            branch:'4140 Parker Rd. Allentown',
            service:'ServiceName1',
            reviews: '4,5',
            city: 'Tbilisi', 
            email: 'Natus_Medical@gmail.com',
            registration_date: '12.09.2000',
            amount_of_orders: 43
        },
        {
            name: {name:'Medical House', image:'../images/users/user1.png'},
            branch:'4140 Parker Rd. Allentown',
            service:'ServiceName1',
            reviews: '4,5',
            city: 'Tbilisi', 
            email: 'Natus_Medical@gmail.com',
            registration_date: '12.09.2000',
            amount_of_orders: 43
        },
        {
            name: {name:'Medical House', image:'../images/users/user1.png'},
            branch:'4140 Parker Rd. Allentown',
            service:'ServiceName1',
            reviews: '4,5',
            city: 'Tbilisi', 
            email: 'Natus_Medical@gmail.com',
            registration_date: '12.09.2000',
            amount_of_orders: 43
        },
        {
            name: {name:'Medical House', image:'../images/users/user1.png'},
            branch:'4140 Parker Rd. Allentown',
            service:'ServiceName1',
            reviews: '4,5',
            city: 'Tbilisi', 
            email: 'Natus_Medical@gmail.com',
            registration_date: '12.09.2000',
            amount_of_orders: 43
        },
        {
            name: {name:'Medical House', image:'../images/users/user1.png'},
            branch:'4140 Parker Rd. Allentown',
            service:'ServiceName1',
            reviews: '4,5',
            city: 'Tbilisi', 
            email: 'Natus_Medical@gmail.com',
            registration_date: '12.09.2000',
            amount_of_orders: 43
        },
    ];

    return <>
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <div className={styles.headerLeft}>
                    <h3>Analysis</h3>
                </div>
                <div className={styles.headerRight}>
                    <Breadcrumbs
                        omitRootLabel={true}
                        listClassName={styles.breadcrumbs}
                        replaceCharacterList={[{ from: '_', to: ' ' }]}
                    />
                </div>
            </div>

            <Card
                className={styles.analysInfo}
            >
                {
                    !isEditOpen ? 
                        <>
                            <h2>Anti-smooth muscle antibodies (ASMA)</h2>
                            <h4>122453789</h4>
                            <ReactSVG 
                                className={styles.editIcon}
                                src="../images/icons/cards/edit.svg"
                                onClick={()=>setEditOpen(!isEditOpen)}
                            /> 
                        </> : 
                        <>
                            <div className={styles.editForm}>
                                <Input 
                                    name="name"
                                    id="name"
                                    label="Name" 
                                    className={styles.defaultInput}
                                    placeholder="Enter name..."
                                    onChange={(e)=> setName(e)}
                                    value={name}
                                />
                                <Button 
                                    label="Save" 
                                    size="large" 
                                    variant="fill"
                                    onClick={()=>setEditOpen(!isEditOpen)}
                                />
                            </div>
                        </>

                }
                
            </Card>
            
            <Card
                className={styles.cardTable}
                cardTitle="Clinics"
            >
                <TableWithDropdowns
                    className={styles.table}
                    columns={analysisColumn}
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

AnalysisDetailed.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>
}