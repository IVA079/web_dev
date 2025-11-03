
const mongoose = require('mongoose');
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test");

        console.log("get connected")
    }

    catch (err) {
        console.log("fail");
        console.log("err" + err);
    }
}


main();



let product_schema = new mongoose.Schema(
    {
        name: {

            type: String,
            required: true,
            trim: true,
            minlength: [3, "min len :3"],
            maxlength: [50, "max 50"]
        },


        category:
        {
            type: String,
            required: true,
            enum: {
                values: ["fruit", "vegetable", "snack", "drink", "meal"],
                message: "Category must be fruit, vegetable, snack, drink, or meal"

            },













        },


        price:

        {
            type: Number,
            required: [true, "💰 Price is required"],
            min: [1, "Price must be at least 1"],
            max: [1000, "Price must be less than 1000"]




        },





    }
);


let product = mongoose.model("product", product_schema);

async function createProduct() {
    let p = new product(



        {

            name: "apple",
            category: "fruit",
            price: 120
        }
    );

    await p.save();
    console.log(" product created");
    console.log(p._id);


}

createProduct();





async function update_product() {
    try {
        let id = "6908067a01bf843a5507d649";
        let result = await product.findByIdAndUpdate(


            id,
            {
                price: -50
            },
            {
                runValidators: true, new: true
            }


        );

        console.log("updated");
    }

    catch (err) {
        console.log("err")
    }
};

update_product();






async function update_product_2() {
    try {
        let id = "690806cf65f3673f260ec352";
        let result = await product.findByIdAndUpdate(


            id,
            {
                price: -5000000
            }



        );

        console.log("updated");
    }

    catch (err) {
        console.log("err")
    }
};

update_product_2();

