constants = {
    SECRET_KEY: 'fasgj230GUHGSGKuijhdish980sfjdkhk',
    mongoDBURL: 'mongodb://localhost/eduQuestDB',
    OTP_EXPIRATION: 60,
    getFormatedDate: (date) => {
        return (
            (date.getDate() < 10) ? '0' + date.getDate() : date.getDate()
        )
            + ":" +
            ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1)
                :
                (date.getMonth() + 1)) + ":" + date.getFullYear();
    }
}


module.exports = {
    constants
}