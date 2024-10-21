

const prices = {
    name: "prices",
    title: "Prices",
    type: "document",
    fields: [
        {
        name: "title",
        title: "Title",
        type: "string"
    },
        {
            name: "treatment",
            title: "Treatment",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug", //inbuilt typ for sanity
            option: {source: "treatment"} 
        },
        {
            name: "code",
            title: "Code- Åtgärdsnr",
            type: "number"
        },
        {
            name: "amount_under_3000",
            title: "amount_under_3000",
            type: "number"
        },
        {
            name: "amount_3000_15000",
            title: "amount_3000_15000",
            type: "number"
        },
        {
            name: "amount_over_15000",
            title: "amount_over_15000",
            type: "number"
        }

    ]
}

export default prices;