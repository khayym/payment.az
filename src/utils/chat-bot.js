let botSchema = {
    user: 'bot',
    side: 'left',
    message: 'Something went wrong :(',
    index: 'error',
    variant: 'default',
    type: 'text'
}

const keywords = {
    'choice_lang': /(?:a|z|e|ə|r|b|a|y|c|a|n)/gm
}

const answers = {
    "choice_lang": 'Mövzunu seçin:'
}


export const Chat_Bot_Answer = (input, indexKeyword) => {
    // console.log({ input, indexKeyword });
    const leng = input?.match(keywords[indexKeyword])?.filter(n => n)?.length;
    if (leng > Math.floor(input?.length / 1.5)) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve([{
                    ...botSchema,
                    message: answers[indexKeyword],
                    index: Math.random()
                },
                {
                    user: 'bot',
                    side: 'left',
                    type: 'confirm',
                    variant: 'default',
                    index: Math.random(),
                    listModel: 'white',
                    lists: ['Texniki dəstək', 'Ödəniş problemi', 'Kommunal problemi']
                }])
            }, 800)

        });

    } else return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve([{
                ...botSchema,
                index: Math.random(),
            }])
        }, 800)

    });
}