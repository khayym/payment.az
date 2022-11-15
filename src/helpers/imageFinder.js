
const images = {
    Azercell: require('../../assets/images/payments/azercell.png'),
    'Nar Mobile': require('../../assets/images/payments/nar.png'),
    Bakcell: require('../../assets/images/payments/bakcell.png'),
    balance: require('../../assets/images/payments/wallet.png'),
}

export const imageUriFinder = (name) => {
    return images[name];
}