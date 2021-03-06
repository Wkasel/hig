import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { generateId } from "@hig/utils";

import "./TextAreaPresenter.scss";

export default class TextAreaPresenter extends Component {
  static propTypes = {
    /**
     * Initial value of the field
     */
    defaultValue: PropTypes.string,
    /**
     * Prevents user actions on the field
     */
    disabled: PropTypes.bool,
    /**
     * Instructional text for the field
     */
    instructions: PropTypes.string,
    /**
     * Text describing what the field represents
     */
    label: PropTypes.string,
    /**
     * Indicates the maximum number of characters the user can enter
     */
    maxLength: PropTypes.number,
    /**
     * Indicates the minimum number of characters the user can enter
     */
    minLength: PropTypes.number,
    /**
     * Name of the field when submitted with a form
     */
    name: PropTypes.string,
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called after user changes the value of the field
     */
    onChange: PropTypes.func,
    /**
     * Called when user puts focus onto the field
     */
    onFocus: PropTypes.func,
    /**
     * Called as user changes the value of the field
     */
    onInput: PropTypes.func,
    /**
     * Example of what the user should type into the field
     */
    placeholder: PropTypes.string,
    /**
     * Determines whether the user can modify the value of the control
     */
    readOnly: PropTypes.bool,
    /**
     * Text describing why the field is required
     */
    required: PropTypes.string,
    /**
     * Corresponds to the type attribute of an <input>. Relevant for designating a password field, for example.
     */
    type: PropTypes.string,
    /**
     * Initial value of the field
     */
    value: PropTypes.string
  };

  static defaultProps = {
    label: "Comments",
    placeholder: "Enter your comments here.",
    required: "This field is required."
  };

  id = generateId("text-area");

  hasValue() {
    if (this.props.defaultValue || this.props.value) {
      return true;
    }
    return false;
  }

  render() {
    const {
      defaultValue,
      disabled,
      instructions,
      label,
      maxLength,
      minLength,
      name,
      onBlur,
      onChange,
      onFocus,
      onInput,
      placeholder,
      readOnly,
      required,
      type,
      value
    } = this.props;

    const hasValue = this.hasValue();

    const wrapperClasses = cx([
      "hig__text-area",
      {
        "hig__text-area--required": required,
        "hig__text-area--disabled": disabled
      }
    ]);

    const textAreaClasses = cx([
      "hig__text-area__field",
      {
        "hig__text-area__field--no-value": !hasValue,
        "hig__text-area__field--has-value": hasValue
      }
    ]);

    const labelClasses = cx([
      "hig__text-area__label",
      {
        "hig__text-area__label--visible": label
      }
    ]);

    const instructionClasses = cx([
      "hig__text-area__instructions",
      {
        "hig__text-area__instructions--visible": instructions
      }
    ]);

    const requiredClasses = cx(["hig__text-area__required-notice"]);

    const { id } = this;

    return (
      <div className={wrapperClasses}>
        <textarea
          className={textAreaClasses}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onInput={onInput}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          type={type}
          value={value}
        />
        <label
          htmlFor={id}
          className={labelClasses}
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: label }}
        />
        <p
          className={instructionClasses}
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: instructions }}
        />
        <p
          className={requiredClasses}
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: required }}
        />
      </div>
    );
  }
}
