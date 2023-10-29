import React from 'react'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'

export const categories = [
    { label: 'Pallex', value: '1' },
    { label: 'TNT', value: '2' },
    { label: 'FeDex', value: '3' },
    { label: 'SDA', value: '4' },
    { label: 'Noerpel', value: '5' },
    { label: 'Kuehne e Nagel', value: '6' },
    { label: 'XPO Logistics', value: '7' },
    { label: 'GLS', value: '8' },
    { label: 'Ciblex', value: '9' },
    { label: 'Dachser', value: '10' },    
]

const BasicFields = (props) => {
    const { touched, errors } = props

    return (
        <AdaptableCard className="mb-4" divider>
            <h5>Inserisci nuova spedizione</h5>
            <p className="mb-6">Sezione per configurare la spedizione</p>
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
                invalid={errors.productCode && touched.productCode}
                errorMessage={errors.productCode}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="id_cliente"
                    placeholder=""
                    component={Input}
                />
            </FormItem>
            <FormItem
                label="Destinatario"
                invalid={errors.destinatario && touched.destinatario}
                errorMessage={errors.destinatario}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="destinatario"
                    placeholder="Destinatario"
                    component={Input}
                />
            </FormItem>
            <FormItem
                label="Destinazione"
                invalid={errors.destinazione && touched.destinazione}
                errorMessage={errors.destinazione}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="destinazione"
                    placeholder="Destinazione"
                    component={Input}
                />
            </FormItem>                        
            <FormItem
                label="Note"
                labelClass="!justify-start"
                invalid={errors.description && touched.description}
                errorMessage={errors.description}
            >
                <Field name="motivazione_stato">
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
        </AdaptableCard>
    )
}

export default BasicFields
