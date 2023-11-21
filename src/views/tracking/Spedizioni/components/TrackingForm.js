import React from 'react'
import { FormContainer, Input, FormItem, Button } from 'components/ui'
import { Form, Formik, Field } from 'formik'

function TrackingForm() {
  return (
    <>
        <Formik
            initialValues={{
                data: '',
                localita: '',
                evento: '',
                info: ''
            }}
        >
            {({ touched, errors, values, resetForm }) => (
                <Form>
                    <FormContainer>

                        <FormItem
                            label="Data"
                            invalid={errors.operatore && touched.operatore}
                            errorMessage={errors.operatore}
                        >
                            <Field
                                type="date"
                                autoComplete="off"
                                name="data_tracking"
                                placeholder="Data"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Località"
                            invalid={errors.email && touched.email}
                            errorMessage={errors.email}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="localita"
                                placeholder="Inserisci località"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Evento"
                            invalid={errors.password && touched.password}
                            errorMessage={errors.password}
                        >
                            <Field
                                type="textarea"
                                autoComplete="off"
                                name="evento"
                                placeholder="Inserisci evento"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Info"
                            invalid={errors.password && touched.password}
                            errorMessage={errors.password}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="info"
                                placeholder="Inserisci ulteriori informazioni"
                                component={Input}
                            />
                        </FormItem>

                        <Button block variant="solid" type="submit">
                            Submit
                        </Button>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    </>
  )
}

export default TrackingForm