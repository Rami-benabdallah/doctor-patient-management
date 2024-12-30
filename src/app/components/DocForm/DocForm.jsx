"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { DocInput } from '../DocInputs/DocInput/DocInput';
import { DocInputArea } from '../DocInputs/DocInputArea/DocInputArea';
import { DocInputLabel } from '../DocInputs/DocInputLabel/DocInputLabel';
import { DocInputCheckbox } from '../DocInputs/DocInputCheckbox/DocInputCheckbox';
import { DocButton } from '../DocButton/DocButton';

const fieldComponents = {
    text: DocInput,
    description: DocInputArea,
    labels: DocInputLabel,
    checkbox: DocInputCheckbox,
};

const generateValidationSchema = (fields) => {
    const schema = fields.reduce((acc, field) => {
        let validator;

        switch (field.type) {
            case 'text':
                validator = Yup.string();
                if (field.validation.required) {
                    validator = validator.required(`${field.label} is required`);
                }
                if (field.validation.minLength) {
                    validator = validator.min(
                        field.validation.minLength,
                        `${field.label} must be at least ${field.validation.minLength} characters`
                    );
                }
                if (field.validation.maxLength) {
                    validator = validator.max(
                        field.validation.maxLength,
                        `${field.label} must be at most ${field.validation.maxLength} characters`
                    );
                }
                break;

            case 'labels':
                validator = Yup.array();
                if (field.validation.required) {
                    validator = validator.required(`${field.label} is required`);
                }
                if (field.validation.minValues) {
                    validator = validator.min(
                        field.validation.minValues,
                        `${field.label} must have at least ${field.validation.minValues} items`
                    );
                }
                if (field.validation.maxValues) {
                    validator = validator.max(
                        field.validation.maxValues,
                        `${field.label} can have at most ${field.validation.maxValues} items`
                    );
                }
                break;

            default:
                validator = Yup.mixed();
        }

        acc[field.name] = validator;
        return acc;
    }, {});

    return Yup.object().shape(schema);
};

export const DocForm = ({ fields, onSubmit, onCancel }) => {
    const validationSchema = generateValidationSchema(fields);
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: fields.reduce((acc, field) => {
            acc[field.name] = field.value || '';
            return acc;
        }, {}),
    });

    const onFormSubmit = (data) => {
        console.log('Form data:', data);
        if (onSubmit) {
            onSubmit(data);
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4">
            {fields.map((field, index) => {
                const FieldComponent = fieldComponents[field.type];

                if (!FieldComponent) {
                    console.error(`Invalid field type: ${field.type}`);
                    return null;
                }

                return (
                    <div key={index} className="flex flex-col gap-2">
                        <FieldComponent
                            type={field.type}
                            id={field.id}
                            name={field.name}
                            label={field.label}
                            placeholder={field.placeholder}
                            register={register}
                            setValue={setValue}
                            getValues={getValues}
                        />
                        {errors[field.name] && (
                            <span className="text-red-500 text-sm">{errors[field.name]?.message}</span>
                        )}
                    </div>
                );
            })}
            <div className="flex justify-end gap-4">
                <DocButton
                    mode="light"
                    type="button"
                    label="Cancel"
                    padding="py-2 px-4"
                    rounded="rounded-md"
                    onClick={() => {
                        reset();
                        if (onCancel) onCancel();
                    }}
                />
                <DocButton
                    mode="main"
                    type="submit"
                    label="Submit"
                    padding="py-2 px-4"
                    rounded="rounded-md"
                />
            </div>
        </form>
    );
};

DocForm.propTypes = {
    fields: PropTypes.array.isRequired,
    onSubmit: PropTypes.func,
    onCalcel: PropTypes.func,
};
