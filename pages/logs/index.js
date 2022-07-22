import {useState} from 'react';
import {  Card, Input, Button, TableWithDropdowns, Select, DatePicker  } from 'components';
import SideBarLayout from 'layouts/SideBarLayout';
import Breadcrumbs from 'nextjs-breadcrumbs';
import styles from 'styles/pages/logs.module.scss';
import { ReactSVG } from "react-svg";
import classNames from "classnames";
import TableStyles from 'styles/components/TableWithDropdown.module.scss';

export default function Logs() {
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState('');
    const [type, setType] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const offerColumns = [
        {
            key: "date",
            title: "Date/Time",
            dataIndex: "date",
            render: (record, key) => {
              return (
                    <div className={styles.tableGroup}>
                        <ReactSVG src={"/images/icons/table/arrow.svg"} className={classNames(styles.arrowIcon, TableStyles.arrow)}/>
                        <div>
                            <h2>18.03.2022</h2>
                            <span>09:00:09</span>
                        </div>
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
            key: 'user_type',
            title: 'User type',
            dataIndex: 'user_type',
        },
        {
            key: 'page',
            title: 'page',
            dataIndex: 'page',
        },
        {
            key: 'description_of_changes',
            title: 'Description of changes',
            dataIndex: 'description_of_changes',
            render: (record, key) => {
                return (
                      <div className={styles.tableGroup}>
                          <div className={styles.description}>
                            {record}
                          </div>
                      </div>
                  );
              },
        },
        {
            key: 'description_of_changes',
            title: 'Description of changes',
            dataIndex: 'hidden'
        }
    ];

    const analysisData = [
        {
            date: {date:'18.03.2022', time:'09:00:09'},
            username:'Anti-smooth muscle antibodies (ASMA)',
            user_type:'4.5',
            page: 'Tbilisi',
            description_of_changes: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
            date: {date:'18.03.2022', time:'09:00:09'},
            username:'Anti-smooth muscle antibodies (ASMA)',
            user_type:'4.5',
            page: 'Tbilisi',
            description_of_changes: 'Natus_Medical@gmail.com',
        },
        {
            date: {date:'18.03.2022', time:'09:00:09'},
            username:'Anti-smooth muscle antibodies (ASMA)',
            user_type:'4.5',
            page: 'Tbilisi',
            description_of_changes: 'Natus_Medical@gmail.com',
        },
        {
            date: {date:'18.03.2022', time:'09:00:09'},
            username:'Anti-smooth muscle antibodies (ASMA)',
            user_type:'4.5',
            page: 'Tbilisi',
            description_of_changes: 'Natus_Medical@gmail.com',
        },
        {
            date: {date:'18.03.2022', time:'09:00:09'},
            username:'Anti-smooth muscle antibodies (ASMA)',
            user_type:'4.5',
            page: 'Tbilisi',
            description_of_changes: 'Natus_Medical@gmail.com',
        },
        {
            date: {date:'18.03.2022', time:'09:00:09'},
            username:'Anti-smooth muscle antibodies (ASMA)',
            user_type:'4.5',
            page: 'Tbilisi',
            description_of_changes: 'Natus_Medical@gmail.com',
        },
        {
            date: {date:'18.03.2022', time:'09:00:09'},
            username:'Anti-smooth muscle antibodies (ASMA)',
            user_type:'4.5',
            page: 'Tbilisi',
            description_of_changes: 'Natus_Medical@gmail.com',
        },
    ];

    return <>
        <div className={styles.logsContainer}>
            <div className={styles.pageHeader}>
                <div className={styles.headerTitle}
                >
                    <h2>Logs</h2>
                </div>
                <div className={styles.headerBreadcrumbs}>
                    <Breadcrumbs
                        omitRootLabel={true}
                        listClassName={styles.breadcrumbs}
                        replaceCharacterList={[{ from: '_', to: ' ' }]}
                    />
                </div>
            </div>

            <Card className={styles.logCard}>
                <div className={styles.logFilters}>
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

                    <Button
                        variant="outline"
                        size="large"
                        label="Filter"
                        onClick={() => setIsOpen(!isOpen)}
                        icon={
                            <ReactSVG
                                src="/images/icons/inputs/filter.svg"
                                className={classNames(
                                    styles.iconContainer,
                                    styles.active
                                )}
                            />
                        }
                    />

                    <div className={classNames(styles.filterContainer, {
                        [styles.filterOpen]: isOpen,
                    })}>
                        <div className={styles.filterBlock}>
                            <DatePicker
                                mode="single"
                                label="Date"
                                className={styles.servInput}
                            />
                            <Select 
                                label="Page"
                                labelStyle="outside"
                                className={styles.servInput}
                                options={[
                                    {
                                        label: "4140 Parker Rd. Allentown, New Mexico 31134",
                                        value: "1",
                                    },
                                    { label: "Another Branch", value: "2" },
                                    ]}
                                onChange={(value) => {
                                    setPage(value);
                                }}
                                value={page}
                            />
                            <Select 
                                label="User type"
                                labelStyle="outside"
                                className={styles.servInput}
                                options={[
                                    {
                                        label: "4140 Parker Rd. Allentown, New Mexico 31134",
                                        value: "1",
                                    },
                                    { label: "Another Branch", value: "2" },
                                    ]}
                                onChange={(value) => {
                                    setType(value);
                                }}
                                value={type}
                            />
                        </div>
                        <div className={styles.filterBtns}>
                            <Button
                                label="Reset filter"
                                className={styles.resetButton}
                                size="large"
                                variant="text"
                                icon={
                                    <ReactSVG
                                        src="/images/icons/inputs/reset.svg"
                                        className={styles.iconContainer}
                                    />
                                }
                            />
                            <Button label="Apply" size="large" variant="fill" />
                        </div>
                    </div>
                </div>

                <div className={styles.table}>                   
                    <TableWithDropdowns
                        className={styles.table}
                        columns={offerColumns}
                        data={analysisData.filter((e)=> e.username.toLocaleLowerCase().includes(
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

Logs.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>
}