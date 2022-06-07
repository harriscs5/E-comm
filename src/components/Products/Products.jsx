import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
    {id: 1, name: 'Boondocks Tee', image:'', description: 'Graphic T-shirt',price: 40, rating: 4.5, numReviews:8},
    {id: 1, name: 'Boondocks Tee', description: 'Graphic T-shirt',price: 40, rating: 4.5, numReviews:8},
    {id: 1, name: 'Boondocks Tee', description: 'Graphic T-shirt',price: 40, rating: 4.5, numReviews:8},

];

const Products = () => {
    <main>
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                </Grid>
            ))}

        </Grid>
    </main>

}
export default Products;