

export const DateTime = ()=>{

    const date = new Date()
    const datedDay = date.getHours() +" : " + date.getMinutes() + " : " + date.getSeconds()
    const dateString = date.toDateString()
    return(
        <p style={{color: ' #777777', fontWeight: '400',fontSize: '12px', marginBottom: '0'}}>{datedDay} / {dateString}</p>
    )
}