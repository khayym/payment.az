let operators = ['55', '99', '50', '10', '51', '77', '70', '36'];

export const validatePhone = (number = false) => {
    let prefix = number.slice(0, 2);
    return operators.includes(prefix)
} 