import { ReactSVG } from 'react-svg';
import {
    Button,
    Card,
    DatePicker,
    Input,
    Range,
    Select,
    Table,
} from 'components';
import SideBarLayout from 'layouts/SideBarLayout';
import styles from 'styles/pages/users.module.scss';
import tableStyles from 'styles/components/Table.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

const data = [
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Female',
            photo: '/images/users/user1.png',
        },
        birth: '14.08.1999',
        card: 'Platinum',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '143',
        lastDate: '14.08.1999',
    },
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Male',
            photo: '/images/users/user1.png',
        },
        birth: '12.09.2000',
        card: 'Gold',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '25',
        lastDate: '14.08.1999',
    },
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Female',
            photo: '/images/users/user1.png',
        },
        birth: '14.08.1999',
        card: 'Platinum',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '143',
        lastDate: '14.08.1999',
    },
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Female',
            photo: '/images/users/user1.png',
        },
        birth: '14.08.1999',
        card: 'Platinum',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '143',
        lastDate: '14.08.1999',
    },
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Female',
            photo: '/images/users/user1.png',
        },
        birth: '14.08.1999',
        card: 'Platinum',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '143',
        lastDate: '14.08.1999',
    },
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Female',
            photo: '/images/users/user1.png',
        },
        birth: '14.08.1999',
        card: 'Platinum',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '143',
        lastDate: '14.08.1999',
    },
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Female',
            photo: '/images/users/user1.png',
        },
        birth: '14.08.1999',
        card: 'Platinum',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '143',
        lastDate: '14.08.1999',
    },
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Female',
            photo: '/images/users/user1.png',
        },
        birth: '14.08.1999',
        card: 'Platinum',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '143',
        lastDate: '14.08.1999',
    },
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Female',
            photo: '/images/users/user1.png',
        },
        birth: '14.08.1999',
        card: 'Platinum',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '143',
        lastDate: '14.08.1999',
    },
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Female',
            photo: '/images/users/user1.png',
        },
        birth: '14.08.1999',
        card: 'Platinum',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '143',
        lastDate: '14.08.1999',
    },
    {
        person: {
            name: 'Kathryn Murphy',
            gender: 'Female',
            photo: '/images/users/user1.png',
        },
        birth: '14.08.1999',
        card: 'Platinum',
        city: 'Akhaltsikhe',
        company: 'Disney Company',
        registration: '14.08.1999',
        orders: '143',
        lastDate: '14.08.1999',
    },
];

function checkDateRange(rangeString: string) {
    const [start, end] = rangeString.split('-').map((str) => str.trim());
    var startDate = Date.parse(start);
    var endDate = Date.parse(end);
    if (isNaN(startDate)) {
        return false;
    }
    if (isNaN(endDate)) {
        return false;
    }
    var difference = (endDate - startDate) / (86400000 * 7);
    if (difference < 0) {
        return false;
    }
    if (difference <= 1) {
        return false;
    }
    return [startDate, endDate];
}

export default function Users() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(20);
    const [searchText, setSearchText] = useState('');
    const [dateRange, setDateRange] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [isFilter, setFilter] = useState(false);
    const [birthday, setBirthday] = useState('');
    const [registration, setRegistration] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState<'male' | 'female'>();
    const [paymentType, setPaymentType] = useState<
        'online' | 'inhouse' | 'inclinic'
    >();
    const [cardType, setCardType] = useState<'silver' | 'gold' | 'platinum'>();
    const [filteredData, setFilteredData] = useState(data);
    const onRangeChange = (min, max) => {
        setMin(min);
        setMax(max);
    };
    const columns = [
        {
            key: 'actions',
            title: '',
            dataIndex: 'actions',
            render: (record, key) => {
                return (
                    <div
                        className={classNames(
                            tableStyles.tableCellTemplate,
                            styles.actionCell
                        )}
                        key={key}
                    >
                        <ReactSVG src="\images\icons\table\pencil.svg" />
                    </div>
                );
            },
        },
        {
            key: 'person',
            title: 'Name',
            dataIndex: 'person',
            render: (record, key) => {
                return (
                    <div
                        className={classNames(
                            tableStyles.tableCellTemplate,
                            styles.nameCell
                        )}
                        key={key}
                    >
                        <div className={styles.photoContainer}>
                            <img
                                className={styles.photo}
                                src={record.photo}
                            ></img>
                        </div>
                        <div className={styles.nameCol}>
                            <div className={styles.name}>{record.name}</div>
                            <div className={styles.gender}>{record.gender}</div>
                        </div>
                    </div>
                );
            },
        },
        {
            key: 'birth',
            title: 'Date of birth',
            dataIndex: 'birth',
        },
        {
            key: 'card',
            title: 'Type of card',
            dataIndex: 'card',
        },
        {
            key: 'city',
            title: 'City',
            dataIndex: 'city',
        },
        {
            key: 'company',
            title: 'Company',
            dataIndex: 'company',
        },
        {
            key: 'registration',
            title: 'Date of registration',
            dataIndex: 'registration',
        },
        {
            key: 'orders',
            title: 'Orders count',
            dataIndex: 'orders',
        },
        {
            key: 'lastDate',
            title: 'Date of last visit',
            dataIndex: 'lastDate',
        },
    ];

    const filterData = () => {
        let filteredData = data;
        if (isFilter)
            filteredData = filteredData.filter((record) => {
                const birthdayDates = checkDateRange(birthday);
                if (birthdayDates) {
                    const [start, end] = birthdayDates;
                    const birthDate = Date.parse(record.birth);
                    if (birthDate < start || birthDate > end) return false;
                }
                const registrationDates = checkDateRange(registration);
                if (registrationDates) {
                    const [start, end] = registrationDates;
                    const registrationDate = Date.parse(record.registration);
                    if (registrationDate < start || registrationDate > end)
                        return false;
                }
                if (city) {
                    if (
                        record.city.toLocaleLowerCase().trim() !==
                        city.toLocaleLowerCase().trim()
                    )
                        return false;
                }
                if (record.person.gender.toLocaleLowerCase().trim() !== gender)
                    return false;
                if (+record.orders < min || +record.orders > max) return false;
                if (record.card.toLocaleLowerCase().trim() !== cardType)
                    return false;
                return true;
            });
        setFilteredData(
            filteredData.filter((record) => {
                if (!searchText) return true;
                if (
                    record.person.name
                        .toLowerCase()
                        .indexOf(searchText.toLowerCase()) !== -1
                )
                    return true;
                return false;
            })
        );
    };

    useEffect(() => {
        filterData();
    }, [searchText]);

    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <div className={styles.headerLeft}>
                    <h3>Users</h3>
                    <Button
                        className={styles.addUser}
                        variant="fill"
                        size="large"
                        label="Add user"
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
            <Card>
                <div className={styles.cardContainer}>
                    <div className={styles.filterContainer}>
                        <div
                            className={styles.searchContainer}
                            onClick={() => {
                                document
                                    .getElementById('search-input')
                                    ?.focus();
                            }}
                        >
                            <ReactSVG
                                src={'/images/icons/inputs/search.svg'}
                                className={styles.searchImg}
                            />
                            <input
                                id="search-input"
                                className={styles.searchInput}
                                onChange={(event) => {
                                    setSearchText(event.target.value);
                                }}
                                value={searchText}
                                type="text"
                                placeholder="Search"
                            />
                        </div>
                        <DatePicker
                            mode="range"
                            value={dateRange}
                            placeholder="Date interval"
                            onChange={setDateRange}
                        />
                        <div className={styles.whiteSpace}></div>
                        <div className={styles.filterBtnContainer}>
                            <Button
                                variant="outline"
                                size="large"
                                label="Filter"
                                onClick={() => setFilterOpen(!filterOpen)}
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
                            <div
                                className={classNames(styles.filtersContainer, {
                                    [styles.open]: filterOpen,
                                })}
                            >
                                <div className={styles.filterRow}>
                                    <div className={styles.filterTitle}>
                                        Date of birth
                                    </div>
                                    <div className={styles.filterInput}>
                                        <DatePicker
                                            value={birthday}
                                            onChange={setBirthday}
                                            mode="range"
                                            placeholder="01.01.2001"
                                        />
                                    </div>
                                </div>
                                <div className={styles.filterRow}>
                                    <div className={styles.filterTitle}>
                                        Date of registration
                                    </div>
                                    <div className={styles.filterInput}>
                                        <DatePicker
                                            value={registration}
                                            onChange={setRegistration}
                                            mode="range"
                                            placeholder="01.01.2001"
                                        />
                                    </div>
                                </div>
                                <div className={styles.filterRow}>
                                    <div className={styles.filterTitle}>
                                        City
                                    </div>
                                    <div className={styles.filterInput}>
                                        <Select
                                            label="Select a city"
                                            value={city}
                                            options={[
                                                {
                                                    label: 'Minsk',
                                                    value: 'minsk',
                                                },
                                            ]}
                                            onChange={(value) => {
                                                setCity(value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={styles.filterRow}>
                                    <div className={styles.filterTitle}>
                                        Gender
                                    </div>
                                    <div className={styles.filterInput}>
                                        <Button
                                            label="Male"
                                            variant="outline"
                                            size="large"
                                            className={styles.filterBtn}
                                            selected={gender === 'male'}
                                            onClick={() => setGender('male')}
                                        />
                                        <Button
                                            label="Female"
                                            variant="outline"
                                            size="large"
                                            className={styles.filterBtn}
                                            selected={gender === 'female'}
                                            onClick={() => setGender('female')}
                                        />
                                    </div>
                                </div>
                                <div className={styles.filterRow}>
                                    <div className={styles.filterTitle}>
                                        Interval of visits
                                    </div>
                                    <div className={styles.filterInput}>
                                        <Input
                                            className={styles.intervalInput}
                                            value={min}
                                            onChange={(value) => {
                                                if (Number.isNaN(+value))
                                                    return;
                                                setMin(+value);
                                            }}
                                        />
                                        <div className={styles.divider} />
                                        <Input
                                            className={styles.intervalInput}
                                            value={max}
                                            onChange={(value) => {
                                                if (Number.isNaN(+value))
                                                    return;
                                                setMax(+value);
                                            }}
                                        />
                                        <Range
                                            min={min}
                                            max={max}
                                            minValue={0}
                                            maxValue={1000}
                                            step={1}
                                            onChange={onRangeChange}
                                        />
                                    </div>
                                </div>
                                <div className={styles.filterRow}>
                                    <div className={styles.filterTitle}>
                                        Card payment type
                                    </div>
                                    <div className={styles.filterInput}>
                                        <Button
                                            label="Online"
                                            variant="outline"
                                            size="large"
                                            className={styles.filterBtn}
                                            selected={paymentType === 'online'}
                                            onClick={() =>
                                                setPaymentType('online')
                                            }
                                        />
                                        <Button
                                            label="In-house"
                                            variant="outline"
                                            size="large"
                                            className={styles.filterBtn}
                                            selected={paymentType === 'inhouse'}
                                            onClick={() =>
                                                setPaymentType('inhouse')
                                            }
                                        />
                                        <Button
                                            label="In clinic"
                                            variant="outline"
                                            size="large"
                                            className={styles.filterBtn}
                                            selected={
                                                paymentType === 'inclinic'
                                            }
                                            onClick={() =>
                                                setPaymentType('inclinic')
                                            }
                                        />
                                    </div>
                                </div>
                                <div className={styles.filterRow}>
                                    <div className={styles.filterTitle}>
                                        Card type
                                    </div>
                                    <div className={styles.filterInput}>
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
                                            onClick={() => setCardType('gold')}
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
                                <div className={styles.divider} />
                                <div className={styles.actionRow}>
                                    <Button
                                        label="Reset filter"
                                        className={styles.resetButton}
                                        onClick={() => {
                                            setFilter(false);
                                            filterData();
                                        }}
                                        size="large"
                                        variant="text"
                                        icon={
                                            <ReactSVG
                                                src="/images/icons/inputs/reset.svg"
                                                className={styles.iconContainer}
                                            />
                                        }
                                    />
                                    <Button
                                        label="Apply"
                                        variant="fill"
                                        size="large"
                                        onClick={() => {
                                            setFilter(true);
                                            filterData();
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Table
                        className={styles.table}
                        columns={columns}
                        data={filteredData}
                        rowClassName={styles.tableRow}
                        cellClassName={styles.tableCell}
                        pagination={{ pageSize: 8, initialPage: 1 }}
                    />
                </div>
            </Card>
        </div>
    );
}

Users.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>;
};
