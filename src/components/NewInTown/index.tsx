

const NewInTown = () => {
    return (
        <section className="flex flex-col-reverse md:flex">
            <div style={{ backgroundImage: "url('/images/smalltown.jpg')", backgroundSize: "cover" }} className="h-96 md:w-1/2">
                
            </div>
            <div className=" md:w-1/2 bg-lightbluegray py-14 px-5">
                <h2 className="text-3xl font-semibold  text-center">Ny och modern tandläkarklinik</h2>
                <p className="text-xl text-textwhite font-nunito text-center">Mitt i hjärtat av Tranås</p>
            </div>
        </section>
    )
};

export default NewInTown
