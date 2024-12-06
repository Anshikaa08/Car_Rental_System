import React from 'react';

const InputField = ({
    label,
    type = 'text',
    name,
    value,
    placeholder,
    onChange,
    isTextArea = false,
}) => {
    return (
        <div style={styles.container}>
            <label style={styles.label}>{label}</label>
            {isTextArea ? (
                <textarea
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    style={styles.textArea}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    style={styles.input}
                />
            )}
        </div>
    );
};

const styles = {
    container: {
        marginBottom: '16px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    textArea: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        minHeight: '100px',
    },
};

export default InputField;
