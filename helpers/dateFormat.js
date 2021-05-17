
const getTodayDate = ()=>{

    let today = new Date();

    const dd = String(today.getDate()).padStart(2,"0");
    const mm = String(today.getMonth()).padStart(2,"0");  // January is 0
    const year = today.getFullYear()

    const fullDate = dd + "/" + mm + "/" + year;

    return fullDate

}

module.exports = getTodayDate;



