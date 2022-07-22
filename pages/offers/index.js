import {useState} from 'react';
import SideBarLayout from 'layouts/SideBarLayout';
import Breadcrumbs from 'nextjs-breadcrumbs';
import TableStyles from 'styles/components/TableWithDropdown.module.scss';
import styles from 'styles/pages/offers.module.scss';
import { ReactSVG } from "react-svg";
import {  Card, TableWithSort, Input, Button, DatePicker, Select } from 'components';
import classNames from 'classnames'; 

export default function Offers (){
    const [searchValue, setSearchValue] = useState('')
    const [isOpen, setIsOpen] = useState('');
    const [cardType, setCardType] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    const offerColumns = [
        {
            key: "name",
            title: "Offer name",
            dataIndex: "name",
            sort: true,
            render: (record, key) => {
              return (
                    <div className={styles.tableGroup}>
                        <ReactSVG src={"/images/icons/table/arrow.svg"} className={classNames(styles.arrowIcon, TableStyles.arrow)}/>
                        <span>{record}</span>
                    </div>
                );
            },
        },
        {
            key: 'category',
            title: 'Category',
            dataIndex: 'category',
        },
        {
            key: 'status',
            title: 'Status',
            dataIndex: 'status',
            render: (record, key) => {
                return (
                    
                    <div>
                        <span 
                            className={classNames(styles.statusBtn, {
                                [styles.calceled]: (record == 'Canceled'),
                                [styles.upcoming]: (record == 'Upcoming'),
                                [styles.finished]: (record == 'Finished'),
                                [styles.ongoing]: (record == 'On going'),
                              })}
                        >
                            {record}
                        </span>
                    </div>
                )
            }
        },
        {
            key: 'short_description',
            title: 'Short description',
            dataIndex: 'short_description',
            render: (record, key) => {
                return (
                      <div className={styles.tableDescription}>
                          <span>{record}</span>
                      </div>
                  );
              },
        },
        {
            key: 'created_by',
            title: 'Created by',
            dataIndex: 'created_by',
            sort: true,
        },
        {
            key: "more",
            title: "",
            dataIndex: "more",
            render: (record, key) => {
              return (
                    <>
                        <div class={styles.tableActions}>
                            <ReactSVG 
                                src={"/images/icons/table/edit.svg"} 
                                className={styles.iconContainer}
                            />
                            <ReactSVG 
                                src={"/images/icons/table/delete.svg"} 
                                className={styles.iconContainer}
                            />
                        </div>
                    </>
                );
            },
        },
        {
            key: 'doctor_serivce_id',
            title: 'Doctor service id',
            dataIndex: 'hidden',
        },
        {
            key: 'start_date',
            title: 'Start date',
            dataIndex: 'hidden',
        },
        {
            key: 'clinic',
            title: 'Clinic',
            dataIndex: 'hidden',
        },
        {
            key: 'duration',
            title: 'Duration',
            dataIndex: 'hidden',
        },
        {
            key: 'create_date',
            title: 'Create date',
            dataIndex: 'hidden',
        },
        {
            key: 'end_date',
            title: 'End date',
            dataIndex: 'hidden',
        },
        {
            key: 'card_type',
            title: 'Card type',
            dataIndex: 'hidden',
        },
        {
            key: 'amount_of_orderds',
            title: 'Amount of orders',
            dataIndex: 'hidden',
        },
        {
            key: 'short_description',
            title: 'Short description',
            dataIndex: 'hidden',
        }
    ];

    const offersData = [
        {
            name: 'Zashback',
            category: 'Kathryn_Murphy',
            status:'Upcoming',
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit  ullamco',
            created_by: 'Sarlene Robertson',
            doctor_serivce_id: 648568557,
            start_date: '31.12.2022',
            clinic: 'Medical house',
            duration: 31,
            create_date: '10.12.2021',
            end_date: '01.03.2022',
            card_type: 'Gold',
            amount_of_orderds: 156,
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            name: 'Cashback',
            category: 'Kathryn_Murphy',
            status:'Finished',
            short_description: '09.09.2009',
            created_by: 'Annette Black',
            doctor_serivce_id: 648568557,
            start_date: '31.12.2022',
            clinic: 'Medical house',
            duration: 31,
            create_date: '10.12.2021',
            end_date: '01.03.2022',
            card_type: 'Gold',
            amount_of_orderds: 156,
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            name: 'Cashback',
            category: 'Kathryn_Murphy',
            status:'Canceled',
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit  ullamco',
            created_by: 'Ronald Richards',
            doctor_serivce_id: 648568557,
            start_date: '31.12.2022',
            clinic: 'Medical house',
            duration: 31,
            create_date: '10.12.2021',
            end_date: '01.03.2022',
            card_type: 'Gold',
            amount_of_orderds: 156,
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            name: 'Cashback',
            category: 'Kathryn_Murphy',
            status:'On going',
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit  ullamco',
            created_by: 'Kathryn Murphy',
            doctor_serivce_id: 648568557,
            start_date: '31.12.2022',
            clinic: 'Medical house',
            duration: 31,
            create_date: '10.12.2021',
            end_date: '01.03.2022',
            card_type: 'Gold',
            amount_of_orderds: 156,
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            name: 'Cashback',
            category: 'Kathryn_Murphy',
            status:'Canceled',
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit  ullamco',
            created_by: 'Theresa Webb',
            doctor_serivce_id: 648568557,
            start_date: '31.12.2022',
            clinic: 'Medical house',
            duration: 31,
            create_date: '10.12.2021',
            end_date: '01.03.2022',
            card_type: 'Gold',
            amount_of_orderds: 156,
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            name: 'Cashback',
            category: 'Kathryn_Murphy',
            status:'Upcoming',
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit  ullamco',
            created_by: 'Ralph Edwards',
            doctor_serivce_id: 648568557,
            start_date: '31.12.2022',
            clinic: 'Medical house',
            duration: 31,
            create_date: '10.12.2021',
            end_date: '01.03.2022',
            card_type: 'Gold',
            amount_of_orderds: 156,
            short_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
    ];

    return <>
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <div className={styles.headerTitle}
                >
                    <h2>Offers</h2>
                </div>
                <div className={styles.headerBreadcrumbs}>
                    <Breadcrumbs
                        omitRootLabel={true}
                        listClassName={styles.breadcrumbs}
                        replaceCharacterList={[{ from: '_', to: ' ' }]}
                    />
                </div>
            </div>

            <Card 
                className={styles.offersTab}
            >
                <div className={styles.tableTopBlock}>
                    <div className={styles.searchTool}>
                        <div className={styles.searchForm}>
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
                                <div className={styles.filterSelectors}>
                                    <DatePicker
                                        mode="single"
                                        label="Create date"
                                        className={styles.servInput}
                                    />
                                    <DatePicker
                                        mode="single"
                                        label="Date range"
                                        className={styles.servInput}
                                    />
                                    <Select 
                                        label="City"
                                        labelStyle="outside"
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
                                    />
                                    <Select 
                                        label="Category"
                                        labelStyle="outside"
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
                                    />
                                    <Select 
                                        label="Clinic"
                                        labelStyle="outside"
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
                                    />
                                    <div className={styles.minMax}>
                                        <h2>Duration</h2>
                                        <div>                                        
                                            <Input
                                                className={styles.intervalInput}
                                                value={min}
                                                onChange={(value) => setMin(value)}
                                            />
                                            <div className={styles.divider} />
                                            <Input
                                                className={styles.intervalInput}
                                                value={max}
                                                onChange={(value) => setMax(value)}
                                            />
                                        </div> 
                                    </div>
                                    <Select 
                                        label="Admin"
                                        labelStyle="outside"
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
                                    />
                                    <div className={styles.selects}>
                                        <h2>Card</h2>
                                        <div>
                                            <Button
                                                label="Silver"
                                                variant="outline"
                                                size="large"
                                                className={styles.filterBtn}
                                                selected={cardType === 'silver'}
                                                onClick={() =>
                                                    setCardType('silver')
                                                }
                                            />
                                            <Button
                                                label="Gold"
                                                variant="outline"
                                                size="large"
                                                className={styles.filterBtn}
                                                selected={cardType === 'gold'}
                                                onClick={() =>
                                                    setCardType('gold')
                                                }
                                            />
                                            <Button
                                                label="Platinum"
                                                variant="outline"
                                                size="large"
                                                className={styles.filterBtn}
                                                selected={cardType === 'platinum'}
                                                onClick={() =>
                                                    setCardType('platinum')
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.selects}>
                                        <h2>Card types</h2>
                                        <div>
                                            <Button
                                                label="Silver"
                                                variant="outline"
                                                size="large"
                                                className={styles.filterBtn}
                                                selected={cardType === 'silver'}
                                                onClick={() =>
                                                    setCardType('silver')
                                                }
                                            />
                                            <Button
                                                label="Gold"
                                                variant="outline"
                                                size="large"
                                                className={styles.filterBtn}
                                                selected={cardType === 'gold'}
                                                onClick={() =>
                                                    setCardType('gold')
                                                }
                                            />
                                            <Button
                                                label="Platinum"
                                                variant="outline"
                                                size="large"
                                                className={styles.filterBtn}
                                                selected={cardType === 'platinum'}
                                                onClick={() =>
                                                    setCardType('platinum')
                                                }
                                            />
                                        </div>
                                    </div>
                                    <Select 
                                        label="Status"
                                        labelStyle="outside"
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
                                    />
                                </div>
                            </div>
                            <div className={styles.filterBtns}>
                                <div className={styles.minMax}>
                                    <h2>Duration</h2>
                                    <div>                                        
                                        <Input
                                            className={styles.intervalInput}
                                            value={min}
                                            onChange={(value) => setMin(value)}
                                        />
                                        <div className={styles.divider} />
                                        <Input
                                            className={styles.intervalInput}
                                            value={max}
                                            onChange={(value) => setMax(value)}
                                        />
                                    </div> 
                                </div>
                                <div className={styles.btns}>
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
                    </div>
                    <div>
                        <Button 
                            label="Add an offer" 
                            size="large" 
                            variant="fill"
                        />
                    </div>
                </div>

                <TableWithSort
                        className={styles.table}
                        columns={offerColumns}
                        data={offersData.filter((e)=> e.name.toLocaleLowerCase().includes(
                            searchValue.toLocaleLowerCase()
                        ))}
                        rowClassName={styles.tableRow}
                        cellClassName={styles.tableCell}
                        headerClassName={styles.tableHeader}
                        bodyClassName={styles.tableBody}
                        pagination={{ pageSize: 8, initialPage: 1 }}
                        dropdownClassname={styles.dropDown}
                    />

            </Card>
        </div>
    </>
}

Offers.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>
}