import { ReactSVG } from "react-svg";
import {
    Card,
    BranchModal,
    ServicesTab,
    OffersTab,
    StuffTab,
    GalleryTab,
    Button,
} from "components";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SideBarLayout from "layouts/SideBarLayout";
import tabStyles from "styles/components/tabs/Tabs.module.scss";
import cDStyles from "styles/pages/clinic_detailed.module.scss";
import styles from "styles/pages/branch.module.scss";
import tableStyles from "styles/components/Table.module.scss";
import Breadcrumbs from "nextjs-breadcrumbs";
import classNames from "classnames";
import { useState } from "react";

interface ActionProps {
    icon?: string;
    onClick?: () => void;
}

const EditAction = ({ onClick, icon }: ActionProps) => (
    <ReactSVG src={icon} onClick={onClick}></ReactSVG>
);

const Status = ({ active }: { active: boolean }) => {
    return (
        <div
            className={classNames(tableStyles.tableStatus, {
                [tableStyles.statusOpen]: active,
                [tableStyles.statusClosed]: !active,
            })}
        >
            {active ? "Open" : "Close"}
        </div>
    );
};

export default function Branch() {
    const [branchModalIsOpen, setBranchModalIsOpen] = useState(false);
    const [modalMode, setModalMode] = useState("add");
    return (
        <>
            {branchModalIsOpen && (
                <BranchModal
                    onClose={() => setBranchModalIsOpen(false)}
                    mode={modalMode === "add" ? "add" : "edit"}
                    onCancel={() => setBranchModalIsOpen(false)}
                    onSave={() => setBranchModalIsOpen(false)}
                />
            )}
            <div className={cDStyles.container}>
                <div className={cDStyles.pageHeader}>
                    <div className={styles.pageHeaderLeft}>
                        <h3>Branch</h3>
                        <Button label="Deactivate branch" size="large" variant="fill" />
                    </div>
                    <Breadcrumbs
                        omitRootLabel={true}
                        listClassName={cDStyles.breadcrumbs}
                        replaceCharacterList={[{ from: "_", to: " " }]}
                    />
                </div>
                <div className={cDStyles.pageBody}>
                    <div className={cDStyles.row}>
                        <div className={cDStyles.colSmall}>
                            <Card className={cDStyles.smallCard}>
                                <img
                                    src={"/images/icons/clinics/medicalhouse.png"}
                                    className={cDStyles.clinicIcon}
                                />
                                <div className={cDStyles.clinicName}>Medical House</div>
                                <div className={cDStyles.clinicInf}>
                                    <ReactSVG
                                        src="/images/icons/clinics/clock.svg"
                                        className={cDStyles.iconContainer}
                                    />
                                    <span className={cDStyles.clinicInfText}>10:00-20:00</span>
                                </div>
                                <div className={cDStyles.clinicInf}>
                                    <ReactSVG
                                        src="/images/icons/clinics/phone.svg"
                                        className={cDStyles.iconContainer}
                                    />
                                    <span className={cDStyles.clinicInfText}>480-555-0103</span>
                                </div>
                                <div className={cDStyles.clinicInf}>
                                    <ReactSVG
                                        src="/images/icons/clinics/location.svg"
                                        className={cDStyles.iconContainer}
                                    />
                                    <span className={cDStyles.clinicInfText}>
                                        4140 Parker Rd. Allentown, New Mexico 31134
                                    </span>
                                </div>
                            </Card>
                        </div>
                        <div className={cDStyles.colLarge}>
                            <Card
                                cardTitle="Detailded information"
                                cardActions={
                                    <EditAction
                                        icon="/images/icons/inputs/edit.svg"
                                        onClick={() => {
                                            setModalMode("edit");
                                            setBranchModalIsOpen(true);
                                        }}
                                    />
                                }
                            >
                                <div className={cDStyles.dataRow}>
                                    <div className={cDStyles.dataIndex}>Branch ID</div>
                                    <div className={cDStyles.dataValue}>94768466</div>
                                </div>
                                <div className={cDStyles.dataRow}>
                                    <div
                                        className={classNames(cDStyles.dataIndex, styles.dataIndex)}
                                    >
                                        Status
                                    </div>
                                    <div className={cDStyles.dataValue}>
                                        <Status active></Status>
                                    </div>
                                </div>
                                <div className={cDStyles.dataRow}>
                                    <div className={cDStyles.dataIndex}>About clinic</div>
                                    <div className={cDStyles.dataValue}>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor
                                        do amet sint. Velit officia consequat duis enim velit
                                        mollit. Velit officia consequat duis enim velit mollit. Amet
                                        minim mollit non deserunt ullamco est sit aliqua dolor do
                                        amet sint. Amet minim
                                    </div>
                                </div>
                                <div className={styles.whiteSpace}></div>
                                <div
                                    className={classNames(cDStyles.dataRow, cDStyles.noMargin)}
                                >
                                    <div className={cDStyles.dataIndex}></div>
                                    <div className={cDStyles.dataValue}>
                                        <button className={cDStyles.textButton}>See all</button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className={cDStyles.tabContainer}>
                        <Tabs>
                            <TabList className={tabStyles.tabList}>
                                <Tab
                                    className={tabStyles.tab}
                                    tabIndex="1"
                                    selectedClassName={tabStyles.selectedTab}
                                >
                                    <ReactSVG
                                        src="/images/icons/tabs/Service.svg"
                                        className={cDStyles.iconContainer}
                                    />
                                    <span>Services</span>
                                </Tab>
                                <Tab
                                    className={tabStyles.tab}
                                    tabIndex="2"
                                    selectedClassName={tabStyles.selectedTab}
                                >
                                    <ReactSVG
                                        src="/images/icons/tabs/offer.svg"
                                        className={cDStyles.iconContainer}
                                    />
                                    <span>Offers</span>
                                </Tab>
                                <Tab
                                    className={tabStyles.tab}
                                    tabIndex="3"
                                    selectedClassName={tabStyles.selectedTab}
                                >
                                    <ReactSVG
                                        src="/images/icons/tabs/stuff.svg"
                                        className={cDStyles.iconContainer}
                                    />
                                    <span>Stuff</span>
                                </Tab>
                                <Tab
                                    className={tabStyles.tab}
                                    tabIndex="4"
                                    selectedClassName={tabStyles.selectedTab}
                                >
                                    <ReactSVG
                                        src="/images/icons/tabs/gallery.svg"
                                        className={cDStyles.iconContainer}
                                    />
                                    <span>Photo gallery</span>
                                </Tab>
                            </TabList>
                            <TabPanel className={tabStyles.tabPanel}>
                                <ServicesTab
                                    services={Array.from(new Array(50).keys()).map((x) => {
                                        return {
                                            name: "Service " + x,
                                            enabled: true,
                                        };
                                    })}
                                />
                            </TabPanel>
                            <TabPanel className={tabStyles.tabPanel}>
                                <OffersTab
                                    offers={Array.from(new Array(5).keys()).map((i) => {
                                        return {
                                            title:
                                                i !== 1
                                                    ? "First visit: free!"
                                                    : "Second visit: freeeee freeeeeeee!",
                                            description:
                                                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                                            type: i !== 1 ? "Silver card" : "Gold card",
                                            period: "15.06.2022 - 06.06.2022",
                                        };
                                    })}
                                />
                            </TabPanel>
                            <TabPanel className={tabStyles.tabPanel}>
                                <StuffTab
                                    stuff={Array.from(new Array(5).keys()).map((i) => ({
                                        icon: "/images/icons/stuff/stuff1.png",
                                        address: "11 Simon Chikovani St",
                                        amountOfOrders: 143,
                                        city: "Akhaltsikhe",
                                        clinic: "Medical House",
                                        description: "Dentist•Clinic doctor",
                                        gender: "Male",
                                        name: "Brooklyn Simmons",
                                        rating: 4.7,
                                        registrationDate: "04.11.2017",
                                    }))}
                                />
                            </TabPanel>
                            <TabPanel className={tabStyles.tabPanel}>
                                <GalleryTab
                                    images={Array.from(new Array(6).keys()).map((i) => ({
                                        src: "/images/gallery/photo" + (i + 1) + ".png",
                                    }))}
                                />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
}

Branch.getLayout = (page) => {
    return <SideBarLayout>{page}</SideBarLayout>;
};
