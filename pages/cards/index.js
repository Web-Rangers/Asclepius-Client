import {useState} from 'react';
import SideBarLayout from 'layouts/SideBarLayout';
import Breadcrumbs from 'nextjs-breadcrumbs';
import {  Card, Input, Button, TableWithDropdowns, CheckBox, DatePicker, EditCard  } from 'components';
import classNames from "classnames";
import TableStyles from 'styles/components/TableWithDropdown.module.scss';
import styles from 'styles/pages/cards.module.scss';
import { ReactSVG } from "react-svg";

export default function Cards() {
    const [isOpen, setIsOpen] = useState(false);
    const [card, setCard] = useState('');
    const [cardType, setCardType] = useState('');
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(20);
    const [searchValue, setSearchValue] = useState('');

    const cardList = [{
        name:'Silver Card',
        price: 120,
        cost_for_family_members: 20,
        expiration_date: '1 year',
        id: '123456789',
        promotion: 'Nominal',
        card_type: 'Percentage',
        buffer: '5 days',
        image: 'images/cards/card.png'
    },
    {
        name:'Gold card',
        price: 500,
        cost_for_family_members: 400,
        expiration_date: '5 month',
        id: '123456789',
        promotion: 'Nominal',
        card_type: 'Percentage',
        buffer: '5 days',
        image: 'images/cards/card.png'
    },
    {
        name:'Platinum card',
        price: 120,
        cost_for_family_members: 20,
        expiration_date: '1 year',
        id: '123456789',
        promotion: 'Nominal',
        card_type: 'Percentage',
        buffer: '5 days',
        image: 'images/cards/card.png'
    }]

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
        <div className={styles.cardsContainer}>
            <div className={styles.pageHeader}>
                <div className={styles.headerTitle}
                >
                    <h2>Cards</h2>
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
                    cardList.map((card)=>{
                        const [isOpen, setIsOpen] = useState(false)
                        const [isModalOpen, setModalOpen] = useState(false)

                        return <>
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
                                        <img src={card.image} alt="" />
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <h2 className={styles.cardTitle}>{card.name}</h2>
                                        <div className={styles.aboutCard}>
                                            <div>
                                                <h2>Price</h2>
                                                <span>{card.price}</span>
                                            </div>
                                            <div>
                                                <h2>Cost for family members</h2>
                                                <span>{card.cost_for_family_members}</span>
                                            </div>
                                            <div>
                                                <h2>Expiration date</h2>
                                                <span>{card.expiration_date}</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardBtns}>
                                            <Button label="History" size="large" variant="fill" />
                                            <div 
                                                className={styles.seeAllBtn} 
                                                onClick={()=>setIsOpen(!isOpen)}
                                            >
                                                <ReactSVG 
                                                    src={"/images/icons/table/arrow.svg"} 
                                                    className={classNames(styles.arrowIcon, {
                                                        [styles.rotateArrow]: isOpen
                                                    })}
                                                />
                                                <span>{!isOpen ? 'See all' : 'Сollapse'}</span>
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
                                    <div></div>
                                </div>
                                <div className={classNames(styles.cardDropdown, {
                                    [styles.activeDropdown]: isOpen
                                })}>
                                    <div>
                                        <h2>id</h2>
                                        <span>{card.id}</span>
                                    </div>
                                    <div>
                                        <h2>Promotion</h2>
                                        <span>{card.promotion}</span>
                                    </div>
                                    <div>
                                        <h2>Card type</h2>
                                        <span>{card.card_type}</span>
                                    </div>
                                    <div>
                                        <h2>Buffer</h2>
                                        <span>{card.buffer}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
            </Card>

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
                                                            defaultValue={min}
                                                        />
                                                    <div className={styles.divider} />
                                                    <Input
                                                        className={styles.intervalInput}
                                                        value={max}
                                                        onChange={(value) => setMax(value)}
                                                        defaultValue={max}
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

Cards.getLayout = (page) =>{
    return <SideBarLayout>{page}</SideBarLayout>
}