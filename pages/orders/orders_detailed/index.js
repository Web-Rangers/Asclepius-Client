import {useState} from 'react';
import SideBarLayout from 'layouts/SideBarLayout';
import Breadcrumbs from 'nextjs-breadcrumbs'; 
import styles from 'styles/pages/ordersDetailed.module.scss';
import {Card, Input, Button} from 'components';
import { ReactSVG } from 'react-svg';

export default function OrdersDetailed() {
    const [commentValue, setCommentValue] = useState('');

    const [comments, setComments] = useState([
        {
            name: 'Katona Beatrix',
            role: 'Patient', 
            message: 'The specialist approached me very well, and the consultations helped. It seemed to me that his approach was very gentle, he behaved very professionally. Thank you!',
            image: '../images/users/user3.png'
        },
        {
            name: 'Brooklyn Simmons',
            role: 'Neurologist', 
            message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            image: '../images/users/user2.png'
        }
    ]);

    const transaction_keys = [
        {
            key: 'transaction_id',
            title: 'Transaction id'
        },
        {
            key: 'date',
            title: 'Date'
        },
        {
            key: 'destination',
            title: 'Destination'
        },
        {
            key: 'amount',
            title: 'Amount'
        },
        {
            key: 'refunded',
            title: 'Refunded'
        },
    ]

    const transaction_date = [
        {
            transaction_id: '745983985',
            date: '03.05.2020',
            destination: 'Doctor',
            amount: '100',
            refunded: '142',
        },
        {
            transaction_id: '745983985',
            date: '03.05.2020',
            destination: 'Doctor',
            amount: '100',
            refunded: '142',
        },
        {
            transaction_id: '745983985',
            date: '03.05.2020',
            destination: 'Doctor',
            amount: '100',
            refunded: '142',
        },
        {
            transaction_id: '745983985',
            date: '03.05.2020',
            destination: 'Doctor',
            amount: '100',
            refunded: '142',
        },
    ]

    const addComment = () => {
        const body = {
            name: 'Katona Beatrix',
            role: 'Patient', 
            message: commentValue,
            image: '../images/users/user2.png'
        }

        if(commentValue !== ''){
            setComments((prevComments)=>([
                ...prevComments,
                body
            ]))
    
            setCommentValue('')
        }
    }

    return <>
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <div className={styles.headerLeft}>
                    <h3>Orders</h3>
                </div>
                <div className={styles.headerRight}>
                    <Breadcrumbs
                        omitRootLabel={true}
                        listClassName={styles.breadcrumbs}
                        replaceCharacterList={[{ from: '_', to: ' ' }]}
                    />
                </div>
            </div>

            <Card className={styles.order}>
                <div className={styles.orderBlock}>
                    <div>
                        <h2>#214134556</h2>
                        <button>Medicine</button>
                        <button>Dentist</button>
                    </div>
                    <div className={styles.more}>
                        <ReactSVG src='../images/icons/offer/more.svg' />
                    </div>
                </div>

                <div className={styles.orderTable}>
                    <div>
                        <h2>Patient name</h2>
                        <span>Cameron Williamson</span>
                    </div>
                    <div>
                        <h2>Patient id</h2>
                        <span>469356911</span>
                    </div>
                    <div>
                        <h2>Phone number</h2>
                        <span>(239) 555-0108</span>
                    </div>
                    <div>
                        <h2>Created  date</h2>
                        <span>23.04.2022</span>
                    </div>
                    <div>
                        <h2>Status</h2>
                        <span>
                            <span className={styles.in_progress}></span>
                            In progress
                        </span>
                    </div>
                </div>
            </Card>

            <div className={styles.cardColumns}>
                <Card 
                    className={styles.colCard}
                    cardTitle="service"
                >
                    <div className={styles.cardInfo}>
                        <div>
                            <h2>Service</h2>
                            <span>Concultation</span>
                        </div>
                        <div>
                            <h2>Service Id</h2>
                            <span>957811053</span>
                        </div>
                        <div>
                            <h2>Clinic</h2>
                            <span>Medical house</span>
                        </div>
                        <div>
                            <h2>Card type</h2>
                            <span>Gold</span>
                        </div>
                        <div>
                            <h2>Review</h2>
                            <span className={styles.revuew}>
                                <ReactSVG src="../images/icons/table/star.svg" />
                                4,7
                            </span>
                        </div>
                    </div>
                </Card>
                <Card 
                    className={styles.colCard}
                    cardTitle="Doctor info"
                >
                    <div className={styles.cardInfo}>
                        <div>
                            <h2>Doctor name</h2>
                            <span>Devon Lane</span>
                        </div>
                        <div>
                            <h2>Doctor Id</h2>
                            <span>105646035</span>
                        </div>
                        <div>
                            <h2>Phone</h2>
                            <span>(205) 555-0100</span>
                        </div>
                        <div>
                            <h2>Schedule date</h2>
                            <span>11.02.2020</span>
                        </div>
                    </div>
                </Card>
                <Card 
                    className={styles.colCard}
                    cardTitle="Order summery"
                >
                    <div className={styles.cardInfo}>
                        <div>
                            <h2>Price</h2>
                            <span>120</span>
                        </div>
                        <div>
                            <h2>Platform commission</h2>
                            <span>40</span>
                        </div>
                        <div>
                            <h2>Doctor’s Commission</h2>
                            <span>40</span>
                        </div>
                        <div>
                            <h2>Refund</h2>
                            <span>56</span>
                        </div>
                    </div>
                </Card>
                <Card 
                    className={styles.colCard}
                    cardTitle="Order history"
                >
                    <div className={styles.cardInfo}>
                        <div>
                            <h2>
                                <span className={styles.done}></span>
                                Created
                            </h2>
                            <span>23.04.2022</span>
                            <span>14:00</span>
                        </div>
                        <div>
                            <h2>
                                <span className={styles.in_progress}></span>
                                In progress
                            </h2>
                            <span>27.04.2022</span>
                            <span>12:12</span>
                        </div>
                        <div>
                            <h2>
                                <span className={styles.waiting}></span>
                                Waiting for approval
                            </h2>
                            <span>28.04.2022</span>
                            <span>18:12</span>
                        </div>
                    </div>
                </Card>
            </div>

            <Card 
                cardTitle="Transaction"
                className={styles.tableCard}
            >
                <div className={styles.tableCeil}>
                    {transaction_keys?.map((ceil)=>{
                        return <>
                            <span className={styles.ceilTitle}>
                                {ceil.title}
                            </span>
                        </>
                    })}
                </div>
                <div className={styles.tableCeils}>
                    {transaction_date?.map((item)=>{
                        return <>
                            <div className={styles.tableCeil}>
                                <span>{item.transaction_id}</span>
                                <span>{item.date}</span>
                                <span>{item.destination}</span>
                                <span>{item.amount}</span>
                                <span>{item.refunded}</span>
                            </div>
                        </>
                    })}
                </div>
            </Card>

            <Card 
                cardTitle="Comments"
                className={styles.comments}
            >
                <div className={styles.addComentForm}>
                    <Input 
                        type="text"
                        onChange={(e)=> setCommentValue(e)}
                        value={commentValue}
                        multiline
                    />
                    <Button 
                        className={styles.commentBtn}
                        variant="fill"
                        size="large"
                        label="Submit"
                        onClick={()=>addComment()}
                    />
                </div>

                <div className={styles.commentList}>
                    {
                        comments?.map((comment)=>{
                            return <>
                                <div className={styles.commentForm}>
                                    <div className={styles.image}>
                                        <img src={comment.image} alt="" />
                                    </div>
                                    <div className={styles.commentInfo}>
                                        <h2>{comment.name} • {comment.role}</h2>
                                        <p>
                                            {comment.message}
                                        </p>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </Card>
        </div>
    </>
}

OrdersDetailed.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>
}