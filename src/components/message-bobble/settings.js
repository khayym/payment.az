import { styles } from './styles';

export const vars = {
    'default': styles.default,
    'outlined': styles.outlined,
    'white': styles.white
}

export const variantFinder = (variant, customizing) => {
    if (vars[variant]) {
        return { ...vars[variant], ...customizing }
    } else return { ...vars['default'], ...customizing }
}

export const textStyle = (variant, customStyle) => {
    if (variant !== 'default') {
        return { ...styles.text, color: '#000', ...customStyle }
    } else {
        return { ...styles.text, ...customStyle }
    }
}