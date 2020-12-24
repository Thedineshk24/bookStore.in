import React from 'react';
import {
    Container,
    Typography,
    Button,
    Grid
} from "@material-ui/core"

import useStyles from "./Styles"


const Cart = ({ cart }) => {
    // style
    const classes = useStyles();
    console.log(cart);


    // is empty
    const isEmpty = cart.line_items === 0;

    // console.log("LINE ITEMS:",cart.line_items.length);
    // return <h1>ayushi</h1>

    //emptycart
    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no 📚 in Your Shopping cart!
        </Typography>
    )

    //filledcart
    const FilledCart = () => (
        <React.Fragment>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        Subtotal : {cart.subtotal.formatted_with_symbol}
                    </Typography>

                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">
                            Empty Cart
                        </Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                            checkout
                        </Button>
                    </div>
            </div>
        </React.Fragment>
    )
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">
                Your book's 📚
            </Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
