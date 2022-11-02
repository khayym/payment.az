
export const stateValidator = (str, typ) => {
    console.log(str, typ)
    if (typ === 'text') return (/^[a-zA-Z]+[a-zA-Z]+$/.test(str));
    else if (typ === 'email') return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(str));
    else if (typ === 'number') return str?.length > 8
    else return false;
}