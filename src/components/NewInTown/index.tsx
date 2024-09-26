

const NewInTown = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row">
            <div style={{ backgroundImage: "url('/images/smalltown.jpg')", backgroundSize: "cover" }} className="h-[360px] md:h-[460px] md:w-1/2">
                
            </div>
            <div className="relative text-textwhite flex flex-col justify-center md:w-1/2 bg-textmain pt-20 pb-10 px-5 h-[360px]  md:h-[460px]">
                <h2 className="text-4xl font-semibold text-mainblue  text-center">Ny och modern tandläkarklinik</h2>
                <p className="text-xl text-textwhite font-nunito text-center py-5">Mitt i hjärtat av Tranås</p>
                <div className="bg-lightbluegray h-16 w-full absolute left-0 -bottom-8 md:hidden" style={{borderRadius: "50%"}}></div>
                {/* <div className="bg-lightbluegray h-full w-16 absolute -left-[30px] top-0 hidden md:block" style={{borderRadius: "100%"}}></div> */}
            </div>
        </section>
    )
};

export default NewInTown
