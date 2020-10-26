import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Header from '../header'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { outPace, content, intro, elephant,advantage } from "../Pages/Dummy Data/outspace";



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },

    container: {
        backgroundImage: 'url(' + require('../../images/back.png') + ')',
        position: "absolute",
        width: "100%",
        height: "500rem",
        backgroundRepeat: "no-repeat",
    },
    container1: {
        backgroundImage: 'url(' + require('../../images/revelesBow.png') + ')',
        position: "absolute",
        width: "100%",
        height: "500rem",
        backgroundRepeat: "no-repeat",
    },
    secondStreet: {
        width: "8rem",
        height: "3.8rem",

        marginLeft: "13rem"

    },


    outSpace: {

        width: "516px",
        height: "95px",
        textAlign: "center",
        letterSpacing: "0px",
        color: "#FFFFFF",

        opacity: "1",

        position: "absolute",

        whiteSpace: "nowrap",


        fontFamily: "DINNextLTPro-UltraLight",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "2rem",

    },
    paddingForContent: {
        marginTop: "12rem",
        //left: "20rem",
    },
    line: {
        fill: "transparent",
        stroke: "rgba(103,191,214,1)",
        strokeWidth: "9px",
        strokeLinejoin: "miter",
        strokeLinecap: "butt",
        strokeMiterlimit: "10",
        shapeRendering: "auto"
    },
    firstBow: {
        backgroundImage: 'url(' + require('../../images/firstBow.svg') + ')',
        position: "absolute",
        width: "100%",
        height: "100%",
        marginLeft: "20rem",
        backgroundRepeat: "no-repeat",
    },
    secondBow: {
        backgroundImage: 'url(' + require('../../images/secondBow.svg') + ')',
        position: "absolute",
        width: "100%",
        height: "100%",
        marginLeft: "35rem",
        backgroundRepeat: "no-repeat",
    },
    thirdBow: {
        backgroundImage: 'url(' + require('../../images/ThirdBow.svg') + ')',
        position: "absolute",
        width: "100%",
        height: "100%",
        marginLeft: "50rem",
        backgroundRepeat: "no-repeat",
    },
    dataDetails: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "15px"
    }


});

export default function Main() {
    const classes = useStyles();
    return (

        <div className={classes.container}>
            <Grid container >
                <Grid item xs={12} style={{ marginBottom: "-1rem" }}>
                    <Header />
                </Grid>

            </Grid>
            <hr />

            <Grid container className={classes.paddingForContent}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <Typography variant="h3" align="center" style={{ color: 'white', marginBottom: '2rem', textAlign: 'center' }}>
                                {outPace.outpace}</Typography>
                            <img src={require("../../images/Line2.svg")}></img>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4} style={{ marginBottom: '2rem' }}>
                            <Typography variant="body1" style={{ color: 'white', textAlign: 'center' }}>
                                Data is growing at a faster rate than ever before and has become unmanageable. Spread across multiple platforms which makes it costly and time-intensive to identify risks and unlock the value"
                            </Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4} className={classes.line}></Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={4} style={{ marginTop: "20rem" }}>
                            <img src={require(`../../images/Arrow.svg`)} />
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={3}><Typography variant="body1" style={{
                            fontSize: "2rem",
                            color: "grey",
                            fontFamily: "inherit"
                        }}>how do you know...</Typography></Grid>
                        <Grid item xs={4} style={{ marginTop: "-19rem" }}>
                            <img src={require(`../../images/Ballon.png`)} />
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>

                        <Grid item xs={4} className={classes.firstBow}>
                            <Typography variant="subtitle2" style={{ marginTop: "2rem" }}>what data </Typography>
                            <Typography variant="subtitle2">you own?</Typography>
                        </Grid>
                        <Grid item xs={4} className={classes.secondBow}>
                            <Typography variant="subtitle2" style={{ marginTop: "2rem" }}>what data</Typography>
                            <Typography variant="subtitle2">carries the greatest risk?</Typography>
                        </Grid>
                        <Grid item xs={4} className={classes.thirdBow}>
                            <Typography variant="subtitle2" style={{ marginTop: "2rem" }}>what data</Typography>
                            <Typography variant="subtitle2"> creates the greater value?</Typography>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
            <Grid container style={{ marginTop: '10rem' }}>
                <Grid item xs={12}>
                    <Grid container>

                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <Typography variant="h3" align="center" >
                                {intro.intro}</Typography>
                            <img src={require("../../images/Line2.svg")}></img>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4} style={{ marginBottom: '2rem' }}>
                            <Typography variant="body1" style={{ color: 'black', textAlign: 'center' }}>
                                Reveles is an A.I. platform which intelligently identifies
    the data that carries the greatest risk, and alerts you on the action required to reduce exposure.
                            </Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4} style={{ marginBottom: '2rem', marginLeft: '2rem' }}>
                            <img src={require("../../images/Reveles.svg")}></img>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Grid container >
                        <img src={require("../../images/BowReveles.png")} height="98%" width="100%"></img>
                    </Grid>

                </Grid>
                <Grid item xs={12} style={{ marginTop: "4rem" }}>
                    <Grid container>
                        <Grid item xs={4}>
                            {/* <img src={require("../../images/Network.svg")}></img>  */}
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant="h3" align="center" style={{ color: 'black', textAlign: 'center' }}>
                                {elephant.intro}</Typography>
                            <img src={require("../../images/Line2.svg")}></img>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Grid container >
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}>
                            <Typography variant="h5" style={{ color: "blue" }}>accounting for data</Typography>

                            <Typography variant="subtitle1" className={classes.dataDetails}>Traditional accounting standards are caught off guard by aspects of digital business models. How do you account for intangible assets in a world where market value is calculated on a perception? Find out more on how we help organisations exceed today’s accounting standards to improve the transparency of the true economics behind businesses.</Typography>
                            <img src={require("../../images/LearnMore.svg")} width="90%"></img>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={require("../../images/Dollar.svg")} height="70%"></img>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h5" style={{ color: "blue" }}>data risk</Typography>

                            <Typography variant="subtitle1" className={classes.dataDetails}>Constant change in regulations forces data executives to acknowledge beyond any doubt that data discovery capabilities are critical to compliance. With a privacy revolution going how do you make sure you are both GDPR and CPA compliant, and stay on top of the possibility of a breach and ransom attacks? What if you could reduce your cyber security investments by simply understanding the scope of potential damage?</Typography>
                            <img src={require("../../images/LearnMore.svg")} width="90%"></img>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}>

                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h5" style={{ color: "blue" }}>data as an asset</Typography>

                            <Typography variant="subtitle1" className={classes.dataDetails}>Viewing data as an asset is what everybody is aiming for but how do you actually do it? A simple answer will be to apply more sophisticated investment techniques such as hedging against losses to ensure cumulative returns over time. Find out more on exactly what data to invest in and what the return-on-allocated-capital is likely to be for the amount invested here.</Typography>
                            <img src={require("../../images/LearnMore.svg")} width="90%"></img>
                        </Grid>
                        <Grid item xs={5}>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                    <Typography variant="h3" align="center" style={{ color: 'black', textAlign: 'center' }}>
                                {advantage.intro}</Typography>
                            <img src={require("../../images/Line2.svg")}></img>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    </Grid>
                    </Grid>
            <Grid item xs={12}  style={{marginTop:"2rem"}}>
                <Grid container >
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={4}>
                                <img src={require("../../images/Clarity.svg")}></img>
                                <Typography style={{color:'black'}}>Clarity</Typography>
                                <Typography variant="subtitle1">Identifies what data you hold, where it is and the value it creates</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <img src={require("../../images/Cost.svg")}></img>
                                <Typography style={{color:'black'}}>Cost</Typography>
                                <Typography variant="subtitle1">Cost Reduces exposure and driving down the cost of insurance</Typography>
                            </Grid>
                            <Grid item xs={4}>
                            <img src={require("../../images/Accuracy.svg")}></img>
                                <Typography style={{color:'black'}}>Accuracy</Typography>
                                <Typography variant="subtitle1">Reveles has a 94.5% model accuracy rate in comparison to the best in class for machine learning of 86%</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}  >
                <Grid container >
                    <Grid item xs={4}></Grid>
                    <Grid item xs={6}>
                        <Grid container>
                            
                            <Grid item xs={5}>
                            <img src={require("../../images/Efficiency.svg")}></img>
                                <Typography style={{color:'black'}}>Efficiency</Typography>
                                <Typography variant="subtitle1">Uses machine intelligence to search your data, which reduces the need for data engineers and analysts</Typography>
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={5}>
                            <img src={require("../../images/Agility.svg")}></img>
                                <Typography style={{color:'black'}}>Agility</Typography>
                                <Typography variant="subtitle1">It's always on, identifying risks in real-time, </Typography>
                                <Typography variant="subtitle1">so that you can swiftly address them</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </Grid>
            </Grid>



        </div>

    )
}