import React, {useState} from 'react';
import styles from './Contacts.module.scss'
import {Title} from "../../common/title/Title";
import {Links} from "../header/links/Links";
import {ContactsComponentType} from "../../app/state";
import {useFormik} from "formik";
import axios from "axios";

type FormikErrorType = {
    name?: string
    email?: string
    formMessage?: string
}

type ContactsPropsType = {
    contactsComponent: ContactsComponentType
}

export function Contacts(props: ContactsPropsType) {

    const [loading, setLoading] = useState<boolean>(false)
    const [myMessages, setMyMessages] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            formMessage: ''
        },
        validate: (values) => {     //валидация, обработка ошибок
            const errors: FormikErrorType = {}
            if (!values.name) {
                errors.name = props.contactsComponent.errorName
            }
            if (!values.email) {
                errors.email = props.contactsComponent.errorEmail
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = props.contactsComponent.errorInvalidEmail
            }
            if (!values.formMessage) {
                errors.formMessage = props.contactsComponent.errorMessage
            }
            return errors
        },
        onSubmit: values => {
            setLoading(true)
            axios.post('https://gmail-smtp-production-be4f.up.railway.app/sendMessage', values)
                .then(res => {
                    setMyMessages(true)
                    setError(false)
                    formik.resetForm();
                })
                .catch(error => {
                    setError(true)
                })
                .finally(() => {
                    setLoading(false)
                })
        },
    });

    const finalButtonStyle = `${styles.button} ${loading ? styles.disable : ''}`

    return (
        <div className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Title h2={props.contactsComponent.title}/>
                <div className={styles.formInfo}>
                    <div className={styles.info}>
                        <p className={styles.text}>{props.contactsComponent.p}</p>
                        <h3>{props.contactsComponent.h3}</h3>
                        <p className={styles.tel}>{props.contactsComponent.call}</p>
                        <div>
                            <Links links={props.contactsComponent.contactsLinks}/>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <form onSubmit={formik.handleSubmit}>
                            <div className={styles.formBox}>
                                <label>{props.contactsComponent.name}</label>
                                <input
                                    disabled={loading}
                                    {...formik.getFieldProps('name')}
                                />
                                <div className={styles.error}>
                                    {formik.touched.name && formik.errors.name && formik.errors.name}
                                </div>
                            </div>
                            <div className={styles.formBox}>
                                <label>{props.contactsComponent.email}</label>
                                <input
                                    disabled={loading}
                                    {...formik.getFieldProps('email')}
                                />
                                <div className={styles.error}>
                                    {formik.touched.email && formik.errors.email && formik.errors.email}
                                </div>
                            </div>
                            <div className={styles.formBox}>
                                <label>{props.contactsComponent.formMessage}</label>
                                <textarea
                                    disabled={loading}
                                    {...formik.getFieldProps('formMessage')}
                                ></textarea>
                                <div className={styles.error}>
                                    {formik.touched.formMessage && formik.errors.formMessage && formik.errors.formMessage}
                                </div>
                            </div>
                            <div className={styles.formBox}>
                                <button
                                    disabled={loading}
                                    className={finalButtonStyle}
                                    type="submit">
                                    {
                                        loading ?
                                            <span className={styles.loader}></span>
                                            :
                                            <span>{props.contactsComponent.button} &#9658;</span>
                                    }
                                </button>
                                <div className={styles.myMessages}>
                                    {myMessages ?
                                        <span>{props.contactsComponent.myMessages}</span>
                                        : ''
                                    }
                                    {error ?
                                        <span className={styles.errorMessages}>{props.contactsComponent.error}</span>
                                        : ''
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
