import {useState} from 'react';
import SideBarLayout from 'layouts/SideBarLayout';
import classNames from "classnames";
import Breadcrumbs from 'nextjs-breadcrumbs';
import {  Card, Button, Input, DatePicker, CheckBox, TableWithDropdowns, EditCard  } from 'components';
import styles from 'styles/pages/cardsDetailed.module.scss';
import { ReactSVG } from "react-svg";

export default function CardsDetailed() {
    const [isOpen, setIsOpen] = useState(false);
    const [card, setCard] = useState('');
    const [cardType, setCardType] = useState('');
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(20);
    const [searchValue, setSearchValue] = useState('');
    const [isModalOpen, setModalOpen] = useState(false)

    const cardDetails = {
        name:'Silver Card',
        id: '123456789',
        image: '../images/cards/card.png',
        last_update: '15.10.2022',
        for_the_owner: 1000,
        for_Family_members: 150,
        promotion: 'Nominal',
        card_type: 'Mixed',
        buffer: '5 days',
        expiration_date: '1 year',
        sold: 25,
        individual: 56,
        usage: 1001,
        family: 241
    };

    const offerColumns = [
        {
            key: "order_id",
            title: "Order Id",
            dataIndex: "order_id",
            render: (record, key) => {
              return (
                    <div className={styles.tableGroup}>
                        <ReactSVG src={"/images/icons/table/arrow.svg"} className={classNames(styles.arrowIcon)}/>
                        <div>
                            <h2>{record}</h2>
                        </div>
                    </div>
                );
            },
        },
        {
            key: 'name',
            title: 'Name',
            dataIndex: 'name',
        },
        {
            key: 'phone_number',
            title: 'Phone number',
            dataIndex: 'phone_number',
        },
        {
            key: 'card_type',
            title: 'Card type',
            dataIndex: 'card_type',
        },
        {
            key: 'card',
            title: 'Card',
            dataIndex: 'card',
        },
        {
            key: 'card_price',
            title: 'Card price',
            dataIndex: 'card_price'
        },
        {
            key: 'client_id',
            title: 'Client id',
            dataIndex: 'hidden'
        },
        {
            key: 'purchase_date',
            title: 'Purchase date',
            dataIndex: 'hidden'
        },
        {
            key: 'card_promotion',
            title: 'Card promotion',
            dataIndex: 'hidden'
        },
        {
            key: 'client_email',
            title: 'Client Email',
            dataIndex: 'hidden'
        },
        {
            key: 'end_date',
            title: 'End date',
            dataIndex: 'hidden'
        },
        {
            key: 'members',
            title: 'Members',
            dataIndex: 'hidden'
        },
    ];

    const analysisData = [
        {
            order_id: '214134556',
            name:'Brooklyn Simmons',
            phone_number:'+9952345562',
            card_type: 'Individual',
            card: 'Platinum',
            card_price: 200,
            client_id: 123456789,
            purchase_date: '14.04.2002',
            card_promotion: 'Nominal',
            client_email: 'Darlene_Robertson@gmail.com',
            end_date: '20.12.2022',
            members: 'Brooklyn Simmons',
        },
        {
            order_id: '214134556',
            name:'Brooklyn Simmons',
            phone_number:'+9952345562',
            card_type: 'Individual',
            card: 'Platinum',
            card_price: 200,
            client_id: 123456789,
            purchase_date: '14.04.2002',
            card_promotion: 'Nominal',
            client_email: 'Darlene_Robertson@gmail.com',
            end_date: '20.12.2022',
            members: 'Brooklyn Simmons',
        },
        {
            order_id: '214134556',
            name:'Brooklyn Simmons',
            phone_number:'+9952345562',
            card_type: 'Individual',
            card: 'Platinum',
            card_price: 200,
            client_id: 123456789,
            purchase_date: '14.04.2002',
            card_promotion: 'Nominal',
            client_email: 'Darlene_Robertson@gmail.com',
            end_date: '20.12.2022',
            members: 'Brooklyn Simmons',
        },
        {
            order_id: '214134556',
            name:'Brooklyn Simmons',
            phone_number:'+9952345562',
            card_type: 'Individual',
            card: 'Platinum',
            card_price: 200,
            client_id: 123456789,
            purchase_date: '14.04.2002',
            card_promotion: 'Nominal',
            client_email: 'Darlene_Robertson@gmail.com',
            end_date: '20.12.2022',
            members: 'Brooklyn Simmons',
        },
        {
            order_id: '214134556',
            name:'Brooklyn Simmons',
            phone_number:'+9952345562',
            card_type: 'Individual',
            card: 'Platinum',
            card_price: 200,
            client_id: 123456789,
            purchase_date: '14.04.2002',
            card_promotion: 'Nominal',
            client_email: 'Darlene_Robertson@gmail.com',
            end_date: '20.12.2022',
            members: 'Brooklyn Simmons',
        },
    ];
    return <>
        <div className={styles.cardsDetailedContainer}>
            <div className={styles.pageHeader}>
                <div className={styles.headerTitle}
                >
                    <h2>Cards</h2>
                    <Button
                        label="History"
                        className={styles.resetButton}
                        size="large"
                        variant="outline"
                    />
                    <Button
                        label="Add new card"
                        className={styles.resetButton}
                        size="large"
                        variant="fill"
                    />
                </div>
                <div className={styles.headerBreadcrumbs}>
                    <Breadcrumbs
                        omitRootLabel={true}
                        listClassName={styles.breadcrumbs}
                        replaceCharacterList={[{ from: '_', to: ' ' }]}
                    />
                </div>
            </div>

            <Card className={styles.cards}>
                {
                    isModalOpen && 
                    <EditCard 
                        onCancel={()=> setModalOpen(false)}
                        onClose={()=> setModalOpen(false)}
                        onSave={()=> setModalOpen(false)}
                    />
                }
                <div className={styles.cardContainer}>
                    <div className={styles.cardBlock}>
                        <div className={styles.cardImage}>
                            <img src={cardDetails.image} alt="" />
                        </div>
                        <div className={styles.cardInfo}>
                            <h2 className={styles.cardTitle}>{cardDetails.name}</h2>
                            <div className={styles.aboutCard}>
                                <div>
                                    <h2>Card Id</h2>
                                    <span>{cardDetails.id}</span>
                                </div>
                                <div>
                                    <h2>Last update</h2>
                                    <span>{cardDetails.last_update}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.editBtn}>
                            <ReactSVG 
                                src={"/images/icons/offer/edit.svg"} 
                                className={classNames(styles.editIcon)}
                                onClick={()=> setModalOpen(!isModalOpen)}
                            />
                        </div>
                    </div>
                </div>
            </Card>

            <div className={styles.cardColumns}>
                <Card 
                    className={styles.cardColumn}
                    cardTitle="Price Info"
                >
                    <div className={styles.columnInfo}>
                        <h2 className={styles.colInfoTitle}>For the owner</h2>
                        <span>{cardDetails.for_the_owner}</span>
                    </div>
                    <div className={styles.columnInfo}>
                        <h2 className={styles.colInfoTitle}>For family members</h2>
                        <span>{cardDetails.for_Family_members}</span>
                    </div>
                </Card>
                <Card 
                    className={styles.cardColumn}
                    cardTitle="Card Info"
                >
                    <div className={styles.columnInfo}>
                        <h2 className={styles.colInfoTitle}>Promotion</h2>
                        <span>{cardDetails.promotion}</span>
                    </div>
                    <div className={styles.columnInfo}>
                        <h2 className={styles.colInfoTitle}>Card type</h2>
                        <span>{cardDetails.card_type}</span>
                    </div>
                    <div className={styles.columnInfo}>
                        <h2 className={styles.colInfoTitle}>Buffer</h2>
                        <span>{cardDetails.buffer}</span>
                    </div>
                    <div className={styles.columnInfo}>
                        <h2 className={styles.colInfoTitle}>Expiration date</h2>
                        <span>{cardDetails.expiration_date}</span>
                    </div>
                </Card>
                <Card 
                    className={styles.cardColumn}
                    cardTitle="Statistics"
                >
                    <div className={styles.columnInfo}>
                        <h2 className={styles.colInfoTitle}>Sold</h2>
                        <span>{cardDetails.sold}</span>
                    </div>
                    <div className={styles.columnInfo}>
                        <h2 className={styles.colInfoTitle}>Individual</h2>
                        <span>{cardDetails.individual}</span>
                    </div>
                    <div className={styles.columnInfo}>
                        <h2 className={styles.colInfoTitle}>Usage</h2>
                        <span>{cardDetails.usage}</span>
                    </div>
                    <div className={styles.columnInfo}>
                        <h2 className={styles.colInfoTitle}>Family</h2>
                        <span>{cardDetails.family}</span>
                    </div>
                </Card>
            </div>

            <Card 
                className={styles.tableCard}
                cardTitle="Card orders"
                cardActions={
                    <div className={styles.cardOrderActions}>
                        <div className={styles.cardBtns}>
                            <Button 
                                label="Card expired" 
                                size="large" 
                                variant="outline" 
                                className={styles.expired} />
                            <Button 
                                label="Filter" 
                                size="large" 
                                variant="outline"
                                icon={
                                    <ReactSVG
                                        src="/images/icons/inputs/filter.svg"
                                        className={classNames(
                                            styles.iconContainer,
                                            styles.active
                                        )}
                                    />
                                }
                                onClick={()=>setIsOpen(!isOpen)}
                            />
                        </div>
                        <div className={classNames(styles.filterContainer, {
                        [styles.filterOpen]: isOpen,
                        })}>
                            <Input 
                                className={styles.searchBar}
                                name="search" 
                                id="search" 
                                label="Client"
                                onChange={(e)=> setSearchValue(e)}
                                value={searchValue}
                                placeholder='Search'
                            />
                            <div className={styles.filterBlock}>
                                <div className={styles.flexBox}>
                                    <div className={styles.filterBl}>
                                        <DatePicker
                                            mode="range"
                                            label="Date of sale"
                                            className={styles.servInput}
                                        />
                                        <div className={styles.selects}>
                                            <h2>Card</h2>
                                            <div>
                                                <Button
                                                    label="Silver"
                                                    variant="outline"
                                                    size="large"
                                                    className={styles.filterBtn}
                                                    selected={card === 'silver'}
                                                    onClick={() =>
                                                        setCard('silver')
                                                    }
                                                />
                                                <Button
                                                    label="Gold"
                                                    variant="outline"
                                                    size="large"
                                                    className={styles.filterBtn}
                                                    selected={card === 'gold'}
                                                    onClick={() =>
                                                        setCard('gold')
                                                    }
                                                />
                                                <Button
                                                    label="Platinum"
                                                    variant="outline"
                                                    size="large"
                                                    className={styles.filterBtn}
                                                    selected={card === 'platinum'}
                                                    onClick={() =>
                                                        setCard('platinum')
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterBl_2}>
                                        <div className={styles.minMax}>
                                        <h2>Number of people</h2>
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
                                        <div className={styles.selects}>
                                            <h2>Card</h2>
                                            <div>
                                                <Button
                                                    label="Individual"
                                                    variant="outline"
                                                    size="large"
                                                    className={styles.filterBtn}
                                                    selected={cardType === 'silver'}
                                                    onClick={() =>
                                                        setCardType('silver')
                                                    }
                                                />
                                                <Button
                                                    label="Family"
                                                    variant="outline"
                                                    size="large"
                                                    className={styles.filterBtn}
                                                    selected={cardType === 'gold'}
                                                    onClick={() =>
                                                        setCardType('gold')
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterBtns}>
                                <div>
                                    <CheckBox 
                                        id={1} 
                                        className={styles.checkbox}
                                        label="Show cards expiring soon"
                                    />
                                </div>
                                <div>
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
                }
            >
                <TableWithDropdowns
                    className={styles.table}
                    columns={offerColumns}
                    data={analysisData}
                    rowClassName={styles.tableRow}
                    cellClassName={styles.tableCell}
                    headerClassName={styles.tableHeader}
                    bodyClassName={styles.tableBody}
                    pagination={{ pageSize: 8, initialPage: 1 }}
                    dropdownClassname={styles.dropDwn}
                />
            </Card>
        </div>
    </>
}

CardsDetailed.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>
}