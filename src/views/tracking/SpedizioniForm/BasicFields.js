import React from 'react'
import { Input, FormItem, Select } from 'components/ui'
import {RichTextEditor } from 'components/shared'
import { Field } from 'formik'

export const corrieri = [
    { label: 'Pallex', value: 1 },
    { label: 'TNT', value: 2 },
    { label: 'FeDex', value: 3 },
    { label: 'SDA', value: 4 },
    { label: 'Noerpel', value: 5 },
    { label: 'Kuehne e Nagel', value: 6 },
    { label: 'XPO Logistics', value: 7 },
    { label: 'GLS', value: 8 },
    { label: 'Ciblex', value: 9 },
    { label: 'Dachser', value: 10 },    
]

const BasicFields = (props) => {
    const { values, touched, errors } = props

    return (
        <>
            <FormItem
                label="Codice spedizione"
                invalid={errors.id_spedizione && touched.id_spedizione}
                errorMessage={errors.id_spedizione}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="id_spedizione"
                    placeholder=""
                    component={Input}
                />
            </FormItem>
            <FormItem
                label="Cliente"
                invalid={errors.id_cliente && touched.id_cliente}
                errorMessage={errors.id_cliente}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="cliente"
                    placeholder=""
                    component={Input}
                />
            </FormItem>

            <FormItem
                    label="Corriere"
                    invalid={errors.corriere && touched.corriere}
                    errorMessage={errors.corriere}
                >
                    <Field name="id_corriere">
                        {({ field, form }) => (
                            <Select
                                field={field}
                                form={form}
                                options={corrieri}
                                value={corrieri.filter(
                                    (id_corriere) =>
                                        id_corriere.value === values.id_corriere
                                )}
                                onChange={(option) =>
                                    form.setFieldValue(
                                        field.name,
                                        option.value
                                    )
                                }
                            />
                        )}
                    </Field>
            </FormItem>                
            <FormItem
                label="Note"
                labelClass="!justify-start"
                invalid={errors.description && touched.description}
                errorMessage={errors.description}
            >
                <Field name="note">
                    {({ field, form }) => (
                        <RichTextEditor
                            value={field.value}
                            onChange={(val) =>
                                form.setFieldValue(field.name, val)
                            }
                        />
                    )}
                </Field>
            </FormItem>
        </>
    )
}

export default BasicFields
