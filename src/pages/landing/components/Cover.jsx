function Cover() {

    const img = "/assets/images/anunso.gif";


    return (

        <>
            <img
                src={img}
                alt=""
                className="h-96 w-full object-cover"
            />

        </>
    );
}



export default Cover;