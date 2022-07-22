import {useState} from 'react';
import SideBarLayout from 'layouts/SideBarLayout';
import Breadcrumbs from 'nextjs-breadcrumbs'; 
import {  Card, Input, Select, Button, Table, DatePicker, AddAdminModal  } from 'components';
import { ReactSVG } from "react-svg";
import classNames from 'classnames';
import TableStyles from 'styles/components/TableWithDropdown.module.scss';
import styles from 'styles/pages/admins.module.scss';

export default function Admins() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [status, setStatus] = useState('');

    const offerColumns = [
        {
            key: "name",
            title: "Name",
            dataIndex: "name",
            render: (record, key) => {
              return (
                    <div className={styles.tableName}>
                        <h2>{record.name}</h2>
                        <span>{record.email}</span>
                    </div>
                );
            },
        },
        {
            key: 'username',
            title: 'Username',
            dataIndex: 'username',
        },
        {
            key: 'status',
            title: 'Status',
            dataIndex: 'status',
        },
        {
            key: 'joined_date',
            title: 'Joined date',
            dataIndex: 'joined_date',
        },
        {
            key: 'created_by',
            title: 'Created by',
            dataIndex: 'created_by',
        },
        {
            key: "more",
            title: "",
            dataIndex: "more",
            render: (record, key) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                    <>
                        <div className={styles.more}>
                            <ReactSVG onClick={()=>{setIsOpen(!isOpen); console.log(isOpen)}} src={"/images/icons/cards/more.svg"} className={styles.moreIcon}/>
                        </div>
                        <div className={classNames(styles.morButton, {
                            [styles.activeMoreBlock]: isOpen
                        })}>
                            <div class={styles.btns}>
                                <div className={styles.moreBtn}>
                                    <ReactSVG 
                                        src={"/images/icons/table/edit.svg"} 
                                        className={styles.iconContainer}
                                    />
                                    <span>Edit</span>
                                </div>
                                <div className={styles.moreBtn}>
                                    <ReactSVG 
                                        src={"/images/icons/table/delete.svg"} 
                                        className={styles.iconContainer}
                                    />
                                    <span>Delete</span>
                                </div>
                            </div>
                        </div>
                    </>
                );
            },
        }
    ];

    const analysisData = [
        {
            name: {
                name: 'Kathryn Murphy',
                email: 'kathrynmurphy@gmail.com'
            },
            username: 'Kathryn_Murphy',
            status:'Offers admin',
            joined_date: '09.09.2009',
            created_by: 'Darlene Robertson'
        },
        {
            name: {
                name: 'Darrell Steward',
                email: 'darrellsteward@gmail.com'
            },
            username: 'Darrell_Steward',
            status:'Users admin',
            joined_date: '11.04.2022',
            created_by: 'Esther Howard'
        },
        {
            name: {
                name: 'Brooklyn Simmons',
                email: 'brooklynsimmons@gmail.com'
            },
            username: 'Brooklyn_Simmons',
            status:'Cards admin',
            joined_date: '23.08.2022',
            created_by: 'Savannah Nguyen'
        },
        {
            name: {
                name: 'Annette Black',
                email: 'annetteBlack@gmail.com'
            },
            username: 'Annette_Black',
            status:'Super admin',
            joined_date: '23.08.2022',
            created_by: 'Cameron Williamson'
        },
        {
            name: {
                name: 'Kathryn Murphy',
                email: 'kathrynmurphy@gmail.com'
            },
            username: 'Kathryn_Murphy',
            status:'Offers admin',
            joined_date: '09.09.2009',
            created_by: 'Darlene Robertson'
        },
        {
            name: {
                name: 'Darrell Steward',
                email: 'darrellsteward@gmail.com'
            },
            username: 'Darrell_Steward',
            status:'Users admin',
            joined_date: '11.04.2022',
            created_by: 'Esther Howard'
        },
        {
            name: {
                name: 'Brooklyn Simmons',
                email: 'brooklynsimmons@gmail.com'
            },
            username: 'Brooklyn_Simmons',
            status:'Cards admin',
            joined_date: '23.08.2022',
            created_by: 'Savannah Nguyen'
        },
        {
            name: {
                name: 'Annette Black',
                email: 'annetteBlack@gmail.com'
            },
            username: 'Annette_Black',
            status:'Super admin',
            joined_date: '23.08.2022',
            created_by: 'Cameron Williamson'
        },
    ];

    return <>
        {isModalOpen && 
            <AddAdminModal 
                onCancel={()=> setModalOpen(false)}
                onClose={()=> setModalOpen(false)}
                onSave={()=> setModalOpen(false)}
            /> 
        }
        <div className={styles.adminsContainer}>
            <div className={styles.pageHeader}>
                <div className={styles.headerLeft}>
                    <h3>Admins</h3>
                    <Button 
                        label="Add a admin"
                        size="large" 
                        variant="fill"
                        className={styles.servInput}
                        onClick={() => setModalOpen(!isModalOpen)}
                    />
                </div>
                <div className={styles.headerRight}>
                    <Breadcrumbs
                        omitRootLabel={true}
                        listClassName={styles.breadcrumbs}
                        replaceCharacterList={[{ from: '_', to: ' ' }]}
                    />
                </div>
            </div>

            <Card className={styles.adminsCard}>
                <div className={styles.tableSearchTools}>
                    <Input 
                        className={styles.searchBar}
                        name="search" 
                        id="search" 
                        onChange={(e)=> setSearchValue(e)}
                        value={searchValue}
                        placeholder='Search'
                    />
                    <div className={styles.toolBar}>
                        <Select 
                            label="Status"
                            labelStyle="inside"
                            className={styles.servInput}
                            options={[
                                {
                                    label: "4140 Parker Rd",
                                    value: "1",
                                },
                                { label: "Another Branch", value: "2" },
                                ]}
                            onChange={(value) => {
                                setStatus(value);
                            }}
                            value={status}
                        />
                        <DatePicker
                            mode="single"
                            className={styles.picker}
                        />
                    </div>
                </div>

                <Table
                    className={styles.table}
                    columns={offerColumns}
                    data={analysisData.filter((e)=> e.name.name.toLocaleLowerCase().includes(
                        searchValue.toLocaleLowerCase()
                    ))}
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

Admins.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>
}