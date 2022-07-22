import {useState} from 'react';
import {  Card, Input, Button, Table  } from 'components';
import SideBarLayout from 'layouts/SideBarLayout';
import Breadcrumbs from 'nextjs-breadcrumbs';
import styles from 'styles/pages/commision.module.scss';
import { ReactSVG } from "react-svg";
import classNames from "classnames";

export default function Commision() {
    const [searchValue, setSearchValue] = useState('');

    const offerColumns = [
        {
            key: 'profession_type',
            title: 'Profession type',
            dataIndex: 'profession_type',
        },
        {
            key: 'commision',
            title: 'Commision, %',
            dataIndex: 'commision',
        },
        {
            key: "actions",
            title: "",
            dataIndex: "actions",
            render: (record, key) => {
              return (
                    <div className={styles.tableActions}>
                        <ReactSVG src={"/images/icons/table/edit.svg"} className={styles.iconContainer}/>
                        <ReactSVG src={"/images/icons/table/delete.svg"} className={styles.iconContainer}/>
                    </div>
                );
            },
        },
    ];

    const analysisData = [
        {
            profession_type: 'Anesthesiology',
            commision:'80',
        },
        {
            profession_type: 'Emergency Medicine',
            commision:'20',
        },
        {
            profession_type: 'Gastroenterology',
            commision:'45',
        },
        {
            profession_type: 'Functional diagnostics doctor',
            commision:'15',
        },
        {
            profession_type: 'Radiation Oncology',
            commision:'25',
        },
        {
            profession_type: 'Allergy & Immunology',
            commision:'20',
        }
    ];

    return <>
        <div className={styles.commisionContainer}>
            <div className={styles.pageHeader}>
                <div className={styles.headerTitle}>
                    <h2>Commision</h2>
                </div>
                <div className={styles.headerBreadcrumbs}>
                    <Breadcrumbs
                        omitRootLabel={true}
                        listClassName={styles.breadcrumbs}
                        replaceCharacterList={[{ from: '_', to: ' ' }]}
                    />
                </div>
            </div>

            <Card className={styles.commisionCard}>
                <div className={styles.addCommision}>
                    <div className={styles.formTite}>
                        <h2>Add a commision</h2>
                    </div>
                </div>
                <div className={styles.addComisionForm}>
                    <Input 
                        label="Name" 
                        className={styles.comInput} 
                        placeholder='Enter name...' 
                    />
                    <Input 
                        label="Commision" 
                        className={styles.comInput} 
                        placeholder='Enter commision...' 
                    />
                    <Button 
                        label="Add a service" 
                        size="large" 
                        variant="fill" 
                        className={styles.addBtn} 
                    />
                </div>
            </Card>

            <Card className={styles.commisionCard}>
                <div className={styles.tabHeader}>
                    <h2>Commisions</h2>
                    <div className={styles.searchForm}>
                        <ReactSVG
                            src="/images/icons/inputs/search.svg"
                            className={styles.searchIcon}
                        />  
                        <Input 
                            className={styles.searchBar}
                            name="search" 
                            id="search" 
                            onChange={(e)=> setSearchValue(e)}
                            value={searchValue}
                            placeholder='Search'
                        />
                    </div>
                </div>

                <div className={styles.table}>                   
                    <Table
                        className={styles.table}
                        columns={offerColumns}
                        data={analysisData.filter((e)=> e.profession_type.toLocaleLowerCase().includes(
                            searchValue.toLocaleLowerCase()
                        ))}
                        rowClassName={styles.tableRow}
                        cellClassName={styles.tableCell}
                        headerClassName={styles.tableHeader}
                        bodyClassName={styles.tableBody}
                        pagination={{ pageSize: 8, initialPage: 1 }}
                    />
                </div>
            </Card>
        </div>
    </>
}

Commision.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>
}