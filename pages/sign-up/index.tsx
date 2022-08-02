import classNames from 'classnames';
import { Button, Input, Select, Card, DatePicker } from 'components';
import Radio from 'components/inputs/radio';
import { Stepper } from 'components/progress';
import { Step } from 'components/progress/Stepper';
import Link from 'next/link';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import styles from 'styles/pages/signup.module.scss';

export default function Authorization() {
    const [step, setStep] = useState(0);
    const [employment, setEmployment] = useState<'' | 'self' | 'company'>('');
    const [jobTitles, setJobTitles] = useState([
        {
            value: '1',
            label: 'Job Title',
        },
        {
            value: '2',
            label: 'Job Title 2',
        },
    ]);
    const [selectedTitle, setSelectedTitle] = useState('');
    const onJobTitleChange = (value) => {
        setSelectedTitle(value);
    };
    const Start = () => {
        return (
            <div className={styles.startContainer}>
                <div className={styles.startHeader}>
                    Select type of employment
                </div>
                <div className={styles.startActions}>
                    <div
                        className={classNames(styles.startAction, {
                            [styles.selected]: employment === 'self',
                        })}
                        onClick={() => {
                            setEmployment('self');
                        }}
                    >
                        <img src="/images/signUp/self-employed.png" />
                        <div className={styles.title}>Self-employed</div>
                    </div>
                    <div
                        className={classNames(styles.startAction, {
                            [styles.selected]: employment === 'company',
                        })}
                        onClick={() => {
                            setEmployment('company');
                        }}
                    >
                        <img />
                        <img src="/images/signUp/company member.png" />
                        <div className={styles.title}>Company member</div>
                    </div>
                </div>
                <div className={styles.nextContainer}>
                    <Button
                        label="Next"
                        variant="fill"
                        size="large"
                        onClick={() => {
                            if (employment !== '')
                                setStep((origin) => origin + 1);
                        }}
                    />
                </div>
            </div>
        );
    };
    const PersonalData = () => {
        return (
            <div className={styles.column}>
                <Card cardTitle="General information" className={styles.card}>
                    <div className={styles.cardBody}>
                        <div className={styles.photoChange}>
                            <img
                                src="/images/doctors/doctor.png"
                                alt="doctor"
                                className={styles.doctorImage}
                            />
                            <Button
                                label="Change"
                                size="large"
                                variant="fill"
                            />
                        </div>
                        <div className={styles.editRow}>
                            <Input
                                type="text"
                                label="Name"
                                placeholder="Enter name..."
                            ></Input>
                            <Input
                                type="text"
                                label="Surname"
                                placeholder="Enter surname..."
                            ></Input>
                        </div>
                        <div className={styles.editRow}>
                            <Select
                                options={jobTitles}
                                onChange={onJobTitleChange}
                                label="Job Title"
                                labelStyle="outside"
                                value={selectedTitle}
                            />
                            <div className={styles.editRow}>
                                <DatePicker
                                    label="Date of birth"
                                    mode="single"
                                    placeholder="01.01.2000"
                                />
                                <div className={styles.inputContainer}>
                                    <div className={styles.editTitle}>
                                        Gender
                                    </div>
                                    <div className={styles.editRow}>
                                        <Radio
                                            label="Male"
                                            name="gender"
                                            id="gender-1"
                                        />
                                        <Radio
                                            label="Female"
                                            name="gender"
                                            id="gender-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.editRow}>
                            <Input
                                type="text"
                                label="E-mail"
                                placeholder="Enter e-mail..."
                            ></Input>
                            <Input
                                type="text"
                                label="Phone number"
                                placeholder="Enter phone number..."
                            ></Input>
                        </div>
                        <div className={styles.editRow}>
                            <div className={styles.editColumn}>
                                <Input
                                    type="text"
                                    label="IBAN"
                                    placeholder="Enter IBAN..."
                                ></Input>
                                <Input
                                    type="text"
                                    label="Id"
                                    placeholder="Enter Id..."
                                ></Input>
                            </div>
                            <Input
                                type="text"
                                multiline
                                label="About"
                                placeholder="Tell about yourself"
                                style={{ height: '180px' }}
                            />
                        </div>
                    </div>
                </Card>
                <Card cardTitle="Education information" className={styles.card}>
                    <div className={styles.cardBody}>
                        <div className={styles.editRow}>
                            <Input
                                type="text"
                                label="School"
                                placeholder="Enter school..."
                            ></Input>
                            <Input
                                type="text"
                                label="Degree"
                                placeholder="Enter degree..."
                            ></Input>
                        </div>
                        <div className={styles.editRow}>
                            <Input
                                type="text"
                                label="Fields of study"
                                placeholder="Enter school..."
                            ></Input>
                            <div className={styles.editRow}>
                                <DatePicker
                                    label="Start date"
                                    mode="single"
                                    placeholder="01.01.2000"
                                />
                                <DatePicker
                                    label="End date"
                                    mode="single"
                                    placeholder="01.01.2000"
                                />
                            </div>
                        </div>
                        <div className={styles.fileInput}>
                            <ReactSVG
                                src="/images/signUp/cloud-upload.svg"
                                className={styles.iconContainer}
                            />
                            <span>Drag and drop your files here</span>
                            <Button
                                label="Upload file"
                                variant="outline"
                                size="large"
                            />
                        </div>
                        <div className={styles.filesContainer}>
                            <div className={styles.file}>
                                <img className={styles.preview} />
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        397c884d46e1cf1730d6067442f5fbdd.png
                                    </div>
                                    <div className={styles.size}>3.2 MB</div>
                                </div>
                                <div className={styles.whiteSpace} />
                                <ReactSVG
                                    src="/images/signUp/x.svg"
                                    className={styles.iconContainer}
                                />
                            </div>
                            <div className={styles.file}>
                                <img className={styles.preview} />
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        397c884d46e1cf1730d6067442f5fbdd.png
                                    </div>
                                    <div className={styles.size}>3.2 MB</div>
                                </div>
                                <div className={styles.whiteSpace} />
                                <ReactSVG
                                    src="/images/signUp/x.svg"
                                    className={styles.iconContainer}
                                />
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <Button
                                className={styles.add}
                                variant="text"
                                label="+Add one more education"
                                size="large"
                            />
                        </div>
                    </div>
                </Card>
                <Card cardTitle="Certificates" className={styles.card}>
                    <div className={styles.cardBody}>
                        <div className={styles.editRow}>
                            <Input
                                type="text"
                                label="Name"
                                placeholder="Enter school..."
                            ></Input>
                            <Input
                                type="text"
                                label="Issuing organization"
                                placeholder="Enter degree..."
                            ></Input>
                        </div>
                        <div className={styles.editRow}>
                            <Input
                                type="text"
                                label="Credential ID"
                                placeholder="Enter school..."
                            ></Input>
                            <div className={styles.editRow}>
                                <DatePicker
                                    label="Issue date"
                                    mode="single"
                                    placeholder="01.01.2000"
                                />
                                <DatePicker
                                    label="End date"
                                    mode="single"
                                    placeholder="01.01.2000"
                                />
                            </div>
                        </div>
                        <div className={styles.editRow}>
                            <Input
                                type="text"
                                label="Credential URL"
                                placeholder="Enter credential url..."
                            ></Input>
                        </div>
                        <div className={styles.fileInput}>
                            <ReactSVG
                                src="/images/signUp/cloud-upload.svg"
                                className={styles.iconContainer}
                            />
                            <span>Drag and drop your files here</span>
                            <Button
                                label="Upload file"
                                variant="outline"
                                size="large"
                            />
                        </div>
                        <div className={styles.filesContainer}>
                            <div className={styles.file}>
                                <img className={styles.preview} />
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        397c884d46e1cf1730d6067442f5fbdd.png
                                    </div>
                                    <div className={styles.size}>3.2 MB</div>
                                </div>
                                <div className={styles.whiteSpace} />
                                <ReactSVG
                                    src="/images/signUp/x.svg"
                                    className={styles.iconContainer}
                                />
                            </div>
                            <div className={styles.file}>
                                <img className={styles.preview} />
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        397c884d46e1cf1730d6067442f5fbdd.png
                                    </div>
                                    <div className={styles.size}>3.2 MB</div>
                                </div>
                                <div className={styles.whiteSpace} />
                                <ReactSVG
                                    src="/images/signUp/x.svg"
                                    className={styles.iconContainer}
                                />
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <Button
                                className={styles.add}
                                variant="text"
                                label="+Add one more certificate"
                                size="large"
                            />
                        </div>
                    </div>
                </Card>
            </div>
        );
    };
    const Verification = () => {
        return (
            <div className={styles.column}>
                <Card className={styles.card}>
                    <div className={styles.verificationRow}>
                        <div className={styles.photoContainer}>
                            <img
                                className={styles.verificationImage}
                                src="/images/signUp/passport.png"
                            />
                        </div>
                        <div className={styles.uploadBlock}>
                            <div className={styles.uploadText}>
                                Upload photo/scan of passport
                            </div>
                            <div className={styles.file}></div>
                            <Button
                                variant="fill"
                                size="large"
                                label="Downoald document"
                            />
                        </div>
                        <div className={styles.requirements}>
                            <ReactSVG
                                src="/images/signUp/information-circle.svg"
                                className={styles.iconConteiner}
                            />
                            Document requirements
                        </div>
                    </div>
                </Card>
                <Card className={styles.card}>
                    <div className={styles.verificationRow}>
                        <div className={styles.photoContainer}>
                            <img
                                className={styles.verificationImage}
                                src="/images/signUp/diploma.png"
                            />
                        </div>
                        <div className={styles.uploadBlock}>
                            <div className={styles.uploadText}>
                                Upload photo/scan of diploma
                            </div>
                            <div className={styles.file}></div>
                            <Button
                                variant="fill"
                                size="large"
                                label="Downoald document"
                            />
                        </div>
                        <div className={styles.requirements}>
                            <ReactSVG
                                src="/images/signUp/information-circle.svg"
                                className={styles.iconConteiner}
                            />
                            Document requirements
                        </div>
                    </div>
                </Card>
                <Card className={styles.card}>
                    <div className={styles.verificationRow}>
                        <div className={styles.photoContainer}>
                            <img
                                className={styles.verificationImage}
                                src="/images/signUp/license.png"
                            />
                        </div>
                        <div className={styles.uploadBlock}>
                            <div className={styles.uploadText}>
                                Upload photo/scan of license
                            </div>
                            <div className={styles.file}></div>
                            <Button
                                variant="fill"
                                size="large"
                                label="Downoald document"
                            />
                        </div>
                        <div className={styles.requirements}>
                            <ReactSVG
                                src="/images/signUp/information-circle.svg"
                                className={styles.iconConteiner}
                            />
                            Document requirements
                        </div>
                    </div>
                </Card>
                <Card className={styles.card}>
                    <div className={styles.verificationRow}>
                        <div className={styles.photoContainer}>
                            <img
                                className={styles.verificationImage}
                                src="/images/signUp/expandedPhoto.png"
                            />
                        </div>
                        <div className={styles.uploadBlock}>
                            <div className={styles.uploadText}>
                                Upload an expanded passport photo
                            </div>
                            <div className={styles.file}></div>
                            <Button
                                variant="fill"
                                size="large"
                                label="Downoald document"
                            />
                        </div>
                        <div className={styles.requirements}>
                            <ReactSVG
                                src="/images/signUp/information-circle.svg"
                                className={styles.iconConteiner}
                            />
                            Document requirements
                        </div>
                    </div>
                </Card>
            </div>
        );
    };

    const Finish = () => {
        return (
            <Card className={styles.card}>
                <div className={styles.finishContainer}>
                    <img src="/images/signUp/finish.png" />
                    <div className={styles.finishText}>
                        Thank you for the information provided, our operators
                        are currently processing it. After processing, our
                        operator will contact you
                    </div>
                    <Button variant="fill" label="Finish" size="large" />
                </div>
            </Card>
        );
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Stepper currentStep={step} className={styles.stepper}>
                    <Step title="Start" />
                    <Step title="Personal data" />
                    <Step title="Verification" />
                    <Step title="Finish" />
                </Stepper>
                {step === 0 && <Start />}
                {step === 1 && <PersonalData />}
                {step === 2 && <Verification />}
                {step === 3 && <Finish />}
                {step !== 0 && step !== 3 && (
                    <div className={styles.moveContainer}>
                        <Button
                            label="Back"
                            size="large"
                            variant="outline"
                            onClick={() => {
                                setStep((origin) => origin - 1);
                            }}
                        />
                        <Button
                            label="Next"
                            size="large"
                            variant="fill"
                            onClick={() => {
                                setStep((origin) => origin + 1);
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
